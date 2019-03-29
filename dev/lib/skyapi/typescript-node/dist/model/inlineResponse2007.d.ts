import { InlineResponse2007Data } from './inlineResponse2007Data';
export declare class InlineResponse2007 {
    'data'?: InlineResponse2007Data;
    'error'?: any;
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
