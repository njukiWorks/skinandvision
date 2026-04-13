/**
 * Meta Ads Campaign Publisher — Skin & Vision Clinic
 *
 * Creates all 4 campaigns (Ooglidcorrectie, Botox, Andere, English) via
 * the Meta Marketing API using the official facebook-nodejs-business-sdk.
 *
 * Usage:
 *   npx tsx scripts/publish-meta-ads.ts
 *
 * Requires in .env.local:
 *   META_APP_ID
 *   META_APP_SECRET
 *   META_ACCESS_TOKEN       (long-lived, 60 days)
 *   META_AD_ACCOUNT_ID      (format: act_XXXXXXXXXX)
 *   META_PAGE_ID
 *   META_INSTAGRAM_ACCOUNT_ID
 *   META_PIXEL_ID
 */

import * as dotenv from "dotenv";
import * as bizSdk from "facebook-nodejs-business-sdk";

dotenv.config({ path: ".env.local" });

const {
  AdAccount,
  Campaign,
  AdSet,
  AdCreative,
  Ad,
  FacebookAdsApi,
} = bizSdk as any;

// ─── Validate env ─────────────────────────────────────────────────────────────

const {
  META_ACCESS_TOKEN,
  META_AD_ACCOUNT_ID,
  META_PAGE_ID,
  META_INSTAGRAM_ACCOUNT_ID,
  META_PIXEL_ID,
} = process.env;

const missing = [
  "META_ACCESS_TOKEN",
  "META_AD_ACCOUNT_ID",
  "META_PAGE_ID",
  "META_PIXEL_ID",
].filter((k) => !process.env[k]);

if (missing.length) {
  console.error("Missing env vars:", missing.join(", "));
  console.error("See campaigns/api-credentials-needed.md for setup instructions.");
  process.exit(1);
}

// Initialise SDK
FacebookAdsApi.init(META_ACCESS_TOKEN!);

const account = new AdAccount(META_AD_ACCOUNT_ID!);

// ─── Constants ────────────────────────────────────────────────────────────────

const BOOKING_URL = "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";

const URLS = {
  ooglidcorrectie: "https://skinandvision.nl/behandelingen/ooglidcorrectie?utm_source=facebook&utm_medium=paid_social&utm_campaign=ooglidcorrectie-nl",
  botox: "https://skinandvision.nl/behandelingen/botoxbehandelingen?utm_source=facebook&utm_medium=paid_social&utm_campaign=botox-nl",
  andere: "https://skinandvision.nl/contact?utm_source=facebook&utm_medium=paid_social&utm_campaign=andere-behandelingen-nl",
  english: "https://skinandvision.nl/en?utm_source=facebook&utm_medium=paid_social&utm_campaign=ooglidcorrectie-en",
};

// Meta geo location specs
// country codes: NL, BE, LU, GB, SE, NO, DK, FI
const GEO_NL_BE = {
  countries: ["NL", "BE", "LU"],
  location_types: ["home", "recent"],
};

const GEO_EN = {
  countries: ["GB", "SE", "NO", "DK", "FI"],
  location_types: ["home", "recent"],
};

// ─── Ad copy ──────────────────────────────────────────────────────────────────

