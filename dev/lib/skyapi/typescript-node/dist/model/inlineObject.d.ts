import { ApiV1WalletTransactionHoursSelection } from './apiV1WalletTransactionHoursSelection';
import { ApiV1WalletTransactionTo } from './apiV1WalletTransactionTo';
import { ApiV1WalletTransactionWallet } from './apiV1WalletTransactionWallet';
export declare class InlineObject {
    'changeAddress'?: string;
    'hoursSelection'?: ApiV1WalletTransactionHoursSelection;
    'ignoreUnconfirmed'?: boolean;
    'to'?: Array<ApiV1WalletTransactionTo>;
    'wallet'?: ApiV1WalletTransactionWallet;
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
