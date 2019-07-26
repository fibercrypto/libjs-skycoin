export declare class TransactionV2ParamsUnspentHoursSelection {
    'type'?: string;
    'mode'?: string;
    'shareFactor'?: string;
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
