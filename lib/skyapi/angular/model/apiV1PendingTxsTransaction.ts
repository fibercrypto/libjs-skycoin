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


export interface ApiV1PendingTxsTransaction { 
    length?: number;
    type?: number;
    txid?: string;
    innerHash?: string;
    sigs?: Array<string>;
    inputs?: Array<string>;
    outputs?: Array<ApiV1PendingTxsTransactionOutputs>;
}

