import { TransactionStatus } from './transactionStatus';
import { TransactionVerboseTxnInputs } from './transactionVerboseTxnInputs';
export declare class TransactionVerboseTxn {
    'status'?: TransactionStatus;
    'fee'?: number;
    'innerHash'?: string;
    'inputs'?: Array<TransactionVerboseTxnInputs>;
    'length'?: number;
    'outputs'?: Array<any>;
    'sigs'?: Array<string>;
    'timestamp'?: number;
    'txid'?: string;
    'type'?: number;
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
