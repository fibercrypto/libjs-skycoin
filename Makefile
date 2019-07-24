.DEFAULT_GOAL := help
.PHONY: install test test-node-client build-node-client build-node-tester build-axios-tester test-axios-client build-axios-client  

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
	(cd ./lib/skyapi/axios/ && npm install && npm run build)

build-node-client: ## Build node client
	(cd './lib/skyapi/node/' && npm install && npm run build)

build-node-tester: ## Build node client tester
	(cd './tests/node/' && npm install)

build-axios-tester: ## Build tester
	(cd ./tests/axios/ && npm install)
