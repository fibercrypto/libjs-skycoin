"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InlineResponse2002 = (function () {
    function InlineResponse2002() {
    }
    InlineResponse2002.getAttributeTypeMap = function () {
        return InlineResponse2002.attributeTypeMap;
    };
    InlineResponse2002.discriminator = undefined;
    InlineResponse2002.attributeTypeMap = [
        {
            "name": "outputs",
            "baseName": "outputs",
            "type": "Array<ApiV1ExplorerAddressOutputs>"
        },
        {
            "name": "innerHash",
            "baseName": "inner_hash",
            "type": "string"
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<ApiV1ExplorerAddressInputs>"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "number"
        },
        {
            "name": "sigs",
            "baseName": "sigs",
            "type": "Array<string>"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "txid",
            "baseName": "txid",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ApiV1ExplorerAddressStatus"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number"
        }
    ];
    return InlineResponse2002;
}());
exports.InlineResponse2002 = InlineResponse2002;
//# sourceMappingURL=inlineResponse2002.js.map