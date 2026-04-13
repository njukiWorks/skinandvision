/**
 * Google Ads Campaign Publisher — Skin & Vision Clinic
 *
 * Creates all 4 search campaigns via the Google Ads API (google-ads-api v23).
 * All campaigns are created in PAUSED status — review in Ads Manager before enabling.
 *
 * Usage:
 *   npm run ads:google
 *
 * Requires in .env.local:
 *   GOOGLE_ADS_DEVELOPER_TOKEN
 *   GOOGLE_ADS_CLIENT_ID
 *   GOOGLE_ADS_CLIENT_SECRET
 *   GOOGLE_ADS_REFRESH_TOKEN
 *   GOOGLE_ADS_CUSTOMER_ID          (digits only, no dashes)
 *   GOOGLE_ADS_MANAGER_ACCOUNT_ID   (optional MCC account)
 */

import * as dotenv from "dotenv";
import {
  GoogleAdsApi,
  resources,
  enums,
  toMicros,
  ResourceNames,
  type MutateOperation,
} from "google-ads-api";

dotenv.config({ path: ".env.local" });

// ─── Validate env ─────────────────────────────────────────────────────────────

const {
  GOOGLE_ADS_DEVELOPER_TOKEN,
  GOOGLE_ADS_CLIENT_ID,
  GOOGLE_ADS_CLIENT_SECRET,
  GOOGLE_ADS_REFRESH_TOKEN,
  GOOGLE_ADS_CUSTOMER_ID,
  GOOGLE_ADS_MANAGER_ACCOUNT_ID,
} = process.env;

const missing = [
  "GOOGLE_ADS_DEVELOPER_TOKEN",
  "GOOGLE_ADS_CLIENT_ID",
  "GOOGLE_ADS_CLIENT_SECRET",
  "GOOGLE_ADS_REFRESH_TOKEN",
  "GOOGLE_ADS_CUSTOMER_ID",
].filter((k) => !process.env[k]);

if (missing.length) {
  console.error("Missing required env vars:", missing.join(", "));
  console.error("See campaigns/api-credentials-needed.md for instructions.");
  process.exit(1);
}

const CUSTOMER_ID = GOOGLE_ADS_CUSTOMER_ID!;

// ─── Ad copy ──────────────────────────────────────────────────────────────────

const URLS = {
  ooglidcorrectie:
    "https://skinandvision.nl/behandelingen/ooglidcorrectie?utm_source=google&utm_medium=cpc&utm_campaign=ooglidcorrectie-nl",
  botox:
    "https://skinandvision.nl/behandelingen/botoxbehandelingen?utm_source=google&utm_medium=cpc&utm_campaign=botox-nl",
  andere:
    "https://skinandvision.nl/contact?utm_source=google&utm_medium=cpc&utm_campaign=andere-behandelingen-nl",
  english:
    "https://skinandvision.nl/en?utm_source=google&utm_medium=cpc&utm_campaign=ooglidcorrectie-en",
};

// Google Ads geo target constant IDs
const GEO = {
  netherlands: 2528,
  belgium: 2056,
  luxembourg: 2442,
  uk: 2826,
  sweden: 2752,
  norway: 2578,
  denmark: 2208,
  finland: 2246,
};

// Language constant IDs
const LANG = {
  dutch: 1043,
  english: 1000,
};

// ─── Campaign specs ───────────────────────────────────────────────────────────

interface CampaignSpec {
  name: string;
  dailyBudgetEuros: number;
  geoTargets: number[];
  languageId: number;
  adGroupName: string;
  keywords: Array<{ text: string; matchType: number }>;
  headlines: string[];      // max 15
  descriptions: string[];   // max 4
  finalUrl: string;
  path1: string;
  path2: string;
}

