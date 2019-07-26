"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionVerbose = (function () {
    function TransactionVerbose() {
    }
    TransactionVerbose.getAttributeTypeMap = function () {
        return TransactionVerbose.attributeTypeMap;
    };
    TransactionVerbose.discriminator = undefined;
    TransactionVerbose.attributeTypeMap = [
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransactionStatus"
        },
        {
            "name": "txn",
            "baseName": "txn",
            "type": "TransactionVerboseTxn"
        }
    ];
    return TransactionVerbose;
}());
exports.TransactionVerbose = TransactionVerbose;
//# sourceMappingURL=transactionVerbose.js.map