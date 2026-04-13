# API Credentials Needed — Skin & Vision Clinic Ad Campaigns

To programmatically create and publish campaigns via the Google Ads API and Meta Marketing API, you need to provide the following credentials. Instructions on where to get each one are included.

---

## Google Ads API Credentials

### 1. Developer Token
**What it is:** Proves you have authorization to use the Google Ads API.
**How to get it:**
1. Sign in to your Google Ads manager account (MCC) at https://ads.google.com
2. Go to: Tools & Settings → Setup → API Center
3. Apply for Basic Access (required to run real campaigns)
4. If you don't have a manager account, create one at https://ads.google.com/home/tools/manager-accounts/
   - A manager account (MCC = My Client Center) is needed for API access

**Format:** `ABCdef1234567890` (22-character alphanumeric string)

---

### 2. OAuth2 Client ID + Client Secret
**What it is:** Identifies your application to Google.
**How to get it:**
1. Go to https://console.cloud.google.com/
2. Create a project called "Skin Vision Ads"
3. Enable the **Google Ads API** (APIs & Services → Library → search "Google Ads API")
4. Go to APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID
5. Application type: **Web application**
6. Authorized redirect URIs: `http://localhost:8080` (for initial token exchange)
7. Download the JSON file — it contains `client_id` and `client_secret`

**Format:**
- Client ID: `123456789-abcdefghijklmno.apps.googleusercontent.com`
- Client Secret: `GOCSPX-abc123...`

---

### 3. OAuth2 Refresh Token
**What it is:** Long-lived token that allows API access without re-logging in.
**How to get it:**
After creating the OAuth2 Client:
1. Run the Google Ads API OAuth flow using their token generator:
   https://developers.google.com/google-ads/api/docs/oauth/oauth-desktop
   OR use the simpler OAuth Playground:
   https://developers.google.com/oauthplayground/
2. Authorize the scope: `https://www.googleapis.com/auth/adwords`
3. Exchange the auth code for tokens — copy the `refresh_token`

**Format:** `1//0gXxxxxxxxxxxxxxxxxxxxxxxx-L9IrI...` (very long string starting with `1//`)

---

### 4. Google Ads Customer ID
**What it is:** Your actual Google Ads account number (not the manager account).
**How to get it:**
1. Sign in to Google Ads
2. Click the account name top-right — the number shown is your Customer ID
3. Remove the dashes for API use

**Format:** `123-456-7890` → use as `1234567890`

---

### 5. Manager Account ID (if applicable)
**What it is:** The MCC account that manages your Google Ads account.
**How to get it:** Same as Customer ID but for the manager/MCC account.
**Required if:** Your developer token is on the MCC, not the direct account.

---

## Meta Marketing API Credentials

### 1. Facebook App ID + App Secret
**What it is:** Identifies your app to Meta's API.
**How to get it:**
1. Go to https://developers.facebook.com/
2. Click "My Apps" → "Create App"
3. App type: **Business**
4. App name: "Skin Vision Ads Manager"
5. After creation, go to App Dashboard → App Settings → Basic
6. Copy **App ID** and **App Secret**

**Format:**
- App ID: `1234567890123456`
- App Secret: `abcdef1234567890abcdef1234567890`

---

### 2. Long-Lived Access Token
**What it is:** Authorizes the app to act on your behalf (60-day expiry, can be refreshed).
**How to get it:**
1. Go to https://developers.facebook.com/tools/explorer/
2. Select your App from the dropdown
3. Click "Generate Access Token" — log in with the account that owns the Business Manager
4. Required permissions to select:
   - `ads_management`
   - `ads_read`
   - `business_management`
   - `pages_read_engagement`
   - `instagram_basic`
5. Copy the short-lived token, then exchange it for a long-lived token:
   ```
   GET https://graph.facebook.com/v19.0/oauth/access_token?
     grant_type=fb_exchange_token&
     client_id={APP_ID}&
     client_secret={APP_SECRET}&
     fb_exchange_token={SHORT_LIVED_TOKEN}
   ```
6. The response contains your long-lived token (60 days)

**Format:** `EAA...` (very long string starting with EAA)

---

