"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionStatus = (function () {
    function TransactionStatus() {
    }
    TransactionStatus.getAttributeTypeMap = function () {
        return TransactionStatus.attributeTypeMap;
    };
    TransactionStatus.discriminator = undefined;
    TransactionStatus.attributeTypeMap = [
        {
            "name": "blockSeq",
            "baseName": "block_seq",
            "type": "number"
        },
        {
            "name": "confirmed",
            "baseName": "confirmed",
            "type": "boolean"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "unconfirmed",
            "baseName": "unconfirmed",
            "type": "boolean"
        }
    ];
    return TransactionStatus;
}());
exports.TransactionStatus = TransactionStatus;
//# sourceMappingURL=transactionStatus.js.map