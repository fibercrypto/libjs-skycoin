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
import { ApiV1ExplorerAddressOutputs } from './apiV1ExplorerAddressOutputs';


/**
 * BlockTransactionVerbose has readable transaction data for transactions inside a block. It differs from Transaction in that it includes metadata for transaction inputs and the calculated coinhour fee spent by the block
 */
export interface ApiV1PendingTxsTransaction { 
    outputs?: Array<ApiV1ExplorerAddressOutputs>;
    innerHash?: string;
    inputs?: Array<string>;
    sigs?: Array<string>;
    length?: number;
    txid?: string;
    type?: number;
    timestamp?: number;
}
