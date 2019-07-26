"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WalletTransactionRequest = (function () {
    function WalletTransactionRequest() {
    }
    WalletTransactionRequest.getAttributeTypeMap = function () {
        return WalletTransactionRequest.attributeTypeMap;
    };
    WalletTransactionRequest.discriminator = undefined;
    WalletTransactionRequest.attributeTypeMap = [
        {
            "name": "changeAddress",
            "baseName": "change_address",
            "type": "string"
        },
        {
            "name": "hoursSelection",
            "baseName": "hours_selection",
            "type": "WalletTransactionRequestHoursSelection"
        },
        {
            "name": "ignoreUnconfirmed",
            "baseName": "ignore_unconfirmed",
            "type": "boolean"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<any>"
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "WalletTransactionRequestWallet"
        }
    ];
    return WalletTransactionRequest;
}());
exports.WalletTransactionRequest = WalletTransactionRequest;
//# sourceMappingURL=walletTransactionRequest.js.map