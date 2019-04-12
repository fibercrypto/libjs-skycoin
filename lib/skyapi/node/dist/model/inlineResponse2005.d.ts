import { ApiV1WalletsEntries } from './apiV1WalletsEntries';
import { ApiV1WalletsMeta } from './apiV1WalletsMeta';
export declare class InlineResponse2005 {
    'entries'?: Array<ApiV1WalletsEntries>;
    'meta'?: ApiV1WalletsMeta;
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
