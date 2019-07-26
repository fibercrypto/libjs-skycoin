"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WalletTransactionRequestWallet = (function () {
    function WalletTransactionRequestWallet() {
    }
    WalletTransactionRequestWallet.getAttributeTypeMap = function () {
        return WalletTransactionRequestWallet.attributeTypeMap;
    };
    WalletTransactionRequestWallet.discriminator = undefined;
    WalletTransactionRequestWallet.attributeTypeMap = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<string>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "unspents",
            "baseName": "unspents",
            "type": "Array<string>"
        }
    ];
    return WalletTransactionRequestWallet;
}());
exports.WalletTransactionRequestWallet = WalletTransactionRequestWallet;
//# sourceMappingURL=walletTransactionRequestWallet.js.map