const CAMPAIGNS: CampaignSpec[] = [
  {
    name: "GOOG_Search_Ooglidcorrectie_NL-BE",
    dailyBudgetEuros: 12,
    geoTargets: [GEO.netherlands, GEO.belgium, GEO.luxembourg],
    languageId: LANG.dutch,
    adGroupName: "Ooglidcorrectie Generiek",
    keywords: [
      { text: "ooglidcorrectie", matchType: enums.KeywordMatchType.EXACT },
      { text: "ooglidcorrectie amsterdam", matchType: enums.KeywordMatchType.EXACT },
      { text: "blepharoplastie", matchType: enums.KeywordMatchType.EXACT },
      { text: "blepharoplastiek amsterdam", matchType: enums.KeywordMatchType.EXACT },
      { text: "hangende oogleden operatie", matchType: enums.KeywordMatchType.PHRASE },
      { text: "hangende oogleden behandeling", matchType: enums.KeywordMatchType.PHRASE },
      { text: "bovenooglidcorrectie", matchType: enums.KeywordMatchType.EXACT },
      { text: "onderooglidcorrectie", matchType: enums.KeywordMatchType.EXACT },
      { text: "oogleden laten optrekken", matchType: enums.KeywordMatchType.PHRASE },
      { text: "ooglidcorrectie prijs", matchType: enums.KeywordMatchType.PHRASE },
      { text: "boven blepharoplastiek", matchType: enums.KeywordMatchType.PHRASE },
    ],
    headlines: [
      "Ooglidcorrectie door Oogarts",
      "BIG-geregistreerde Specialist",
      "Skin & Vision Clinic Amsterdam",
      "Bovenooglidcorrectie v.a. €850",
      "Veilig & Natuurlijk Resultaat",
      "28+ Jaar Ervaring | Dr. Kloos",
      "Consultatie Aanvragen",
      "Medisch én Esthetisch",
      "Blepharoplastiek door Expert",
      "5000+ Behandelde Patiënten",
      "9.9/10 ZorgkaartNederland",
      "Lokale Verdoving | Snel Herstel",
      "Herstel in 4-6 Weken",
      "Maak Nu een Afspraak",
      "Behandeling op Maat",
    ],
    descriptions: [
      "Dr. Kloos is BIG-geregistreerde oogarts met 28+ jaar ervaring. Medisch én esthetisch verantwoord resultaat. Maak online een afspraak.",
      "Skin & Vision Amsterdam: boven- en onderooglidcorrectie door gespecialiseerde oogarts. 9.9/10 ZorgkaartNederland. Vrijblijvende consultatie.",
      "Hangende oogleden die uw gezichtsveld belemmeren? Dr. Kloos biedt een veilige chirurgische oplossing. Plan uw consultatie vandaag.",
      "Bovenooglidcorrectie v.a. €850 (beide ogen). BIG-geregistreerde oogarts. Lokale verdoving, 4-6 weken herstel.",
    ],
    finalUrl: URLS.ooglidcorrectie,
    path1: "Ooglidcorrectie",
    path2: "Amsterdam",
  },

  {
    name: "GOOG_Search_Botox_NL-BE",
    dailyBudgetEuros: 9,
    geoTargets: [GEO.netherlands, GEO.belgium, GEO.luxembourg],
    languageId: LANG.dutch,
    adGroupName: "Botoxbehandelingen",
    keywords: [
      { text: "botox oogarts", matchType: enums.KeywordMatchType.EXACT },
      { text: "botox door oogarts", matchType: enums.KeywordMatchType.EXACT },
      { text: "kraaienpootjes botox", matchType: enums.KeywordMatchType.EXACT },
      { text: "kraaienpootjes behandeling", matchType: enums.KeywordMatchType.EXACT },
      { text: "botox amsterdam rimpels", matchType: enums.KeywordMatchType.PHRASE },
      { text: "botox voorhoofd amsterdam", matchType: enums.KeywordMatchType.PHRASE },
      { text: "botox fronsrimpels", matchType: enums.KeywordMatchType.EXACT },
      { text: "wenkbrauw lifting botox", matchType: enums.KeywordMatchType.PHRASE },
      { text: "botox injectie amsterdam", matchType: enums.KeywordMatchType.PHRASE },
    ],
    headlines: [
      "Botox door Oogarts | Amsterdam",
      "Precisie Rondom de Ogen",
      "BIG-geregistreerde Specialist",
      "Kraaienpootjes v.a. €200",
      "Veilig & Natuurlijk Resultaat",
      "28+ Jaar Medische Ervaring",
      "Voorhoofd & Fronsrimpels",
      "Wenkbrauw Lifting met Botox",
      "Resultaat 3-4 Maanden",
      "Consultatie op Maat",
      "9.9/10 ZorgkaartNederland",
      "Maak Nu een Afspraak",
      "Botox 1 zone v.a. €200",
      "Skin & Vision Clinic Amsterdam",
      "Geen Hersteltijd Nodig",
    ],
    descriptions: [
      "Dr. Kloos is oogarts met unieke anatomische kennis. Botoxbehandelingen veiliger dan niet-artsen. Plan uw afspraak.",
      "Kraaienpootjes, fronsrimpels, wenkbrauw lifting. BIG-geregistreerde oogarts. Botox v.a. €200.",
      "Perioculair gebied vereist precisie. Dr. Kloos heeft dagelijkse klinische ervaring. Veilig, discreet, natuurlijk.",
      "Botox 1 zone v.a. €200 | 3 zones v.a. €490 | Relfydess beschikbaar. Adviesgesprek Amsterdam.",
    ],
    finalUrl: URLS.botox,
    path1: "Botoxbehandelingen",
    path2: "Oogarts",
  },

  {
    name: "GOOG_Search_AndereBehandelingen_NL-BE",
    dailyBudgetEuros: 5,
    geoTargets: [GEO.netherlands, GEO.belgium, GEO.luxembourg],
    languageId: LANG.dutch,
    adGroupName: "Andere Behandelingen",
    keywords: [
      { text: "ptosis correctie", matchType: enums.KeywordMatchType.EXACT },
      { text: "ptosis operatie", matchType: enums.KeywordMatchType.EXACT },
      { text: "hangooglid operatie", matchType: enums.KeywordMatchType.PHRASE },
      { text: "oculoplastisch chirurg", matchType: enums.KeywordMatchType.PHRASE },
      { text: "entropion correctie", matchType: enums.KeywordMatchType.PHRASE },
      { text: "ectropion behandeling", matchType: enums.KeywordMatchType.PHRASE },
      { text: "medische ooglidcorrectie", matchType: enums.KeywordMatchType.PHRASE },
    ],
    headlines: [
      "Oculoplastische Chirurgie",
      "Ptosis Correctie door Oogarts",
      "Entropion & Ectropion Correctie",
      "BIG-geregistreerde Specialist",
      "Medische Ooglidbehandelingen",
      "Skin & Vision Clinic Amsterdam",
      "Persoonlijk Behandelplan",
      "Vergoed door Zorgverzekeraar?",
      "28 Jaar Specialistische Ervaring",
      "Maak een Afspraak",
    ],
    descriptions: [
      "Ptosis, entropion, ectropion of andere ooglidafwijkingen? Dr. Kloos biedt gespecialiseerde oculoplastische chirurgie.",
      "Skin & Vision Clinic Amsterdam: ooglidchirurgie voor medische indicaties. BIG-geregistreerde oogarts. Soms vergoed.",
    ],
    finalUrl: URLS.andere,
    path1: "Behandelingen",
    path2: "Amsterdam",
  },

  {
    name: "GOOG_Search_Ooglidcorrectie_EN",
    dailyBudgetEuros: 6,
    geoTargets: [GEO.uk, GEO.sweden, GEO.norway, GEO.denmark, GEO.finland],
    languageId: LANG.english,
    adGroupName: "Eyelid Surgery Amsterdam",
    keywords: [
      { text: "eyelid surgery amsterdam", matchType: enums.KeywordMatchType.EXACT },
      { text: "blepharoplasty netherlands", matchType: enums.KeywordMatchType.EXACT },
      { text: "eyelid surgery abroad netherlands", matchType: enums.KeywordMatchType.PHRASE },
      { text: "cosmetic eye surgery amsterdam", matchType: enums.KeywordMatchType.PHRASE },
      { text: "eye plastic surgeon amsterdam", matchType: enums.KeywordMatchType.PHRASE },
      { text: "blepharoplasty europe", matchType: enums.KeywordMatchType.PHRASE },
    ],
    headlines: [
      "Eyelid Surgery in Amsterdam",
      "Expert Ophthalmologist 28 Yrs",
      "Blepharoplasty by Eye Specialist",
      "Skin & Vision Clinic Amsterdam",
      "BIG-Registered Eye Surgeon",
      "Natural & Safe Results",
      "From €850 Both Eyelids",
      "Book Your Consultation",
      "5000+ Patients Treated",
      "9.9/10 Patient Rating",
    ],
    descriptions: [
      "Dr. Kloos is a BIG-registered ophthalmologist in Amsterdam with 28+ years in oculoplastic surgery. Eyelid correction from €850.",
      "Skin & Vision Clinic Amsterdam: precise eyelid surgery by a certified ophthalmologist. English consultations available. Book online.",
    ],
    finalUrl: URLS.english,
    path1: "Eyelid-Surgery",
    path2: "Amsterdam",
  },
];

