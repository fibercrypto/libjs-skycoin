"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InlineResponse2005 = (function () {
    function InlineResponse2005() {
    }
    InlineResponse2005.getAttributeTypeMap = function () {
        return InlineResponse2005.attributeTypeMap;
    };
    InlineResponse2005.discriminator = undefined;
    InlineResponse2005.attributeTypeMap = [
        {
            "name": "entries",
            "baseName": "entries",
            "type": "Array<ApiV1WalletsEntries>"
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "ApiV1WalletsMeta"
        }
    ];
    return InlineResponse2005;
}());
exports.InlineResponse2005 = InlineResponse2005;
//# sourceMappingURL=inlineResponse2005.js.map