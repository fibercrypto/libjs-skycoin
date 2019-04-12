export declare class ApiV1ExplorerAddressInputs {
    'owner'?: string;
    'hours'?: number;
    'calculatedHours'?: number;
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
