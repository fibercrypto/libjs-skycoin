export declare class InlineResponse2002 {
    'currentCoinhourSupply'?: string;
    'currentSupply'?: string;
    'lockedDistributionAddresses'?: Array<string>;
    'maxSupply'?: string;
    'totalCoinhourSupply'?: string;
    'totalSupply'?: string;
    'unlockedDistributionAddresses'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
