"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionV2ParamsUnspentHoursSelection = (function () {
    function TransactionV2ParamsUnspentHoursSelection() {
    }
    TransactionV2ParamsUnspentHoursSelection.getAttributeTypeMap = function () {
        return TransactionV2ParamsUnspentHoursSelection.attributeTypeMap;
    };
    TransactionV2ParamsUnspentHoursSelection.discriminator = undefined;
    TransactionV2ParamsUnspentHoursSelection.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string"
        },
        {
            "name": "shareFactor",
            "baseName": "share_factor",
            "type": "string"
        }
    ];
    return TransactionV2ParamsUnspentHoursSelection;
}());
exports.TransactionV2ParamsUnspentHoursSelection = TransactionV2ParamsUnspentHoursSelection;
//# sourceMappingURL=transactionV2ParamsUnspentHoursSelection.js.map