// Global negative keywords applied to all campaigns
const NEGATIVE_KEYWORDS = [
  "gratis", "zelf", "diy", "thuis", "makeup", "cursus", "opleiding", "goedkoop",
];

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const client = new GoogleAdsApi({
    client_id: GOOGLE_ADS_CLIENT_ID!,
    client_secret: GOOGLE_ADS_CLIENT_SECRET!,
    developer_token: GOOGLE_ADS_DEVELOPER_TOKEN!,
  });

  const customer = client.Customer({
    customer_id: CUSTOMER_ID,
    ...(GOOGLE_ADS_MANAGER_ACCOUNT_ID && { login_customer_id: GOOGLE_ADS_MANAGER_ACCOUNT_ID }),
    refresh_token: GOOGLE_ADS_REFRESH_TOKEN!,
  });

  console.log(`Connected to Google Ads account ${CUSTOMER_ID}`);
  console.log(`Creating ${CAMPAIGNS.length} campaigns...\n`);

  for (const spec of CAMPAIGNS) {
    await createSearchCampaign(customer, spec);
  }

  console.log("\nAll campaigns created successfully (all PAUSED).");
  console.log("Next steps:");
  console.log("  1. Add sitelink + callout + price extensions in Ads Manager UI");
  console.log("  2. Set up conversion tracking (see campaigns/tracking-setup.md)");
  console.log("  3. Enable campaigns once tracking is verified");
}

