#!/usr/bin/env python3
"""
Skin & Vision Clinic — Create Remaining Google Ads Campaigns
Skips any campaign whose name already exists in the account.
Creates C2 Botox, C3 Andere Behandelingen, C4 English (C1 already live).

NOTE: Botox keywords use descriptive alternatives (botulinetoxine / injectie)
because the "botox" trademark requires Google Healthcare/Pharma certification.
"""

import os
import sys
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), "../../.env.local"))

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

DEVELOPER_TOKEN = os.environ["GOOGLE_ADS_DEVELOPER_TOKEN"]
CLIENT_ID = os.environ["GOOGLE_ADS_CLIENT_ID"]
CLIENT_SECRET = os.environ["GOOGLE_ADS_CLIENT_SECRET"]
REFRESH_TOKEN = os.environ["GOOGLE_ADS_REFRESH_TOKEN"]
CUSTOMER_ID = os.environ["GOOGLE_ADS_CUSTOMER_ID"].replace("-", "")

BOOKING_URL = "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo"
SITE_URL = "https://skinandvision.nl"

GEO_TARGETS = {
    "NL": 2528, "BE": 2056, "LU": 2442,
    "GB": 2826, "SE": 2752, "NO": 2578, "DK": 2208, "FI": 2246,
}
LANGUAGE_TARGETS = {
    "nl": "languageConstants/1043",
    "en": "languageConstants/1000",
}

# ---------------------------------------------------------------------------
# Campaign definitions — C2, C3, C4
# ---------------------------------------------------------------------------

