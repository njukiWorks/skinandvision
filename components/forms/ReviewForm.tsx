"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  naam: z.string().min(2, "Vul uw naam in"),
  rating: z.string().min(1, "Selecteer een beoordeling"),
  behandeling: z.string().optional(),
  tekst: z.string().min(10, "Uw ervaring is te kort (minimaal 10 tekens)"),
});

type FormData = z.infer<typeof schema>;

const behandelingOpties = [
  "Ooglidcorrectie",
  "Botoxbehandelingen",
  "Ptosis correctie",
  "Andere behandeling",
];

export default function ReviewForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [hovered, setHovered] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const selectedRating = parseInt(watch("rating") || "0", 10);

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Verzenden mislukt");
      setStatus("success");
      reset();
      setHovered(0);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#4a7c59]/10 border border-[#4a7c59]/20 rounded-2xl p-10 text-center">
        <div className="text-3xl mb-4">★★★★★</div>
        <p className="text-[#4a7c59] font-semibold text-lg mb-2">Hartelijk dank voor uw beoordeling!</p>
        <p className="text-[#b0a090] text-sm">
          Uw ervaring wordt beoordeeld en zo snel mogelijk geplaatst.
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
            Naam <span className="text-[#ff8835]">*</span>
          </label>
          <input
            {...register("naam")}
            placeholder="Uw naam"
            className={inputClass}
          />
          {errors.naam && <p className="text-red-500 text-xs mt-1">{errors.naam.message}</p>}
        </div>

        <div>
          <label className="block text-xs text-[#2a2420] font-medium mb-1.5">
            Behandeling
          </label>
          <select {...register("behandeling")} className={inputClass}>
            <option value="">Selecteer behandeling</option>
            {behandelingOpties.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Star rating */}
      <div>
        <label className="block text-xs text-[#2a2420] font-medium mb-2">
          Beoordeling <span className="text-[#ff8835]">*</span>
        </label>
        <input type="hidden" {...register("rating")} />
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => setValue("rating", String(star), { shouldValidate: true })}
              className="text-3xl leading-none transition-transform duration-100 hover:scale-110 focus:outline-none"
              aria-label={`${star} ster${star > 1 ? "ren" : ""}`}
            >
              <span className={(hovered || selectedRating) >= star ? "text-yellow-400" : "text-[#e8e0d4]"}>
                ★
              </span>
            </button>
          ))}
          {selectedRating > 0 && (
            <span className="ml-2 text-sm text-[#b0a090] self-center">
              {["", "Slecht", "Matig", "Goed", "Zeer goed", "Uitstekend"][selectedRating]}
            </span>
          )}
        </div>
        {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating.message}</p>}
      </div>

      <div>
        <label className="block text-xs text-[#2a2420] font-medium mb-1.5">
          Uw ervaring <span className="text-[#ff8835]">*</span>
        </label>
        <textarea
          {...register("tekst")}
          rows={5}
          placeholder="Vertel anderen over uw behandeling bij Skin & Vision Clinic..."
          className={`${inputClass} resize-none`}
        />
        {errors.tekst && <p className="text-red-500 text-xs mt-1">{errors.tekst.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">
          Er is iets misgegaan. Probeer het opnieuw of bel ons op{" "}
          <a href="tel:+31646096641" className="underline">+31 6 4609 6641</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#ff8835] text-white font-sans font-medium rounded-full px-8 py-3.5 text-sm hover:bg-[#ffaa6b] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 w-full sm:w-fit"
      >
        {status === "loading" ? "Verzenden..." : "Beoordeling plaatsen"}
      </button>
    </form>
  );
}
