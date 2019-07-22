.DEFAULT_GOAL := help
.PHONY: install test test-axios-client build-axios-client build-axios-tester

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	
install: build-axios-client build-axios-tester ; ## Build libraries and tester


test: test-axios-client ; ## Test all clients

	
test-axios-client: ## Test axios client
	export HOST='https://staging.node.skycoin.net' && \
	(cd ./tests/axios/ && npm run test ) && \
	export HOST='https://node.skycoin.net' && \
	(cd ./tests/axios/ && npm run test )

build-axios-client: ## Build axios client
	(cd ./lib/skyapi/axios/ && npm install && npm run build)

build-axios-tester: ## Build tester
	(cd ./tests/axios/ && npm install)
