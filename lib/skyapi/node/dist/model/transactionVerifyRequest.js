"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionVerifyRequest = (function () {
    function TransactionVerifyRequest() {
    }
    TransactionVerifyRequest.getAttributeTypeMap = function () {
        return TransactionVerifyRequest.attributeTypeMap;
    };
    TransactionVerifyRequest.discriminator = undefined;
    TransactionVerifyRequest.attributeTypeMap = [
        {
            "name": "unsigned",
            "baseName": "unsigned",
            "type": "boolean"
        },
        {
            "name": "encodedTransaction",
            "baseName": "encoded_transaction",
            "type": "string"
        }
    ];
    return TransactionVerifyRequest;
}());
exports.TransactionVerifyRequest = TransactionVerifyRequest;
//# sourceMappingURL=transactionVerifyRequest.js.map