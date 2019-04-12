"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiV1WalletsMeta = (function () {
    function ApiV1WalletsMeta() {
    }
    ApiV1WalletsMeta.getAttributeTypeMap = function () {
        return ApiV1WalletsMeta.attributeTypeMap;
    };
    ApiV1WalletsMeta.discriminator = undefined;
    ApiV1WalletsMeta.attributeTypeMap = [
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "encrypted",
            "baseName": "encrypted",
            "type": "boolean"
        },
        {
            "name": "cryptoType",
            "baseName": "crypto_type",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "coin",
            "baseName": "coin",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number"
        }
    ];
    return ApiV1WalletsMeta;
}());
exports.ApiV1WalletsMeta = ApiV1WalletsMeta;
//# sourceMappingURL=apiV1WalletsMeta.js.map