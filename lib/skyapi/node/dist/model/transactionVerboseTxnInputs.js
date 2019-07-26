"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionVerboseTxnInputs = (function () {
    function TransactionVerboseTxnInputs() {
    }
    TransactionVerboseTxnInputs.getAttributeTypeMap = function () {
        return TransactionVerboseTxnInputs.attributeTypeMap;
    };
    TransactionVerboseTxnInputs.discriminator = undefined;
    TransactionVerboseTxnInputs.attributeTypeMap = [
        {
            "name": "uxid",
            "baseName": "uxid",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
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
        },
        {
            "name": "calculatedHours",
            "baseName": "calculated_hours",
            "type": "number"
        }
    ];
    return TransactionVerboseTxnInputs;
}());
exports.TransactionVerboseTxnInputs = TransactionVerboseTxnInputs;
//# sourceMappingURL=transactionVerboseTxnInputs.js.map