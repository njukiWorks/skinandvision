#!/usr/bin/env python3
"""
Skin & Vision — Google Ads Campaign Cleanup
Accounts for account 749-404-5431.

Steps:
  1. List ALL active campaigns with their names and ad group counts.
  2. For each of the 4 canonical campaign names, keep the copy that has
     the most ad groups (i.e. the most content). If tied, keep the one
     with the lowest numeric campaign ID (oldest / first created).
  3. Mark every other campaign REMOVED, then confirm deletion.

Run with --dry-run to preview without making any changes.
"""

import os
import sys
from collections import defaultdict
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), "../../.env.local"))

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

DEVELOPER_TOKEN = os.environ["GOOGLE_ADS_DEVELOPER_TOKEN"]
CLIENT_ID       = os.environ["GOOGLE_ADS_CLIENT_ID"]
CLIENT_SECRET   = os.environ["GOOGLE_ADS_CLIENT_SECRET"]
REFRESH_TOKEN   = os.environ["GOOGLE_ADS_REFRESH_TOKEN"]
CUSTOMER_ID     = os.environ["GOOGLE_ADS_CUSTOMER_ID"].replace("-", "")

CANONICAL_NAMES = {
    "GOOG_Search_Ooglidcorrectie_NL-BE",
    "GOOG_Search_Botox_NL-BE",
    "GOOG_Search_AndereBehandelingen_NL-BE",
    "GOOG_Search_Ooglidcorrectie_EN",
}

DRY_RUN = "--dry-run" in sys.argv


def get_client() -> GoogleAdsClient:
    return GoogleAdsClient.load_from_dict({
        "developer_token": DEVELOPER_TOKEN,
        "client_id":       CLIENT_ID,
        "client_secret":   CLIENT_SECRET,
        "refresh_token":   REFRESH_TOKEN,
        "use_proto_plus":  True,
    })


def fetch_all_campaigns(client) -> list[dict]:
    """Return all non-REMOVED campaigns with name, resource_name, id, status."""
    ga = client.get_service("GoogleAdsService")
    query = """
        SELECT
            campaign.id,
            campaign.resource_name,
            campaign.name,
            campaign.status
        FROM campaign
        WHERE campaign.status != 'REMOVED'
        ORDER BY campaign.id ASC
    """
    rows = ga.search(customer_id=CUSTOMER_ID, query=query)
    return [
        {
            "id":            row.campaign.id,
            "resource_name": row.campaign.resource_name,
            "name":          row.campaign.name,
            "status":        row.campaign.status.name,
        }
        for row in rows
    ]


def fetch_ad_group_counts(client, campaign_ids: list[int]) -> dict[int, int]:
    """Return {campaign_id: ad_group_count} for the given campaign IDs."""
    if not campaign_ids:
        return {}
    ga = client.get_service("GoogleAdsService")
    id_list = ", ".join(str(i) for i in campaign_ids)
    query = f"""
        SELECT campaign.id, ad_group.id
        FROM ad_group
        WHERE campaign.id IN ({id_list})
          AND ad_group.status != 'REMOVED'
    """
    counts: dict[int, int] = defaultdict(int)
    for row in ga.search(customer_id=CUSTOMER_ID, query=query):
        counts[row.campaign.id] += 1
    return counts


def remove_campaigns(client, campaigns: list[dict]):
    """Mark a list of campaigns as REMOVED."""
    svc = client.get_service("CampaignService")
    ops = []
    for c in campaigns:
        op = client.get_type("CampaignOperation")
        op.remove = c["resource_name"]
        ops.append(op)
    svc.mutate_campaigns(customer_id=CUSTOMER_ID, operations=ops)


def print_section(title: str):
    print()
    print("=" * 64)
    print(f"  {title}")
    print("=" * 64)


