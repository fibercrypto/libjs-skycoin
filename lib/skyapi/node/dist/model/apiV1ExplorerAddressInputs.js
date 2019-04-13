"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiV1ExplorerAddressInputs = (function () {
    function ApiV1ExplorerAddressInputs() {
    }
    ApiV1ExplorerAddressInputs.getAttributeTypeMap = function () {
        return ApiV1ExplorerAddressInputs.attributeTypeMap;
    };
    ApiV1ExplorerAddressInputs.discriminator = undefined;
    ApiV1ExplorerAddressInputs.attributeTypeMap = [
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string"
        },
        {
            "name": "hours",
            "baseName": "hours",
            "type": "number"
        },
        {
            "name": "calculatedHours",
            "baseName": "calculated_hours",
            "type": "number"
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
    return ApiV1ExplorerAddressInputs;
}());
exports.ApiV1ExplorerAddressInputs = ApiV1ExplorerAddressInputs;
//# sourceMappingURL=apiV1ExplorerAddressInputs.js.map