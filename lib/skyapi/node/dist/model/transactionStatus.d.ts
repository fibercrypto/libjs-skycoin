export declare class TransactionStatus {
    'blockSeq'?: number;
    'confirmed'?: boolean;
    'height'?: number;
    'unconfirmed'?: boolean;
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
