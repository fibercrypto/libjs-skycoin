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
import { InlineResponse2003UnconfirmedVerifyTransaction } from './inlineResponse2003UnconfirmedVerifyTransaction';


export interface InlineResponse2003 { 
    lastReceived?: number;
    lastSent?: number;
    outgoing?: boolean;
    mirror?: number;
    address?: string;
    listenPort?: number;
    isTrustedPeer?: boolean;
    connectedAt?: number;
    unconfirmedVerifyTransaction?: InlineResponse2003UnconfirmedVerifyTransaction;
    id?: number;
    state?: InlineResponse2003.StateEnum;
    userAgent?: string;
    height?: number;
}
export namespace InlineResponse2003 {
    export type StateEnum = 'pending' | 'connected' | 'introduced';
    export const StateEnum = {
        Pending: 'pending' as StateEnum,
        Connected: 'connected' as StateEnum,
        Introduced: 'introduced' as StateEnum
    };
}
