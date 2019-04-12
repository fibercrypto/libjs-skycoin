import { ApiV1PendingTxsTransaction } from './apiV1PendingTxsTransaction';
export declare class InlineResponse2004 {
    'announced'?: string;
    'isValid'?: boolean;
    'checked'?: string;
    'received'?: string;
    'transaction'?: ApiV1PendingTxsTransaction;
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
