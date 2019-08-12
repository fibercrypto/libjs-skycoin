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

import { WalletTransactionRequestHoursSelection } from './walletTransactionRequestHoursSelection';
import { WalletTransactionRequestWallet } from './walletTransactionRequestWallet';

export class WalletTransactionRequest {
    'changeAddress'?: string;
    'hoursSelection'?: WalletTransactionRequestHoursSelection;
    'ignoreUnconfirmed'?: boolean;
    'to'?: Array<object>;
    'wallet'?: WalletTransactionRequestWallet;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "changeAddress",
            "baseName": "change_address",
            "type": "string"
        },
        {
            "name": "hoursSelection",
            "baseName": "hours_selection",
            "type": "WalletTransactionRequestHoursSelection"
        },
        {
            "name": "ignoreUnconfirmed",
            "baseName": "ignore_unconfirmed",
            "type": "boolean"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<object>"
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "WalletTransactionRequestWallet"
        }    ];

    static getAttributeTypeMap() {
        return WalletTransactionRequest.attributeTypeMap;
    }
}

