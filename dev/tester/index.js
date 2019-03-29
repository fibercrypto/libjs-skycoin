"use strict";

// Set BASEPATH
const developBasePath = 'https://staging.node.skycoin.net';
const prodBasePath = 'https://node.skycoin.net';

// AXIOS
const testAxios = function (basePath) {
    const skyapi_axios = require("libsky-axios"); // Load the Axios API client
    let api_axios_config = new skyapi_axios.Configuration(); // Create a default configuration class
    let api_axios = new skyapi_axios.DefaultApi(api_axios_config, basePath); // Create the API instance
    // Make a petition of the version to the skycoin node
    api_axios.version().then(result => {
        console.log(`Response from skycoin node in ${basePath} using axios client: ${JSON.stringify(result.data)}`); //Print the response data field
    });
};

// NODE
const testNode = function (basePath) {
    const skyapi_node = require("libsky-node"); // Load the Node API client
    let api_node = new skyapi_node.DefaultApi(basePath); // Create the API instance
    // Make a petition of the version to the skycoin node
    api_node.version().then(result => {
        console.log(`Response from skycoin node in ${basePath} using node client: ${JSON.stringify(result.body)}`); //Print the response body field
    });
};

testAxios(developBasePath);
testAxios(prodBasePath);

testNode(developBasePath);
testNode(prodBasePath);