CAMPAIGNS = [
    # -------------------------------------------------------------------------
    # C2: Botoxbehandelingen (NL/BE) — €6/day
    # "botox" is a restricted trademark; use botulinetoxine / injectie variants
    # -------------------------------------------------------------------------
    {
        "name": "GOOG_Search_Botox_NL-BE",
        "daily_budget_micros": 6_000_000,
        "geo_targets": ["NL", "BE", "LU"],
        "language": "nl",
        "ad_groups": [
            {
                "name": "Botox Oogarts",
                "cpc_bid_micros": 2_000_000,
                "keywords": [
                    ("botulinetoxine oogarts", "PHRASE"),
                    ("injectiebehandeling oogarts amsterdam", "PHRASE"),
                    ("kraaienpootjes injectie oogarts", "PHRASE"),
                    ("anti rimpel injectie oogarts", "PHRASE"),
                    ("injectiebehandeling rimpels oogarts", "BROAD"),
                    ("botulinetoxine specialist amsterdam", "BROAD"),
                    ("rimpel injectie oogarts amsterdam", "PHRASE"),
                ],
                "ad": {
                    "headlines": [
                        "Injectie Rimpels | Oogarts",
                        "Precisie Rondom de Ogen",
                        "BIG-geregistreerde Specialist",
                        "Kraaienpootjes v.a. €200",
                        "Veilig & Natuurlijk Resultaat",
                        "28+ Jaar Medische Ervaring",
                        "Voorhoofd & Fronsrimpels",
                        "Wenkbrauw Lifting",
                        "Resultaat 3–4 Maanden",
                        "Consultatie op Maat",
                        "9.9/10 ZorgkaartNederland",
                        "Maak Nu een Afspraak",
                        "1 zone v.a. €200",
                        "Skin & Vision Amsterdam",
                        "Geen Hersteltijd Nodig",
                    ],
                    "descriptions": [
                        "Dr. Kloos is oogarts met unieke anatomische kennis van het ooggebied. Injectiebehandelingen veiliger uitgevoerd dan door niet-artsen. Plan uw afspraak.",
                        "Kraaienpootjes, fronsrimpels, wenkbrauw lifting. Skin & Vision Clinic biedt injectiebehandelingen door een BIG-geregistreerde oogarts v.a. €200.",
                        "Het perioculaire gebied vereist precisie. Als oogarts heeft Dr. Kloos dagelijkse klinische ervaring met deze anatomie. Veilig, discreet, natuurlijk.",
                        "1 zone v.a. €200 | 3 zones v.a. €490. Resultaat na 3–4 maanden. Vrijblijvend adviesgesprek in Amsterdam bij BIG-geregistreerde oogarts.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/botoxbehandelingen",
                    "path1": "Injectie",
                    "path2": "Oogarts",
                },
            },
            {
                "name": "Botox Kraaienpootjes",
                "cpc_bid_micros": 1_800_000,
                "keywords": [
                    ("kraaienpootjes injectie amsterdam", "PHRASE"),
                    ("kraaienpootjes rimpels behandeling", "PHRASE"),
                    ("kraaienpootjes wegwerken amsterdam", "PHRASE"),
                    ("kraaienpootjes injectie specialist", "PHRASE"),
                    ("kraaienpootjes verminderen oogarts", "BROAD"),
                    ("rimpels rondom ogen behandeling", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Kraaienpootjes Amsterdam",
                        "v.a. €200 | Oogarts Specialist",
                        "BIG-geregistreerde Arts",
                        "Precisie Rondom de Ogen",
                        "Veilig & Natuurlijk Resultaat",
                        "28 Jaar Medische Ervaring",
                        "Geen Hersteltijd",
                        "Resultaat 3–4 Maanden",
                        "9.9/10 ZorgkaartNL",
                        "Skin & Vision Clinic",
                        "Wenkbrauw Lifting ook Mogelijk",
                        "Maak Nu een Afspraak",
                        "Vrijblijvend Adviesgesprek",
                        "Injectie door Medisch Specialist",
                        "Kraaienpootjes Wegwerken",
                    ],
                    "descriptions": [
                        "Kraaienpootjes laten behandelen door oogarts Dr. Kloos. Injectie v.a. €200 met medische precisie rondom de ogen. 9.9/10 op ZorgkaartNederland.",
                        "Skin & Vision Clinic Amsterdam: injectiebehandeling voor kraaienpootjes door BIG-geregistreerde oogarts. Veilig, discreet, natuurlijk resultaat.",
                        "Als oogarts behandelt Dr. Kloos kraaienpootjes met unieke anatomische kennis. Meer precisie dan bij schoonheidsspecialisten. Resultaat in 3–7 dagen.",
                        "Kraaienpootjes v.a. €200 | Wenkbrauw lifting v.a. €130 | Voorhoofd v.a. €200. Geen hersteltijd. Vrijblijvende consultatie in Amsterdam.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/botoxbehandelingen",
                    "path1": "Kraaienpootjes",
                    "path2": "Injectie",
                },
            },
            {
                "name": "Botox Rimpels Amsterdam",
                "cpc_bid_micros": 1_800_000,
                "keywords": [
                    ("injectie rimpels amsterdam", "PHRASE"),
                    ("injectie voorhoofd amsterdam", "PHRASE"),
                    ("fronsrimpels injectie behandeling", "PHRASE"),
                    ("rimpel injectie amsterdam prijs", "PHRASE"),
                    ("botulinetoxine amsterdam rimpels", "PHRASE"),
                    ("rimpels behandeling specialist amsterdam", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Rimpel Injectie Amsterdam",
                        "Voorhoofd & Fronsrimpels",
                        "BIG-geregistreerde Specialist",
                        "1 Zone v.a. €200",
                        "28 Jaar Medische Ervaring",
                        "Veilig & Discreet",
                        "Geen Hersteltijd Nodig",
                        "Resultaat 3–4 Maanden",
                        "9.9/10 ZorgkaartNL",
                        "Skin & Vision Clinic",
                        "2 Zones v.a. €340",
                        "3 Zones v.a. €490",
                        "Maak Nu een Afspraak",
                        "Vrijblijvend Adviesgesprek",
                        "Injectie door Medisch Arts",
                    ],
                    "descriptions": [
                        "Injectiebehandelingen in Amsterdam door BIG-geregistreerde oogarts Dr. Kloos. Voorhoofd, fronsrimpels, kraaienpootjes. 1 zone v.a. €200.",
                        "Skin & Vision Clinic Amsterdam: rimpel injectiebehandelingen door medisch specialist. Veilig, discreet, met expertise in het perioculaire gebied.",
                        "Injectie door oogarts: unieke anatomische kennis voor maximale veiligheid rondom ogen. 28+ jaar ervaring. Vrijblijvend adviesgesprek in Amsterdam.",
                        "1 zone v.a. €200 | 2 zones v.a. €340 | 3 zones v.a. €490. BIG-geregistreerde oogarts. Geen hersteltijd. Plan uw consultatie vandaag.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/botoxbehandelingen",
                    "path1": "Injectie",
                    "path2": "Amsterdam",
                },
            },
            {
                "name": "Wenkbrauw Lifting Botox",
                "cpc_bid_micros": 1_500_000,
                "keywords": [
                    ("wenkbrauw lifting injectie", "PHRASE"),
                    ("wenkbrauw lift zonder operatie", "PHRASE"),
                    ("non-chirurgische wenkbrauw lift", "PHRASE"),
                    ("wenkbrauw optrekken injectie", "PHRASE"),
                    ("wenkbrauw lifting oogarts amsterdam", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Wenkbrauw Lifting Amsterdam",
                        "Zonder Operatie | Oogarts",
                        "BIG-geregistreerde Oogarts",
                        "v.a. €130 per Behandeling",
                        "Precisie Rondom de Ogen",
                        "28 Jaar Medische Ervaring",
                        "Geen Hersteltijd Nodig",
                        "Resultaat na 7 Dagen",
                        "9.9/10 ZorgkaartNL",
                        "Skin & Vision Clinic",
                        "Non-Chirurgische Lift",
                        "Maak Nu een Afspraak",
                        "Injectie door Oogarts",
                        "Veilig & Natuurlijk",
                        "Vrijblijvend Adviesgesprek",
                    ],
                    "descriptions": [
                        "Wenkbrauw lifting door BIG-geregistreerde oogarts Dr. Kloos. Non-chirurgisch, v.a. €130. Veilig, discreet, resultaat in 7 dagen zichtbaar.",
                        "Skin & Vision Clinic Amsterdam: wenkbrauw lifting zonder chirurgie. Dr. Kloos gebruikt injectie met medische precisie voor een natuurlijk optgetrokken look.",
                        "Non-chirurgische wenkbrauw lift: v.a. €130. Geen hersteltijd, geen littekens. Gecombineerd met fronsrimpel behandeling voor optimaal resultaat.",
                        "Dr. Kloos heeft als oogarts unieke expertise voor wenkbrauw lifting. 28+ jaar ervaring. Vrijblijvend adviesgesprek in Amsterdam. Maak een afspraak.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/botoxbehandelingen",
                    "path1": "Wenkbrauw",
                    "path2": "Lifting",
                },
            },
        ],
        "negative_keywords": [
            "huid filler", "lip filler", "neus", "borst", "billen",
            "laserbehandeling", "goedkoop", "thuis", "zelf", "cursus", "opleiding",
        ],
    },

    # -------------------------------------------------------------------------
    # C3: Andere Behandelingen (NL/BE) — €3/day
    # -------------------------------------------------------------------------
    {
        "name": "GOOG_Search_AndereBehandelingen_NL-BE",
        "daily_budget_micros": 3_000_000,
        "geo_targets": ["NL", "BE", "LU"],
        "language": "nl",
        "ad_groups": [
            {
                "name": "Ptosis Correctie",
                "cpc_bid_micros": 2_000_000,
                "keywords": [
                    ("ptosis correctie", "EXACT"),
                    ("ptosis operatie", "EXACT"),
                    ("ptosis behandeling", "PHRASE"),
                    ("hangooglid operatie", "PHRASE"),
                    ("ptosis oogarts", "PHRASE"),
                    ("ptosis chirurgie amsterdam", "PHRASE"),
                    ("ptosis specialist oogarts", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Ptosis Correctie Amsterdam",
                        "Hangooglid Operatie Oogarts",
                        "BIG-geregistreerde Specialist",
                        "Ptosis v.a. €1.050 per Oog",
                        "28 Jaar Specialistische Ervaring",
                        "Medisch Geïndiceerd",
                        "9.9/10 ZorgkaartNL",
                        "Skin & Vision Clinic",
                        "Persoonlijk Behandelplan",
                        "Maak een Afspraak",
                    ],
                    "descriptions": [
                        "Ptosis correctie door BIG-geregistreerde oogarts Dr. Kloos. Ptosis operatie v.a. €1.050 per oog. Sommige gevallen worden vergoed door zorgverzekering.",
                        "Skin & Vision Clinic Amsterdam: gespecialiseerde ptosis behandeling door oogarts. Persoonlijk behandelplan na consultatie. 28 jaar oculoplastische chirurgie.",
                        "Hangooglid door ptosis? Dr. Kloos biedt chirurgische correctie met medische expertise. Consultatie aanvragen bij Skin & Vision Clinic Amsterdam.",
                        "Ptosis operatie 1 oog v.a. €1.050 | Beide ogen v.a. €1.550. BIG-geregistreerde oogarts. Medisch geïndiceerde behandelingen mogelijk vergoed.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen",
                    "path1": "Ptosis",
                    "path2": "Correctie",
                },
            },
            {
                "name": "Oculoplastisch Chirurg",
                "cpc_bid_micros": 2_000_000,
                "keywords": [
                    ("oculoplastisch chirurg", "PHRASE"),
                    ("oculoplastische chirurgie amsterdam", "PHRASE"),
                    ("entropion correctie", "PHRASE"),
                    ("ectropion behandeling", "PHRASE"),
                    ("ooglidafwijking behandeling", "PHRASE"),
                    ("oculoplastisch oogarts amsterdam", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Oculoplastische Chirurgie",
                        "Ptosis Correctie door Oogarts",
                        "Entropion & Ectropion",
                        "BIG-geregistreerde Specialist",
                        "Medisch Geïndiceerde Behandeling",
                        "Skin & Vision Amsterdam",
                        "Persoonlijk Behandelplan",
                        "28 Jaar Specialistische Ervaring",
                        "9.9/10 ZorgkaartNL",
                        "Maak een Afspraak",
                    ],
                    "descriptions": [
                        "Ptosis, entropion, ectropion of andere ooglidafwijkingen? Dr. Kloos biedt gespecialiseerde oculoplastische chirurgie. Sommige behandelingen worden vergoed.",
                        "Skin & Vision Clinic Amsterdam: gespecialiseerde ooglidchirurgie voor medische indicaties. Persoonlijk behandelplan na consultatie. BIG-geregistreerde oogarts.",
                        "Oculoplastische chirurgie door oogarts Dr. Kloos: 28+ jaar ervaring met ooglidafwijkingen. Entropion, ectropion, ptosis en meer. Maak een afspraak.",
                        "Als BIG-geregistreerde oogarts heeft Dr. Kloos unieke expertise in oculoplastische chirurgie. Vrijblijvende consultatie in Amsterdam voor medisch advies.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen",
                    "path1": "Oculoplastisch",
                    "path2": "Chirurgie",
                },
            },
            {
                "name": "Medische Ooglidbehandeling",
                "cpc_bid_micros": 1_800_000,
                "keywords": [
                    ("medische ooglidcorrectie", "PHRASE"),
                    ("ooglidcorrectie zorgverzekering", "PHRASE"),
                    ("medische indicatie oogleden", "PHRASE"),
                    ("oogleden gezichtsveld belemmering", "PHRASE"),
                    ("medisch oogleden operatie oogarts", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Medische Ooglidcorrectie",
                        "Vergoed door Zorgverzekeraar?",
                        "BIG-geregistreerde Oogarts",
                        "Gezichtsveld Belemmering",
                        "28 Jaar Medische Expertise",
                        "Skin & Vision Amsterdam",
                        "Persoonlijk Adviesgesprek",
                        "9.9/10 ZorgkaartNL",
                        "Maak Nu een Afspraak",
                        "Medische Indicatie Beoordelen",
                    ],
                    "descriptions": [
                        "Heeft u last van hangende oogleden die uw gezichtsveld belemmeren? Dit kan medisch geïndiceerd zijn en mogelijk vergoed worden. Consultatie bij Dr. Kloos.",
                        "Skin & Vision Clinic: medische ooglidcorrectie door BIG-geregistreerde oogarts. Bij medische indicatie mogelijk vergoeding via zorgverzekering.",
                        "Dr. Kloos beoordeelt of uw ooglidproblematiek medisch geïndiceerd is en adviseert over vergoedingsmogelijkheden. 28 jaar klinische ervaring.",
                        "Ooglidcorrectie met medische indicatie: beoordeling door BIG-geregistreerde oogarts. Zorgvuldig advies over behandeling en vergoeding.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/ooglidcorrectie",
                    "path1": "Medisch",
                    "path2": "Indicatie",
                },
            },
        ],
        "negative_keywords": [
            "gratis", "zelf", "diy", "makeup", "mascara", "schoonheidsspecialist",
        ],
    },

    # -------------------------------------------------------------------------
    # C4: English Markets (UK + Scandinavia) — €2/day
    # -------------------------------------------------------------------------
    {
        "name": "GOOG_Search_Ooglidcorrectie_EN",
        "daily_budget_micros": 2_000_000,
        "geo_targets": ["GB", "SE", "NO", "DK", "FI"],
        "language": "en",
        "ad_groups": [
            {
                "name": "Eyelid Surgery Amsterdam",
                "cpc_bid_micros": 2_500_000,
                "keywords": [
                    ("eyelid surgery amsterdam", "PHRASE"),
                    ("blepharoplasty netherlands", "PHRASE"),
                    ("eyelid surgery abroad netherlands", "PHRASE"),
                    ("eyelid correction netherlands", "PHRASE"),
                    ("cosmetic eye surgery amsterdam", "PHRASE"),
                    ("eyelid surgery amsterdam specialist", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Eyelid Surgery Amsterdam",
                        "Expert Ophthalmologist 28 Yrs",
                        "Blepharoplasty Eye Specialist",
                        "Skin & Vision Amsterdam",
                        "BIG-Registered Eye Surgeon",
                        "Natural & Safe Results",
                        "From €850 Both Eyelids",
                        "Book Your Consultation",
                        "5000+ Patients Treated",
                        "9.9/10 Patient Rating",
                        "Upper & Lower Eyelid",
                        "Local Anaesthesia Fast Recovery",
                        "Results Last for Years",
                        "Medical Tourism Netherlands",
                        "Online Booking Available",
                    ],
                    "descriptions": [
                        "Dr. Kloos is a BIG-registered ophthalmologist in Amsterdam with 28+ years in oculoplastic surgery. Upper & lower eyelid correction from €850. Book online.",
                        "Visit Skin & Vision Clinic Amsterdam for safe, precise eyelid surgery by a certified ophthalmologist. Enquire online for a personalised treatment plan.",
                        "Eyelid surgery in Amsterdam by specialist ophthalmologist. Upper eyelid from €850 | Lower from €1,050. 9.9/10 rating. Book your consultation today.",
                        "Skin & Vision Clinic: blepharoplasty by BIG-registered eye surgeon Dr. Kloos. 5,000+ patients, 28 years experience. Natural, lasting results.",
                    ],
                    "final_url": f"{SITE_URL}/en",
                    "path1": "Eyelid-Surgery",
                    "path2": "Amsterdam",
                },
            },
            {
                "name": "Medical Tourism Eye Surgery",
                "cpc_bid_micros": 2_000_000,
                "keywords": [
                    ("medical tourism netherlands eye surgery", "PHRASE"),
                    ("eyelid surgery europe affordable", "PHRASE"),
                    ("blepharoplasty europe", "PHRASE"),
                    ("eye plastic surgeon amsterdam", "PHRASE"),
                    ("eyelid specialist netherlands", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Eye Surgery in Netherlands",
                        "Affordable Blepharoplasty EU",
                        "BIG-Registered Ophthalmologist",
                        "From €850 Expert Results",
                        "28 Years Experience",
                        "Skin & Vision Amsterdam",
                        "5000+ Patients Treated",
                        "9.9/10 Patient Rating",
                        "Book Online Today",
                        "Natural & Lasting Results",
                    ],
                    "descriptions": [
                        "Travel to Amsterdam for expert eyelid surgery by Dr. Kloos, BIG-registered ophthalmologist. Upper & lower blepharoplasty from €850. Book your consultation.",
                        "Skin & Vision Clinic Amsterdam: premium eyelid surgery at European prices. Certified ophthalmologist, 28 years experience, 5,000+ patients. Plan your visit.",
                        "Considering eyelid surgery abroad? Dr. Kloos offers blepharoplasty in Amsterdam with medical precision and natural results. Free online enquiry.",
                        "Premium oculoplastic surgery in Amsterdam. Upper eyelid from €850, lower from €1,050. BIG-registered eye surgeon. 9.9/10 patient satisfaction.",
                    ],
                    "final_url": f"{SITE_URL}/en",
                    "path1": "Blepharoplasty",
                    "path2": "Netherlands",
                },
            },
        ],
        "negative_keywords": [
            "free", "diy", "home remedy", "makeup", "cheap", "course",
        ],
    },
]


# ---------------------------------------------------------------------------
# API client
# ---------------------------------------------------------------------------

def get_client() -> GoogleAdsClient:
    return GoogleAdsClient.load_from_dict({
        "developer_token": DEVELOPER_TOKEN,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "refresh_token": REFRESH_TOKEN,
        "use_proto_plus": True,
    })


def get_existing_campaign_names(client, customer_id: str) -> set:
    ga = client.get_service("GoogleAdsService")
    query = "SELECT campaign.name FROM campaign ORDER BY campaign.name"
    return {row.campaign.name for row in ga.search(customer_id=customer_id, query=query)}


# ---------------------------------------------------------------------------
# Creation helpers (same logic as create_google_ads_campaigns.py)
# ---------------------------------------------------------------------------

def create_campaign(client, customer_id, campaign_def):
    budget_service = client.get_service("CampaignBudgetService")
    campaign_service = client.get_service("CampaignService")

    # Budget
    budget_op = client.get_type("CampaignBudgetOperation")
    b = budget_op.create
    b.name = f"Budget_{campaign_def['name']}"
    b.amount_micros = campaign_def["daily_budget_micros"]
    b.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD
    b.explicitly_shared = False
    budget_rn = budget_service.mutate_campaign_budgets(
        customer_id=customer_id, operations=[budget_op]
    ).results[0].resource_name

    # Campaign
    camp_op = client.get_type("CampaignOperation")
    c = camp_op.create
    c.name = campaign_def["name"]
    c.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
    c.status = client.enums.CampaignStatusEnum.PAUSED
    c.campaign_budget = budget_rn
    c.manual_cpc.enhanced_cpc_enabled = False
    c.contains_eu_political_advertising = 3
    c.network_settings.target_google_search = True
    c.network_settings.target_search_network = True
    c.network_settings.target_content_network = False
    camp_rn = campaign_service.mutate_campaigns(
        customer_id=customer_id, operations=[camp_op]
    ).results[0].resource_name
    print(f"  Created campaign: {camp_rn}")

    # Geo + language + negatives
    crit_service = client.get_service("CampaignCriterionService")
    geo_ops = []
    geo_const_service = client.get_service("GeoTargetConstantService")
    for code in campaign_def["geo_targets"]:
        op = client.get_type("CampaignCriterionOperation")
        op.create.campaign = camp_rn
        op.create.location.geo_target_constant = geo_const_service.geo_target_constant_path(
            GEO_TARGETS[code]
        )
        geo_ops.append(op)
    crit_service.mutate_campaign_criteria(customer_id=customer_id, operations=geo_ops)

    lang_op = client.get_type("CampaignCriterionOperation")
    lang_op.create.campaign = camp_rn
    lang_op.create.language.language_constant = LANGUAGE_TARGETS[campaign_def["language"]]
    crit_service.mutate_campaign_criteria(customer_id=customer_id, operations=[lang_op])

    neg_ops = []
    for kw in campaign_def.get("negative_keywords", []):
        op = client.get_type("CampaignCriterionOperation")
        op.create.campaign = camp_rn
        op.create.negative = True
        op.create.keyword.text = kw
        op.create.keyword.match_type = client.enums.KeywordMatchTypeEnum.BROAD
        neg_ops.append(op)
    if neg_ops:
        crit_service.mutate_campaign_criteria(customer_id=customer_id, operations=neg_ops)

    print(f"  Geo ({len(geo_ops)}x) + language + {len(neg_ops)} negatives added")
    return camp_rn


def create_ad_group(client, customer_id, campaign_rn, ag_def):
    ag_service = client.get_service("AdGroupService")
    op = client.get_type("AdGroupOperation")
    ag = op.create
    ag.name = ag_def["name"]
    ag.campaign = campaign_rn
    ag.type_ = client.enums.AdGroupTypeEnum.SEARCH_STANDARD
    ag.status = client.enums.AdGroupStatusEnum.ENABLED
    ag.cpc_bid_micros = ag_def["cpc_bid_micros"]
    ag_rn = ag_service.mutate_ad_groups(
        customer_id=customer_id, operations=[op]
    ).results[0].resource_name
    print(f"    Created ad group: {ag_def['name']}")
    return ag_rn


def add_keywords(client, customer_id, ag_rn, keywords):
    crit_service = client.get_service("AdGroupCriterionService")
    match_map = {
        "EXACT": client.enums.KeywordMatchTypeEnum.EXACT,
        "PHRASE": client.enums.KeywordMatchTypeEnum.PHRASE,
        "BROAD": client.enums.KeywordMatchTypeEnum.BROAD,
    }
    added = skipped = 0
    for kw_text, match_type in keywords:
        clean = kw_text.strip("[]\"")
        op = client.get_type("AdGroupCriterionOperation")
        cr = op.create
        cr.ad_group = ag_rn
        cr.status = client.enums.AdGroupCriterionStatusEnum.ENABLED
        cr.keyword.text = clean
        cr.keyword.match_type = match_map[match_type]
        try:
            crit_service.mutate_ad_group_criteria(customer_id=customer_id, operations=[op])
            added += 1
        except GoogleAdsException as e:
            msg = e.failure.errors[0].message if e.failure.errors else str(e)
            print(f"      SKIP '{clean}': {msg}")
            skipped += 1
    print(f"      Keywords: {added} added, {skipped} skipped")


def create_rsa(client, customer_id, ag_rn, ad_def):
    ag_ad_service = client.get_service("AdGroupAdService")
    op = client.get_type("AdGroupAdOperation")
    ag_ad = op.create
    ag_ad.ad_group = ag_rn
    ag_ad.status = client.enums.AdGroupAdStatusEnum.ENABLED
    ag_ad.ad.final_urls.append(ad_def["final_url"])

    rsa = ag_ad.ad.responsive_search_ad
    rsa.path1 = ad_def.get("path1", "")
    rsa.path2 = ad_def.get("path2", "")

    for i, hl in enumerate(ad_def["headlines"][:15]):
        asset = client.get_type("AdTextAsset")
        asset.text = hl[:30]
        if i == 0:
            asset.pinned_field = client.enums.ServedAssetFieldTypeEnum.HEADLINE_1
        elif i == 1:
            asset.pinned_field = client.enums.ServedAssetFieldTypeEnum.HEADLINE_2
        rsa.headlines.append(asset)

    for desc in ad_def["descriptions"][:4]:
        asset = client.get_type("AdTextAsset")
        asset.text = desc[:90]
        rsa.descriptions.append(asset)

    ag_ad_service.mutate_ad_group_ads(customer_id=customer_id, operations=[op])
    print(f"      RSA created")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print("=" * 60)
    print("Skin & Vision — Create Remaining Google Campaigns (C2/C3/C4)")
    print("=" * 60)

    client = get_client()

    existing = get_existing_campaign_names(client, CUSTOMER_ID)
    print(f"\nExisting campaigns in account: {len(existing)}")
    for name in sorted(existing):
        print(f"  - {name}")
    print()

    created = skipped = 0
    for i, camp_def in enumerate(CAMPAIGNS, 1):
        name = camp_def["name"]
        if name in existing:
            print(f"[{i}/{len(CAMPAIGNS)}] SKIP (already exists): {name}")
            skipped += 1
            continue

        print(f"[{i}/{len(CAMPAIGNS)}] Creating: {name}")
        try:
            camp_rn = create_campaign(client, CUSTOMER_ID, camp_def)
        except GoogleAdsException as e:
            for err in e.failure.errors:
                print(f"  ERROR: {err.message}")
            continue

        for j, ag_def in enumerate(camp_def["ad_groups"], 1):
            print(f"  [{j}] Ad group: {ag_def['name']}")
            try:
                ag_rn = create_ad_group(client, CUSTOMER_ID, camp_rn, ag_def)
            except GoogleAdsException as e:
                print(f"    ERROR ad group: {e.failure.errors[0].message}")
                continue
            add_keywords(client, CUSTOMER_ID, ag_rn, ag_def["keywords"])
            try:
                create_rsa(client, CUSTOMER_ID, ag_rn, ag_def["ad"])
            except GoogleAdsException as e:
                print(f"    ERROR RSA: {e.failure.errors[0].message}")

        created += 1
        print(f"  Done: {name}\n")

    print("=" * 60)
    print(f"Created: {created} | Skipped: {skipped} | Total: {len(CAMPAIGNS)}")
    print()
    print("All new campaigns are PAUSED.")
    print("Unpause at: https://ads.google.com")
    print("=" * 60)


if __name__ == "__main__":
    main()
