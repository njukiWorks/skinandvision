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

/**
 * Fire when contact form is successfully submitted.
 */
export function trackLead(treatment?: string) {
  gtagEvent("generate_lead", {
    currency: "EUR",
    value: 30,
    treatment: treatment ?? "unknown",
  });

  fbTrack("Lead", {
    content_name: treatment ?? "Contact Form",
    currency: "EUR",
    value: 30,
  });
}

/**
 * Fire when user clicks the ClinicMinds booking link.
 */
export function trackBookingClick(source?: string) {
  gtagEvent("click_booking", {
    currency: "EUR",
    value: 50,
    source: source ?? "unknown",
  });

  fbTrack("Schedule", {
    content_name: source ?? "Booking CTA",
    currency: "EUR",
    value: 50,
  });
}

/**
 * Fire when user clicks the phone number.
 */
export function trackPhoneClick() {
  gtagEvent("click_phone", {
    currency: "EUR",
    value: 20,
  });

  fbTrack("Contact", {
    content_name: "Phone Click",
    currency: "EUR",
    value: 20,
  });
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
