"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockSchemaBody = (function () {
    function BlockSchemaBody() {
    }
    BlockSchemaBody.getAttributeTypeMap = function () {
        return BlockSchemaBody.attributeTypeMap;
    };
    BlockSchemaBody.discriminator = undefined;
    BlockSchemaBody.attributeTypeMap = [
        {
            "name": "txns",
            "baseName": "txns",
            "type": "Array<any>"
        }
    ];
    return BlockSchemaBody;
}());
exports.BlockSchemaBody = BlockSchemaBody;
//# sourceMappingURL=blockSchemaBody.js.map