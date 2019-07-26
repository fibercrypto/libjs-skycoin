import { NetworkConnectionSchemaUnconfirmedVerifyTransaction } from './networkConnectionSchemaUnconfirmedVerifyTransaction';
export declare class NetworkConnectionSchema {
    'address'?: string;
    'connectedAt'?: number;
    'height'?: number;
    'id'?: number;
    'isTrustedPeer'?: boolean;
    'lastReceived'?: number;
    'lastSent'?: number;
    'listenPort'?: number;
    'mirror'?: number;
    'outgoing'?: boolean;
    'state'?: NetworkConnectionSchema.StateEnum;
    'unconfirmedVerifyTransaction'?: NetworkConnectionSchemaUnconfirmedVerifyTransaction;
    'userAgent'?: string;
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
export declare namespace NetworkConnectionSchema {
    enum StateEnum {
        Pending,
        Connected,
        Introduced
    }
}