const COPY = {
  ooglidcorrectie: {
    body: `Vermoeide, zware oogleden die u ouder laten lijken — of uw gezichtsveld belemmeren?

Een ooglidcorrectie bij Skin & Vision Clinic wordt uitgevoerd door Dr. Kloos — een BIG-geregistreerde oogarts met 28 jaar oculoplastische expertise.

✔ Medisch én esthetisch geïndiceerd
✔ Lokale verdoving — 45 tot 90 minuten
✔ Herstel in 4–6 weken
✔ 9.9/10 op ZorgkaartNederland

Vraag nu een vrijblijvend gesprek aan.`,
    headline: "Ooglidcorrectie door Oogarts | v.a. €850",
    description: "Skin & Vision Clinic Amsterdam — BIG-geregistreerde specialist",
    linkCaption: "skinandvision.nl",
  },

  botox: {
    body: `Niet alle botox is gelijk.

Het gebied rondom de ogen bevat complexe spieren. Bij een verkeerde injectie riskeert u een hangend ooglid, droge ogen of asymmetrie.

Bij Skin & Vision Clinic wordt botox uitsluitend uitgevoerd door Dr. Kloos — een BIG-geregistreerde oogarts met 28 jaar dagelijkse klinische ervaring.

✔ Kraaienpootjes v.a. €200
✔ Fronsrimpels & voorhoofd
✔ Wenkbrauw lifting
✔ Relfydess® beschikbaar

Plan uw consultatie.`,
    headline: "Botox door Oogarts — Veiligheid Eerst",
    description: "Amsterdam | v.a. €200 per zone | BIG-geregistreerd",
    linkCaption: "skinandvision.nl",
  },

  andere: {
    body: `Ptosis (hangooglid), entropion of een andere ooglidaandoening?

Skin & Vision Clinic Amsterdam biedt gespecialiseerde oculoplastische chirurgie door Dr. Kloos — BIG-geregistreerde oogarts.

Sommige behandelingen worden (deels) vergoed door uw zorgverzekeraar.

Vul het formulier in voor een vrijblijvend adviesgesprek.`,
    headline: "Ooglidaandoening? Gratis Adviesgesprek",
    description: "Ptosis, entropion, ectropion — gespecialiseerde ooglidchirurgie",
    linkCaption: "skinandvision.nl",
  },

  english: {
    body: `Considering eyelid surgery? Amsterdam's Skin & Vision Clinic offers blepharoplasty performed exclusively by a certified ophthalmologist.

Dr. Kloos has 28 years of daily clinical experience with the delicate anatomy around your eyes — precision that makes results safer and more natural.

✔ Upper & lower eyelid correction from €850
✔ Local anaesthetic — 45 to 90 minutes
✔ 9.9/10 patient rating
✔ English consultations available

Request your consultation today.`,
    headline: "Eyelid Surgery Amsterdam | Expert Ophthalmologist",
    description: "From €850 | BIG-Registered Eye Surgeon | Book Online",
    linkCaption: "skinandvision.nl",
  },
};

// ─── Audience targeting ───────────────────────────────────────────────────────

const TARGETING_OOGLIDCORRECTIE = {
  geo_locations: GEO_NL_BE,
  age_min: 45,
  age_max: 65,
  genders: [2], // 1=male, 2=female
  locales: [24], // Dutch language
  targeting_automation: { advantage_audience: 0 },
  publisher_platforms: ["facebook", "instagram"],
  facebook_positions: ["feed", "right_hand_column"],
  instagram_positions: ["stream", "story", "reels"],
};

const TARGETING_BOTOX = {
  geo_locations: GEO_NL_BE,
  age_min: 35,
  age_max: 55,
  genders: [2],
  locales: [24],
  targeting_automation: { advantage_audience: 0 },
  publisher_platforms: ["facebook", "instagram"],
  facebook_positions: ["feed"],
  instagram_positions: ["stream", "story", "reels"],
};

const TARGETING_ANDERE = {
  geo_locations: GEO_NL_BE,
  age_min: 40,
  age_max: 65,
  locales: [24],
  targeting_automation: { advantage_audience: 0 },
  publisher_platforms: ["facebook", "instagram"],
  facebook_positions: ["feed"],
  instagram_positions: ["stream"],
};

const TARGETING_ENGLISH = {
  geo_locations: GEO_EN,
  age_min: 40,
  age_max: 65,
  genders: [2],
  locales: [6], // English
  targeting_automation: { advantage_audience: 0 },
  publisher_platforms: ["facebook", "instagram"],
  facebook_positions: ["feed"],
  instagram_positions: ["stream"],
};

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Connected to Meta Ads API. Creating campaigns...\n");

  // Campaign 1: already created — ID 120243150549050115
  // Campaign 2: already created — ID 120243150558310115

  // Campaign 3: Andere Behandelingen NL/BE (Lead Gen)
  await createLeadCampaign({
    campaignName: "META_Lead_AndereBehandelingen_NL-BE",
    adSetName: "Medische Interesse 40-70 NL/BE",
    dailyBudgetCents: 300,   // €3.00/day
    targeting: TARGETING_ANDERE,
    copy: COPY.andere,
    destinationUrl: URLS.andere,
    imageHash: "50ceb2e8d202dc6bfd674bbc94279de4",
  });

  // Campaign 4: English (UK + Scandinavia)
  await createLeadCampaign({
    campaignName: "META_Conv_Ooglidcorrectie_EN",
    adSetName: "Women 40-65 UK/Scandinavia",
    dailyBudgetCents: 300,   // €3.00/day
    targeting: TARGETING_ENGLISH,
    copy: COPY.english,
    destinationUrl: URLS.english,
    imageHash: "fb2c214c42f56c8fe17a835a0baff0ae",
  });

  console.log("\nAll Meta campaigns created successfully.");
  console.log("Next steps:");
  console.log("  1. Log into Meta Ads Manager and verify campaigns are PAUSED");
  console.log("  2. Upload your professional clinic photos as ad images");
  console.log("  3. Verify the Meta Pixel is firing (use Meta Pixel Helper extension)");
  console.log("  4. Enable campaigns once pixel tracking is confirmed");
}

