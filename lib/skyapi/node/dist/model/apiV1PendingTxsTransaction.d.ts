import { ApiV1ExplorerAddressOutputs } from './apiV1ExplorerAddressOutputs';
export declare class ApiV1PendingTxsTransaction {
    'outputs'?: Array<ApiV1ExplorerAddressOutputs>;
    'innerHash'?: string;
    'inputs'?: Array<string>;
    'sigs'?: Array<string>;
    'length'?: number;
    'txid'?: string;
    'type'?: number;
    'timestamp'?: number;
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
