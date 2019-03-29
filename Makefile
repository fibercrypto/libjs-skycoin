generate_api_client_axios:
	openapi-generator generate -g typescript-axios --additional-properties=npmName=libsky-axios,npmVersion=0.25.1,supportES6=true -o dev/lib/skyapi/typescript-axios  -i skycoin.v0.25.1.openapi.v2.yml
