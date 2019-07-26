export declare class WalletTransactionSignRequest {
    'walletId'?: string;
    'password'?: string;
    'encodedTransaction'?: string;
    'signIndexes'?: Array<number>;
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
