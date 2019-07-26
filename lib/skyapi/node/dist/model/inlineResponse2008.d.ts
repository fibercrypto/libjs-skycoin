import { InlineResponse2008Data } from './inlineResponse2008Data';
export declare class InlineResponse2008 {
    'data'?: InlineResponse2008Data;
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
