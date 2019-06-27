/**
 * Skycoin REST API.
 * Skycoin is a next-generation cryptocurrency.
 *
 * OpenAPI spec version: 0.25.1
 * Contact: skycoin.doe@example.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ApiV1ExplorerAddressInputs {
    'owner'?: string;
    'hours'?: number;
    'calculatedHours'?: number;
    'coins'?: string;
    'uxid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string"
        },
        {
            "name": "hours",
            "baseName": "hours",
            "type": "number"
        },
        {
            "name": "calculatedHours",
            "baseName": "calculated_hours",
            "type": "number"
        },
        {
            "name": "coins",
            "baseName": "coins",
            "type": "string"
        },
        {
            "name": "uxid",
            "baseName": "uxid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApiV1ExplorerAddressInputs.attributeTypeMap;
    }
}