// ─── Create one full search campaign atomically ────────────────────────────────

async function createSearchCampaign(
  customer: ReturnType<GoogleAdsApi["Customer"]>,
  spec: CampaignSpec
) {
  console.log(`Creating: ${spec.name}`);

  // Temp resource names for atomic creation
  const budgetTempId = "-1";
  const campaignTempId = "-2";
  const adGroupTempId = "-3";

  const budgetResourceName = ResourceNames.campaignBudget(CUSTOMER_ID, budgetTempId);
  const campaignResourceName = ResourceNames.campaign(CUSTOMER_ID, campaignTempId);
  const adGroupResourceName = ResourceNames.adGroup(CUSTOMER_ID, adGroupTempId);

  // Build the full mutation batch
  const operations: MutateOperation<
    | resources.ICampaignBudget
    | resources.ICampaign
    | resources.ICampaignCriterion
    | resources.IAdGroup
    | resources.IAdGroupCriterion
    | resources.IAdGroupAd
  >[] = [
    // 1. Campaign budget
    {
      entity: "campaign_budget",
      operation: "create",
      resource: {
        resource_name: budgetResourceName,
        name: `Budget — ${spec.name}`,
        amount_micros: toMicros(spec.dailyBudgetEuros),
        delivery_method: enums.BudgetDeliveryMethod.STANDARD,
        explicitly_shared: false,
      },
    },

    // 2. Campaign
    {
      entity: "campaign",
      operation: "create",
      resource: {
        resource_name: campaignResourceName,
        name: spec.name,
        status: enums.CampaignStatus.PAUSED,
        advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
        campaign_budget: budgetResourceName,
        maximize_conversions: {},
        network_settings: {
          target_google_search: true,
          target_search_network: true,
          target_content_network: false,
          target_partner_search_network: false,
        },
      },
    },

    // 3. Language targeting
    {
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: campaignResourceName,
        type: enums.CriterionType.LANGUAGE,
        language: {
          language_constant: `languageConstants/${spec.languageId}`,
        },
      },
    },

    // 4. Geo targets
    ...spec.geoTargets.map((locationId): MutateOperation<resources.ICampaignCriterion> => ({
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: campaignResourceName,
        type: enums.CriterionType.LOCATION,
        location: {
          geo_target_constant: `geoTargetConstants/${locationId}`,
        },
      },
    })),

    // 5. Negative keywords at campaign level
    ...NEGATIVE_KEYWORDS.map((kw): MutateOperation<resources.ICampaignCriterion> => ({
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: campaignResourceName,
        negative: true,
        type: enums.CriterionType.KEYWORD,
        keyword: {
          text: kw,
          match_type: enums.KeywordMatchType.BROAD,
        },
      },
    })),

    // 6. Ad group
    {
      entity: "ad_group",
      operation: "create",
      resource: {
        resource_name: adGroupResourceName,
        name: spec.adGroupName,
        campaign: campaignResourceName,
        status: enums.AdGroupStatus.ENABLED,
        type: enums.AdGroupType.SEARCH_STANDARD,
      },
    },

    // 7. Keywords
    ...spec.keywords.map((kw): MutateOperation<resources.IAdGroupCriterion> => ({
      entity: "ad_group_criterion",
      operation: "create",
      resource: {
        ad_group: adGroupResourceName,
        status: enums.AdGroupCriterionStatus.ENABLED,
        keyword: {
          text: kw.text,
          match_type: kw.matchType,
        },
      },
    })),

    // 8. Responsive search ad
    {
      entity: "ad_group_ad",
      operation: "create",
      resource: {
        ad_group: adGroupResourceName,
        status: enums.AdGroupAdStatus.ENABLED,
        ad: {
          final_urls: [spec.finalUrl],
          responsive_search_ad: {
            headlines: spec.headlines.slice(0, 15).map((text) => ({ text })),
            descriptions: spec.descriptions.slice(0, 4).map((text) => ({ text })),
            path1: spec.path1,
            path2: spec.path2,
          },
        },
      },
    },
  ];

  const result = await customer.mutateResources(operations);
  const results = result.mutate_operation_responses ?? [];
  console.log(`  Created ${results.length} resources for "${spec.name}"`);
}

main().catch((err) => {
  console.error("Fatal error:", err?.message ?? err);
  process.exit(1);
});
