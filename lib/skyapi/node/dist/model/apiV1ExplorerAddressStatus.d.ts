export declare class ApiV1ExplorerAddressStatus {
    'unconfirmed'?: boolean;
    'blockSeq'?: number;
    'label'?: number;
    'confirmed'?: boolean;
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
