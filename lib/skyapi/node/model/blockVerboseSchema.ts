/**
 * Skycoin REST API.
 * Skycoin is a next-generation cryptocurrency.
 *
 * The version of the OpenAPI document: 0.27.0
 * Contact: contact@skycoin.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BlockVerboseSchemaBody } from './blockVerboseSchemaBody';
import { BlockVerboseSchemaHeader } from './blockVerboseSchemaHeader';

export class BlockVerboseSchema {
    'header'?: BlockVerboseSchemaHeader;
    'body'?: BlockVerboseSchemaBody;
    'size'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "header",
            "baseName": "header",
            "type": "BlockVerboseSchemaHeader"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "BlockVerboseSchemaBody"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return BlockVerboseSchema.attributeTypeMap;
    }
}

