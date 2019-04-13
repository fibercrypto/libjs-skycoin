"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InlineResponse200 = (function () {
    function InlineResponse200() {
    }
    InlineResponse200.getAttributeTypeMap = function () {
        return InlineResponse200.attributeTypeMap;
    };
    InlineResponse200.discriminator = undefined;
    InlineResponse200.attributeTypeMap = [
        {
            "name": "hours",
            "baseName": "hours",
            "type": "number"
        },
        {
            "name": "coins",
            "baseName": "coins",
            "type": "number"
        },
        {
            "name": "uxid",
            "baseName": "uxid",
            "type": "string"
        },
        {
            "name": "ownerAddress",
            "baseName": "owner_address",
            "type": "string"
        },
        {
            "name": "spentBlockSeq",
            "baseName": "spent_block_seq",
            "type": "number"
        },
        {
            "name": "spentTx",
            "baseName": "spent_tx",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "srcBlockSeq",
            "baseName": "src_block_seq",
            "type": "number"
        },
        {
            "name": "srcTx",
            "baseName": "src_tx",
            "type": "string"
        }
    ];
    return InlineResponse200;
}());
exports.InlineResponse200 = InlineResponse200;
//# sourceMappingURL=inlineResponse200.js.map