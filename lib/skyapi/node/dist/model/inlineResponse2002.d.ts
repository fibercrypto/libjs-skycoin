import { ApiV1ExplorerAddressInputs } from './apiV1ExplorerAddressInputs';
import { ApiV1ExplorerAddressOutputs } from './apiV1ExplorerAddressOutputs';
import { ApiV1ExplorerAddressStatus } from './apiV1ExplorerAddressStatus';
export declare class InlineResponse2002 {
    'outputs'?: Array<ApiV1ExplorerAddressOutputs>;
    'innerHash'?: string;
    'inputs'?: Array<ApiV1ExplorerAddressInputs>;
    'fee'?: number;
    'sigs'?: Array<string>;
    'length'?: number;
    'txid'?: string;
    'type'?: number;
    'status'?: ApiV1ExplorerAddressStatus;
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
