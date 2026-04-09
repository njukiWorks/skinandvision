import { formatPrice } from "@/lib/utils";
import type { PriceCategory } from "@/content/tarieven";
import SectionLabel from "./SectionLabel";

interface PriceCardProps {
  category: PriceCategory;
}

export default function PriceCard({ category }: PriceCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.07)] p-8 lg:p-10 hover:shadow-[0_12px_56px_rgba(0,0,0,0.11)] hover:-translate-y-1 transition-all duration-350 flex flex-col">
      {/* Header */}
      <div className="mb-8 pb-8 border-b border-[#f0ebe4]">
        <SectionLabel className="mb-4">
          {category.id === "botoxbehandelingen" ? "Injectables" : "Chirurgie"}
        </SectionLabel>
        <h3
          className="font-display text-2xl lg:text-3xl text-[#2a2420] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {category.title}
        </h3>
        <p className="text-[#b0a090] text-sm leading-relaxed">{category.description}</p>
      </div>

      {/* Price list */}
      <ul className="space-y-0 flex-1">
        {category.procedures.map((proc, i) => (
          <li
            key={proc.name}
            className={`flex items-center justify-between gap-4 py-3.5 ${
              i !== category.procedures.length - 1 ? "border-b border-[#f0ebe4]" : ""
            }`}
          >
            <span className="text-[#4a3a2a] text-sm leading-snug flex-1">{proc.name}</span>
            <span className="bg-[#fff0e6] text-[#ff8835] font-sans font-semibold text-sm px-3 py-1 rounded-full whitespace-nowrap">
              {formatPrice(proc.price)}
            </span>
          </li>
        ))}
      </ul>

      {category.footnote && (
        <p className="mt-6 text-xs text-[#b0a090] italic leading-relaxed border-t border-[#f0ebe4] pt-6">
          {category.footnote}
        </p>
      )}
    </div>
  );
}
