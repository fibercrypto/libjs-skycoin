"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionVerboseTxn = (function () {
    function TransactionVerboseTxn() {
    }
    TransactionVerboseTxn.getAttributeTypeMap = function () {
        return TransactionVerboseTxn.attributeTypeMap;
    };
    TransactionVerboseTxn.discriminator = undefined;
    TransactionVerboseTxn.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "TransactionStatus"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "number"
        },
        {
            "name": "innerHash",
            "baseName": "inner_hash",
            "type": "string"
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<TransactionVerboseTxnInputs>"
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
    return TransactionVerboseTxn;
}());
exports.TransactionVerboseTxn = TransactionVerboseTxn;
//# sourceMappingURL=transactionVerboseTxn.js.map