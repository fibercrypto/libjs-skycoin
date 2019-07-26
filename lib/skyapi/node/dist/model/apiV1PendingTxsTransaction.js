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
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "txid",
            "baseName": "txid",
            "type": "string"
        },
        {
            "name": "innerHash",
            "baseName": "inner_hash",
            "type": "string"
        },
        {
            "name": "sigs",
            "baseName": "sigs",
            "type": "Array<string>"
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<string>"
        },
        {
            "name": "outputs",
            "baseName": "outputs",
            "type": "Array<ApiV1PendingTxsTransactionOutputs>"
        }
    ];
    return ApiV1PendingTxsTransaction;
}());
exports.ApiV1PendingTxsTransaction = ApiV1PendingTxsTransaction;
//# sourceMappingURL=apiV1PendingTxsTransaction.js.map