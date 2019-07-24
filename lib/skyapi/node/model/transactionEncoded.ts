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

import { ApiV1PendingTxsTransaction } from './apiV1PendingTxsTransaction';

export class TransactionEncoded {
    'transaction'?: ApiV1PendingTxsTransaction;
    'received'?: string;
    'checked'?: string;
    'announced'?: string;
    'isValid'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "ApiV1PendingTxsTransaction"
        },
        {
            "name": "received",
            "baseName": "received",
            "type": "string"
        },
        {
            "name": "checked",
            "baseName": "checked",
            "type": "string"
        },
        {
            "name": "announced",
            "baseName": "announced",
            "type": "string"
        },
        {
            "name": "isValid",
            "baseName": "is_valid",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TransactionEncoded.attributeTypeMap;
    }
}

