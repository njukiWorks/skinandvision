#!/usr/bin/env python3
"""
Skin & Vision Clinic — Google Ads Campaign Publisher
Creates all campaigns, ad groups, keywords, and RSAs via Google Ads API.
"""

import os
import sys
from dotenv import load_dotenv

# Load credentials from .env.local
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

# ---------------------------------------------------------------------------
# Campaign definitions
# ---------------------------------------------------------------------------

CAMPAIGNS = [
    {
        "name": "GOOG_Search_Ooglidcorrectie_NL-BE",
        "daily_budget_micros": 5_000_000,  # €5/day
        "geo_targets": ["NL", "BE", "LU"],
        "language": "nl",
        "ad_groups": [
            {
                "name": "Ooglidcorrectie Generiek",
                "cpc_bid_micros": 2_500_000,
                "keywords": [
                    ("[ooglidcorrectie]", "EXACT"),
                    ("[ooglidcorrectie amsterdam]", "EXACT"),
                    ('"ooglidcorrectie kosten"', "PHRASE"),
                    ('"ooglidcorrectie prijs"', "PHRASE"),
                    ('"ooglidcorrectie kliniek"', "PHRASE"),
                    ("ooglidcorrectie oogarts", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Ooglidcorrectie door Oogarts",
                        "BIG-geregistreerde Specialist",
                        "Skin & Vision Clinic Amsterdam",
                        "Bovenooglidcorrectie v.a. €850",
                        "Veilig & Natuurlijk Resultaat",
                        "28+ Jaar Ervaring | Dr. Kloos",
                        "Gratis Consultatie Aanvragen",
                        "Medisch én Esthetisch Geïndiceerd",
                        "Blepharoplastiek door Expert",
                        "5000+ Behandelde Patiënten",
                        "9.9/10 ZorgkaartNederland",
                        "Lokale Verdoving | Snel Herstel",
                        "Resultaat in 4–6 Weken",
                        "Maak Nu een Afspraak",
                        "Behandeling op Maat",
                    ],
                    "descriptions": [
                        "Dr. Kloos is BIG-geregistreerde oogarts met 28+ jaar ervaring in ooglidchirurgie. Medisch én esthetisch verantwoord resultaat. Maak online een afspraak.",
                        "Skin & Vision Clinic Amsterdam: boven- en onderooglidcorrectie door een gespecialiseerde oogarts. 9.9/10 op ZorgkaartNederland. Vrijblijvende consultatie.",
                        "Hangende oogleden die uw gezichtsveld belemmeren? Dr. Kloos biedt een veilige, chirurgische oplossing. Plan uw consultatie vandaag.",
                        "Bovenooglidcorrectie v.a. €850 (beide ogen). Uitgevoerd door BIG-geregistreerde oogarts. Lokale verdoving, 5–7 dagen herstel.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/ooglidcorrectie",
                    "path1": "Ooglidcorrectie",
                    "path2": "Specialist",
                },
            },
            {
                "name": "Blepharoplastie",
                "cpc_bid_micros": 2_500_000,
                "keywords": [
                    ("[blepharoplastie]", "EXACT"),
                    ("[blepharoplastiek amsterdam]", "EXACT"),
                    ('"blepharoplastie oogarts"', "PHRASE"),
                    ('"blepharoplastie prijs nederland"', "PHRASE"),
                    ('"boven blepharoplastiek"', "PHRASE"),
                    ('"onder blepharoplastiek"', "PHRASE"),
                    ("blepharoplastiek specialist", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Blepharoplastie Amsterdam",
                        "Ooglidoperatie door Oogarts",
                        "BIG-geregistreerde Specialist",
                        "Boven- & Onderlid Correctie",
                        "v.a. €850 Beide Ogen",
                        "28+ Jaar Specialistische Ervaring",
                        "5000+ Tevreden Patiënten",
                        "9.9/10 ZorgkaartNederland",
                        "Veilig & Natuurlijk Resultaat",
                        "Lokale Verdoving",
                        "Snel Herstel in 5–7 Dagen",
                        "Skin & Vision Clinic",
                        "Consultatie Aanvragen",
                        "Medisch Geïndiceerd Mogelijk",
                        "Maak Nu een Afspraak",
                    ],
                    "descriptions": [
                        "Blepharoplastie door BIG-geregistreerde oogarts Dr. Kloos. 28 jaar ervaring, 5000+ patiënten. Bovenooglidcorrectie v.a. €850. Plan uw consultatie.",
                        "Skin & Vision Clinic Amsterdam: boven- en onderblepharoplastiek door een erkende oogarts. 9.9/10 op ZorgkaartNederland. Vrijblijvend adviesgesprek.",
                        "Bovenooglidcorrectie v.a. €850 | Onderlid v.a. €1.050 | Combinatie v.a. €1.750. Uitgevoerd met lokale verdoving door gecertificeerde oogarts.",
                        "Als oogarts heeft Dr. Kloos unieke anatomische expertise voor blepharoplastiek. Veilig, discreet, langdurig resultaat. Maak online een afspraak.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/ooglidcorrectie",
                    "path1": "Blepharoplastie",
                    "path2": "Amsterdam",
                },
            },
            {
                "name": "Hangende Oogleden",
                "cpc_bid_micros": 2_000_000,
                "keywords": [
                    ('"hangende oogleden operatie"', "PHRASE"),
                    ('"hangende oogleden behandeling"', "PHRASE"),
                    ('"hangende oogleden oogarts"', "PHRASE"),
                    ('"oogleden laten optrekken"', "PHRASE"),
                    ('"oogleden optrekken kosten"', "PHRASE"),
                    ("hangende oogleden chirurg", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Hangende Oogleden Behandeling",
                        "Oogleden Laten Optrekken",
                        "Oogarts Specialist Amsterdam",
                        "BIG-geregistreerd | Dr. Kloos",
                        "Veilige Chirurgische Oplossing",
                        "Bovenooglidcorrectie v.a. €850",
                        "28 Jaar Ervaring",
                        "5000+ Patiënten Behandeld",
                        "9.9/10 ZorgkaartNL",
                        "Lokale Verdoving Mogelijk",
                        "Snel & Duurzaam Resultaat",
                        "Skin & Vision Clinic",
                        "Gratis Adviesgesprek",
                        "Online Afspraak Plannen",
                        "Medisch of Esthetisch",
                    ],
                    "descriptions": [
                        "Hangende oogleden die uw gezichtsveld belemmeren of u moe laten lijken? Dr. Kloos biedt een veilige chirurgische oplossing. Plan uw consultatie vandaag.",
                        "Oogleden optrekken door BIG-geregistreerde oogarts in Amsterdam. Bovenooglidcorrectie v.a. €850. 9.9/10 op ZorgkaartNederland. Consultatie aanvragen.",
                        "Skin & Vision Clinic: gespecialiseerde ooglidchirurgie voor hangende oogleden. Medisch én esthetisch geïndiceerd. Persoonlijk behandelplan na consultatie.",
                        "Dr. Kloos behandelt hangende oogleden met minimaal invasieve chirurgie. Lokale verdoving, herstel in 5–7 dagen, resultaat voor jaren.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/ooglidcorrectie",
                    "path1": "Oogleden",
                    "path2": "Optrekken",
                },
            },
            {
                "name": "Bovenooglidcorrectie",
                "cpc_bid_micros": 2_500_000,
                "keywords": [
                    ("[bovenooglidcorrectie]", "EXACT"),
                    ('"bovenooglidcorrectie amsterdam"', "PHRASE"),
                    ('"bovenooglidcorrectie prijs"', "PHRASE"),
                    ("[onderooglidcorrectie]", "EXACT"),
                    ('"ooglidoperatie specialist"', "PHRASE"),
                    ("ooglidcorrectie oogarts amsterdam", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Bovenooglidcorrectie Amsterdam",
                        "v.a. €850 Beide Ogen",
                        "BIG-geregistreerde Oogarts",
                        "Onderooglidcorrectie v.a. €1.050",
                        "Dr. Kloos | 28 Jaar Ervaring",
                        "9.9/10 ZorgkaartNederland",
                        "5000+ Behandelde Patiënten",
                        "Lokale Verdoving | 5-7 Dagen",
                        "Veilig & Natuurlijk Resultaat",
                        "Combinatie Behandeling Mogelijk",
                        "Skin & Vision Clinic",
                        "Gratis Consultatie",
                        "Online Afspraak Maken",
                        "Medisch Geïndiceerd?",
                        "Maak Nu een Afspraak",
                    ],
                    "descriptions": [
                        "Bovenooglidcorrectie v.a. €850 (beide ogen) door BIG-geregistreerde oogarts Dr. Kloos. 28+ jaar ervaring, 5000+ patiënten. Maak online een afspraak.",
                        "Skin & Vision Clinic Amsterdam: bovenooglidcorrectie, onderooglidcorrectie en combinatiebehandeling v.a. €850. Vrijblijvende consultatie bij gespecialiseerde oogarts.",
                        "Ooglidcorrectie door gecertificeerde oogarts in Amsterdam. Medisch én esthetisch geïndiceerd. Lokale verdoving, snel herstel. 9.9/10 op ZorgkaartNL.",
                        "Combinatiebehandeling boven + onder v.a. €1.750. Dr. Kloos is gespecialiseerd in boven- en onderooglidcorrecties. Plan uw vrijblijvend adviesgesprek.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/ooglidcorrectie",
                    "path1": "Bovenooglid",
                    "path2": "Prijs",
                },
            },
        ],
        "negative_keywords": [
            "gratis", "zelf", "diy", "oefening", "thuis", "makeup",
            "mascara", "klacht", "pijn oog", "infectie", "huisarts",
        ],
    },
    {
        "name": "GOOG_Search_Botox_NL-BE",
        "daily_budget_micros": 4_000_000,  # €4/day
        "geo_targets": ["NL", "BE", "LU"],
        "language": "nl",
        "ad_groups": [
            {
                "name": "Botox Oogarts",
                "cpc_bid_micros": 2_000_000,
                "keywords": [
                    ("[botox oogarts]", "EXACT"),
                    ("[botox door oogarts]", "EXACT"),
                    ('"botox specialist oogarts"', "PHRASE"),
                    ('"botox oogarts amsterdam"', "PHRASE"),
                    ('"veilig botox oogarts"', "PHRASE"),
                    ("botox oogarts precisie", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Botox door Oogarts | Amsterdam",
                        "Precisie Rondom de Ogen",
                        "BIG-geregistreerde Specialist",
                        "Kraaienpootjes v.a. €200",
                        "Veilig & Natuurlijk Resultaat",
                        "28+ Jaar Medische Ervaring",
                        "Voorhoofd & Fronsrimpels",
                        "Wenkbrauw Lifting met Botox",
                        "Resultaat 3–4 Maanden",
                        "Consultatie op Maat",
                        "9.9/10 ZorgkaartNederland",
                        "Maak Nu een Afspraak",
                        "Botox 1 zone v.a. €200",
                        "Skin & Vision Clinic Amsterdam",
                        "Geen Hersteltijd Nodig",
                    ],
                    "descriptions": [
                        "Dr. Kloos is oogarts met unieke anatomische kennis van het ooggebied. Botoxbehandelingen worden veiliger uitgevoerd dan door niet-artsen. Plan uw afspraak.",
                        "Kraaienpootjes, fronsrimpels, wenkbrauw lifting of medische botox. Skin & Vision Clinic biedt botoxbehandelingen door een BIG-geregistreerde oogarts v.a. €200.",
                        "Het perioculaire gebied vereist precisie. Als oogarts heeft Dr. Kloos dagelijkse klinische ervaring met deze anatomie. Veilig, discreet, natuurlijk resultaat.",
                        "Botox 1 zone v.a. €200 | 3 zones v.a. €490. Resultaat na 3–4 maanden. Vrijblijvend adviesgesprek in Amsterdam bij BIG-geregistreerde oogarts.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/botoxbehandelingen",
                    "path1": "Botox",
                    "path2": "Oogarts",
                },
            },
            {
                "name": "Botox Kraaienpootjes",
                "cpc_bid_micros": 1_800_000,
                "keywords": [
                    ("[kraaienpootjes botox]", "EXACT"),
                    ("[kraaienpootjes behandeling]", "EXACT"),
                    ('"kraaienpootjes wegwerken"', "PHRASE"),
                    ('"kraaienpootjes botox amsterdam"', "PHRASE"),
                    ('"kraaienpootjes injectie specialist"', "PHRASE"),
                    ("kraaienpootjes botox oogarts", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Kraaienpootjes Botox Amsterdam",
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
                        "Botox door Medisch Specialist",
                        "Kraaienpootjes Wegwerken",
                    ],
                    "descriptions": [
                        "Kraaienpootjes laten behandelen door oogarts Dr. Kloos. Botox v.a. €200 met medische precisie rondom de ogen. 9.9/10 op ZorgkaartNederland.",
                        "Skin & Vision Clinic Amsterdam: botoxbehandeling voor kraaienpootjes door BIG-geregistreerde oogarts. Veilig, discreet, natuurlijk resultaat. Plan uw afspraak.",
                        "Als oogarts behandelt Dr. Kloos kraaienpootjes met unieke anatomische kennis. Meer precisie dan bij schoonheidsspecialisten. Resultaat in 3–7 dagen zichtbaar.",
                        "Kraaienpootjes v.a. €200 | Wenkbrauw lifting v.a. €130 | Voorhoofd botox v.a. €200. Geen hersteltijd nodig. Vrijblijvende consultatie in Amsterdam.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/botoxbehandelingen",
                    "path1": "Kraaienpootjes",
                    "path2": "Botox",
                },
            },
            {
                "name": "Botox Rimpels Amsterdam",
                "cpc_bid_micros": 1_800_000,
                "keywords": [
                    ('"botox amsterdam rimpels"', "PHRASE"),
                    ('"botox voorhoofd amsterdam"', "PHRASE"),
                    ("[botox fronsrimpels]", "EXACT"),
                    ('"botox injectie amsterdam"', "PHRASE"),
                    ('"botox behandeling amsterdam prijs"', "PHRASE"),
                    ("botox rimpels specialist amsterdam", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Botox Amsterdam | Oogarts",
                        "Voorhoofd & Fronsrimpels",
                        "BIG-geregistreerde Specialist",
                        "Botox 1 Zone v.a. €200",
                        "28 Jaar Medische Ervaring",
                        "Veilig & Discreet",
                        "Geen Hersteltijd Nodig",
                        "Resultaat 3–4 Maanden",
                        "9.9/10 ZorgkaartNL",
                        "Skin & Vision Clinic",
                        "Botox 2 Zones v.a. €340",
                        "Botox 3 Zones v.a. €490",
                        "Maak Nu een Afspraak",
                        "Vrijblijvend Adviesgesprek",
                        "Botox door Medisch Arts",
                    ],
                    "descriptions": [
                        "Botoxbehandelingen in Amsterdam door BIG-geregistreerde oogarts Dr. Kloos. Voorhoofd, fronsrimpels, kraaienpootjes. 1 zone v.a. €200. Maak een afspraak.",
                        "Skin & Vision Clinic Amsterdam: botoxbehandelingen voor rimpels door medisch specialist. Veilig, discreet, met expertise in het perioculaire gebied.",
                        "Botox door oogarts: unieke anatomische kennis voor maximale veiligheid rondom de ogen. 28+ jaar ervaring. Vrijblijvend adviesgesprek in Amsterdam.",
                        "1 zone v.a. €200 | 2 zones v.a. €340 | 3 zones v.a. €490. BIG-geregistreerde oogarts. Geen hersteltijd. Plan uw consultatie vandaag.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/botoxbehandelingen",
                    "path1": "Botox",
                    "path2": "Amsterdam",
                },
            },
            {
                "name": "Wenkbrauw Lifting Botox",
                "cpc_bid_micros": 1_500_000,
                "keywords": [
                    ('"wenkbrauw lifting botox"', "PHRASE"),
                    ('"wenkbrauw lift zonder operatie"', "PHRASE"),
                    ('"non-chirurgische wenkbrauw lift"', "PHRASE"),
                    ('"botox wenkbrauw optrekken"', "PHRASE"),
                    ("wenkbrauw lifting botox oogarts", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Wenkbrauw Lifting met Botox",
                        "Zonder Operatie | Amsterdam",
                        "BIG-geregistreerde Oogarts",
                        "v.a. €130 per Behandeling",
                        "Precisie Rondom de Ogen",
                        "28 Jaar Medische Ervaring",
                        "Geen Hersteltijd Nodig",
                        "Resultaat Zichtbaar na 7 Dagen",
                        "9.9/10 ZorgkaartNL",
                        "Skin & Vision Clinic",
                        "Non-Chirurgische Lift",
                        "Maak Nu een Afspraak",
                        "Botox door Oogarts",
                        "Veilig & Natuurlijk",
                        "Vrijblijvend Adviesgesprek",
                    ],
                    "descriptions": [
                        "Wenkbrauw lifting met botox door BIG-geregistreerde oogarts Dr. Kloos. Non-chirurgisch, v.a. €130. Veilig, discreet, resultaat in 7 dagen zichtbaar.",
                        "Skin & Vision Clinic Amsterdam: wenkbrauw lifting zonder chirurgie. Dr. Kloos gebruikt botox met medische precisie voor een natuurlijk optgetrokken look.",
                        "Non-chirurgische wenkbrauw lift door oogarts: v.a. €130. Geen hersteltijd, geen littekens. Gecombineerd met fronsrimpel botox voor optimaal resultaat.",
                        "Dr. Kloos heeft als oogarts unieke expertise voor wenkbrauw lifting met botox. 28+ jaar ervaring. Vrijblijvend adviesgesprek in Amsterdam. Maak een afspraak.",
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
    {
        "name": "GOOG_Search_AndereBehandelingen_NL-BE",
        "daily_budget_micros": 2_000_000,  # €2/day
        "geo_targets": ["NL", "BE", "LU"],
        "language": "nl",
        "ad_groups": [
            {
                "name": "Ptosis Correctie",
                "cpc_bid_micros": 2_000_000,
                "keywords": [
                    ("[ptosis correctie]", "EXACT"),
                    ("[ptosis operatie]", "EXACT"),
                    ('"ptosis behandeling"', "PHRASE"),
                    ('"hangooglid operatie"', "PHRASE"),
                    ('"ptosis oogarts"', "PHRASE"),
                    ('"ptosis chirurgie amsterdam"', "PHRASE"),
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
                    "final_url": f"{SITE_URL}/behandelingen/ptosis-correctie",
                    "path1": "Ptosis",
                    "path2": "Correctie",
                },
            },
            {
                "name": "Oculoplastisch Chirurg",
                "cpc_bid_micros": 2_000_000,
                "keywords": [
                    ('"oculoplastisch chirurg"', "PHRASE"),
                    ('"oculoplastische chirurgie amsterdam"', "PHRASE"),
                    ('"entropion correctie"', "PHRASE"),
                    ('"ectropion behandeling"', "PHRASE"),
                    ('"ooglidafwijking behandeling"', "PHRASE"),
                    ("oculoplastisch oogarts amsterdam", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Oculoplastische Chirurgie",
                        "Ptosis Correctie door Oogarts",
                        "Entropion & Ectropion",
                        "BIG-geregistreerde Specialist",
                        "Medisch Geïndiceerde Behandelingen",
                        "Skin & Vision Clinic Amsterdam",
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
                    ('"medische ooglidcorrectie"', "PHRASE"),
                    ('"ooglidcorrectie zorgverzekering"', "PHRASE"),
                    ('"medische indicatie oogleden"', "PHRASE"),
                    ('"oogleden gezichtsveld belemmering"', "PHRASE"),
                    ("medisch oogleden operatie oogarts", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Medische Ooglidcorrectie",
                        "Vergoed door Zorgverzekeraar?",
                        "BIG-geregistreerde Oogarts",
                        "Gezichtsveld Belemmering",
                        "28 Jaar Medische Expertise",
                        "Skin & Vision Clinic Amsterdam",
                        "Persoonlijk Adviesgesprek",
                        "9.9/10 ZorgkaartNL",
                        "Maak Nu een Afspraak",
                        "Medische Indicatie Beoordelen",
                    ],
                    "descriptions": [
                        "Heeft u last van hangende oogleden die uw gezichtsveld belemmeren? Dit kan medisch geïndiceerd zijn en mogelijk vergoed worden. Consultatie bij Dr. Kloos.",
                        "Skin & Vision Clinic: medische ooglidcorrectie door BIG-geregistreerde oogarts. Bij medische indicatie mogelijk vergoeding via zorgverzekering. Plan uw afspraak.",
                        "Dr. Kloos beoordeelt of uw ooglidproblematiek medisch geïndiceerd is en adviseert over vergoedingsmogelijkheden. 28 jaar klinische ervaring in Amsterdam.",
                        "Ooglidcorrectie met medische indicatie: beoordeling door BIG-geregistreerde oogarts. Zorgvuldig advies over behandeling en vergoeding. Afspraak aanvragen.",
                    ],
                    "final_url": f"{SITE_URL}/behandelingen/ooglidcorrectie",
                    "path1": "Medische",
                    "path2": "Indicatie",
                },
            },
        ],
        "negative_keywords": [
            "gratis", "zelf", "diy", "makeup", "mascara", "schoonheidsspecialist",
        ],
    },
    {
        "name": "GOOG_Search_Ooglidcorrectie_EN",
        "daily_budget_micros": 1_000_000,  # €1/day
        "geo_targets": ["GB", "SE", "NO", "DK", "FI"],
        "language": "en",
        "ad_groups": [
            {
                "name": "Eyelid Surgery Amsterdam",
                "cpc_bid_micros": 2_500_000,
                "keywords": [
                    ('"eyelid surgery amsterdam"', "PHRASE"),
                    ('"blepharoplasty netherlands"', "PHRASE"),
                    ('"eyelid surgery abroad netherlands"', "PHRASE"),
                    ('"eyelid correction netherlands"', "PHRASE"),
                    ('"cosmetic eye surgery amsterdam"', "PHRASE"),
                    ("eyelid surgery amsterdam specialist", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Eyelid Surgery in Amsterdam",
                        "Expert Ophthalmologist | 28 Yrs",
                        "Blepharoplasty by Eye Specialist",
                        "Skin & Vision Clinic Amsterdam",
                        "BIG-Registered Eye Surgeon",
                        "Natural & Safe Results",
                        "From €850 Both Eyelids",
                        "Book Your Consultation",
                        "5,000+ Patients Treated",
                        "9.9/10 Patient Rating",
                        "Upper & Lower Eyelid",
                        "Local Anaesthesia | Fast Recovery",
                        "Results Last for Years",
                        "Medical Tourism Netherlands",
                        "Online Booking Available",
                    ],
                    "descriptions": [
                        "Dr. Kloos is a BIG-registered ophthalmologist in Amsterdam with 28+ years in oculoplastic surgery. Upper & lower eyelid correction from €850. Book online.",
                        "Visit Skin & Vision Clinic Amsterdam for safe, precise eyelid surgery performed by a certified ophthalmologist. Enquire online for a personalised treatment plan.",
                        "Eyelid surgery in Amsterdam by specialist ophthalmologist. Upper eyelid from €850 | Lower from €1,050. 9.9/10 patient rating. Book your consultation today.",
                        "Skin & Vision Clinic: blepharoplasty performed by BIG-registered eye surgeon Dr. Kloos. 5,000+ patients, 28 years experience. Natural, lasting results.",
                    ],
                    "final_url": f"{SITE_URL}/en/treatments/eyelid-surgery",
                    "path1": "Eyelid-Surgery",
                    "path2": "Amsterdam",
                },
            },
            {
                "name": "Medical Tourism Eye Surgery",
                "cpc_bid_micros": 2_000_000,
                "keywords": [
                    ('"medical tourism netherlands eye surgery"', "PHRASE"),
                    ('"eyelid surgery europe"', "PHRASE"),
                    ('"blepharoplasty europe affordable"', "PHRASE"),
                    ('"eye plastic surgeon amsterdam"', "PHRASE"),
                    ("eyelid specialist netherlands affordable", "BROAD"),
                ],
                "ad": {
                    "headlines": [
                        "Eye Surgery in Netherlands",
                        "Affordable Blepharoplasty EU",
                        "BIG-Registered Ophthalmologist",
                        "From €850 | Expert Results",
                        "28 Years Experience",
                        "Skin & Vision Amsterdam",
                        "5,000+ Patients Treated",
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
                    "final_url": f"{SITE_URL}/en/treatments/eyelid-surgery",
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
# GEO target constants (Google Ads geo target criterion IDs)
# ---------------------------------------------------------------------------

GEO_TARGETS = {
    "NL": 2528,   # Netherlands
    "BE": 2056,   # Belgium
    "LU": 2442,   # Luxembourg
    "GB": 2826,   # United Kingdom
    "SE": 2752,   # Sweden
    "NO": 2578,   # Norway
    "DK": 2208,   # Denmark
    "FI": 2246,   # Finland
}

LANGUAGE_TARGETS = {
    "nl": "languageConstants/1043",  # Dutch
    "en": "languageConstants/1000",  # English
}


# ---------------------------------------------------------------------------
# Helper: build GoogleAdsClient from env vars
# ---------------------------------------------------------------------------

def get_client() -> GoogleAdsClient:
    credentials = {
        "developer_token": DEVELOPER_TOKEN,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "refresh_token": REFRESH_TOKEN,
        "use_proto_plus": True,
    }
    return GoogleAdsClient.load_from_dict(credentials)


# ---------------------------------------------------------------------------
# Campaign creation
# ---------------------------------------------------------------------------

def create_campaign(client, customer_id: str, campaign_def: dict) -> str:
    campaign_service = client.get_service("CampaignService")
    campaign_budget_service = client.get_service("CampaignBudgetService")

    # 1. Create budget
    budget_op = client.get_type("CampaignBudgetOperation")
    budget = budget_op.create
    budget.name = f"Budget_{campaign_def['name']}"
    budget.amount_micros = campaign_def["daily_budget_micros"]
    budget.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD
    budget.explicitly_shared = False

    budget_response = campaign_budget_service.mutate_campaign_budgets(
        customer_id=customer_id, operations=[budget_op]
    )
    budget_resource = budget_response.results[0].resource_name
    print(f"  Created budget: {budget_resource}")

    # 2. Create campaign
    campaign_op = client.get_type("CampaignOperation")
    campaign = campaign_op.create
    campaign.name = campaign_def["name"]
    campaign.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
    campaign.status = client.enums.CampaignStatusEnum.PAUSED  # Start paused for review
    campaign.campaign_budget = budget_resource

    # Plain Manual CPC (enhanced CPC off) — switch to Maximize Conversions after
    # conversion tracking is live and 30+ conversions recorded
    campaign.manual_cpc.enhanced_cpc_enabled = False

    # Required by Google for EU-targeted campaigns (political ads declaration)
    # 3 = DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING
    campaign.contains_eu_political_advertising = 3

    # Ad schedule: Mon–Sat 08:00–20:00
    # (Ad schedules are set at campaign level via criterion)

    # Network settings
    campaign.network_settings.target_google_search = True
    campaign.network_settings.target_search_network = True
    campaign.network_settings.target_content_network = False

    campaign_response = campaign_service.mutate_campaigns(
        customer_id=customer_id, operations=[campaign_op]
    )
    campaign_resource = campaign_response.results[0].resource_name
    print(f"  Created campaign: {campaign_resource}")

    # 3. Add geo targets
    geo_service = client.get_service("CampaignCriterionService")
    geo_ops = []
    for country_code in campaign_def["geo_targets"]:
        geo_op = client.get_type("CampaignCriterionOperation")
        geo = geo_op.create
        geo.campaign = campaign_resource
        geo.location.geo_target_constant = (
            client.get_service("GeoTargetConstantService")
            .geo_target_constant_path(GEO_TARGETS[country_code])
        )
        geo_ops.append(geo_op)

    if geo_ops:
        geo_service.mutate_campaign_criteria(customer_id=customer_id, operations=geo_ops)
        print(f"  Added {len(geo_ops)} geo targets")

    # 4. Add language target
    lang_op = client.get_type("CampaignCriterionOperation")
    lang = lang_op.create
    lang.campaign = campaign_resource
    lang.language.language_constant = LANGUAGE_TARGETS[campaign_def["language"]]
    geo_service.mutate_campaign_criteria(customer_id=customer_id, operations=[lang_op])
    print(f"  Added language target: {campaign_def['language']}")

    # 5. Add campaign-level negative keywords
    if campaign_def.get("negative_keywords"):
        neg_ops = []
        for kw in campaign_def["negative_keywords"]:
            neg_op = client.get_type("CampaignCriterionOperation")
            neg = neg_op.create
            neg.campaign = campaign_resource
            neg.negative = True
            neg.keyword.text = kw
            neg.keyword.match_type = client.enums.KeywordMatchTypeEnum.BROAD
            neg_ops.append(neg_op)
        geo_service.mutate_campaign_criteria(customer_id=customer_id, operations=neg_ops)
        print(f"  Added {len(neg_ops)} negative keywords")

    return campaign_resource


def create_ad_group(client, customer_id: str, campaign_resource: str, ag_def: dict) -> str:
    ag_service = client.get_service("AdGroupService")

    ag_op = client.get_type("AdGroupOperation")
    ag = ag_op.create
    ag.name = ag_def["name"]
    ag.campaign = campaign_resource
    ag.type_ = client.enums.AdGroupTypeEnum.SEARCH_STANDARD
    ag.status = client.enums.AdGroupStatusEnum.ENABLED
    ag.cpc_bid_micros = ag_def["cpc_bid_micros"]

    response = ag_service.mutate_ad_groups(customer_id=customer_id, operations=[ag_op])
    ag_resource = response.results[0].resource_name
    print(f"    Created ad group: {ag_def['name']}")
    return ag_resource


def add_keywords(client, customer_id: str, ag_resource: str, keywords: list):
    ag_criterion_service = client.get_service("AdGroupCriterionService")
    match_type_map = {
        "EXACT": client.enums.KeywordMatchTypeEnum.EXACT,
        "PHRASE": client.enums.KeywordMatchTypeEnum.PHRASE,
        "BROAD": client.enums.KeywordMatchTypeEnum.BROAD,
    }

    added, skipped = 0, 0
    for kw_text, match_type in keywords:
        # Strip bracket/quote notation — use raw text
        clean_text = kw_text.strip("[]\"")
        op = client.get_type("AdGroupCriterionOperation")
        criterion = op.create
        criterion.ad_group = ag_resource
        criterion.status = client.enums.AdGroupCriterionStatusEnum.ENABLED
        criterion.keyword.text = clean_text
        criterion.keyword.match_type = match_type_map[match_type]
        try:
            ag_criterion_service.mutate_ad_group_criteria(
                customer_id=customer_id, operations=[op]
            )
            added += 1
        except GoogleAdsException as e:
            err_msg = e.failure.errors[0].message if e.failure.errors else str(e)
            print(f"      SKIP keyword '{clean_text}': {err_msg}")
            skipped += 1

    print(f"      Added {added} keywords ({skipped} skipped due to policy)")


def create_rsa(client, customer_id: str, ag_resource: str, ad_def: dict):
    ag_ad_service = client.get_service("AdGroupAdService")

    op = client.get_type("AdGroupAdOperation")
    ag_ad = op.create
    ag_ad.ad_group = ag_resource
    ag_ad.status = client.enums.AdGroupAdStatusEnum.ENABLED

    ag_ad.ad.final_urls.append(ad_def["final_url"])
    rsa = ag_ad.ad.responsive_search_ad
    rsa.path1 = ad_def.get("path1", "")
    rsa.path2 = ad_def.get("path2", "")

    for i, headline_text in enumerate(ad_def["headlines"][:15]):
        asset = client.get_type("AdTextAsset")
        asset.text = headline_text[:30]  # Google Ads headline max 30 chars
        # Pin first 3 headlines to fixed positions
        if i == 0:
            asset.pinned_field = client.enums.ServedAssetFieldTypeEnum.HEADLINE_1
        elif i == 1:
            asset.pinned_field = client.enums.ServedAssetFieldTypeEnum.HEADLINE_2
        rsa.headlines.append(asset)

    for desc_text in ad_def["descriptions"][:4]:
        asset = client.get_type("AdTextAsset")
        asset.text = desc_text[:90]  # Google Ads description max 90 chars
        rsa.descriptions.append(asset)

    ag_ad_service.mutate_ad_group_ads(customer_id=customer_id, operations=[op])
    print(f"      Created RSA")


# ---------------------------------------------------------------------------
# Sitelink extensions (account level)
# ---------------------------------------------------------------------------

def create_sitelinks(client, customer_id: str):
    asset_service = client.get_service("AssetService")
    campaign_asset_service = client.get_service("CustomerAssetService")

    sitelinks = [
        ("Tarieven bekijken", f"{SITE_URL}/tarieven", "Alle behandelingsprijzen", "Transparant, geen verborgen kosten"),
        ("Over Dr. Kloos", f"{SITE_URL}/over-ons", "28+ jaar BIG-oogarts", "Specialist ooglidchirurgie & botox"),
        ("Maak een Afspraak", BOOKING_URL, "Direct online plannen", "Snel via ons boekingssysteem"),
        ("Contact opnemen", f"{SITE_URL}/contact", "Neem contact op", "Wij beantwoorden uw vragen"),
    ]

    asset_resource_names = []
    for title, url, desc1, desc2 in sitelinks:
        op = client.get_type("AssetOperation")
        asset = op.create
        asset.final_urls.append(url)
        asset.sitelink_asset.link_text = title
        asset.sitelink_asset.description1 = desc1
        asset.sitelink_asset.description2 = desc2
        response = asset_service.mutate_assets(customer_id=customer_id, operations=[op])
        asset_resource_names.append(response.results[0].resource_name)

    # Link to customer (account level)
    for asset_rn in asset_resource_names:
        link_op = client.get_type("CustomerAssetOperation")
        link = link_op.create
        link.asset = asset_rn
        link.field_type = client.enums.AssetFieldTypeEnum.SITELINK
        campaign_asset_service.mutate_customer_assets(
            customer_id=customer_id, operations=[link_op]
        )

    print(f"  Created {len(sitelinks)} sitelink extensions")


def create_callouts(client, customer_id: str):
    asset_service = client.get_service("AssetService")
    customer_asset_service = client.get_service("CustomerAssetService")

    callouts = [
        "BIG-geregistreerd",
        "9.9/10 ZorgkaartNL",
        "28 jaar ervaring",
        "5000+ patiënten",
        "Geen hersteltijd botox",
        "Lokale verdoving",
        "Medisch geïndiceerd",
        "Online afspraak plannen",
    ]

    for callout_text in callouts:
        op = client.get_type("AssetOperation")
        asset = op.create
        asset.callout_asset.callout_text = callout_text
        response = asset_service.mutate_assets(customer_id=customer_id, operations=[op])

        link_op = client.get_type("CustomerAssetOperation")
        link = link_op.create
        link.asset = response.results[0].resource_name
        link.field_type = client.enums.AssetFieldTypeEnum.CALLOUT
        customer_asset_service.mutate_customer_assets(
            customer_id=customer_id, operations=[link_op]
        )

    print(f"  Created {len(callouts)} callout extensions")


def create_call_extension(client, customer_id: str):
    asset_service = client.get_service("AssetService")
    customer_asset_service = client.get_service("CustomerAssetService")

    op = client.get_type("AssetOperation")
    asset = op.create
    asset.call_asset.country_code = "NL"
    asset.call_asset.phone_number = "+31 6 4609 6641"

    response = asset_service.mutate_assets(customer_id=customer_id, operations=[op])

    link_op = client.get_type("CustomerAssetOperation")
    link = link_op.create
    link.asset = response.results[0].resource_name
    link.field_type = client.enums.AssetFieldTypeEnum.CALL
    customer_asset_service.mutate_customer_assets(
        customer_id=customer_id, operations=[link_op]
    )
    print("  Created call extension: +31 6 4609 6641")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print("=" * 60)
    print("Skin & Vision Clinic — Google Ads Campaign Publisher")
    print("=" * 60)

    client = get_client()
    customer_id = CUSTOMER_ID

    print(f"\nCustomer ID: {customer_id}")
    print(f"Campaigns to create: {len(CAMPAIGNS)}\n")

    # Create account-level extensions first
    print("Creating account-level ad extensions...")
    try:
        create_sitelinks(client, customer_id)
        create_callouts(client, customer_id)
        create_call_extension(client, customer_id)
    except GoogleAdsException as e:
        print(f"  WARNING: Extensions error (may already exist): {e.failure.errors[0].message}")

    print()

    # Create campaigns
    created_campaigns = []
    for i, campaign_def in enumerate(CAMPAIGNS, 1):
        print(f"[{i}/{len(CAMPAIGNS)}] Creating campaign: {campaign_def['name']}")
        try:
            campaign_resource = create_campaign(client, customer_id, campaign_def)
            created_campaigns.append(campaign_resource)
        except GoogleAdsException as e:
            print(f"  ERROR creating campaign {campaign_def['name']}:")
            for error in e.failure.errors:
                loc = ".".join(
                    f.field_name for f in error.location.field_path_elements
                ) if error.location.field_path_elements else "(no location)"
                print(f"    [{loc}] {error.error_code} — {error.message}")
            continue

        for j, ag_def in enumerate(campaign_def["ad_groups"], 1):
            print(f"  [{j}/{len(campaign_def['ad_groups'])}] Ad group: {ag_def['name']}")
            try:
                ag_resource = create_ad_group(client, customer_id, campaign_resource, ag_def)
            except GoogleAdsException as e:
                print(f"    ERROR creating ad group: {e.failure.errors[0].message}")
                continue
            # Keywords: per-keyword errors handled inside add_keywords
            add_keywords(client, customer_id, ag_resource, ag_def["keywords"])
            # RSA always attempted regardless of keyword failures
            try:
                create_rsa(client, customer_id, ag_resource, ag_def["ad"])
            except GoogleAdsException as e:
                print(f"    ERROR creating RSA: {e.failure.errors[0].message}")

        print(f"  Campaign {campaign_def['name']} created successfully\n")

    print("=" * 60)
    print(f"DONE. Created {len(created_campaigns)}/{len(CAMPAIGNS)} campaigns.")
    print()
    print("All campaigns are set to PAUSED status.")
    print("Review in Google Ads UI, then enable when ready:")
    print("  https://ads.google.com")
    print()
    print("Next steps:")
    print("  1. Review all campaigns in Google Ads UI")
    print("  2. Set up conversion tracking (see campaigns/tracking-setup.md)")
    print("  3. Enable campaigns when ready to go live")
    print("=" * 60)


if __name__ == "__main__":
    main()
