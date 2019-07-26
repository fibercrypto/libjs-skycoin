"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionV2ParamsUnspentTo = (function () {
    function TransactionV2ParamsUnspentTo() {
    }
    TransactionV2ParamsUnspentTo.getAttributeTypeMap = function () {
        return TransactionV2ParamsUnspentTo.attributeTypeMap;
    };
    TransactionV2ParamsUnspentTo.discriminator = undefined;
    TransactionV2ParamsUnspentTo.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "coins",
            "baseName": "coins",
            "type": "string"
        }
    ];
    return TransactionV2ParamsUnspentTo;
}());
exports.TransactionV2ParamsUnspentTo = TransactionV2ParamsUnspentTo;
//# sourceMappingURL=transactionV2ParamsUnspentTo.js.map