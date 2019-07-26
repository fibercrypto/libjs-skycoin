import { ApiV1PendingTxsTransactionOutputs } from './apiV1PendingTxsTransactionOutputs';
export declare class ApiV1PendingTxsTransaction {
    'length'?: number;
    'type'?: number;
    'txid'?: string;
    'innerHash'?: string;
    'sigs'?: Array<string>;
    'inputs'?: Array<string>;
    'outputs'?: Array<ApiV1PendingTxsTransactionOutputs>;
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
