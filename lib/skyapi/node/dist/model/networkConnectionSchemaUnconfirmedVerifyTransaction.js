"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NetworkConnectionSchemaUnconfirmedVerifyTransaction = (function () {
    function NetworkConnectionSchemaUnconfirmedVerifyTransaction() {
    }
    NetworkConnectionSchemaUnconfirmedVerifyTransaction.getAttributeTypeMap = function () {
        return NetworkConnectionSchemaUnconfirmedVerifyTransaction.attributeTypeMap;
    };
    NetworkConnectionSchemaUnconfirmedVerifyTransaction.discriminator = undefined;
    NetworkConnectionSchemaUnconfirmedVerifyTransaction.attributeTypeMap = [
        {
            "name": "burnFactor",
            "baseName": "burn_factor",
            "type": "number"
        },
        {
            "name": "maxDecimals",
            "baseName": "max_decimals",
            "type": "number"
        },
        {
            "name": "maxTransactionSize",
            "baseName": "max_transaction_size",
            "type": "number"
        }
    ];
    return NetworkConnectionSchemaUnconfirmedVerifyTransaction;
}());
exports.NetworkConnectionSchemaUnconfirmedVerifyTransaction = NetworkConnectionSchemaUnconfirmedVerifyTransaction;
//# sourceMappingURL=networkConnectionSchemaUnconfirmedVerifyTransaction.js.map