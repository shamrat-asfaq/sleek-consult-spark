const items = [
  "Defense & Aerospace",
  "Energy Systems",
  "Global Logistics",
  "Financial Infrastructure",
  "Public Sector",
  "Smart Connectivity",
  "Industrial AI",
  "Healthcare",
  "Telecommunications",
  "Smart Cities",
];

export function IndustriesTicker() {
  return (
    <section className="py-10 bg-surface border-y border-hairline overflow-hidden">
      <div className="flex animate-ticker w-max gap-16 text-[10px] font-bold uppercase tracking-[0.3em] text-ink-3 whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <span key={i} className={i % 2 === 0 ? "text-gold/60" : ""}>
            {it}
          </span>
        ))}
      </div>
    </section>
  );
}
