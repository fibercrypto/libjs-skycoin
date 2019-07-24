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

import { Address } from './address';
import { ApiV1PendingTxsTransaction } from './apiV1PendingTxsTransaction';
import { ApiV1PendingTxsTransactionOutputs } from './apiV1PendingTxsTransactionOutputs';
import { BlockSchema } from './blockSchema';
import { BlockSchemaBody } from './blockSchemaBody';
import { BlockVerboseSchema } from './blockVerboseSchema';
import { BlockVerboseSchemaBody } from './blockVerboseSchemaBody';
import { BlockVerboseSchemaHeader } from './blockVerboseSchemaHeader';
import { InlineResponse200 } from './inlineResponse200';
import { InlineResponse2001 } from './inlineResponse2001';
import { InlineResponse20010 } from './inlineResponse20010';
import { InlineResponse2002 } from './inlineResponse2002';
import { InlineResponse2003 } from './inlineResponse2003';
import { InlineResponse2004 } from './inlineResponse2004';
import { InlineResponse2005 } from './inlineResponse2005';
import { InlineResponse2006 } from './inlineResponse2006';
import { InlineResponse2007 } from './inlineResponse2007';
import { InlineResponse2008 } from './inlineResponse2008';
import { InlineResponse2008Data } from './inlineResponse2008Data';
import { InlineResponse2009 } from './inlineResponse2009';
import { InlineResponseDefault } from './inlineResponseDefault';
import { NetworkConnectionSchema } from './networkConnectionSchema';
import { NetworkConnectionSchemaUnconfirmedVerifyTransaction } from './networkConnectionSchemaUnconfirmedVerifyTransaction';
import { Transaction } from './transaction';
import { TransactionEncoded } from './transactionEncoded';
import { TransactionEncodedS } from './transactionEncodedS';
import { TransactionStatus } from './transactionStatus';
import { TransactionTxn } from './transactionTxn';
import { TransactionV2ParamsAddress } from './transactionV2ParamsAddress';
import { TransactionV2ParamsAddressHoursSelection } from './transactionV2ParamsAddressHoursSelection';
import { TransactionV2ParamsUnspent } from './transactionV2ParamsUnspent';
import { TransactionV2ParamsUnspentHoursSelection } from './transactionV2ParamsUnspentHoursSelection';
import { TransactionV2ParamsUnspentTo } from './transactionV2ParamsUnspentTo';
import { TransactionVerbose } from './transactionVerbose';
import { TransactionVerboseTxn } from './transactionVerboseTxn';
import { TransactionVerboseTxnInputs } from './transactionVerboseTxnInputs';
import { TransactionVerifyRequest } from './transactionVerifyRequest';
import { WalletTransactionRequest } from './walletTransactionRequest';
import { WalletTransactionRequestHoursSelection } from './walletTransactionRequestHoursSelection';
import { WalletTransactionRequestWallet } from './walletTransactionRequestWallet';
import { WalletTransactionSignRequest } from './walletTransactionSignRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];
                 
let enumsMap: {[index: string]: any} = {
        "NetworkConnectionSchema.StateEnum": NetworkConnectionSchema.StateEnum,
}

let typeMap: {[index: string]: any} = {
    "Address": Address,
    "ApiV1PendingTxsTransaction": ApiV1PendingTxsTransaction,
    "ApiV1PendingTxsTransactionOutputs": ApiV1PendingTxsTransactionOutputs,
    "BlockSchema": BlockSchema,
    "BlockSchemaBody": BlockSchemaBody,
    "BlockVerboseSchema": BlockVerboseSchema,
    "BlockVerboseSchemaBody": BlockVerboseSchemaBody,
    "BlockVerboseSchemaHeader": BlockVerboseSchemaHeader,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse20010": InlineResponse20010,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse2005": InlineResponse2005,
    "InlineResponse2006": InlineResponse2006,
    "InlineResponse2007": InlineResponse2007,
    "InlineResponse2008": InlineResponse2008,
    "InlineResponse2008Data": InlineResponse2008Data,
    "InlineResponse2009": InlineResponse2009,
    "InlineResponseDefault": InlineResponseDefault,
    "NetworkConnectionSchema": NetworkConnectionSchema,
    "NetworkConnectionSchemaUnconfirmedVerifyTransaction": NetworkConnectionSchemaUnconfirmedVerifyTransaction,
    "Transaction": Transaction,
    "TransactionEncoded": TransactionEncoded,
    "TransactionEncodedS": TransactionEncodedS,
    "TransactionStatus": TransactionStatus,
    "TransactionTxn": TransactionTxn,
    "TransactionV2ParamsAddress": TransactionV2ParamsAddress,
    "TransactionV2ParamsAddressHoursSelection": TransactionV2ParamsAddressHoursSelection,
    "TransactionV2ParamsUnspent": TransactionV2ParamsUnspent,
    "TransactionV2ParamsUnspentHoursSelection": TransactionV2ParamsUnspentHoursSelection,
    "TransactionV2ParamsUnspentTo": TransactionV2ParamsUnspentTo,
    "TransactionVerbose": TransactionVerbose,
    "TransactionVerboseTxn": TransactionVerboseTxn,
    "TransactionVerboseTxnInputs": TransactionVerboseTxnInputs,
    "TransactionVerifyRequest": TransactionVerifyRequest,
    "WalletTransactionRequest": WalletTransactionRequest,
    "WalletTransactionRequestHoursSelection": WalletTransactionRequestHoursSelection,
    "WalletTransactionRequestWallet": WalletTransactionRequestWallet,
    "WalletTransactionSignRequest": WalletTransactionSignRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            
            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}