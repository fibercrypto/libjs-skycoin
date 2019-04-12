"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./apiV1ExplorerAddressInputs"));
__export(require("./apiV1ExplorerAddressOutputs"));
__export(require("./apiV1ExplorerAddressStatus"));
__export(require("./apiV1PendingTxsTransaction"));
__export(require("./apiV1WalletTransactionHoursSelection"));
__export(require("./apiV1WalletTransactionTo"));
__export(require("./apiV1WalletTransactionWallet"));
__export(require("./apiV1WalletsEntries"));
__export(require("./apiV1WalletsMeta"));
__export(require("./inlineObject"));
__export(require("./inlineResponse200"));
__export(require("./inlineResponse2001"));
__export(require("./inlineResponse2002"));
__export(require("./inlineResponse2003"));
__export(require("./inlineResponse2003UnconfirmedVerifyTransaction"));
__export(require("./inlineResponse2004"));
__export(require("./inlineResponse2005"));
__export(require("./inlineResponse2006"));
__export(require("./inlineResponse2007"));
__export(require("./inlineResponse2007Data"));
__export(require("./inlineResponseDefault"));
var apiV1ExplorerAddressInputs_1 = require("./apiV1ExplorerAddressInputs");
var apiV1ExplorerAddressOutputs_1 = require("./apiV1ExplorerAddressOutputs");
var apiV1ExplorerAddressStatus_1 = require("./apiV1ExplorerAddressStatus");
var apiV1PendingTxsTransaction_1 = require("./apiV1PendingTxsTransaction");
var apiV1WalletTransactionHoursSelection_1 = require("./apiV1WalletTransactionHoursSelection");
var apiV1WalletTransactionTo_1 = require("./apiV1WalletTransactionTo");
var apiV1WalletTransactionWallet_1 = require("./apiV1WalletTransactionWallet");
var apiV1WalletsEntries_1 = require("./apiV1WalletsEntries");
var apiV1WalletsMeta_1 = require("./apiV1WalletsMeta");
var inlineObject_1 = require("./inlineObject");
var inlineResponse200_1 = require("./inlineResponse200");
var inlineResponse2001_1 = require("./inlineResponse2001");
var inlineResponse2002_1 = require("./inlineResponse2002");
var inlineResponse2003_1 = require("./inlineResponse2003");
var inlineResponse2003UnconfirmedVerifyTransaction_1 = require("./inlineResponse2003UnconfirmedVerifyTransaction");
var inlineResponse2004_1 = require("./inlineResponse2004");
var inlineResponse2005_1 = require("./inlineResponse2005");
var inlineResponse2006_1 = require("./inlineResponse2006");
var inlineResponse2007_1 = require("./inlineResponse2007");
var inlineResponse2007Data_1 = require("./inlineResponse2007Data");
var inlineResponseDefault_1 = require("./inlineResponseDefault");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "InlineResponse2003.StateEnum": inlineResponse2003_1.InlineResponse2003.StateEnum,
};
var typeMap = {
    "ApiV1ExplorerAddressInputs": apiV1ExplorerAddressInputs_1.ApiV1ExplorerAddressInputs,
    "ApiV1ExplorerAddressOutputs": apiV1ExplorerAddressOutputs_1.ApiV1ExplorerAddressOutputs,
    "ApiV1ExplorerAddressStatus": apiV1ExplorerAddressStatus_1.ApiV1ExplorerAddressStatus,
    "ApiV1PendingTxsTransaction": apiV1PendingTxsTransaction_1.ApiV1PendingTxsTransaction,
    "ApiV1WalletTransactionHoursSelection": apiV1WalletTransactionHoursSelection_1.ApiV1WalletTransactionHoursSelection,
    "ApiV1WalletTransactionTo": apiV1WalletTransactionTo_1.ApiV1WalletTransactionTo,
    "ApiV1WalletTransactionWallet": apiV1WalletTransactionWallet_1.ApiV1WalletTransactionWallet,
    "ApiV1WalletsEntries": apiV1WalletsEntries_1.ApiV1WalletsEntries,
    "ApiV1WalletsMeta": apiV1WalletsMeta_1.ApiV1WalletsMeta,
    "InlineObject": inlineObject_1.InlineObject,
    "InlineResponse200": inlineResponse200_1.InlineResponse200,
    "InlineResponse2001": inlineResponse2001_1.InlineResponse2001,
    "InlineResponse2002": inlineResponse2002_1.InlineResponse2002,
    "InlineResponse2003": inlineResponse2003_1.InlineResponse2003,
    "InlineResponse2003UnconfirmedVerifyTransaction": inlineResponse2003UnconfirmedVerifyTransaction_1.InlineResponse2003UnconfirmedVerifyTransaction,
    "InlineResponse2004": inlineResponse2004_1.InlineResponse2004,
    "InlineResponse2005": inlineResponse2005_1.InlineResponse2005,
    "InlineResponse2006": inlineResponse2006_1.InlineResponse2006,
    "InlineResponse2007": inlineResponse2007_1.InlineResponse2007,
    "InlineResponse2007Data": inlineResponse2007Data_1.InlineResponse2007Data,
    "InlineResponseDefault": inlineResponseDefault_1.InlineResponseDefault,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map