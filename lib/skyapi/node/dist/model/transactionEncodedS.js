"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionEncodedS = (function () {
    function TransactionEncodedS() {
    }
    TransactionEncodedS.getAttributeTypeMap = function () {
        return TransactionEncodedS.attributeTypeMap;
    };
    TransactionEncodedS.discriminator = undefined;
    TransactionEncodedS.attributeTypeMap = [
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
            "name": "encodedTransaction",
            "baseName": "encoded_transaction",
            "type": "string"
        }
    ];
    return TransactionEncodedS;
}());
exports.TransactionEncodedS = TransactionEncodedS;
//# sourceMappingURL=transactionEncodedS.js.map