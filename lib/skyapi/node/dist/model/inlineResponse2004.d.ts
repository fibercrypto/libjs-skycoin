import { NetworkConnectionSchema } from './networkConnectionSchema';
export declare class InlineResponse2004 {
    'connections'?: Array<NetworkConnectionSchema>;
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
