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

import { Transaction } from './transaction';

export class InlineResponse2008Data {
    'transaction'?: Transaction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2008Data.attributeTypeMap;
    }
}
