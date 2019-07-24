/**
 * Skycoin REST API.
 * Skycoin is a next-generation cryptocurrency.
 *
 * OpenAPI spec version: 0.26.0
 * Contact: contact@skycoin.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InlineResponse2008Data } from './inlineResponse2008Data';

export class InlineResponse2008 {
    'data'?: InlineResponse2008Data;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "InlineResponse2008Data"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2008.attributeTypeMap;
    }
}

