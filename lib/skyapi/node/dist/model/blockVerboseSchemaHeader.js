"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockVerboseSchemaHeader = (function () {
    function BlockVerboseSchemaHeader() {
    }
    BlockVerboseSchemaHeader.getAttributeTypeMap = function () {
        return BlockVerboseSchemaHeader.attributeTypeMap;
    };
    BlockVerboseSchemaHeader.discriminator = undefined;
    BlockVerboseSchemaHeader.attributeTypeMap = [
        {
            "name": "seq",
            "baseName": "seq",
            "type": "number"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "blockHash",
            "baseName": "block_hash",
            "type": "string"
        },
        {
            "name": "previousBlockHash",
            "baseName": "previous_block_hash",
            "type": "string"
        },
        {
            "name": "txBodyHash",
            "baseName": "tx_body_hash",
            "type": "string"
        },
        {
            "name": "uxHash",
            "baseName": "ux_hash",
            "type": "string"
        }
    ];
    return BlockVerboseSchemaHeader;
}());
exports.BlockVerboseSchemaHeader = BlockVerboseSchemaHeader;
//# sourceMappingURL=blockVerboseSchemaHeader.js.map