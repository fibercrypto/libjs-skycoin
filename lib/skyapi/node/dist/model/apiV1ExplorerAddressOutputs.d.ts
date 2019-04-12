export declare class ApiV1ExplorerAddressOutputs {
    'hours'?: number;
    'dst'?: string;
    'coins'?: string;
    'uxid'?: string;
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
