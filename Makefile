.DEFAULT_GOAL := help
.PHONY: install test test-axios-client test-node-client build-axios-client build-node-client
.PHONY: build-node-tester build-axios-tester docker_build docker_run

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	
install: build-axios-client build-node-client build-axios-tester build-node-tester ; ## Build all libraries and tester

test: test-axios-client test-node-client ; ## Test all clients
	
test-axios-client: ## Test axios client
	(cd ./tests/axios/ && npm run test )

test-node-client: ## Test node client
	(cd ./tests/node/ && npm run test )

build-axios-client: ## Build axios client
	(cd ./lib/skyapi/axios/ && npm install && npm run build)

build-axios-tester: ## Build axios client tester
	(cd ./tests/axios/ && npm install)

build-node-client: ## Build node client
	(cd './lib/skyapi/node/' && npm install && npm run build)

build-node-tester: ## Build node client tester
	(cd './tests/node/' && npm install)
	
docker_build: ## Build docker image skyapi/typescript
	docker build -t skyapi/typescript -f ./docker/Dockerfile .

docker_run: ## Run docker image skyapi/typescript with name skyapi-typescript
	docker run -v ${PWD}/tests:/skyapi-typescript/tests -it --name=skyapi-typescript skyapi/typescript
