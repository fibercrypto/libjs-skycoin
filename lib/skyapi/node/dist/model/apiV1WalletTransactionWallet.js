"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiV1WalletTransactionWallet = (function () {
    function ApiV1WalletTransactionWallet() {
    }
    ApiV1WalletTransactionWallet.getAttributeTypeMap = function () {
        return ApiV1WalletTransactionWallet.attributeTypeMap;
    };
    ApiV1WalletTransactionWallet.discriminator = undefined;
    ApiV1WalletTransactionWallet.attributeTypeMap = [
        {
            "name": "unspents",
            "baseName": "unspents",
            "type": "Array<string>"
        },
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<string>"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }
    ];
    return ApiV1WalletTransactionWallet;
}());
exports.ApiV1WalletTransactionWallet = ApiV1WalletTransactionWallet;
//# sourceMappingURL=apiV1WalletTransactionWallet.js.map