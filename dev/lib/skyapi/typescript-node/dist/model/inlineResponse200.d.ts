export declare class InlineResponse200 {
    'hours'?: number;
    'coins'?: number;
    'uxid'?: string;
    'ownerAddress'?: string;
    'spentBlockSeq'?: number;
    'spentTx'?: string;
    'time'?: number;
    'srcBlockSeq'?: number;
    'srcTx'?: string;
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
