"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiV1WalletTransactionTo = (function () {
    function ApiV1WalletTransactionTo() {
    }
    ApiV1WalletTransactionTo.getAttributeTypeMap = function () {
        return ApiV1WalletTransactionTo.attributeTypeMap;
    };
    ApiV1WalletTransactionTo.discriminator = undefined;
    ApiV1WalletTransactionTo.attributeTypeMap = [
        {
            "name": "hours",
            "baseName": "hours",
            "type": "number"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "coins",
            "baseName": "coins",
            "type": "number"
        }
    ];
    return ApiV1WalletTransactionTo;
}());
exports.ApiV1WalletTransactionTo = ApiV1WalletTransactionTo;
//# sourceMappingURL=apiV1WalletTransactionTo.js.map