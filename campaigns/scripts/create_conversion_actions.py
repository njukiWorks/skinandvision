#!/usr/bin/env python3
"""
Create Google Ads conversion actions and print the AW tag ID + conversion labels
needed to wire up gtag conversion firing in analytics.ts.
"""

import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), "../../.env.local"))

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

CUSTOMER_ID = os.environ["GOOGLE_ADS_CUSTOMER_ID"].replace("-", "")

CONVERSION_ACTIONS = [
    {
        "name": "Afspraak Boeken (Booking Klik)",
        "category": "BOOK_APPOINTMENT",
        "value": 50.0,
        "counting_type": "ONE_PER_CLICK",
    },
    {
        "name": "Contactformulier Verstuurd",
        "category": "SUBMIT_LEAD_FORM",
        "value": 30.0,
        "counting_type": "ONE_PER_CLICK",
    },
    {
        "name": "Telefoonnummer Geklikt",
        "category": "PHONE_CALL_LEAD",
        "value": 20.0,
        "counting_type": "ONE_PER_CLICK",
    },
]


def get_client():
    return GoogleAdsClient.load_from_dict({
        "developer_token": os.environ["GOOGLE_ADS_DEVELOPER_TOKEN"],
        "client_id": os.environ["GOOGLE_ADS_CLIENT_ID"],
        "client_secret": os.environ["GOOGLE_ADS_CLIENT_SECRET"],
        "refresh_token": os.environ["GOOGLE_ADS_REFRESH_TOKEN"],
        "use_proto_plus": True,
    })


def get_conversion_tracking_id(client, customer_id):
    ga_service = client.get_service("GoogleAdsService")
    query = """
        SELECT customer.conversion_tracking_setting.conversion_tracking_id
        FROM customer
        WHERE customer.id = """ + customer_id
    response = ga_service.search(customer_id=customer_id, query=query)
    for row in response:
        return row.customer.conversion_tracking_setting.conversion_tracking_id
    return None


def create_conversion_action(client, customer_id, action_def):
    service = client.get_service("ConversionActionService")

    op = client.get_type("ConversionActionOperation")
    ca = op.create
    ca.name = action_def["name"]
    ca.type_ = client.enums.ConversionActionTypeEnum.WEBPAGE
    ca.category = getattr(client.enums.ConversionActionCategoryEnum, action_def["category"])
    ca.status = client.enums.ConversionActionStatusEnum.ENABLED
    ca.counting_type = getattr(client.enums.ConversionActionCountingTypeEnum, action_def["counting_type"])
    ca.value_settings.default_value = action_def["value"]
    ca.value_settings.default_currency_code = "EUR"
    ca.value_settings.always_use_default_value = True

    # 30-day click-through, 1-day view-through window
    ca.click_through_lookback_window_days = 30
    ca.view_through_lookback_window_days = 1

    response = service.mutate_conversion_actions(customer_id=customer_id, operations=[op])
    resource_name = response.results[0].resource_name
    return resource_name


def get_conversion_label(client, customer_id, resource_name):
    ga_service = client.get_service("GoogleAdsService")
    query = f"""
        SELECT conversion_action.id, conversion_action.tag_snippets
        FROM conversion_action
        WHERE conversion_action.resource_name = '{resource_name}'
    """
    response = ga_service.search(customer_id=customer_id, query=query)
    for row in response:
        for snippet in row.conversion_action.tag_snippets:
            # GLOBAL_SITE_TAG type has the label embedded
            if "gtag" in str(snippet.global_site_tag):
                import re
                match = re.search(r"'([A-Za-z0-9_-]{20,})'", str(snippet.global_site_tag))
                if match:
                    return match.group(1)
        # Fall back to conversion action ID
        return str(row.conversion_action.id)
    return None


def main():
    print("=" * 60)
    print("Creating Google Ads Conversion Actions")
    print("=" * 60)

    client = get_client()

    # Get AW tag ID
    tracking_id = get_conversion_tracking_id(client, CUSTOMER_ID)
    aw_tag = f"AW-{tracking_id}" if tracking_id else "AW-<not found>"
    print(f"\nGoogle Ads Tag ID: {aw_tag}")
    print("(Add this to layout.tsx gtag config)\n")

    results = []
    for action_def in CONVERSION_ACTIONS:
        try:
            resource_name = create_conversion_action(client, CUSTOMER_ID, action_def)
            label = get_conversion_label(client, CUSTOMER_ID, resource_name)
            results.append((action_def["name"], resource_name, label))
            print(f"  ✓ {action_def['name']}")
            print(f"    Resource: {resource_name}")
            print(f"    Label:    {label}\n")
        except GoogleAdsException as e:
            msg = e.failure.errors[0].message if e.failure.errors else str(e)
            print(f"  ✗ {action_def['name']}: {msg}\n")

    print("=" * 60)
    print("Add to analytics.ts — gtag conversion sends:")
    print("=" * 60)
    for name, _, label in results:
        if label:
            print(f"// {name}")
            print(f"gtag('event', 'conversion', {{ send_to: '{aw_tag}/{label}' }});")
            print()


if __name__ == "__main__":
    main()
