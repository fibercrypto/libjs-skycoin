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

import { ApiV1PendingTxsTransactionOutputs } from './apiV1PendingTxsTransactionOutputs';

export class ApiV1PendingTxsTransaction {
    'length'?: number;
    'type'?: number;
    'txid'?: string;
    'innerHash'?: string;
    'sigs'?: Array<string>;
    'inputs'?: Array<string>;
    'outputs'?: Array<ApiV1PendingTxsTransactionOutputs>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "txid",
            "baseName": "txid",
            "type": "string"
        },
        {
            "name": "innerHash",
            "baseName": "inner_hash",
            "type": "string"
        },
        {
            "name": "sigs",
            "baseName": "sigs",
            "type": "Array<string>"
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<string>"
        },
        {
            "name": "outputs",
            "baseName": "outputs",
            "type": "Array<ApiV1PendingTxsTransactionOutputs>"
        }    ];

    static getAttributeTypeMap() {
        return ApiV1PendingTxsTransaction.attributeTypeMap;
    }
}

