import { TransactionV2ParamsUnspentHoursSelection } from './transactionV2ParamsUnspentHoursSelection';
import { TransactionV2ParamsUnspentTo } from './transactionV2ParamsUnspentTo';
export declare class TransactionV2ParamsUnspent {
    'hoursSelection'?: TransactionV2ParamsUnspentHoursSelection;
    'unspents'?: Array<string>;
    'changeAddress'?: string;
    'to'?: Array<TransactionV2ParamsUnspentTo>;
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
