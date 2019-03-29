export declare class ApiV1WalletTransactionWallet {
    'unspents'?: Array<string>;
    'addresses'?: Array<string>;
    'password'?: string;
    'id'?: string;
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
