"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InlineResponse20010 = (function () {
    function InlineResponse20010() {
    }
    InlineResponse20010.getAttributeTypeMap = function () {
        return InlineResponse20010.attributeTypeMap;
    };
    InlineResponse20010.discriminator = undefined;
    InlineResponse20010.attributeTypeMap = [
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "ApiV1PendingTxsTransaction"
        },
        {
            "name": "received",
            "baseName": "received",
            "type": "string"
        },
        {
            "name": "checked",
            "baseName": "checked",
            "type": "string"
        },
        {
            "name": "announced",
            "baseName": "announced",
            "type": "string"
        },
        {
            "name": "isValid",
            "baseName": "is_valid",
            "type": "boolean"
        }
    ];
    return InlineResponse20010;
}());
exports.InlineResponse20010 = InlineResponse20010;
//# sourceMappingURL=inlineResponse20010.js.map