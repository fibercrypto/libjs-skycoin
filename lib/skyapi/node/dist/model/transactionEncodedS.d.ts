import { TransactionStatus } from './transactionStatus';
export declare class TransactionEncodedS {
    'time'?: number;
    'status'?: TransactionStatus;
    'encodedTransaction'?: string;
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
