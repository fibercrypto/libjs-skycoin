export declare class ApiV1PendingTxsTransactionOutputs {
    'uxid'?: string;
    'dst'?: string;
    'coins'?: string;
    'hours'?: number;
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
