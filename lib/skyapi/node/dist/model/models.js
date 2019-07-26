"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./address"));
__export(require("./apiV1PendingTxsTransaction"));
__export(require("./apiV1PendingTxsTransactionOutputs"));
__export(require("./blockSchema"));
__export(require("./blockSchemaBody"));
__export(require("./blockVerboseSchema"));
__export(require("./blockVerboseSchemaBody"));
__export(require("./blockVerboseSchemaHeader"));
__export(require("./inlineResponse200"));
__export(require("./inlineResponse2001"));
__export(require("./inlineResponse20010"));
__export(require("./inlineResponse2002"));
__export(require("./inlineResponse2003"));
__export(require("./inlineResponse2004"));
__export(require("./inlineResponse2005"));
__export(require("./inlineResponse2006"));
__export(require("./inlineResponse2007"));
__export(require("./inlineResponse2008"));
__export(require("./inlineResponse2008Data"));
__export(require("./inlineResponse2009"));
__export(require("./inlineResponseDefault"));
__export(require("./networkConnectionSchema"));
__export(require("./networkConnectionSchemaUnconfirmedVerifyTransaction"));
__export(require("./transaction"));
__export(require("./transactionEncoded"));
__export(require("./transactionEncodedS"));
__export(require("./transactionStatus"));
__export(require("./transactionTxn"));
__export(require("./transactionV2ParamsAddress"));
__export(require("./transactionV2ParamsAddressHoursSelection"));
__export(require("./transactionV2ParamsUnspent"));
__export(require("./transactionV2ParamsUnspentHoursSelection"));
__export(require("./transactionV2ParamsUnspentTo"));
__export(require("./transactionVerbose"));
__export(require("./transactionVerboseTxn"));
__export(require("./transactionVerboseTxnInputs"));
__export(require("./transactionVerifyRequest"));
__export(require("./walletTransactionRequest"));
__export(require("./walletTransactionRequestHoursSelection"));
__export(require("./walletTransactionRequestWallet"));
__export(require("./walletTransactionSignRequest"));
var address_1 = require("./address");
var apiV1PendingTxsTransaction_1 = require("./apiV1PendingTxsTransaction");
var apiV1PendingTxsTransactionOutputs_1 = require("./apiV1PendingTxsTransactionOutputs");
var blockSchema_1 = require("./blockSchema");
var blockSchemaBody_1 = require("./blockSchemaBody");
var blockVerboseSchema_1 = require("./blockVerboseSchema");
var blockVerboseSchemaBody_1 = require("./blockVerboseSchemaBody");
var blockVerboseSchemaHeader_1 = require("./blockVerboseSchemaHeader");
var inlineResponse200_1 = require("./inlineResponse200");
var inlineResponse2001_1 = require("./inlineResponse2001");
var inlineResponse20010_1 = require("./inlineResponse20010");
var inlineResponse2002_1 = require("./inlineResponse2002");
var inlineResponse2003_1 = require("./inlineResponse2003");
var inlineResponse2004_1 = require("./inlineResponse2004");
var inlineResponse2005_1 = require("./inlineResponse2005");
var inlineResponse2006_1 = require("./inlineResponse2006");
var inlineResponse2007_1 = require("./inlineResponse2007");
var inlineResponse2008_1 = require("./inlineResponse2008");
var inlineResponse2008Data_1 = require("./inlineResponse2008Data");
var inlineResponse2009_1 = require("./inlineResponse2009");
var inlineResponseDefault_1 = require("./inlineResponseDefault");
var networkConnectionSchema_1 = require("./networkConnectionSchema");
var networkConnectionSchemaUnconfirmedVerifyTransaction_1 = require("./networkConnectionSchemaUnconfirmedVerifyTransaction");
var transaction_1 = require("./transaction");
var transactionEncoded_1 = require("./transactionEncoded");
var transactionEncodedS_1 = require("./transactionEncodedS");
var transactionStatus_1 = require("./transactionStatus");
var transactionTxn_1 = require("./transactionTxn");
var transactionV2ParamsAddress_1 = require("./transactionV2ParamsAddress");
var transactionV2ParamsAddressHoursSelection_1 = require("./transactionV2ParamsAddressHoursSelection");
var transactionV2ParamsUnspent_1 = require("./transactionV2ParamsUnspent");
var transactionV2ParamsUnspentHoursSelection_1 = require("./transactionV2ParamsUnspentHoursSelection");
var transactionV2ParamsUnspentTo_1 = require("./transactionV2ParamsUnspentTo");
var transactionVerbose_1 = require("./transactionVerbose");
var transactionVerboseTxn_1 = require("./transactionVerboseTxn");
var transactionVerboseTxnInputs_1 = require("./transactionVerboseTxnInputs");
var transactionVerifyRequest_1 = require("./transactionVerifyRequest");
var walletTransactionRequest_1 = require("./walletTransactionRequest");
var walletTransactionRequestHoursSelection_1 = require("./walletTransactionRequestHoursSelection");
var walletTransactionRequestWallet_1 = require("./walletTransactionRequestWallet");
var walletTransactionSignRequest_1 = require("./walletTransactionSignRequest");
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
    "NetworkConnectionSchema.StateEnum": networkConnectionSchema_1.NetworkConnectionSchema.StateEnum,
};
var typeMap = {
    "Address": address_1.Address,
    "ApiV1PendingTxsTransaction": apiV1PendingTxsTransaction_1.ApiV1PendingTxsTransaction,
    "ApiV1PendingTxsTransactionOutputs": apiV1PendingTxsTransactionOutputs_1.ApiV1PendingTxsTransactionOutputs,
    "BlockSchema": blockSchema_1.BlockSchema,
    "BlockSchemaBody": blockSchemaBody_1.BlockSchemaBody,
    "BlockVerboseSchema": blockVerboseSchema_1.BlockVerboseSchema,
    "BlockVerboseSchemaBody": blockVerboseSchemaBody_1.BlockVerboseSchemaBody,
    "BlockVerboseSchemaHeader": blockVerboseSchemaHeader_1.BlockVerboseSchemaHeader,
    "InlineResponse200": inlineResponse200_1.InlineResponse200,
    "InlineResponse2001": inlineResponse2001_1.InlineResponse2001,
    "InlineResponse20010": inlineResponse20010_1.InlineResponse20010,
    "InlineResponse2002": inlineResponse2002_1.InlineResponse2002,
    "InlineResponse2003": inlineResponse2003_1.InlineResponse2003,
    "InlineResponse2004": inlineResponse2004_1.InlineResponse2004,
    "InlineResponse2005": inlineResponse2005_1.InlineResponse2005,
    "InlineResponse2006": inlineResponse2006_1.InlineResponse2006,
    "InlineResponse2007": inlineResponse2007_1.InlineResponse2007,
    "InlineResponse2008": inlineResponse2008_1.InlineResponse2008,
    "InlineResponse2008Data": inlineResponse2008Data_1.InlineResponse2008Data,
    "InlineResponse2009": inlineResponse2009_1.InlineResponse2009,
    "InlineResponseDefault": inlineResponseDefault_1.InlineResponseDefault,
    "NetworkConnectionSchema": networkConnectionSchema_1.NetworkConnectionSchema,
    "NetworkConnectionSchemaUnconfirmedVerifyTransaction": networkConnectionSchemaUnconfirmedVerifyTransaction_1.NetworkConnectionSchemaUnconfirmedVerifyTransaction,
    "Transaction": transaction_1.Transaction,
    "TransactionEncoded": transactionEncoded_1.TransactionEncoded,
    "TransactionEncodedS": transactionEncodedS_1.TransactionEncodedS,
    "TransactionStatus": transactionStatus_1.TransactionStatus,
    "TransactionTxn": transactionTxn_1.TransactionTxn,
    "TransactionV2ParamsAddress": transactionV2ParamsAddress_1.TransactionV2ParamsAddress,
    "TransactionV2ParamsAddressHoursSelection": transactionV2ParamsAddressHoursSelection_1.TransactionV2ParamsAddressHoursSelection,
    "TransactionV2ParamsUnspent": transactionV2ParamsUnspent_1.TransactionV2ParamsUnspent,
    "TransactionV2ParamsUnspentHoursSelection": transactionV2ParamsUnspentHoursSelection_1.TransactionV2ParamsUnspentHoursSelection,
    "TransactionV2ParamsUnspentTo": transactionV2ParamsUnspentTo_1.TransactionV2ParamsUnspentTo,
    "TransactionVerbose": transactionVerbose_1.TransactionVerbose,
    "TransactionVerboseTxn": transactionVerboseTxn_1.TransactionVerboseTxn,
    "TransactionVerboseTxnInputs": transactionVerboseTxnInputs_1.TransactionVerboseTxnInputs,
    "TransactionVerifyRequest": transactionVerifyRequest_1.TransactionVerifyRequest,
    "WalletTransactionRequest": walletTransactionRequest_1.WalletTransactionRequest,
    "WalletTransactionRequestHoursSelection": walletTransactionRequestHoursSelection_1.WalletTransactionRequestHoursSelection,
    "WalletTransactionRequestWallet": walletTransactionRequestWallet_1.WalletTransactionRequestWallet,
    "WalletTransactionSignRequest": walletTransactionSignRequest_1.WalletTransactionSignRequest,
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