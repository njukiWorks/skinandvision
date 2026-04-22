#!/usr/bin/env python3
"""
Skin & Vision Clinic — Meta Ads Campaign Publisher
Creates all Meta (Facebook + Instagram) campaigns, ad sets, and ads via Marketing API.
All campaigns are created in PAUSED status for review before going live.

Targeting uses broad demographic signals only (no interest IDs) — Meta's
Advantage+ algorithm optimises delivery from there. Interest IDs in the
Marketing API change frequently and need re-validation per account region.

Requirements:
  pip install facebook-business
"""

import os
import sys
import time
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), "../../.env.local"))

try:
    from facebook_business.api import FacebookAdsApi
    from facebook_business.adobjects.adaccount import AdAccount
    from facebook_business.adobjects.campaign import Campaign
    from facebook_business.adobjects.adset import AdSet
    from facebook_business.adobjects.ad import Ad
    from facebook_business.adobjects.adcreative import AdCreative
    from facebook_business.adobjects.adimage import AdImage
    from facebook_business.exceptions import FacebookRequestError
except ImportError:
    print("ERROR: facebook-business not installed. Run: pip install facebook-business")
    sys.exit(1)

APP_ID       = os.environ["META_APP_ID"]
APP_SECRET   = os.environ["META_APP_SECRET"]
ACCESS_TOKEN = os.environ["META_ACCESS_TOKEN"]
AD_ACCOUNT_ID = os.environ["META_AD_ACCOUNT_ID"]
PAGE_ID      = os.environ["META_PAGE_ID"]
PIXEL_ID     = os.environ["META_PIXEL_ID"]

SITE_URL    = "https://skinandvision.nl"
BOOKING_URL = "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo"
IMAGES_DIR  = os.path.join(os.path.dirname(__file__), "../extracted-images")

# ---------------------------------------------------------------------------
# Targeting helpers — broad demographics, no stale interest IDs
# ---------------------------------------------------------------------------

def nl_be_women_40_65():
    return {"geo_locations": {"countries": ["NL", "BE", "LU"]},
            "age_min": 40, "age_max": 65, "genders": [2], "locales": [8]}

def nl_be_all_50_65():
    return {"geo_locations": {"countries": ["NL", "BE", "LU"]},
            "age_min": 50, "age_max": 65, "genders": [1, 2], "locales": [8]}

def nl_be_women_35_55():
    return {"geo_locations": {"countries": ["NL", "BE", "LU"]},
            "age_min": 35, "age_max": 55, "genders": [2], "locales": [8]}

def nl_be_all_40_65():
    return {"geo_locations": {"countries": ["NL", "BE", "LU"]},
            "age_min": 40, "age_max": 65, "genders": [1, 2], "locales": [8]}

def nl_be_all_40_65b():
    return nl_be_all_40_65()

def en_all_40_65():
    return {"geo_locations": {"countries": ["GB", "SE", "NO", "DK", "FI"]},
            "age_min": 40, "age_max": 65, "genders": [1, 2], "locales": [6]}

# ---------------------------------------------------------------------------
# Campaign definitions
# ---------------------------------------------------------------------------

