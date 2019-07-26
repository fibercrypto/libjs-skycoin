"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WalletTransactionRequestHoursSelection = (function () {
    function WalletTransactionRequestHoursSelection() {
    }
    WalletTransactionRequestHoursSelection.getAttributeTypeMap = function () {
        return WalletTransactionRequestHoursSelection.attributeTypeMap;
    };
    WalletTransactionRequestHoursSelection.discriminator = undefined;
    WalletTransactionRequestHoursSelection.attributeTypeMap = [
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string"
        },
        {
            "name": "shareFactor",
            "baseName": "share_factor",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return WalletTransactionRequestHoursSelection;
}());
exports.WalletTransactionRequestHoursSelection = WalletTransactionRequestHoursSelection;
//# sourceMappingURL=walletTransactionRequestHoursSelection.js.map