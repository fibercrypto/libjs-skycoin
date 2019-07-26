"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiV1PendingTxsTransactionOutputs = (function () {
    function ApiV1PendingTxsTransactionOutputs() {
    }
    ApiV1PendingTxsTransactionOutputs.getAttributeTypeMap = function () {
        return ApiV1PendingTxsTransactionOutputs.attributeTypeMap;
    };
    ApiV1PendingTxsTransactionOutputs.discriminator = undefined;
    ApiV1PendingTxsTransactionOutputs.attributeTypeMap = [
        {
            "name": "uxid",
            "baseName": "uxid",
            "type": "string"
        },
        {
            "name": "dst",
            "baseName": "dst",
            "type": "string"
        },
        {
            "name": "coins",
            "baseName": "coins",
            "type": "string"
        },
        {
            "name": "hours",
            "baseName": "hours",
            "type": "number"
        }
    ];
    return ApiV1PendingTxsTransactionOutputs;
}());
exports.ApiV1PendingTxsTransactionOutputs = ApiV1PendingTxsTransactionOutputs;
//# sourceMappingURL=apiV1PendingTxsTransactionOutputs.js.map