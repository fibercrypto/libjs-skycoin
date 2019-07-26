export declare class WalletTransactionRequestWallet {
    'addresses'?: Array<string>;
    'id'?: string;
    'password'?: string;
    'unspents'?: Array<string>;
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
