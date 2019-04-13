"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiV1ExplorerAddressStatus = (function () {
    function ApiV1ExplorerAddressStatus() {
    }
    ApiV1ExplorerAddressStatus.getAttributeTypeMap = function () {
        return ApiV1ExplorerAddressStatus.attributeTypeMap;
    };
    ApiV1ExplorerAddressStatus.discriminator = undefined;
    ApiV1ExplorerAddressStatus.attributeTypeMap = [
        {
            "name": "unconfirmed",
            "baseName": "unconfirmed",
            "type": "boolean"
        },
        {
            "name": "blockSeq",
            "baseName": "block_seq",
            "type": "number"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "number"
        },
        {
            "name": "confirmed",
            "baseName": "confirmed",
            "type": "boolean"
        }
    ];
    return ApiV1ExplorerAddressStatus;
}());
exports.ApiV1ExplorerAddressStatus = ApiV1ExplorerAddressStatus;
//# sourceMappingURL=apiV1ExplorerAddressStatus.js.map