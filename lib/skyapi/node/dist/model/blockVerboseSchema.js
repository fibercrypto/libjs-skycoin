"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockVerboseSchema = (function () {
    function BlockVerboseSchema() {
    }
    BlockVerboseSchema.getAttributeTypeMap = function () {
        return BlockVerboseSchema.attributeTypeMap;
    };
    BlockVerboseSchema.discriminator = undefined;
    BlockVerboseSchema.attributeTypeMap = [
        {
            "name": "header",
            "baseName": "header",
            "type": "BlockVerboseSchemaHeader"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "BlockVerboseSchemaBody"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        }
    ];
    return BlockVerboseSchema;
}());
exports.BlockVerboseSchema = BlockVerboseSchema;
//# sourceMappingURL=blockVerboseSchema.js.map