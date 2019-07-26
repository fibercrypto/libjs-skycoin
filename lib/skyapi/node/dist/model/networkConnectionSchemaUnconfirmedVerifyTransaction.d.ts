export declare class NetworkConnectionSchemaUnconfirmedVerifyTransaction {
    'burnFactor'?: number;
    'maxDecimals'?: number;
    'maxTransactionSize'?: number;
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