def main():
    if DRY_RUN:
        print("*** DRY RUN — no changes will be made ***")

    client = get_client()

    # ── 1. List all campaigns ────────────────────────────────────────────────
    print_section("STEP 1 — All active campaigns in account 749-404-5431")
    campaigns = fetch_all_campaigns(client)

    if not campaigns:
        print("No active campaigns found. Nothing to do.")
        sys.exit(0)

    ag_counts = fetch_ad_group_counts(client, [c["id"] for c in campaigns])

    print(f"{'#':<4} {'ID':<14} {'Ad Groups':<11} {'Status':<10} Name")
    print("-" * 64)
    for i, c in enumerate(campaigns, 1):
        ag = ag_counts.get(c["id"], 0)
        marker = " ✓" if c["name"] in CANONICAL_NAMES else ""
        print(f"{i:<4} {c['id']:<14} {ag:<11} {c['status']:<10} {c['name']}{marker}")

    # ── 2. Decide which to keep ──────────────────────────────────────────────
    print_section("STEP 2 — Selecting winners (most ad groups, then oldest ID)")

    # Group canonical campaigns by name; all others are immediate trash
    by_name: dict[str, list[dict]] = defaultdict(list)
    trash: list[dict] = []

    for c in campaigns:
        if c["name"] in CANONICAL_NAMES:
            by_name[c["name"]].append(c)
        else:
            trash.append(c)

    keep: list[dict] = []
    duplicates: list[dict] = []

    for name in sorted(CANONICAL_NAMES):
        copies = by_name.get(name, [])
        if not copies:
            print(f"  WARNING: canonical campaign not found — '{name}'")
            continue

        # Sort: most ad groups first, then lowest ID (oldest) first
        copies.sort(key=lambda c: (-ag_counts.get(c["id"], 0), c["id"]))
        winner = copies[0]
        losers = copies[1:]

        ag = ag_counts.get(winner["id"], 0)
        print(f"  KEEP  [{winner['id']}] '{name}'  ({ag} ad group{'s' if ag != 1 else ''})")
        for l in losers:
            print(f"  DROP  [{l['id']}] '{name}'  (duplicate)")

        keep.append(winner)
        duplicates.extend(losers)

    to_remove = trash + duplicates

    # ── 3. Preview removal list ──────────────────────────────────────────────
    print_section("STEP 3 — Campaigns to REMOVE")

    if not to_remove:
        print("  Nothing to remove — account is already clean.")
        sys.exit(0)

    print(f"  {'ID':<14} {'Ad Groups':<11} Name")
    print("  " + "-" * 50)
    for c in sorted(to_remove, key=lambda c: c["id"]):
        ag = ag_counts.get(c["id"], 0)
        reason = "duplicate" if c["name"] in CANONICAL_NAMES else "unknown/extra"
        print(f"  {c['id']:<14} {ag:<11} {c['name']}  [{reason}]")

    print(f"\n  Total to remove: {len(to_remove)}")
    print(f"  Campaigns kept:  {len(keep)}")

    # ── Confirm ──────────────────────────────────────────────────────────────
    if DRY_RUN:
        print("\n*** DRY RUN complete — re-run without --dry-run to apply. ***")
        sys.exit(0)

    print()
    answer = input("Type YES to permanently remove these campaigns: ").strip()
    if answer != "YES":
        print("Aborted — no changes made.")
        sys.exit(0)

    # ── 4. Remove ────────────────────────────────────────────────────────────
    print_section("STEP 4 — Removing campaigns")
    try:
        remove_campaigns(client, to_remove)
        print(f"  Successfully removed {len(to_remove)} campaign(s).")
    except GoogleAdsException as exc:
        for error in exc.failure.errors:
            print(f"  API ERROR: {error.message}")
        sys.exit(1)

    # ── Summary ──────────────────────────────────────────────────────────────
    print_section("Done")
    print("  Remaining canonical campaigns:")
    for c in keep:
        print(f"    [{c['id']}] {c['name']}")
    print()


if __name__ == "__main__":
    main()
