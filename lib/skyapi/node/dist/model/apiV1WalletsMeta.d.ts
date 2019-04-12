export declare class ApiV1WalletsMeta {
    'filename'?: string;
    'encrypted'?: boolean;
    'cryptoType'?: string;
    'label'?: string;
    'type'?: string;
    'version'?: string;
    'coin'?: string;
    'timestamp'?: number;
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
