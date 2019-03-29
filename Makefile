test_axios_client:
	(cd ./dev/tester/ && npm run test )

build_axios_client:
	(cd './dev/lib/skyapi/typescript-axios/' && npm install && npm run build)

build_tester:
	(cd './dev/tester/' && npm run setup)
