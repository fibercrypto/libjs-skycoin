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
            "name": "currentCoinhourSupply",
            "baseName": "current_coinhour_supply",
            "type": "string"
        },
        {
            "name": "currentSupply",
            "baseName": "current_supply",
            "type": "string"
        },
        {
            "name": "lockedDistributionAddresses",
            "baseName": "locked_distribution_addresses",
            "type": "Array<string>"
        },
        {
            "name": "maxSupply",
            "baseName": "max_supply",
            "type": "string"
        },
        {
            "name": "totalCoinhourSupply",
            "baseName": "total_coinhour_supply",
            "type": "string"
        },
        {
            "name": "totalSupply",
            "baseName": "total_supply",
            "type": "string"
        },
        {
            "name": "unlockedDistributionAddresses",
            "baseName": "unlocked_distribution_addresses",
            "type": "Array<string>"
        }
    ];
    return InlineResponse2002;
}());
exports.InlineResponse2002 = InlineResponse2002;
//# sourceMappingURL=inlineResponse2002.js.map