import { BlockVerboseSchemaBody } from './blockVerboseSchemaBody';
import { BlockVerboseSchemaHeader } from './blockVerboseSchemaHeader';
export declare class BlockVerboseSchema {
    'header'?: BlockVerboseSchemaHeader;
    'body'?: BlockVerboseSchemaBody;
    'size'?: number;
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
