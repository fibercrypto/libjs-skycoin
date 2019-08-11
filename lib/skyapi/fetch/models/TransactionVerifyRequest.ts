// tslint:disable
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TransactionVerifyRequest
 */
export interface TransactionVerifyRequest {
    /**
     * 
     * @type {boolean}
     * @memberof TransactionVerifyRequest
     */
    unsigned?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransactionVerifyRequest
     */
    encodedTransaction?: string;
}

export function TransactionVerifyRequestFromJSON(json: any): TransactionVerifyRequest {
    return {
        'unsigned': !exists(json, 'unsigned') ? undefined : json['unsigned'],
        'encodedTransaction': !exists(json, 'encoded_transaction') ? undefined : json['encoded_transaction'],
    };
}

export function TransactionVerifyRequestToJSON(value?: TransactionVerifyRequest): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'unsigned': value.unsigned,
        'encoded_transaction': value.encodedTransaction,
    };
}

