#!/usr/bin/env python3
"""
Add certification-free keyword alternatives to the Botox campaign ad groups.
Replaces rejected "botox" trademark keywords with descriptive equivalents
that don't require Google Healthcare/Pharma certification.
"""

import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), "../../.env.local"))

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

CUSTOMER_ID = os.environ["GOOGLE_ADS_CUSTOMER_ID"].replace("-", "")

# New keywords per ad group — no "botox" trademark
REPLACEMENT_KEYWORDS = {
    "Botox Oogarts": [
        ("botulinetoxine oogarts", "PHRASE"),
        ("injectiebehandeling oogarts amsterdam", "PHRASE"),
        ("kraaienpootjes injectie oogarts", "PHRASE"),
        ("anti rimpel injectie oogarts", "PHRASE"),
        ("injectiebehandeling rimpels oogarts", "BROAD"),
        ("botulinetoxine specialist amsterdam", "BROAD"),
    ],
    "Botox Kraaienpootjes": [
        ("kraaienpootjes injectie amsterdam", "PHRASE"),
        ("kraaienpootjes rimpels behandeling", "PHRASE"),
        ("kraaienpootjes oogarts amsterdam", "BROAD"),
    ],
    "Botox Rimpels Amsterdam": [
        ("injectie rimpels amsterdam", "PHRASE"),
        ("fronsrimpels behandeling amsterdam", "PHRASE"),
        ("voorhoofd rimpels injectie amsterdam", "PHRASE"),
        ("anti aging injectie amsterdam", "PHRASE"),
        ("rimpel injectie specialist amsterdam", "BROAD"),
        ("botulinetoxine rimpels amsterdam", "BROAD"),
    ],
    "Wenkbrauw Lifting Botox": [
        ("wenkbrauw lifting injectie oogarts", "BROAD"),
        ("wenkbrauw optrekken injectie amsterdam", "PHRASE"),
    ],
}


def get_client():
    return GoogleAdsClient.load_from_dict({
        "developer_token": os.environ["GOOGLE_ADS_DEVELOPER_TOKEN"],
        "client_id": os.environ["GOOGLE_ADS_CLIENT_ID"],
        "client_secret": os.environ["GOOGLE_ADS_CLIENT_SECRET"],
        "refresh_token": os.environ["GOOGLE_ADS_REFRESH_TOKEN"],
        "use_proto_plus": True,
    })


def find_ad_groups(client, customer_id):
    ga_service = client.get_service("GoogleAdsService")
    names = ", ".join(f"'{n}'" for n in REPLACEMENT_KEYWORDS)
    query = f"""
        SELECT ad_group.resource_name, ad_group.name
        FROM ad_group
        WHERE ad_group.name IN ({names})
          AND campaign.name = 'GOOG_Search_Botox_NL-BE'
          AND ad_group.status != 'REMOVED'
    """
    response = ga_service.search(customer_id=customer_id, query=query)
    return {row.ad_group.name: row.ad_group.resource_name for row in response}


def add_keywords(client, customer_id, ag_resource, ag_name, keywords):
    ag_criterion_service = client.get_service("AdGroupCriterionService")
    match_type_map = {
        "EXACT": client.enums.KeywordMatchTypeEnum.EXACT,
        "PHRASE": client.enums.KeywordMatchTypeEnum.PHRASE,
        "BROAD": client.enums.KeywordMatchTypeEnum.BROAD,
    }

    added, skipped = 0, 0
    for kw_text, match_type in keywords:
        op = client.get_type("AdGroupCriterionOperation")
        criterion = op.create
        criterion.ad_group = ag_resource
        criterion.status = client.enums.AdGroupCriterionStatusEnum.ENABLED
        criterion.keyword.text = kw_text
        criterion.keyword.match_type = match_type_map[match_type]
        try:
            ag_criterion_service.mutate_ad_group_criteria(
                customer_id=customer_id, operations=[op]
            )
            print(f"    + {kw_text} [{match_type}]")
            added += 1
        except GoogleAdsException as e:
            msg = e.failure.errors[0].message if e.failure.errors else str(e)
            print(f"    SKIP '{kw_text}': {msg}")
            skipped += 1

    return added, skipped


def main():
    print("=" * 60)
    print("Adding certification-free keywords to Botox campaign")
    print("=" * 60)

    client = get_client()
    ad_groups = find_ad_groups(client, CUSTOMER_ID)

    if not ad_groups:
        print("ERROR: No matching ad groups found in GOOG_Search_Botox_NL-BE.")
        return

    total_added = total_skipped = 0
    for ag_name, keywords in REPLACEMENT_KEYWORDS.items():
        if ag_name not in ad_groups:
            print(f"\n[MISSING] Ad group '{ag_name}' not found — skipping.")
            continue

        print(f"\n[{ag_name}]")
        added, skipped = add_keywords(client, CUSTOMER_ID, ad_groups[ag_name], ag_name, keywords)
        print(f"  → {added} added, {skipped} skipped")
        total_added += added
        total_skipped += skipped

    print("\n" + "=" * 60)
    print(f"DONE. Total added: {total_added} | Skipped: {total_skipped}")
    print("=" * 60)


if __name__ == "__main__":
    main()
