export declare class TransactionVerboseTxnInputs {
    'uxid'?: string;
    'owner'?: string;
    'coins'?: string;
    'hours'?: number;
    'calculatedHours'?: number;
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