// ─── Helper: create one lead campaign ────────────────────────────────────────

async function createLeadCampaign(opts: {
  campaignName: string;
  adSetName: string;
  dailyBudgetCents: number;
  targeting: Record<string, unknown>;
  copy: { body: string; headline: string; description: string; linkCaption: string };
  destinationUrl: string;
  imageHash: string;
}) {
  console.log(`Creating campaign: ${opts.campaignName}`);

  // 1. Create campaign (PAUSED — safe to review first)
  console.log("  Step 1: createCampaign...");
  const campaign = await account.createCampaign(
    [],
    {
      [Campaign.Fields.name]: opts.campaignName,
      [Campaign.Fields.objective]: "OUTCOME_LEADS",
      [Campaign.Fields.status]: "PAUSED",
      [Campaign.Fields.special_ad_categories]: [],
      is_adset_budget_sharing_enabled: false,
    }
  );

  const campaignId = campaign.id as string;

  // 2. Create ad set
  console.log("  Step 2: createAdSet...");
  const adSet = await account.createAdSet(
    [],
    {
      [AdSet.Fields.name]: opts.adSetName,
      [AdSet.Fields.campaign_id]: campaignId,
      [AdSet.Fields.status]: "PAUSED",
      [AdSet.Fields.billing_event]: "IMPRESSIONS",
      [AdSet.Fields.optimization_goal]: "OFFSITE_CONVERSIONS",
      [AdSet.Fields.daily_budget]: opts.dailyBudgetCents, // in cents: 800 = €8.00/day
      [AdSet.Fields.bid_strategy]: "LOWEST_COST_WITHOUT_CAP",
      [AdSet.Fields.targeting]: opts.targeting,
      [AdSet.Fields.promoted_object]: {
        pixel_id: META_PIXEL_ID,
        custom_event_type: "LEAD",
      },
      [AdSet.Fields.start_time]: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // Start in 3 days
    }
  );

  const adSetId = adSet.id as string;

  // 3. Create ad creative (link ad — image must be uploaded separately in Ads Manager)
  console.log("  Step 3: createAdCreative...");
  const creative = await account.createAdCreative(
    [],
    {
      [AdCreative.Fields.name]: `Creative — ${opts.campaignName}`,
      [AdCreative.Fields.object_story_spec]: {
        page_id: META_PAGE_ID,
        link_data: {
          link: opts.destinationUrl,
          message: opts.copy.body,
          name: opts.copy.headline,
          description: opts.copy.description,
          image_hash: opts.imageHash,
          call_to_action: {
            type: "LEARN_MORE",
            value: { link: opts.destinationUrl },
          },
        },
      },
      [AdCreative.Fields.url_tags]: "utm_source=facebook&utm_medium=paid_social",
    }
  );

  const creativeId = creative.id as string;

  // 4. Create ad
  console.log("  Step 4: createAd...");
  await account.createAd(
    [],
    {
      [Ad.Fields.name]: `Ad — ${opts.campaignName}`,
      [Ad.Fields.adset_id]: adSetId,
      [Ad.Fields.creative]: { creative_id: creativeId },
      [Ad.Fields.status]: "PAUSED",
      [Ad.Fields.tracking_specs]: [
        {
          "action.type": ["offsite_conversion"],
          fb_pixel: [META_PIXEL_ID],
        },
      ],
    }
  );

  console.log(`  Campaign "${opts.campaignName}" created (PAUSED)`);
  console.log(`    Campaign ID: ${campaignId} | Ad Set ID: ${adSetId}`);
}

main().catch((err) => {
  console.error("Fatal error:", JSON.stringify(err?.response ?? err?.message ?? err, null, 2));
  process.exit(1);
});
