interface NFTCollection {
    name: string;
    url: string;
    description: string;
    logo_image: string;
    featured_image: string;
    banner_image: string;
    category: string;
    mysite: string;
    twitter: string;
    instagram: string;
    discord: string;
    telegram: string;
    sensitive: boolean;
}

interface Trait {
    type: string;
    name: string;
}

interface Extension {
    name?: string;
    url?: string;
    description?: string;
    collection_id?: string;
    collection?: object;
    properties?: Array<Trait>;
    locked?: boolean;
    sensitive?: boolean;
    royalty?: string;

    like?: number;
    views?: number;
}

export interface NFTInfo {
    token_id: string;
    creator?: string;
    owner?: string;
    token_uri?: string;

    extension?: Extension;

}