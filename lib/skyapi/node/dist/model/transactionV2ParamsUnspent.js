"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionV2ParamsUnspent = (function () {
    function TransactionV2ParamsUnspent() {
    }
    TransactionV2ParamsUnspent.getAttributeTypeMap = function () {
        return TransactionV2ParamsUnspent.attributeTypeMap;
    };
    TransactionV2ParamsUnspent.discriminator = undefined;
    TransactionV2ParamsUnspent.attributeTypeMap = [
        {
            "name": "hoursSelection",
            "baseName": "hours_selection",
            "type": "TransactionV2ParamsUnspentHoursSelection"
        },
        {
            "name": "unspents",
            "baseName": "unspents",
            "type": "Array<string>"
        },
        {
            "name": "changeAddress",
            "baseName": "change_address",
            "type": "string"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<TransactionV2ParamsUnspentTo>"
        }
    ];
    return TransactionV2ParamsUnspent;
}());
exports.TransactionV2ParamsUnspent = TransactionV2ParamsUnspent;
//# sourceMappingURL=transactionV2ParamsUnspent.js.map