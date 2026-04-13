"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { trackLead } from "@/lib/analytics";

const schema = z.object({
  naam: z.string().min(2, "Vul uw naam in"),
  email: z.string().email("Ongeldig e-mailadres"),
  telefoon: z.string().optional(),
  behandeling: z.string().optional(),
  bericht: z.string().min(10, "Bericht is te kort (minimaal 10 tekens)"),
});

type FormData = z.infer<typeof schema>;

const behandelingOpties = [
  "Ooglidcorrectie",
  "Botoxbehandelingen",
  "Ptosis correctie",
  "Andere behandeling",
  "Nog niet zeker",
];

const treatmentOptionsEn = [
  "Eyelid Correction",
  "Botox Treatments",
  "Ptosis Correction",
  "Other treatment",
  "Not sure yet",
];

interface ContactFormProps {
  lang?: string;
}

export default function ContactForm({ lang = "nl" }: ContactFormProps) {
  const en = lang === "en";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Verzenden mislukt");
      setStatus("success");
      trackLead(data.behandeling);
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#4a7c59]/10 border border-[#4a7c59]/20 rounded-2xl p-8 text-center">
        <p className="text-[#4a7c59] font-semibold mb-2">
          {en ? "Your message has been received" : "Uw bericht is ontvangen"}
        </p>
        <p className="text-[#b0a090] text-sm">
          {en ? "We will contact you within 1–2 business days." : "Wij nemen binnen 1–2 werkdagen contact met u op."}
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white border border-[#e8e0d4] rounded-xl px-4 py-3.5 text-sm text-[#2a2420] placeholder:text-[#c0b0a0] focus:outline-none focus:border-[#ff8835] focus:ring-2 focus:ring-[#ff8835]/10 transition-all duration-200 shadow-sm";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-[#2a2420] font-medium mb-1.5">
            {en ? "Name" : "Naam"} <span className="text-[#ff8835]">*</span>
          </label>
          <input
            {...register("naam")}
            placeholder={en ? "Your full name" : "Uw volledige naam"}
            className={inputClass}
          />
          {errors.naam && <p className="text-red-500 text-xs mt-1">{errors.naam.message}</p>}
        </div>
        <div>
          <label className="block text-xs text-[#2a2420] font-medium mb-1.5">
            {en ? "Email address" : "E-mailadres"} <span className="text-[#ff8835]">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className={inputClass}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-[#2a2420] font-medium mb-1.5">
            {en ? "Phone number" : "Telefoonnummer"}
          </label>
          <input
            {...register("telefoon")}
            type="tel"
            placeholder="+31 6 ..."
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-[#2a2420] font-medium mb-1.5">
            {en ? "Treatment of interest" : "Behandeling interesse"}
          </label>
          <select {...register("behandeling")} className={inputClass}>
            <option value="">{en ? "Select treatment" : "Selecteer behandeling"}</option>
            {(en ? treatmentOptionsEn : behandelingOpties).map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs text-[#2a2420] font-medium mb-1.5">
          {en ? "Message" : "Bericht"} <span className="text-[#ff8835]">*</span>
        </label>
        <textarea
          {...register("bericht")}
          rows={5}
          placeholder={en ? "Your question or comment..." : "Uw vraag of opmerking..."}
          className={`${inputClass} resize-none`}
        />
        {errors.bericht && <p className="text-red-500 text-xs mt-1">{errors.bericht.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">
          {en ? (
            <>Something went wrong. Please try again or call us at{" "}
              <a href="tel:+31646096641" className="underline">+31 6 4609 6641</a>.
            </>
          ) : (
            <>Er is iets misgegaan. Probeer het opnieuw of bel ons direct op{" "}
              <a href="tel:+31646096641" className="underline">+31 6 4609 6641</a>.
            </>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#ff8835] text-white font-sans font-medium rounded-full px-8 py-3.5 text-sm hover:bg-[#ffaa6b] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 w-full sm:w-fit"
      >
        {status === "loading"
          ? (en ? "Sending..." : "Verzenden...")
          : (en ? "Send message" : "Bericht versturen")}
      </button>
    </form>
  );
}
