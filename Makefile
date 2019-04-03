test_clients:
	(cd ./dev/tester/ && npm run test )

build_axios_client:
	(cd './dev/lib/skyapi/typescript-axios/' && npm install && npm run build)

build_node_client:
	(cd './dev/lib/skyapi/typescript-node/' && npm install && npm run build)

build_tester:
	(cd './dev/tester/' && npm run setup)
	
docker_build:
	docker build -t skyapi/typescript -f ./docker/Dockerfile .

docker_run:
	docker run -v ${PWD}/dev/tester:/skyapi-typescript/dev/tester -it --name=skyapi-typescript skyapi/typescript
