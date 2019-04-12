.DEFAULT_GOAL := help
.PHONY: install test test-node-client build-node-client build-node-tester

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	
install: build-node-client build-node-tester ; ## Build all libraries and tester

test: test-node-client ; ## Test all clients

test-node-client: ## Test node client
	(cd ./tests/node/ && npm run test )

build-node-client: ## Build node client
	(cd './lib/skyapi/node/' && npm install && npm run build)

build-node-tester: ## Build node client tester
	(cd './tests/node/' && npm install)
