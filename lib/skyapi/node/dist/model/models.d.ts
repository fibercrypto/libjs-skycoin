export * from './address';
export * from './apiV1PendingTxsTransaction';
export * from './apiV1PendingTxsTransactionOutputs';
export * from './blockSchema';
export * from './blockSchemaBody';
export * from './blockVerboseSchema';
export * from './blockVerboseSchemaBody';
export * from './blockVerboseSchemaHeader';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse20010';
export * from './inlineResponse2002';
export * from './inlineResponse2003';
export * from './inlineResponse2004';
export * from './inlineResponse2005';
export * from './inlineResponse2006';
export * from './inlineResponse2007';
export * from './inlineResponse2008';
export * from './inlineResponse2008Data';
export * from './inlineResponse2009';
export * from './inlineResponseDefault';
export * from './networkConnectionSchema';
export * from './networkConnectionSchemaUnconfirmedVerifyTransaction';
export * from './transaction';
export * from './transactionEncoded';
export * from './transactionEncodedS';
export * from './transactionStatus';
export * from './transactionTxn';
export * from './transactionV2ParamsAddress';
export * from './transactionV2ParamsAddressHoursSelection';
export * from './transactionV2ParamsUnspent';
export * from './transactionV2ParamsUnspentHoursSelection';
export * from './transactionV2ParamsUnspentTo';
export * from './transactionVerbose';
export * from './transactionVerboseTxn';
export * from './transactionVerboseTxnInputs';
export * from './transactionVerifyRequest';
export * from './walletTransactionRequest';
export * from './walletTransactionRequestHoursSelection';
export * from './walletTransactionRequestWallet';
export * from './walletTransactionSignRequest';
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