CAMPAIGNS = [
    # -------------------------------------------------------------------------
    # C1: Ooglidcorrectie NL/BE  — €5/day
    # -------------------------------------------------------------------------
    {
        "name": "META_Conv_Ooglidcorrectie_NL-BE",
        "objective": "OUTCOME_LEADS",
        "special_ad_categories": [],
        "ad_sets": [
            {
                "name": "AdSet_Ooglidcorrectie_Esthetisch_NL-BE",
                "daily_budget": 300,
                "targeting": nl_be_women_40_65(),
                "optimization_goal": "LEAD_GENERATION",
                "billing_event": "IMPRESSIONS",
                "bid_strategy": "LOWEST_COST_WITHOUT_CAP",
                "ads": [
                    {
                        "name": "Ad_Ooglidcorrectie_Eye",
                        "image_file": "Mete_Ads_Campaign_1_Ooglidcorrectie_docx_img1.jpeg",
                        "headline": "Specialist in ooglidbehandelingen",
                        "body": "Skin & Vision Clinic is gespecialiseerd in ooglidbehandelingen in Nederland. BIG-geregistreerde oogarts Dr. Kloos — 28+ jaar ervaring, 9.9/10 ZorgkaartNL. Boek vrijblijvend een consult.",
                        "description": "Skin & Vision Clinic Amsterdam — BIG-geregistreerde specialist",
                        "call_to_action": "LEARN_MORE",
                        "link": f"{SITE_URL}/behandelingen/ooglidcorrectie",
                    },
                    {
                        "name": "Ad_Ooglidcorrectie_Doctor",
                        "image_file": "Mete_Ads_Campaign_1_Ooglidcorrectie_docx_img2.jpeg",
                        "headline": "Ooglidbehandelingen door oogartsen",
                        "body": "Bij Skin & Vision Clinic bent u in deskundige handen. Wij bieden specialistische ooglidbehandelingen met focus op kwaliteit, persoonlijke zorg en een veilige aanpak. Bovenooglidcorrectie v.a. €850. Maak een afspraak.",
                        "description": "BIG-geregistreerde oogarts | Oculoplastische chirurgie Amsterdam",
                        "call_to_action": "BOOK_TRAVEL",
                        "link": BOOKING_URL,
                    },
                ],
            },
            {
                "name": "AdSet_Ooglidcorrectie_Medisch_NL-BE",
                "daily_budget": 200,
                "targeting": nl_be_all_50_70(),
                "optimization_goal": "LEAD_GENERATION",
                "billing_event": "IMPRESSIONS",
                "bid_strategy": "LOWEST_COST_WITHOUT_CAP",
                "ads": [
                    {
                        "name": "Ad_Ooglidcorrectie_Medisch",
                        "image_file": "Mete_Ads_Campaign_1_Ooglidcorrectie_docx_img2.jpeg",
                        "headline": "Medisch geïndiceerde ooglidcorrectie",
                        "body": "Hangende oogleden die uw gezichtsveld belemmeren? Dit kan medisch geïndiceerd zijn. Dr. Kloos, BIG-geregistreerde oogarts, beoordeelt uw situatie en adviseert over behandeling en eventuele vergoeding. Vrijblijvende consultatie.",
                        "description": "Mogelijk vergoed | BIG-geregistreerde oogarts | Amsterdam",
                        "call_to_action": "LEARN_MORE",
                        "link": f"{SITE_URL}/behandelingen/ooglidcorrectie",
                    },
                ],
            },
        ],
    },

    # -------------------------------------------------------------------------
    # C2: Botoxbehandelingen NL/BE  — €4/day
    # -------------------------------------------------------------------------
    {
        "name": "META_Conv_Botox_NL-BE",
        "objective": "OUTCOME_LEADS",
        "special_ad_categories": [],
        "ad_sets": [
            {
                "name": "AdSet_Botox_BeautyAntiAging_NL-BE",
                "daily_budget": 250,
                "targeting": nl_be_women_35_55(),
                "optimization_goal": "LEAD_GENERATION",
                "billing_event": "IMPRESSIONS",
                "bid_strategy": "LOWEST_COST_WITHOUT_CAP",
                "ads": [
                    {
                        "name": "Ad_Botox_BIGAuthority",
                        "image_file": "Meta_Ads_Campaign_2_Botoxbehandelingen_docx_img1.jpeg",
                        "headline": "Botoxbehandelingen door BIG-geregistreerde artsen",
                        "body": "Skin & Vision Clinic biedt deskundige injectiebehandelingen met focus op kwaliteit, veiligheid en natuurlijke resultaten. Dr. Kloos — oogarts met unieke kennis van de perioculaire anatomie. Kraaienpootjes v.a. €200. Boek vrijblijvend een consult.",
                        "description": "Amsterdam | v.a. €200 per zone | BIG-geregistreerd",
                        "call_to_action": "LEARN_MORE",
                        "link": f"{SITE_URL}/behandelingen/botoxbehandelingen",
                    },
                    {
                        "name": "Ad_Botox_Relfydess",
                        "image_file": "Meta_Ads_Campaign_2_Botoxbehandelingen_docx_img2.jpeg",
                        "headline": "Innovatieve injectiebehandeling met langdurig effect",
                        "body": "Ontdek Relfydess bij Skin & Vision Clinic: een innovatieve injectiebehandeling met snelle werking en een effect dat tot 6 maanden kan aanhouden. Behandeling door BIG-geregistreerde arts. Tarief: €250 per zone.",
                        "description": "Relfydess® | Tot 6 maanden effect | BIG-geregistreerd",
                        "call_to_action": "LEARN_MORE",
                        "link": f"{SITE_URL}/behandelingen/botoxbehandelingen",
                    },
                    {
                        "name": "Ad_Botox_NaturalLook",
                        "image_file": "Meta_Ads_Campaign_2_Botoxbehandelingen_docx_img3.jpeg",
                        "headline": "Injectables met een natuurlijke look",
                        "body": "Zachte, natuurlijke verbetering afgestemd op uw gezicht en uitstraling. Kraaienpootjes, fronsrimpels, wenkbrauw lifting — door BIG-geregistreerde oogarts in Amsterdam. Vrijblijvend adviesgesprek aanvragen.",
                        "description": "Vanaf €200 per zone | Discreet & Natuurlijk | Amsterdam",
                        "call_to_action": "BOOK_TRAVEL",
                        "link": BOOKING_URL,
                    },
                ],
            },
            {
                "name": "AdSet_Botox_QualityConscious_NL-BE",
                "daily_budget": 150,
                "targeting": nl_be_all_40_65(),
                "optimization_goal": "LEAD_GENERATION",
                "billing_event": "IMPRESSIONS",
                "bid_strategy": "LOWEST_COST_WITHOUT_CAP",
                "ads": [
                    {
                        "name": "Ad_Botox_OogartsPrecisie",
                        "image_file": "Meta_Ads_Campaign_2_Botoxbehandelingen_docx_img1.jpeg",
                        "headline": "Precisie rondom de ogen — door oogarts",
                        "body": "Het perioculaire gebied vereist bijzondere precisie. Als oogarts heeft Dr. Kloos dagelijkse klinische ervaring met deze anatomie — veiliger dan bij schoonheidsspecialisten. Veilig, discreet, natuurlijk resultaat. V.a. €200.",
                        "description": "BIG-geregistreerde oogarts | 28 jaar ervaring | Amsterdam",
                        "call_to_action": "LEARN_MORE",
                        "link": f"{SITE_URL}/behandelingen/botoxbehandelingen",
                    },
                ],
            },
        ],
    },

    # -------------------------------------------------------------------------
    # C3: Andere Behandelingen NL/BE  — €2/day
    # -------------------------------------------------------------------------
    {
        "name": "META_Lead_AndereBehandelingen_NL-BE",
        "objective": "OUTCOME_LEADS",
        "special_ad_categories": [],
        "ad_sets": [
            {
                "name": "AdSet_Andere_MedischeInteresse_NL-BE",
                "daily_budget": 200,
                "targeting": nl_be_all_40_70(),
                "optimization_goal": "LEAD_GENERATION",
                "billing_event": "IMPRESSIONS",
                "bid_strategy": "LOWEST_COST_WITHOUT_CAP",
                "ads": [
                    {
                        "name": "Ad_Andere_PtosisFocus",
                        "image_file": "Campaign_3_Andere_Behandelingen_docx_img1.jpeg",
                        "headline": "Specialistische ooglidzorg bij ptosis",
                        "body": "Deskundige beoordeling en behandeling van een hangend bovenooglid, met oog voor functie, precisie en een natuurlijk resultaat. Dr. Kloos — BIG-geregistreerde oogarts. Boek vrijblijvend een consult.",
                        "description": "BIG-geregistreerde oogarts | Ptosis & Ooglidchirurgie",
                        "call_to_action": "LEARN_MORE",
                        "link": f"{SITE_URL}/behandelingen",
                    },
                    {
                        "name": "Ad_Andere_OculoplastischSpecialist",
                        "image_file": "Campaign_3_Andere_Behandelingen_docx_img2.jpeg",
                        "headline": "Specialist in oculoplastiek en ooglidchirurgie",
                        "body": "Bij Skin & Vision Clinic kunt u terecht voor medische en cosmetische behandelingen rond ogen en oogleden, zoals ooglidcorrecties, ptosischirurgie en het verwijderen van ooglidbultjes. Met oog voor veiligheid, precisie en een natuurlijk resultaat.",
                        "description": "Amsterdam | BIG-geregistreerde oogarts | Persoonlijk plan",
                        "call_to_action": "LEARN_MORE",
                        "link": f"{SITE_URL}/behandelingen",
                    },
                    {
                        "name": "Ad_Andere_OoglidBehandeling",
                        "image_file": "Campaign_3_Andere_Behandelingen_docx_img3.jpeg",
                        "headline": "Specialist in ooglidbehandelingen",
                        "body": "Voor ptosischirurgie, ooglidcorrecties en het verwijderen van ooglidbultjes. BIG-geregistreerde oogarts Dr. Kloos staat voor kwaliteit en veiligheid. Boek een vrijblijvend consult bij Skin & Vision Clinic Amsterdam.",
                        "description": "Ptosis | Entropion | Ectropion | Ooglidbultje",
                        "call_to_action": "LEARN_MORE",
                        "link": f"{SITE_URL}/behandelingen",
                    },
                ],
            },
        ],
    },

    # -------------------------------------------------------------------------
    # C4: English Markets (UK + Scandinavia)  — €2/day
    # -------------------------------------------------------------------------
    {
        "name": "META_Conv_Ooglidcorrectie_EN",
        "objective": "OUTCOME_LEADS",
        "special_ad_categories": [],
        "ad_sets": [
            {
                "name": "AdSet_Ooglidcorrectie_MedicalTourists_EN",
                "daily_budget": 200,
                "targeting": en_all_40_65(),
                "optimization_goal": "LEAD_GENERATION",
                "billing_event": "IMPRESSIONS",
                "bid_strategy": "LOWEST_COST_WITHOUT_CAP",
                "ads": [
                    {
                        "name": "Ad_EN_OphthalmologistAuthority",
                        "image_file": "Campaign_4_English_Markets_docx_img1.jpeg",
                        "headline": "Eyelid Surgery in Amsterdam by Ophthalmologists",
                        "body": "At Skin & Vision Clinic, we offer specialist eyelid surgery with a focus on safety, precision, and natural-looking results. Dr. Kloos — BIG-registered ophthalmologist, 28+ years experience, 5,000+ patients. From €850. Book your free consultation.",
                        "description": "From €850 | BIG-Registered Eye Surgeon | English consultations",
                        "call_to_action": "LEARN_MORE",
                        "link": f"{SITE_URL}/en",
                    },
                    {
                        "name": "Ad_EN_AffordableQuality",
                        "image_file": "Campaign_4_English_Markets_docx_img2.jpeg",
                        "headline": "Affordable Eyelid Surgery — Expert Results",
                        "body": "High-quality blepharoplasty and ptosis surgery in Amsterdam, with a focus on safety, precision, and natural-looking results. From €850. Certified ophthalmologist with 28 years of experience and 9.9/10 patient rating.",
                        "description": "Amsterdam | From €850 | BIG-Registered Ophthalmologist",
                        "call_to_action": "LEARN_MORE",
                        "link": f"{SITE_URL}/en",
                    },
                ],
            },
        ],
    },
]


