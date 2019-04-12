"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiV1WalletsEntries = (function () {
    function ApiV1WalletsEntries() {
    }
    ApiV1WalletsEntries.getAttributeTypeMap = function () {
        return ApiV1WalletsEntries.attributeTypeMap;
    };
    ApiV1WalletsEntries.discriminator = undefined;
    ApiV1WalletsEntries.attributeTypeMap = [
        {
            "name": "publicKey",
            "baseName": "public_key",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        }
    ];
    return ApiV1WalletsEntries;
}());
exports.ApiV1WalletsEntries = ApiV1WalletsEntries;
//# sourceMappingURL=apiV1WalletsEntries.js.map