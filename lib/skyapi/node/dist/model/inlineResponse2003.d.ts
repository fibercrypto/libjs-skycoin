import { InlineResponse2003UnconfirmedVerifyTransaction } from './inlineResponse2003UnconfirmedVerifyTransaction';
export declare class InlineResponse2003 {
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
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace InlineResponse2003 {
    enum StateEnum {
        Pending,
        Connected,
        Introduced
    }
}
