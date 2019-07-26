import { WalletTransactionRequestHoursSelection } from './walletTransactionRequestHoursSelection';
import { WalletTransactionRequestWallet } from './walletTransactionRequestWallet';
export declare class WalletTransactionRequest {
    'changeAddress'?: string;
    'hoursSelection'?: WalletTransactionRequestHoursSelection;
    'ignoreUnconfirmed'?: boolean;
    'to'?: Array<any>;
    'wallet'?: WalletTransactionRequestWallet;
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
