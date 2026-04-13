declare module "facebook-nodejs-business-sdk" {
  class FacebookAdsApi {
    static init(accessToken: string): FacebookAdsApi;
    static getInstance(): FacebookAdsApi;
    setDebug(debug: boolean): void;
  }

  class AdAccount {
    constructor(id: string);
    createCampaign(fields: string[], params: Record<string, unknown>): Promise<{ id: string }>;
    createAdSet(fields: string[], params: Record<string, unknown>): Promise<{ id: string }>;
    createAdCreative(fields: string[], params: Record<string, unknown>): Promise<{ id: string }>;
    createAd(fields: string[], params: Record<string, unknown>): Promise<{ id: string }>;
  }

  const Campaign: { Fields: Record<string, string> };
  const AdSet: { Fields: Record<string, string> };
  const AdCreative: { Fields: Record<string, string> };
  const Ad: { Fields: Record<string, string> };

  export { FacebookAdsApi, AdAccount, Campaign, AdSet, AdCreative, Ad };
  export default { FacebookAdsApi, AdAccount, Campaign, AdSet, AdCreative, Ad };
}
