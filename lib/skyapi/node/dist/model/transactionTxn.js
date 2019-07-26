"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionTxn = (function () {
    function TransactionTxn() {
    }
    TransactionTxn.getAttributeTypeMap = function () {
        return TransactionTxn.attributeTypeMap;
    };
    TransactionTxn.discriminator = undefined;
    TransactionTxn.attributeTypeMap = [
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
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "outputs",
            "baseName": "outputs",
            "type": "Array<any>"
        },
        {
            "name": "sigs",
            "baseName": "sigs",
            "type": "Array<string>"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
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
        }
    ];
    return TransactionTxn;
}());
exports.TransactionTxn = TransactionTxn;
//# sourceMappingURL=transactionTxn.js.map