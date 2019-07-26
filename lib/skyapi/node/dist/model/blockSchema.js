"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockSchema = (function () {
    function BlockSchema() {
    }
    BlockSchema.getAttributeTypeMap = function () {
        return BlockSchema.attributeTypeMap;
    };
    BlockSchema.discriminator = undefined;
    BlockSchema.attributeTypeMap = [
        {
            "name": "header",
            "baseName": "header",
            "type": "BlockVerboseSchemaHeader"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "BlockSchemaBody"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        }
    ];
    return BlockSchema;
}());
exports.BlockSchema = BlockSchema;
//# sourceMappingURL=blockSchema.js.map