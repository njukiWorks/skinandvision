/**
 * Analytics event utilities for Skin & Vision Clinic
 *
 * Fires conversion events to:
 *   - GA4 (gtag directly)
 *   - Meta Pixel (fbq)
 *
 * Usage:
 *   import { trackLead, trackBookingClick, trackPhoneClick } from "@/lib/analytics";
 */

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

function gtagEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

function fbTrack(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

const AW_ID = "AW-17615536133";
const AW_BOOKING  = `${AW_ID}/7580879924`;
const AW_LEAD     = `${AW_ID}/7581270228`;
const AW_PHONE    = `${AW_ID}/7580880401`;

function gtagConversion(send_to: string, value: number) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to, currency: "EUR", value });
}

export function trackLead(treatment?: string) {
  gtagEvent("generate_lead", { currency: "EUR", value: 30, treatment: treatment ?? "unknown" });
  gtagConversion(AW_LEAD, 30);
  fbTrack("Lead", { content_name: treatment ?? "Contact Form", currency: "EUR", value: 30 });
}

export function trackBookingClick(source?: string) {
  gtagEvent("click_booking", { currency: "EUR", value: 50, source: source ?? "unknown" });
  gtagConversion(AW_BOOKING, 50);
  fbTrack("Schedule", { content_name: source ?? "Booking CTA", currency: "EUR", value: 50 });
}

export function trackPhoneClick() {
  gtagEvent("click_phone", { currency: "EUR", value: 20 });
  gtagConversion(AW_PHONE, 20);
  fbTrack("Contact", { content_name: "Phone Click", currency: "EUR", value: 20 });
}

/**
 * Fire on treatment page view (micro-conversion).
 */
export function trackTreatmentView(treatment: string) {
  gtagEvent("view_treatment", { treatment });

  fbTrack("ViewContent", {
    content_name: treatment,
    content_type: "treatment",
  });
}
