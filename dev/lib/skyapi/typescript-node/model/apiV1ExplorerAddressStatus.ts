/**
 * Skycoin REST API.
 * Skycoin is a next-generation cryptocurrency.
 *
 * OpenAPI spec version: 0.25.1
 * Contact: contact@skycoin.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ApiV1ExplorerAddressStatus {
    'unconfirmed'?: boolean;
    'blockSeq'?: number;
    'label'?: number;
    'confirmed'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "unconfirmed",
            "baseName": "unconfirmed",
            "type": "boolean"
        },
        {
            "name": "blockSeq",
            "baseName": "block_seq",
            "type": "number"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "number"
        },
        {
            "name": "confirmed",
            "baseName": "confirmed",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ApiV1ExplorerAddressStatus.attributeTypeMap;
    }
}
