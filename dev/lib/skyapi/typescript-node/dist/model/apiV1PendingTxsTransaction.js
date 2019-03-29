"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiV1PendingTxsTransaction = (function () {
    function ApiV1PendingTxsTransaction() {
    }
    ApiV1PendingTxsTransaction.getAttributeTypeMap = function () {
        return ApiV1PendingTxsTransaction.attributeTypeMap;
    };
    ApiV1PendingTxsTransaction.discriminator = undefined;
    ApiV1PendingTxsTransaction.attributeTypeMap = [
        {
            "name": "outputs",
            "baseName": "outputs",
            "type": "Array<ApiV1ExplorerAddressOutputs>"
        },
        {
            "name": "innerHash",
            "baseName": "inner_hash",
            "type": "string"
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<string>"
        },
        {
            "name": "sigs",
            "baseName": "sigs",
            "type": "Array<string>"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "txid",
            "baseName": "txid",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number"
        }
    ];
    return ApiV1PendingTxsTransaction;
}());
exports.ApiV1PendingTxsTransaction = ApiV1PendingTxsTransaction;
//# sourceMappingURL=apiV1PendingTxsTransaction.js.map