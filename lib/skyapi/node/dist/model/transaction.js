"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction = (function () {
    function Transaction() {
    }
    Transaction.getAttributeTypeMap = function () {
        return Transaction.attributeTypeMap;
    };
    Transaction.discriminator = undefined;
    Transaction.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "TransactionStatus"
        },
        {
            "name": "txn",
            "baseName": "txn",
            "type": "TransactionTxn"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        }
    ];
    return Transaction;
}());
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map