// Set BASEPATH
const localBasePath = 'http://127.0.0.1:6420';
const developBasePath = 'https://staging.node.skycoin.net';
const prodBasePath = 'https://node.skycoin.net';

// AXIOS
const testAxios = function (basePath) {
    const skyapi_axios = require("libsky-axios"); //Load the Axios API client
    let api_axios_config = new skyapi_axios.Configuration(); //Create a default configuration class
    let api_axios = new skyapi_axios.DefaultApi(api_axios_config, basePath); // Create the API instance
    // Make a petition to version of skycoin node
    api_axios.version().then(result => {
        console.log(`Response from skyapi_axios\n${basePath}: ${JSON.stringify(result.data)}`); //Print the response data field
    });
};

// testAxios(localBasePath);
testAxios(developBasePath);
testAxios(prodBasePath);