# ---------------------------------------------------------------------------
# API helpers
# ---------------------------------------------------------------------------

def upload_image(account: AdAccount, image_path: str) -> str:
    img = AdImage(parent_id=account.get_id_assured())
    img[AdImage.Field.filename] = image_path
    img.remote_create()
    return img[AdImage.Field.hash]


def create_ad_creative_obj(account: AdAccount, ad_def: dict, image_hash: str, page_id: str) -> str:
    story = {
        "page_id": page_id,
        "link_data": {
            "image_hash": image_hash,
            "link": ad_def["link"],
            "message": ad_def["body"],
            "name": ad_def["headline"],
            "description": ad_def.get("description", ""),
            "call_to_action": {
                "type": ad_def["call_to_action"],
                "value": {"link": ad_def["link"]},
            },
        },
    }
    creative = AdCreative(parent_id=account.get_id_assured())
    creative.update({
        AdCreative.Field.name: ad_def["name"] + "_Creative",
        AdCreative.Field.object_story_spec: story,
    })
    creative.remote_create()
    return creative.get_id()


def create_campaign_obj(account: AdAccount, camp_def: dict) -> str:
    campaign = Campaign(parent_id=account.get_id_assured())
    campaign.update({
        Campaign.Field.name: camp_def["name"],
        Campaign.Field.objective: camp_def["objective"],
        Campaign.Field.status: Campaign.Status.paused,
        Campaign.Field.special_ad_categories: camp_def.get("special_ad_categories", []),
    })
    campaign.remote_create(params={
        "status": Campaign.Status.paused,
        "is_adset_budget_sharing_enabled": False,
    })
    return campaign.get_id()


