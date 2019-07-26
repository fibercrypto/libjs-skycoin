import { TransactionStatus } from './transactionStatus';
import { TransactionTxn } from './transactionTxn';
export declare class Transaction {
    'status'?: TransactionStatus;
    'txn'?: TransactionTxn;
    'time'?: number;
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
