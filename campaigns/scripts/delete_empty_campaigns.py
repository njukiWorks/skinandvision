#!/usr/bin/env python3
"""
Delete the 4 empty Skin & Vision campaigns so the main script can recreate them cleanly.
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

TARGET_CAMPAIGN_NAMES = [
    "GOOG_Search_Ooglidcorrectie_NL-BE",
    "GOOG_Search_Botox_NL-BE",
    "GOOG_Search_AndereBehandelingen_NL-BE",
    "GOOG_Search_Ooglidcorrectie_EN",
]


def get_client() -> GoogleAdsClient:
    credentials = {
        "developer_token": DEVELOPER_TOKEN,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "refresh_token": REFRESH_TOKEN,
        "use_proto_plus": True,
    }
    return GoogleAdsClient.load_from_dict(credentials)


def find_campaigns(client, customer_id: str) -> list[tuple[str, str]]:
    """Return list of (resource_name, name) for matching campaigns."""
    ga_service = client.get_service("GoogleAdsService")
    query = """
        SELECT campaign.resource_name, campaign.name, campaign.status
        FROM campaign
        WHERE campaign.status != 'REMOVED'
    """
    response = ga_service.search(customer_id=customer_id, query=query)
    found = []
    for row in response:
        if row.campaign.name in TARGET_CAMPAIGN_NAMES:
            found.append((row.campaign.resource_name, row.campaign.name))
    return found


def delete_campaigns(client, customer_id: str, campaigns: list[tuple[str, str]]):
    campaign_service = client.get_service("CampaignService")
    ops = []
    for resource_name, name in campaigns:
        op = client.get_type("CampaignOperation")
        op.remove = resource_name
        ops.append(op)
        print(f"  Queued for deletion: {name}")

    if ops:
        campaign_service.mutate_campaigns(customer_id=customer_id, operations=ops)
        print(f"  Deleted {len(ops)} campaigns.")
    else:
        print("  No matching campaigns found to delete.")


def main():
    print("=" * 60)
    print("Deleting empty Skin & Vision campaigns...")
    print("=" * 60)

    client = get_client()
    campaigns = find_campaigns(client, CUSTOMER_ID)

    if not campaigns:
        print("No matching campaigns found. Nothing to delete.")
        sys.exit(0)

    print(f"Found {len(campaigns)} campaign(s) to delete:")
    try:
        delete_campaigns(client, CUSTOMER_ID, campaigns)
        print("\nDone. You can now run create_google_ads_campaigns.py.")
    except GoogleAdsException as e:
        print(f"ERROR: {e.failure.errors[0].message}")
        sys.exit(1)


if __name__ == "__main__":
    main()
