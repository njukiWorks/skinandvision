import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  withDivider?: boolean;
}

export default function SectionLabel({
  children,
  className,
  withDivider = true,
}: SectionLabelProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <span className="text-[#ff8835] text-xs font-sans uppercase tracking-[0.2em] font-semibold">
        {children}
      </span>
      {withDivider && <div className="w-12 h-0.5 bg-[#ff8835]" />}
    </div>
  );
}
