# Conversion Tracking Setup — Skin & Vision Clinic

Since no tracking is currently installed, this must be done BEFORE launching any paid campaigns. Running ads without conversion tracking means you cannot optimize campaigns or measure real ROI.

**Estimated setup time:** 2–4 hours

---

## Step 1: Google Tag Manager (GTM) — Install First

GTM is the container that will manage ALL tracking tags (Google Ads, Meta Pixel, GA4) from one place.

### 1.1 Create GTM Account
1. Go to https://tagmanager.google.com/
2. Create Account → Account Name: "Skin & Vision Clinic"
3. Container Name: "skinandvision.nl", Target: Web
4. Accept terms → you get two code snippets

### 1.2 Install GTM on the Website
The GTM snippet should go in `app/layout.tsx`. The `GoogleTagManager` component already exists in `components/analytics/GoogleTagManager.tsx`.

Check current implementation:
```bash
# Verify it's wired up correctly
cat components/analytics/GoogleTagManager.tsx
```

The GTM_ID goes into `.env.local`:
```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### 1.3 Verify GTM is Firing
1. Install the [GTM Preview extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Open GTM → Preview → Enter `https://skinandvision.nl`
3. Confirm "GTM-XXXXXXX" fires on page load

---

## Step 2: Google Analytics 4 (GA4)

### 2.1 Create GA4 Property
1. Go to https://analytics.google.com/
2. Admin → Create Property → Property Name: "Skin & Vision Clinic"
3. Select: Netherlands, EUR, Healthcare industry
4. Create Web Data Stream → URL: `skinandvision.nl`
5. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2.2 Install via GTM
1. In GTM → Tags → New → "Google Analytics: GA4 Configuration"
2. Measurement ID: `G-XXXXXXXXXX`
3. Trigger: All Pages
4. Save + Publish

### 2.3 Configure Conversions in GA4
Go to GA4 → Admin → Events → Mark as Conversion:
- `generate_lead` (contact form submit)
- `click_booking` (click on booking URL)
- `click_phone` (phone number click)

---

## Step 3: Meta Pixel

### 3.1 Create Pixel (see api-credentials-needed.md)
After creating the pixel and getting the Pixel ID:

### 3.2 Install via GTM
1. In GTM → Tags → New → Custom HTML
2. Tag Name: "Meta Pixel — PageView"
3. HTML:
```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '{{META_PIXEL_ID}}');
fbq('track', 'PageView');
</script>
<!-- End Meta Pixel Code -->
```
4. Create a GTM Variable for `{{META_PIXEL_ID}}` = your pixel ID
5. Trigger: All Pages
6. Save + Publish

### 3.3 Lead Event on Contact Form Submit
1. In GTM → Tags → New → Custom HTML
2. Tag Name: "Meta Pixel — Lead"
3. HTML:
```html
<script>
  fbq('track', 'Lead', {
    content_name: 'Contact Form',
    currency: 'EUR',
    value: 30
  });
</script>
```
4. Trigger: Create a new trigger → Trigger Type: Form Submission
5. Wait for Tags + Check Validation
6. This fires when `id` = "contact-form" submits (or use the form submit URL `/bedankt`)

### 3.4 Schedule/Booking Click Event
1. In GTM → Tags → New → Custom HTML
2. Tag Name: "Meta Pixel — Schedule Click"
3. HTML:
```html
<script>
  fbq('track', 'Schedule', {
    currency: 'EUR',
    value: 50
  });
</script>
```
4. Trigger: Click URL contains `schedule.clinicminds.com`

---

## Step 4: Google Ads Conversion Tracking

### 4.1 Create Conversion Actions in Google Ads
Go to Google Ads → Tools → Conversions → New Conversion Action:

| Conversion Name | Category | Value | Count |
|---|---|---|---|
| Afspraak Geboekt | Purchase/Booking | €50 | One |
| Contactformulier Verstuurd | Submit Lead Form | €30 | One |
| Telefoonnummer Geklikt | Phone Call | €20 | One |

### 4.2 Install via GTM
After creating conversions, Google Ads gives you:
- Conversion ID: `AW-XXXXXXXXXX`
- Conversion Label (per conversion action)

In GTM:
1. Tag → New → Google Ads Conversion Tracking
2. Conversion ID: `AW-XXXXXXXXXX`
3. Conversion Label: (from the specific action)
4. Trigger: same triggers as Meta Pixel events above

### 4.3 Link GA4 to Google Ads
1. Google Ads → Tools → Linked Accounts → Google Analytics (GA4) → Link
2. This allows importing GA4 goals directly into Google Ads

---

## Step 5: UTM Parameters

Add UTM parameters to ALL ad destination URLs so GA4 can attribute traffic correctly.

**Standard UTM format:**
```
https://skinandvision.nl/behandelingen/ooglidcorrectie?utm_source=google&utm_medium=cpc&utm_campaign=ooglidcorrectie-nl&utm_content=search-rsa-1

https://skinandvision.nl/behandelingen/botoxbehandelingen?utm_source=facebook&utm_medium=paid_social&utm_campaign=botox-nl-women&utm_content=before-after-static

https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo&utm_source=google&utm_medium=cpc&utm_campaign=ooglidcorrectie-nl
```

UTM builder tool: https://ga-dev-tools.google/campaign-url-builder/

---

## Tracking Verification Checklist

Before launching any paid campaigns, confirm:

- [ ] GTM container installed and firing on all pages
- [ ] GA4 Measurement ID active, real-time data showing in GA4
- [ ] Meta Pixel firing PageView on all pages (verify with Meta Pixel Helper extension)
- [ ] Google Ads conversion tag installed
- [ ] Test: Submit contact form → confirm Lead event fires in Meta Events Manager + Google Ads
- [ ] Test: Click booking URL → confirm Schedule event fires
- [ ] Test: Click phone number → confirm phone click event fires
- [ ] UTM parameters working — GA4 shows source/medium breakdown
- [ ] Meta Pixel Helper shows no duplicate events
- [ ] Google Tag Assistant shows no errors

---

## Domain Verification (Meta)

Required to use Conversions API and ensure accurate attribution:
1. Meta Business Manager → Brand Safety → Domains
2. Add domain: `skinandvision.nl`
3. Verify via DNS TXT record or meta-tag method
4. Add to `app/layout.tsx` head: `<meta name="facebook-domain-verification" content="XXXXXX" />`

---

## Summary: Order of Operations

```
1. Install GTM on website         ← day 1
2. Create + install GA4           ← day 1
3. Create Meta Pixel              ← day 1
4. Create Google Ads conversions  ← day 1
5. Wire all via GTM               ← day 2
6. Test all tracking              ← day 2
7. Verify 48 hours of clean data  ← day 3–4
8. THEN launch paid campaigns     ← day 5+
```

Do NOT launch campaigns before step 6 is complete.
