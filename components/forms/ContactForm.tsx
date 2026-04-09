"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  naam: z.string().min(2, "Vul uw naam in"),
  email: z.string().email("Ongeldig e-mailadres"),
  telefoon: z.string().optional(),
  behandeling: z.string().optional(),
  bericht: z.string().min(10, "Bericht is te kort"),
});

type FormData = z.infer<typeof schema>;

const behandelingOpties = [
  "Ooglidcorrectie",
  "Botoxbehandelingen",
  "Ptosis correctie",
  "Andere behandeling",
  "Nog niet zeker",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      // Placeholder — wire to Convex when backend is set up
      await new Promise((r) => setTimeout(r, 1000));
      console.log("Contact form submission:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#4a7c59]/10 border border-[#4a7c59]/20 rounded-2xl p-8 text-center">
        <p className="text-[#4a7c59] font-semibold mb-2">Uw bericht is ontvangen</p>
        <p className="text-[#b0a090] text-sm">
          Wij nemen binnen 1–2 werkdagen contact met u op.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white border border-[#e8e0d4] rounded-xl px-4 py-3.5 text-sm text-[#2a2420] placeholder:text-[#c0b0a0] focus:outline-none focus:border-[#ff8835] focus:ring-2 focus:ring-[#ff8835]/10 transition-all duration-200 shadow-sm";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-[#2a2420] font-medium mb-1.5">
            Naam <span className="text-[#ff8835]">*</span>
          </label>
          <input
            {...register("naam", { required: "Vul uw naam in" })}
            placeholder="Uw volledige naam"
            className={inputClass}
          />
          {errors.naam && <p className="text-red-500 text-xs mt-1">{errors.naam.message}</p>}
        </div>
        <div>
          <label className="block text-xs text-[#2a2420] font-medium mb-1.5">
            E-mailadres <span className="text-[#ff8835]">*</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="uw@email.nl"
            className={inputClass}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-[#2a2420] font-medium mb-1.5">Telefoonnummer</label>
          <input
            {...register("telefoon")}
            type="tel"
            placeholder="+31 6 ..."
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-[#2a2420] font-medium mb-1.5">
            Behandeling interesse
          </label>
          <select {...register("behandeling")} className={inputClass}>
            <option value="">Selecteer behandeling</option>
            {behandelingOpties.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs text-[#2a2420] font-medium mb-1.5">
          Bericht <span className="text-[#ff8835]">*</span>
        </label>
        <textarea
          {...register("bericht", { required: true })}
          rows={5}
          placeholder="Uw vraag of opmerking..."
          className={`${inputClass} resize-none`}
        />
        {errors.bericht && <p className="text-red-500 text-xs mt-1">{errors.bericht.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">
          Er is iets misgegaan. Probeer het opnieuw of bel ons direct.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#ff8835] text-white font-sans font-medium rounded-full px-8 py-3.5 text-sm hover:bg-[#ffaa6b] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 w-full sm:w-fit"
      >
        {status === "loading" ? "Verzenden..." : "Bericht versturen"}
      </button>
    </form>
  );
}
