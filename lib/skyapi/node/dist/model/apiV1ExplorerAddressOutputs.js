"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiV1ExplorerAddressOutputs = (function () {
    function ApiV1ExplorerAddressOutputs() {
    }
    ApiV1ExplorerAddressOutputs.getAttributeTypeMap = function () {
        return ApiV1ExplorerAddressOutputs.attributeTypeMap;
    };
    ApiV1ExplorerAddressOutputs.discriminator = undefined;
    ApiV1ExplorerAddressOutputs.attributeTypeMap = [
        {
            "name": "hours",
            "baseName": "hours",
            "type": "number"
        },
        {
            "name": "dst",
            "baseName": "dst",
            "type": "string"
        },
        {
            "name": "coins",
            "baseName": "coins",
            "type": "string"
        },
        {
            "name": "uxid",
            "baseName": "uxid",
            "type": "string"
        }
    ];
    return ApiV1ExplorerAddressOutputs;
}());
exports.ApiV1ExplorerAddressOutputs = ApiV1ExplorerAddressOutputs;
//# sourceMappingURL=apiV1ExplorerAddressOutputs.js.map