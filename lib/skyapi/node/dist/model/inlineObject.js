"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InlineObject = (function () {
    function InlineObject() {
    }
    InlineObject.getAttributeTypeMap = function () {
        return InlineObject.attributeTypeMap;
    };
    InlineObject.discriminator = undefined;
    InlineObject.attributeTypeMap = [
        {
            "name": "changeAddress",
            "baseName": "change_address",
            "type": "string"
        },
        {
            "name": "hoursSelection",
            "baseName": "hours_selection",
            "type": "ApiV1WalletTransactionHoursSelection"
        },
        {
            "name": "ignoreUnconfirmed",
            "baseName": "ignore_unconfirmed",
            "type": "boolean"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<ApiV1WalletTransactionTo>"
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "ApiV1WalletTransactionWallet"
        }
    ];
    return InlineObject;
}());
exports.InlineObject = InlineObject;
//# sourceMappingURL=inlineObject.js.map