"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionV2ParamsAddress = (function () {
    function TransactionV2ParamsAddress() {
    }
    TransactionV2ParamsAddress.getAttributeTypeMap = function () {
        return TransactionV2ParamsAddress.attributeTypeMap;
    };
    TransactionV2ParamsAddress.discriminator = undefined;
    TransactionV2ParamsAddress.attributeTypeMap = [
        {
            "name": "hoursSelection",
            "baseName": "hours_selection",
            "type": "TransactionV2ParamsAddressHoursSelection"
        }
    ];
    return TransactionV2ParamsAddress;
}());
exports.TransactionV2ParamsAddress = TransactionV2ParamsAddress;
//# sourceMappingURL=transactionV2ParamsAddress.js.map