import { TransactionStatus } from './transactionStatus';
import { TransactionVerboseTxn } from './transactionVerboseTxn';
export declare class TransactionVerbose {
    'time'?: number;
    'status'?: TransactionStatus;
    'txn'?: TransactionVerboseTxn;
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
