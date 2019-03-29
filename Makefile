test_clients:
	(cd ./dev/tester/ && npm run test )

build_axios_client:
	(cd './dev/lib/skyapi/typescript-axios/' && npm install && npm run build)

build_node_client:
	(cd './dev/lib/skyapi/typescript-node/' && npm install && npm run build)

build_tester:
	(cd './dev/tester/' && npm run setup)
