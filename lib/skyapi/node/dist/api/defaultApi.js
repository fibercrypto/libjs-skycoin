"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var localVarRequest = require("request");
var Promise = require("bluebird");
var models_1 = require("../model/models");
var defaultBasePath = 'http://127.0.0.1:6420';
var DefaultApiApiKeys;
(function (DefaultApiApiKeys) {
    DefaultApiApiKeys[DefaultApiApiKeys["csrfAuth"] = 0] = "csrfAuth";
})(DefaultApiApiKeys = exports.DefaultApiApiKeys || (exports.DefaultApiApiKeys = {}));
var DefaultApi = (function () {
    function DefaultApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'csrfAuth': new models_1.ApiKeyAuth('header', 'X-CSRF-TOKEN'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(DefaultApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    DefaultApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    DefaultApi.prototype.setApiKey = function (key, value) {
        this.authentications[DefaultApiApiKeys[key]].apiKey = value;
    };
    DefaultApi.prototype.addressCount = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/addresscount';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "InlineResponse200");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.addressUxouts = function (address, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/address_uxouts';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (address === null || address === undefined) {
            throw new Error('Required parameter address was null or undefined when calling addressUxouts.');
        }
        if (address !== undefined) {
            localVarQueryParameters['address'] = models_1.ObjectSerializer.serialize(address, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.apiV1RawtxGet = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/rawtx';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "string");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.apiV2MetricsGet = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v2/metrics';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "string");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.balanceGet = function (addrs, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/balance';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (addrs === null || addrs === undefined) {
            throw new Error('Required parameter addrs was null or undefined when calling balanceGet.');
        }
        if (addrs !== undefined) {
            localVarQueryParameters['addrs'] = models_1.ObjectSerializer.serialize(addrs, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.balancePost = function (addrs, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/balance';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (addrs === null || addrs === undefined) {
            throw new Error('Required parameter addrs was null or undefined when calling balancePost.');
        }
        if (addrs !== undefined) {
            localVarQueryParameters['addrs'] = models_1.ObjectSerializer.serialize(addrs, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.block = function (hash, seq, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/block';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (hash !== undefined) {
            localVarQueryParameters['hash'] = models_1.ObjectSerializer.serialize(hash, "string");
        }
        if (seq !== undefined) {
            localVarQueryParameters['seq'] = models_1.ObjectSerializer.serialize(seq, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "Array<BlockSchema>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.blockchainMetadata = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/blockchain/metadata';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.blockchainProgress = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/blockchain/progress';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.blocks = function (start, end, seq, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/blocks';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (start !== undefined) {
            localVarQueryParameters['start'] = models_1.ObjectSerializer.serialize(start, "number");
        }
        if (end !== undefined) {
            localVarQueryParameters['end'] = models_1.ObjectSerializer.serialize(end, "number");
        }
        if (seq !== undefined) {
            localVarQueryParameters['seq'] = models_1.ObjectSerializer.serialize(seq, "Array<number>");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2001");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.coinSupply = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/coinSupply';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2002");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.csrf = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/csrf';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2003");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.dataDELETE = function (type, key, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v2/data';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        localVarHeaderParams['type'] = models_1.ObjectSerializer.serialize(type, "string");
        localVarHeaderParams['key'] = models_1.ObjectSerializer.serialize(key, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.dataGET = function (type, key, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v2/data';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        localVarHeaderParams['type'] = models_1.ObjectSerializer.serialize(type, "string");
        localVarHeaderParams['key'] = models_1.ObjectSerializer.serialize(key, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.dataPOST = function (type, key, val, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v2/data';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        localVarHeaderParams['type'] = models_1.ObjectSerializer.serialize(type, "string");
        localVarHeaderParams['key'] = models_1.ObjectSerializer.serialize(key, "string");
        localVarHeaderParams['val'] = models_1.ObjectSerializer.serialize(val, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.defaultConnections = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/network/defaultConnections';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "Array<string>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.health = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/health';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.lastBlocks = function (num, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/last_blocks';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (num === null || num === undefined) {
            throw new Error('Required parameter num was null or undefined when calling lastBlocks.');
        }
        if (num !== undefined) {
            localVarQueryParameters['num'] = models_1.ObjectSerializer.serialize(num, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.networkConnection = function (addr, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/network/connection';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (addr === null || addr === undefined) {
            throw new Error('Required parameter addr was null or undefined when calling networkConnection.');
        }
        if (addr !== undefined) {
            localVarQueryParameters['addr'] = models_1.ObjectSerializer.serialize(addr, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "NetworkConnectionSchema");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.networkConnections = function (states, direction, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/network/connections';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (states !== undefined) {
            localVarQueryParameters['states'] = models_1.ObjectSerializer.serialize(states, "'pending' | 'connected' | 'introduced'");
        }
        if (direction !== undefined) {
            localVarQueryParameters['direction'] = models_1.ObjectSerializer.serialize(direction, "'connected' | 'introduced'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2004");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.networkConnectionsDisconnect = function (id, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/network/connection/disconnect';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling networkConnectionsDisconnect.');
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = models_1.ObjectSerializer.serialize(id, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.networkConnectionsExchange = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/network/connections/exchange';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "Array<string>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.networkConnectionsTrust = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/network/connections/trust';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "Array<string>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.outputsGet = function (address, hash, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/outputs';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (address !== undefined) {
            localVarQueryParameters['address'] = models_1.ObjectSerializer.serialize(address, "Array<string>");
        }
        if (hash !== undefined) {
            localVarQueryParameters['hash'] = models_1.ObjectSerializer.serialize(hash, "Array<string>");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.outputsPost = function (address, hash, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/outputs';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (address !== undefined) {
            localVarQueryParameters['address'] = models_1.ObjectSerializer.serialize(address, "string");
        }
        if (hash !== undefined) {
            localVarQueryParameters['hash'] = models_1.ObjectSerializer.serialize(hash, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.pendingTxs = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/pendingTxs';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "Array<InlineResponse20010>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.resendUnconfirmedTxns = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/resendUnconfirmedTxns';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.richlist = function (includeDistribution, n, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/richlist';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (includeDistribution !== undefined) {
            localVarQueryParameters['include-distribution'] = models_1.ObjectSerializer.serialize(includeDistribution, "boolean");
        }
        if (n !== undefined) {
            localVarQueryParameters['n'] = models_1.ObjectSerializer.serialize(n, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.transaction = function (txid, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/transaction';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (txid === null || txid === undefined) {
            throw new Error('Required parameter txid was null or undefined when calling transaction.');
        }
        if (txid !== undefined) {
            localVarQueryParameters['txid'] = models_1.ObjectSerializer.serialize(txid, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "Transaction");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.transactionInject = function (rawtx, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/injectTransaction';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (rawtx === null || rawtx === undefined) {
            throw new Error('Required parameter rawtx was null or undefined when calling transactionInject.');
        }
        localVarHeaderParams['rawtx'] = models_1.ObjectSerializer.serialize(rawtx, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "string");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.transactionPost = function (transactionV2ParamsAddress, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v2/transaction';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(transactionV2ParamsAddress, "TransactionV2ParamsAddress")
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2008");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.transactionPostUnspent = function (transactionV2ParamsUnspent, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v2/transaction/unspent';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (transactionV2ParamsUnspent === null || transactionV2ParamsUnspent === undefined) {
            throw new Error('Required parameter transactionV2ParamsUnspent was null or undefined when calling transactionPostUnspent.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(transactionV2ParamsUnspent, "TransactionV2ParamsUnspent")
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2008");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.transactionRaw = function (txid, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v2/transaction/raw';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (txid !== undefined) {
            localVarQueryParameters['txid'] = models_1.ObjectSerializer.serialize(txid, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.transactionVerify = function (transactionVerifyRequest, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v2/transaction/verify';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (transactionVerifyRequest === null || transactionVerifyRequest === undefined) {
            throw new Error('Required parameter transactionVerifyRequest was null or undefined when calling transactionVerify.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(transactionVerifyRequest, "TransactionVerifyRequest")
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.transactionsGet = function (addrs, confirmed, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/transactions';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (addrs !== undefined) {
            localVarQueryParameters['addrs'] = models_1.ObjectSerializer.serialize(addrs, "string");
        }
        if (confirmed !== undefined) {
            localVarQueryParameters['confirmed'] = models_1.ObjectSerializer.serialize(confirmed, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.transactionsPost = function (addrs, confirmed, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/transactions';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (addrs !== undefined) {
            localVarQueryParameters['addrs'] = models_1.ObjectSerializer.serialize(addrs, "string");
        }
        if (confirmed !== undefined) {
            localVarQueryParameters['confirmed'] = models_1.ObjectSerializer.serialize(confirmed, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.uxout = function (uxid, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/uxout';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (uxid !== undefined) {
            localVarQueryParameters['uxid'] = models_1.ObjectSerializer.serialize(uxid, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.verifyAddress = function (address, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v2/address/verify';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (address === null || address === undefined) {
            throw new Error('Required parameter address was null or undefined when calling verifyAddress.');
        }
        if (address !== undefined) {
            localVarQueryParameters['address'] = models_1.ObjectSerializer.serialize(address, "any");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.version = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/version';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2005");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.wallet = function (id, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallet';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling wallet.');
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = models_1.ObjectSerializer.serialize(id, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletBalance = function (id, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallet/balance';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling walletBalance.');
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = models_1.ObjectSerializer.serialize(id, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletCreate = function (seed, label, scan, encrypt, password, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallet/create';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (seed === null || seed === undefined) {
            throw new Error('Required parameter seed was null or undefined when calling walletCreate.');
        }
        if (label === null || label === undefined) {
            throw new Error('Required parameter label was null or undefined when calling walletCreate.');
        }
        localVarHeaderParams['seed'] = models_1.ObjectSerializer.serialize(seed, "string");
        localVarHeaderParams['label'] = models_1.ObjectSerializer.serialize(label, "string");
        localVarHeaderParams['scan'] = models_1.ObjectSerializer.serialize(scan, "number");
        localVarHeaderParams['encrypt'] = models_1.ObjectSerializer.serialize(encrypt, "boolean");
        localVarHeaderParams['password'] = models_1.ObjectSerializer.serialize(password, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletDecrypt = function (id, password, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallet/decrypt';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling walletDecrypt.');
        }
        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling walletDecrypt.');
        }
        localVarHeaderParams['id'] = models_1.ObjectSerializer.serialize(id, "string");
        localVarHeaderParams['password'] = models_1.ObjectSerializer.serialize(password, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletEncrypt = function (id, password, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallet/encrypt';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling walletEncrypt.');
        }
        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling walletEncrypt.');
        }
        localVarHeaderParams['id'] = models_1.ObjectSerializer.serialize(id, "string");
        localVarHeaderParams['password'] = models_1.ObjectSerializer.serialize(password, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletFolder = function (addr, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallets/folderName';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (addr === null || addr === undefined) {
            throw new Error('Required parameter addr was null or undefined when calling walletFolder.');
        }
        if (addr !== undefined) {
            localVarQueryParameters['addr'] = models_1.ObjectSerializer.serialize(addr, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2007");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletNewAddress = function (id, num, password, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallet/newAddress';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling walletNewAddress.');
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = models_1.ObjectSerializer.serialize(id, "string");
        }
        if (num !== undefined) {
            localVarQueryParameters['num'] = models_1.ObjectSerializer.serialize(num, "string");
        }
        if (password !== undefined) {
            localVarQueryParameters['password'] = models_1.ObjectSerializer.serialize(password, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletNewSeed = function (entropy, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallet/newSeed';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (entropy !== undefined) {
            localVarQueryParameters['entropy'] = models_1.ObjectSerializer.serialize(entropy, "'128' | '256'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletRecover = function (id, seed, password, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v2/wallet/recover';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling walletRecover.');
        }
        if (seed === null || seed === undefined) {
            throw new Error('Required parameter seed was null or undefined when calling walletRecover.');
        }
        localVarHeaderParams['id'] = models_1.ObjectSerializer.serialize(id, "string");
        localVarHeaderParams['seed'] = models_1.ObjectSerializer.serialize(seed, "string");
        localVarHeaderParams['password'] = models_1.ObjectSerializer.serialize(password, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletSeed = function (id, password, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallet/seed';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling walletSeed.');
        }
        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling walletSeed.');
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = models_1.ObjectSerializer.serialize(id, "string");
        }
        if (password !== undefined) {
            localVarQueryParameters['password'] = models_1.ObjectSerializer.serialize(password, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletSeedVerify = function (seed, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v2/wallet/seed/verify';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        localVarHeaderParams['seed'] = models_1.ObjectSerializer.serialize(seed, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletTransaction = function (walletTransactionRequest, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallet/transaction';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (walletTransactionRequest === null || walletTransactionRequest === undefined) {
            throw new Error('Required parameter walletTransactionRequest was null or undefined when calling walletTransaction.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(walletTransactionRequest, "WalletTransactionRequest")
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletTransactionSign = function (walletTransactionSignRequest, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v2/wallet/transaction/sign';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (walletTransactionSignRequest === null || walletTransactionSignRequest === undefined) {
            throw new Error('Required parameter walletTransactionSignRequest was null or undefined when calling walletTransactionSign.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(walletTransactionSignRequest, "WalletTransactionSignRequest")
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2009");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletTransactions = function (id, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallet/transactions';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling walletTransactions.');
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = models_1.ObjectSerializer.serialize(id, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2006");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletUnload = function (id, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallet/unload';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling walletUnload.');
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = models_1.ObjectSerializer.serialize(id, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.walletUpdate = function (id, label, options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallet/update';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling walletUpdate.');
        }
        if (label === null || label === undefined) {
            throw new Error('Required parameter label was null or undefined when calling walletUpdate.');
        }
        localVarHeaderParams['id'] = models_1.ObjectSerializer.serialize(id, "string");
        localVarHeaderParams['label'] = models_1.ObjectSerializer.serialize(label, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.csrfAuth.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "string");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    DefaultApi.prototype.wallets = function (options) {
        if (options === void 0) { options = { headers: {} }; }
        var localVarPath = this.basePath + '/api/v1/wallets';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return DefaultApi;
}());
exports.DefaultApi = DefaultApi;
//# sourceMappingURL=defaultApi.js.map