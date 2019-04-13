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

import { InlineResponse2003UnconfirmedVerifyTransaction } from './inlineResponse2003UnconfirmedVerifyTransaction';

export class InlineResponse2003 {
    'lastReceived'?: number;
    'lastSent'?: number;
    'outgoing'?: boolean;
    'mirror'?: number;
    'address'?: string;
    'listenPort'?: number;
    'isTrustedPeer'?: boolean;
    'connectedAt'?: number;
    'unconfirmedVerifyTransaction'?: InlineResponse2003UnconfirmedVerifyTransaction;
    'id'?: number;
    'state'?: InlineResponse2003.StateEnum;
    'userAgent'?: string;
    'height'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastReceived",
            "baseName": "last_received",
            "type": "number"
        },
        {
            "name": "lastSent",
            "baseName": "last_sent",
            "type": "number"
        },
        {
            "name": "outgoing",
            "baseName": "outgoing",
            "type": "boolean"
        },
        {
            "name": "mirror",
            "baseName": "mirror",
            "type": "number"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "listenPort",
            "baseName": "listen_port",
            "type": "number"
        },
        {
            "name": "isTrustedPeer",
            "baseName": "is_trusted_peer",
            "type": "boolean"
        },
        {
            "name": "connectedAt",
            "baseName": "connected_at",
            "type": "number"
        },
        {
            "name": "unconfirmedVerifyTransaction",
            "baseName": "unconfirmed_verify_transaction",
            "type": "InlineResponse2003UnconfirmedVerifyTransaction"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "InlineResponse2003.StateEnum"
        },
        {
            "name": "userAgent",
            "baseName": "user_agent",
            "type": "string"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2003.attributeTypeMap;
    }
}

export namespace InlineResponse2003 {
    export enum StateEnum {
        Pending = <any> 'pending',
        Connected = <any> 'connected',
        Introduced = <any> 'introduced'
    }
}
