"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InlineResponse2003UnconfirmedVerifyTransaction = (function () {
    function InlineResponse2003UnconfirmedVerifyTransaction() {
    }
    InlineResponse2003UnconfirmedVerifyTransaction.getAttributeTypeMap = function () {
        return InlineResponse2003UnconfirmedVerifyTransaction.attributeTypeMap;
    };
    InlineResponse2003UnconfirmedVerifyTransaction.discriminator = undefined;
    InlineResponse2003UnconfirmedVerifyTransaction.attributeTypeMap = [
        {
            "name": "burnFactor",
            "baseName": "burn_factor",
            "type": "number"
        },
        {
            "name": "maxTransactionSize",
            "baseName": "max_transaction_size",
            "type": "number"
        },
        {
            "name": "maxDecimals",
            "baseName": "max_decimals",
            "type": "number"
        }
    ];
    return InlineResponse2003UnconfirmedVerifyTransaction;
}());
exports.InlineResponse2003UnconfirmedVerifyTransaction = InlineResponse2003UnconfirmedVerifyTransaction;
//# sourceMappingURL=inlineResponse2003UnconfirmedVerifyTransaction.js.map