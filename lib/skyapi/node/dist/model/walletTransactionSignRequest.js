"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WalletTransactionSignRequest = (function () {
    function WalletTransactionSignRequest() {
    }
    WalletTransactionSignRequest.getAttributeTypeMap = function () {
        return WalletTransactionSignRequest.attributeTypeMap;
    };
    WalletTransactionSignRequest.discriminator = undefined;
    WalletTransactionSignRequest.attributeTypeMap = [
        {
            "name": "walletId",
            "baseName": "wallet_id",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "encodedTransaction",
            "baseName": "encoded_transaction",
            "type": "string"
        },
        {
            "name": "signIndexes",
            "baseName": "sign_indexes",
            "type": "Array<number>"
        }
    ];
    return WalletTransactionSignRequest;
}());
exports.WalletTransactionSignRequest = WalletTransactionSignRequest;
//# sourceMappingURL=walletTransactionSignRequest.js.map