### 3. Ad Account ID
**What it is:** Identifies your specific ad account within Business Manager.
**How to get it:**
1. Go to https://business.facebook.com/
2. Business Settings → Ad Accounts → select your account
3. The ID shown is your Ad Account ID

**Format:** `act_1234567890` (always prefixed with `act_`)

---

### 4. Business Manager ID
**What it is:** Your Meta Business Manager account ID.
**How to get it:**
1. Go to https://business.facebook.com/
2. Business Settings → Business Info
3. The "Business Manager ID" is shown there

**Format:** `1234567890123456`

---

### 5. Facebook Page ID
**What it is:** The ID of your Skin & Vision Clinic Facebook Page (required to run ads).
**How to get it:**
1. Go to your Facebook Page
2. Click About → scroll down to "Page Transparency" or
3. Go to: https://www.facebook.com/YOUR_PAGE_NAME/about → look for Page ID
4. Or via Graph API: `GET /me/accounts` with your token → find the page

**Format:** `1234567890123456`

---

### 6. Instagram Account ID
**What it is:** Your Instagram Business Account ID (required to run Instagram placements).
**How to get it:**
1. Ensure your Instagram account is linked to your Facebook Page
2. Go to: https://graph.facebook.com/v19.0/{PAGE_ID}?fields=instagram_business_account&access_token={TOKEN}
3. The response contains your Instagram account ID

**Format:** `17841412345678901`

---

### 7. Meta Pixel ID
**What it is:** Your tracking pixel ID (you'll need to create this — no tracking is currently set up).
**How to get it:**
1. Go to https://business.facebook.com/ → Events Manager → Connect Data Sources → Web
2. Choose "Meta Pixel"
3. Name it: "Skin Vision Website Pixel"
4. Connect to your website domain: `skinandvision.nl`
5. Copy the Pixel ID after creation

**Format:** `1234567890123456`

---

## Summary Checklist

Paste these values into a secure note (e.g., 1Password or Bitwarden) and share them with me via a secure method (NOT via email or chat in plain text — use environment variables or an encrypted channel).

### Google Ads
```
GOOGLE_ADS_DEVELOPER_TOKEN=
GOOGLE_ADS_CLIENT_ID=
GOOGLE_ADS_CLIENT_SECRET=
GOOGLE_ADS_REFRESH_TOKEN=
GOOGLE_ADS_CUSTOMER_ID=
GOOGLE_ADS_MANAGER_ACCOUNT_ID=   (if applicable)
```

### Meta Ads
```
META_APP_ID=
META_APP_SECRET=
META_ACCESS_TOKEN=
META_AD_ACCOUNT_ID=              (format: act_XXXXXXXXXX)
META_BUSINESS_MANAGER_ID=
META_PAGE_ID=
META_INSTAGRAM_ACCOUNT_ID=
META_PIXEL_ID=
```

---

## Security Note

- Never share these credentials in plain text in messages, emails, or Slack
- Store them as environment variables in your Vercel project or a `.env.local` file (never commit to git)
- The access token and refresh token are especially sensitive — treat them like passwords
- Set up Meta App in "Live" mode only after testing in development mode
- Google Ads Developer Token: keep on Basic Access initially; apply for Standard Access after spending $50+ in real campaigns

---

## Once You Have Credentials

Add them to your `.env.local` file (already in `.gitignore`):

```bash
# Google Ads API
GOOGLE_ADS_DEVELOPER_TOKEN=your_token_here
GOOGLE_ADS_CLIENT_ID=your_client_id_here
GOOGLE_ADS_CLIENT_SECRET=your_client_secret_here
GOOGLE_ADS_REFRESH_TOKEN=your_refresh_token_here
GOOGLE_ADS_CUSTOMER_ID=1234567890

# Meta Marketing API
META_APP_ID=your_app_id_here
META_APP_SECRET=your_app_secret_here
META_ACCESS_TOKEN=EAAxxxxxxxx
META_AD_ACCOUNT_ID=act_1234567890
META_BUSINESS_MANAGER_ID=1234567890
META_PAGE_ID=1234567890
META_INSTAGRAM_ACCOUNT_ID=17841412345678
META_PIXEL_ID=1234567890
```

Then tell me and I'll build the campaign publisher scripts that read these values and deploy all campaigns via API.