def create_ad_set_obj(account: AdAccount, adset_def: dict, campaign_id: str) -> str:
    targeting = dict(adset_def["targeting"])
    targeting["targeting_automation"] = {"advantage_audience": 0}

    adset = AdSet(parent_id=account.get_id_assured())
    adset.update({
        AdSet.Field.name: adset_def["name"],
        AdSet.Field.campaign_id: campaign_id,
        AdSet.Field.daily_budget: adset_def["daily_budget"],
        AdSet.Field.billing_event: "IMPRESSIONS",
        AdSet.Field.optimization_goal: "OFFSITE_CONVERSIONS",
        AdSet.Field.bid_strategy: "LOWEST_COST_WITHOUT_CAP",
        AdSet.Field.targeting: targeting,
        AdSet.Field.status: AdSet.Status.paused,
        AdSet.Field.promoted_object: {
            "pixel_id": PIXEL_ID,
            "custom_event_type": "LEAD",
        },
    })
    adset.remote_create()
    return adset.get_id()


def create_ad_obj(account: AdAccount, ad_def: dict, adset_id: str, creative_id: str) -> str:
    ad = Ad(parent_id=account.get_id_assured())
    ad.update({
        Ad.Field.name: ad_def["name"],
        Ad.Field.adset_id: adset_id,
        Ad.Field.creative: {"creative_id": creative_id},
        Ad.Field.status: Ad.Status.paused,
    })
    ad.remote_create()
    return ad.get_id()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print("=" * 60)
    print("Skin & Vision Clinic — Meta Ads Campaign Publisher")
    print("=" * 60)

    FacebookAdsApi.init(APP_ID, APP_SECRET, ACCESS_TOKEN)
    account = AdAccount(AD_ACCOUNT_ID)

    try:
        info = account.api_get(fields=["name", "currency", "account_status"])
        print(f"\nAccount: {info.get('name')} | Currency: {info.get('currency')}")
    except FacebookRequestError as e:
        print(f"ERROR: {e}")
        sys.exit(1)

    print(f"Campaigns to create: {len(CAMPAIGNS)}\n")
    created = 0

    for i, camp_def in enumerate(CAMPAIGNS, 1):
        print(f"[{i}/{len(CAMPAIGNS)}] {camp_def['name']}")
        try:
            campaign_id = create_campaign_obj(account, camp_def)
            print(f"  Campaign: {campaign_id}")
        except FacebookRequestError as e:
            print(f"  ERROR campaign: {e.api_error_message()}")
            continue

        for j, adset_def in enumerate(camp_def["ad_sets"], 1):
            print(f"  [{j}] Ad set: {adset_def['name']}")
            try:
                adset_id = create_ad_set_obj(account, adset_def, campaign_id)
                print(f"    Ad set: {adset_id}")
            except FacebookRequestError as e:
                print(f"    ERROR ad set: {e.api_error_message()}")
                continue

            for k, ad_def in enumerate(adset_def.get("ads", []), 1):
                print(f"    [{k}] Ad: {ad_def['name']}")
                try:
                    image_path = os.path.join(IMAGES_DIR, ad_def["image_file"])
                    if not os.path.exists(image_path):
                        print(f"      SKIP — image not found: {image_path}")
                        continue
                    image_hash = upload_image(account, image_path)
                    print(f"      Image uploaded: {image_hash[:12]}…")
                    creative_id = create_ad_creative_obj(account, ad_def, image_hash, PAGE_ID)
                    print(f"      Creative: {creative_id}")
                    ad_id = create_ad_obj(account, ad_def, adset_id, creative_id)
                    print(f"      Ad: {ad_id}")
                except FacebookRequestError as e:
                    msg = e.api_error_message() if hasattr(e, "api_error_message") else str(e)
                    print(f"      ERROR ad: {msg}")
                except Exception as e:
                    print(f"      ERROR: {e}")

        created += 1
        print(f"  Done.\n")
        time.sleep(1)

    print("=" * 60)
    print(f"Created {created}/{len(CAMPAIGNS)} Meta campaigns (all PAUSED).")
    print("Unpause at: https://www.facebook.com/adsmanager")
    print("=" * 60)


if __name__ == "__main__":
    main()
