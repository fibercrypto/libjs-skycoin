import { ApiV1PendingTxsTransaction } from './apiV1PendingTxsTransaction';
export declare class InlineResponse20010 {
    'transaction'?: ApiV1PendingTxsTransaction;
    'received'?: string;
    'checked'?: string;
    'announced'?: string;
    'isValid'?: boolean;
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
