.DEFAULT_GOAL := help
.PHONY: install test test-node-client build-node-client build-node-tester build-axios-tester test-axios-client build-axios-client  

# Compilation output
.ONESHELL:
SHELL := /bin/bash

MKFILE_PATH   = $(abspath $(lastword $(MAKEFILE_LIST)))
REPO_ROOT     = $(dir $(MKFILE_PATH))
GOPATH_DIR    = gopath
SKYLIBC_DIR  ?= $(GOPATH_DIR)/src/github.com/skycoin/libskycoin
SKYCOIN_DIR  ?= $(SKYLIBC_DIR)/vendor/github.com/skycoin/skycoin
SKYBUILD_DIR  = $(SKYLIBC_DIR)/build
BUILDLIBC_DIR = $(SKYBUILD_DIR)/libskycoin
LIBC_DIR      = $(SKYLIBC_DIR)/lib/cgo
BUILD_DIR     = build
DIST_DIR      = dist
BIN_DIR       = $(SKYLIBC_DIR)/bin
INCLUDE_DIR   = $(SKYLIBC_DIR)/include
FULL_PATH_LIB = $(REPO_ROOT)/$(BUILDLIBC_DIR)

LIB_FILES = $(shell find $(SKYCOIN_DIR)/lib/cgo -type f -name "*.go")
SWIG_FILES = $(shell find $(PHP_SWIG_DIR) -type f -name "*.i")
HEADER_FILES = $(shell find $(SKYCOIN_DIR)/include -type f -name "*.h")

JS_CLIENT_DIR = lib/skyapi
JS_SWIG_DIR = lib/skycoin

JS_INCLUDE= -I/usr/include/nodejs/src

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	
install: build-node-client build-node-tester build-axios-client build-axios-tester ; ## Build all libraries and tester

test: test-node-client test-axios-client ; ## Test all clients

test-node-client: ## Test node client
	export HOST='https://staging.node.skycoin.net' && \
	(cd ./tests/node/ && npm run test ) && \
	export HOST='https://node.skycoin.net' && \
	(cd ./tests/node/ && npm run test )
	
test-axios-client: ## Test axios client
	export HOST='https://staging.node.skycoin.net' && \
	(cd ./tests/axios/ && npm run test ) && \
	export HOST='https://node.skycoin.net' && \
	(cd ./tests/axios/ && npm run test )

build-axios-client: ## Build axios client
	(cd $(JS_CLIENT_DIR)/axios/ && npm install && npm run build)

build-node-client: ## Build node client
	(cd './lib/skyapi/node/' && npm install && npm run build)

build-node-tester: ## Build node client tester
	(cd './tests/node/' && npm install)

build-axios-tester: ## Build tester
	(cd ./tests/axios/ && npm install)

configure: ## Configure build environment
	set -ex
	mkdir -p $(BUILD_DIR)/usr/tmp $(BUILD_DIR)/usr/lib $(BUILD_DIR)/usr/include
	mkdir -p $(BUILDLIBC_DIR) $(BIN_DIR) $(INCLUDE_DIR)


build-libc: configure ## Build libskycoin C client library
	GOPATH="$(REPO_ROOT)/$(GOPATH_DIR)" make -C $(SKYLIBC_DIR) clean-libc
	GOPATH="$(REPO_ROOT)/$(GOPATH_DIR)" make -C $(SKYLIBC_DIR) build-libc
	rm -f swig/include/libskycoin.h
	rm -f swig/include/swig.h
	cp $(SKYLIBC_DIR)/include/swig.h $(JS_SWIG_DIR)
	grep -v _Complex $(SKYLIBC_DIR)/include/libskycoin.h > $(JS_SWIG_DIR)/libskycoin.h

build-swig: build-libc ## Generate Node C module from SWIG interfaces
	#Generate structs.i from skytypes.gen.h
	rm -f $(JS_SWIG_DIR)/structs.i
	cp $(INCLUDE_DIR)/skytypes.gen.h $(JS_SWIG_DIR)/structs.i
	{ \
		if [[ "$$(uname -s)" == "Darwin" ]]; then \
			sed -i '.kbk' 's/#/%/g' $(JS_SWIG_DIR)/structs.i ;\
		else \
			sed -i 's/#/%/g' $(JS_SWIG_DIR)/structs.i ;\
		fi \
	}
	mkdir -p $(JS_SWIG_DIR)
	rm -rfv $(JS_SWIG_DIR)/libskycoin_wrap.c
	swig -javascript  -jsc -I$(INCLUDE_DIR) -outdir $(JS_SWIG_DIR) $(JS_SWIG_DIR)/libskycoin.i 

build-libsky-shared: build-swig ## Build shared library including SWIG wrappers
	set -ex
	rm -rfv $(JS_SWIG_DIR)/build
	(cd $(JS_SWIG_DIR) && node-gyp configure build --target=v10.15.1 )

build: build-libsky-shared ## Build library Node Libskycoin