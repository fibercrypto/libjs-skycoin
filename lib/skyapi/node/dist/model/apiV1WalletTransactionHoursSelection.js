"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiV1WalletTransactionHoursSelection = (function () {
    function ApiV1WalletTransactionHoursSelection() {
    }
    ApiV1WalletTransactionHoursSelection.getAttributeTypeMap = function () {
        return ApiV1WalletTransactionHoursSelection.attributeTypeMap;
    };
    ApiV1WalletTransactionHoursSelection.discriminator = undefined;
    ApiV1WalletTransactionHoursSelection.attributeTypeMap = [
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string"
        },
        {
            "name": "shareFactor",
            "baseName": "share_factor",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return ApiV1WalletTransactionHoursSelection;
}());
exports.ApiV1WalletTransactionHoursSelection = ApiV1WalletTransactionHoursSelection;
//# sourceMappingURL=apiV1WalletTransactionHoursSelection.js.map