"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionEncoded = (function () {
    function TransactionEncoded() {
    }
    TransactionEncoded.getAttributeTypeMap = function () {
        return TransactionEncoded.attributeTypeMap;
    };
    TransactionEncoded.discriminator = undefined;
    TransactionEncoded.attributeTypeMap = [
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "ApiV1PendingTxsTransaction"
        },
        {
            "name": "received",
            "baseName": "received",
            "type": "string"
        },
        {
            "name": "checked",
            "baseName": "checked",
            "type": "string"
        },
        {
            "name": "announced",
            "baseName": "announced",
            "type": "string"
        },
        {
            "name": "isValid",
            "baseName": "is_valid",
            "type": "boolean"
        }
    ];
    return TransactionEncoded;
}());
exports.TransactionEncoded = TransactionEncoded;
//# sourceMappingURL=transactionEncoded.js.map