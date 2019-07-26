import { BlockSchemaBody } from './blockSchemaBody';
import { BlockVerboseSchemaHeader } from './blockVerboseSchemaHeader';
export declare class BlockSchema {
    'header'?: BlockVerboseSchemaHeader;
    'body'?: BlockSchemaBody;
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
