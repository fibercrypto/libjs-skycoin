/// <reference types="node" />
import http = require('http');
import Promise = require('bluebird');
import { BlockSchema } from '../model/blockSchema';
import { InlineResponse200 } from '../model/inlineResponse200';
import { InlineResponse2001 } from '../model/inlineResponse2001';
import { InlineResponse20010 } from '../model/inlineResponse20010';
import { InlineResponse2002 } from '../model/inlineResponse2002';
import { InlineResponse2003 } from '../model/inlineResponse2003';
import { InlineResponse2004 } from '../model/inlineResponse2004';
import { InlineResponse2005 } from '../model/inlineResponse2005';
import { InlineResponse2006 } from '../model/inlineResponse2006';
import { InlineResponse2007 } from '../model/inlineResponse2007';
import { InlineResponse2008 } from '../model/inlineResponse2008';
import { InlineResponse2009 } from '../model/inlineResponse2009';
import { NetworkConnectionSchema } from '../model/networkConnectionSchema';
import { Transaction } from '../model/transaction';
import { TransactionV2ParamsAddress } from '../model/transactionV2ParamsAddress';
import { TransactionV2ParamsUnspent } from '../model/transactionV2ParamsUnspent';
import { TransactionVerifyRequest } from '../model/transactionVerifyRequest';
import { WalletTransactionRequest } from '../model/walletTransactionRequest';
import { WalletTransactionSignRequest } from '../model/walletTransactionSignRequest';
import { Authentication, ApiKeyAuth } from '../model/models';
export declare enum DefaultApiApiKeys {
    csrfAuth = 0
}
export declare class DefaultApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'csrfAuth': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: DefaultApiApiKeys, value: string): void;
    addressCount(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineResponse200;
    }>;
    addressUxouts(address: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<any>;
    }>;
    apiV1RawtxGet(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    apiV2MetricsGet(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    balanceGet(addrs: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    balancePost(addrs: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    block(hash?: string, seq?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<BlockSchema>;
    }>;
    blockchainMetadata(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    blockchainProgress(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    blocks(start?: number, end?: number, seq?: Array<number>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineResponse2001;
    }>;
    coinSupply(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineResponse2002;
    }>;
    csrf(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineResponse2003;
    }>;
    dataDELETE(type?: string, key?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    dataGET(type?: string, key?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    dataPOST(type?: string, key?: string, val?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    defaultConnections(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<string>;
    }>;
    health(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    lastBlocks(num: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    networkConnection(addr: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: NetworkConnectionSchema;
    }>;
    networkConnections(states?: 'pending' | 'connected' | 'introduced', direction?: 'connected' | 'introduced', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineResponse2004;
    }>;
    networkConnectionsDisconnect(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    networkConnectionsExchange(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<string>;
    }>;
    networkConnectionsTrust(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<string>;
    }>;
    outputsGet(address?: Array<string>, hash?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    outputsPost(address?: string, hash?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    pendingTxs(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<InlineResponse20010>;
    }>;
    resendUnconfirmedTxns(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    richlist(includeDistribution?: boolean, n?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    transaction(txid: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Transaction;
    }>;
    transactionInject(rawtx: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    transactionPost(transactionV2ParamsAddress?: TransactionV2ParamsAddress, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineResponse2008;
    }>;
    transactionPostUnspent(transactionV2ParamsUnspent: TransactionV2ParamsUnspent, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineResponse2008;
    }>;
    transactionRaw(txid?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    transactionVerify(transactionVerifyRequest: TransactionVerifyRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    transactionsGet(addrs?: string, confirmed?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    transactionsPost(addrs?: string, confirmed?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    uxout(uxid?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    verifyAddress(address: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    version(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineResponse2005;
    }>;
    wallet(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    walletBalance(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    walletCreate(seed: string, label: string, scan?: number, encrypt?: boolean, password?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    walletDecrypt(id: string, password: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    walletEncrypt(id: string, password: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    walletFolder(addr: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineResponse2007;
    }>;
    walletNewAddress(id: string, num?: string, password?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    walletNewSeed(entropy?: '128' | '256', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    walletRecover(id: string, seed: string, password?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    walletSeed(id: string, password: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    walletSeedVerify(seed?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    walletTransaction(walletTransactionRequest: WalletTransactionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    walletTransactionSign(walletTransactionSignRequest: WalletTransactionSignRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineResponse2009;
    }>;
    walletTransactions(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineResponse2006;
    }>;
    walletUnload(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    walletUpdate(id: string, label: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    wallets(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<any>;
    }>;
}
