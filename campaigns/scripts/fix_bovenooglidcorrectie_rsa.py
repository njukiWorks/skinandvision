#!/usr/bin/env python3
"""
Add the missing RSA to the Bovenooglidcorrectie ad group.
The ad group was created but RSA failed due to path1 being >15 chars.
"""

import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), "../../.env.local"))

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

CUSTOMER_ID = os.environ["GOOGLE_ADS_CUSTOMER_ID"].replace("-", "")
SITE_URL = "https://skinandvision.nl"

AD = {
    "headlines": [
        "Bovenooglidcorrectie Amst.",
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
        "Bovenooglidcorrectie v.a. €850 door BIG-geregistreerde oogarts Dr. Kloos. 28+ jaar ervaring.",
        "Skin & Vision Amsterdam: boven- en onderooglidcorrectie v.a. €850. Vrijblijvende consultatie.",
        "Ooglidcorrectie door gecertificeerde oogarts. Medisch én esthetisch. 9.9/10 op ZorgkaartNL.",
        "Combinatiebehandeling boven + onder v.a. €1.750. Plan uw vrijblijvend adviesgesprek vandaag.",
    ],
    "final_url": f"{SITE_URL}/behandelingen/ooglidcorrectie",
    "path1": "Bovenooglid",
    "path2": "Prijs",
}


def get_client():
    return GoogleAdsClient.load_from_dict({
        "developer_token": os.environ["GOOGLE_ADS_DEVELOPER_TOKEN"],
        "client_id": os.environ["GOOGLE_ADS_CLIENT_ID"],
        "client_secret": os.environ["GOOGLE_ADS_CLIENT_SECRET"],
        "refresh_token": os.environ["GOOGLE_ADS_REFRESH_TOKEN"],
        "use_proto_plus": True,
    })


def find_ad_group(client, customer_id):
    ga_service = client.get_service("GoogleAdsService")
    query = """
        SELECT ad_group.resource_name, ad_group.name, campaign.name
        FROM ad_group
        WHERE ad_group.name = 'Bovenooglidcorrectie'
          AND campaign.name = 'GOOG_Search_Ooglidcorrectie_NL-BE'
          AND ad_group.status != 'REMOVED'
    """
    response = ga_service.search(customer_id=customer_id, query=query)
    rows = list(response)
    if not rows:
        raise RuntimeError("Ad group 'Bovenooglidcorrectie' not found.")
    return rows[0].ad_group.resource_name


def create_rsa(client, customer_id, ag_resource):
    ag_ad_service = client.get_service("AdGroupAdService")

    op = client.get_type("AdGroupAdOperation")
    ag_ad = op.create
    ag_ad.ad_group = ag_resource
    ag_ad.status = client.enums.AdGroupAdStatusEnum.ENABLED

    ag_ad.ad.final_urls.append(AD["final_url"])
    rsa = ag_ad.ad.responsive_search_ad
    rsa.path1 = AD["path1"]
    rsa.path2 = AD["path2"]

    for i, text in enumerate(AD["headlines"][:15]):
        asset = client.get_type("AdTextAsset")
        asset.text = text[:30]
        if i == 0:
            asset.pinned_field = client.enums.ServedAssetFieldTypeEnum.HEADLINE_1
        elif i == 1:
            asset.pinned_field = client.enums.ServedAssetFieldTypeEnum.HEADLINE_2
        rsa.headlines.append(asset)

    for text in AD["descriptions"][:4]:
        asset = client.get_type("AdTextAsset")
        asset.text = text[:90]
        rsa.descriptions.append(asset)

    ag_ad_service.mutate_ad_group_ads(customer_id=customer_id, operations=[op])
    print("RSA created successfully.")


def main():
    print("Finding Bovenooglidcorrectie ad group and adding RSA...")
    client = get_client()
    try:
        ag_resource = find_ad_group(client, CUSTOMER_ID)
        print(f"Found: {ag_resource}")
        create_rsa(client, CUSTOMER_ID, ag_resource)
    except GoogleAdsException as e:
        print(f"ERROR: {e.failure.errors[0].message}")
    except RuntimeError as e:
        print(f"ERROR: {e}")


if __name__ == "__main__":
    main()
