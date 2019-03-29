"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InlineResponse2004 = (function () {
    function InlineResponse2004() {
    }
    InlineResponse2004.getAttributeTypeMap = function () {
        return InlineResponse2004.attributeTypeMap;
    };
    InlineResponse2004.discriminator = undefined;
    InlineResponse2004.attributeTypeMap = [
        {
            "name": "announced",
            "baseName": "announced",
            "type": "string"
        },
        {
            "name": "isValid",
            "baseName": "is_valid",
            "type": "boolean"
        },
        {
            "name": "checked",
            "baseName": "checked",
            "type": "string"
        },
        {
            "name": "received",
            "baseName": "received",
            "type": "string"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "ApiV1PendingTxsTransaction"
        }
    ];
    return InlineResponse2004;
}());
exports.InlineResponse2004 = InlineResponse2004;
//# sourceMappingURL=inlineResponse2004.js.map