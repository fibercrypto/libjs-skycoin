import { TransactionEncoded } from './transactionEncoded';
export declare class InlineResponse2006 {
    'transactions'?: Array<TransactionEncoded>;
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
