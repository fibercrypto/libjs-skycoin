import { TransactionV2ParamsAddressHoursSelection } from './transactionV2ParamsAddressHoursSelection';
export declare class TransactionV2ParamsAddress {
    'hoursSelection'?: TransactionV2ParamsAddressHoursSelection;
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
