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

import { TransactionStatus } from './transactionStatus';
import { TransactionVerboseTxnInputs } from './transactionVerboseTxnInputs';

/**
* TransactionVerbose has readable transaction data. It adds TransactionStatus to a BlockTransactionVerbose
*/
export class TransactionVerboseTxn {
    'status'?: TransactionStatus;
    'fee'?: number;
    'innerHash'?: string;
    'inputs'?: Array<TransactionVerboseTxnInputs>;
    'length'?: number;
    'outputs'?: Array<any>;
    'sigs'?: Array<string>;
    'timestamp'?: number;
    'txid'?: string;
    'type'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "TransactionStatus"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "number"
        },
        {
            "name": "innerHash",
            "baseName": "inner_hash",
            "type": "string"
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<TransactionVerboseTxnInputs>"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "outputs",
            "baseName": "outputs",
            "type": "Array<any>"
        },
        {
            "name": "sigs",
            "baseName": "sigs",
            "type": "Array<string>"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number"
        },
        {
            "name": "txid",
            "baseName": "txid",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TransactionVerboseTxn.attributeTypeMap;
    }
}

