export * from './apiV1ExplorerAddressInputs';
export * from './apiV1ExplorerAddressOutputs';
export * from './apiV1ExplorerAddressStatus';
export * from './apiV1PendingTxsTransaction';
export * from './apiV1WalletTransactionHoursSelection';
export * from './apiV1WalletTransactionTo';
export * from './apiV1WalletTransactionWallet';
export * from './apiV1WalletsEntries';
export * from './apiV1WalletsMeta';
export * from './inlineObject';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse2002';
export * from './inlineResponse2003';
export * from './inlineResponse2003UnconfirmedVerifyTransaction';
export * from './inlineResponse2004';
export * from './inlineResponse2005';
export * from './inlineResponse2006';
export * from './inlineResponse2007';
export * from './inlineResponse2007Data';
export * from './inlineResponseDefault';
import localVarRequest = require('request');
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
