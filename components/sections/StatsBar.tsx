"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5, suffix: "+", label: "Jaar ervaring", sub: "Sinds 2019 actief" },
  { value: 50, suffix: "+", label: "Patiënten behandeld", sub: "Tevreden patiënten" },
  { value: 9.9, suffix: "/10", label: "ZorgkaartNederland", sub: "Gemiddelde beoordeling" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const isDecimal = value % 1 !== 0;

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;
            if (ref.current) {
              ref.current.textContent = isDecimal
                ? current.toFixed(1)
                : Math.round(current).toLocaleString("nl-NL");
            }
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-[#e8e0d4] py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#e8e0d4]">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center px-8 py-6 sm:py-0">
              <div
                className="text-[#ff8835] font-display font-light leading-none mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#2a2420] text-sm font-semibold font-sans mb-1">{stat.label}</div>
              <div className="text-[#b0a090] text-xs font-sans">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
