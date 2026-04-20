"use client";

import { trackBookingClick } from "@/lib/analytics";

const BOOKING_URL =
  "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";

interface BookingButtonProps {
  source?: string;
  label?: string;
  className?: string;
}

export default function BookingButton({
  source = "unknown",
  label = "Afspraak Maken",
  className = "w-full flex justify-center bg-[#ff8835] text-white font-sans font-medium rounded-full px-8 py-3.5 text-sm hover:bg-[#ffaa6b] transition-colors",
}: BookingButtonProps) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackBookingClick(source)}
      className={className}
    >
      {label}
    </a>
  );
}
