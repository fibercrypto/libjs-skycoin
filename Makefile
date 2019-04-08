.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	
install: build_tester build_axios_client ## Build libraries and tester
	echo 'Done building libraries and tester.'

test: test_axios_client ## Test all clients
	echo 'Done testing clients.'
	
test_axios_client: ## Test axios client
	(cd ./tester/ && npm run test )

build_axios_client: ## Build axios client
	(cd ./lib/skyapi/axios/ && npm install && npm run build)

build_tester: ##Build tester
	(cd ./tester/ && npm run setup)
