import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Multiple Icon Technologies" },
      {
        name: "description",
        content:
          "Serving government, smart cities, banking, telecom, energy, manufacturing, logistics and healthcare with intelligent transformation systems.",
      },
      { property: "og:title", content: "Industries — Multiple Icon Technologies" },
      {
        property: "og:description",
        content: "Eight high-impact global sectors. One intelligence framework.",
      },
    ],
  }),
  component: IndustriesPage,
});

const sectors = [
  { n: "01", title: "Government & National Infrastructure", body: "Sovereign systems for critical public infrastructure and citizen services." },
  { n: "02", title: "Smart Cities & Urban Development", body: "Connected urban platforms with real-time orchestration of mobility, energy and safety." },
  { n: "03", title: "Banking & Financial Services", body: "Resilient core-banking modernization and AI-driven risk intelligence." },
  { n: "04", title: "Telecommunications", body: "Network intelligence, OSS/BSS automation and 5G-grade operational stacks." },
  { n: "05", title: "Energy & Utilities", body: "Grid intelligence, predictive maintenance and decarbonization analytics." },
  { n: "06", title: "Manufacturing & Industrial Automation", body: "Industry 4.0 platforms with autonomous process control and IoT telemetry." },
  { n: "07", title: "Logistics & Transportation", body: "End-to-end supply visibility, fleet intelligence and route optimization." },
  { n: "08", title: "Healthcare & Life Sciences", body: "Clinical intelligence, regulatory-grade data platforms and patient analytics." },
];

function IndustriesPage() {
  return (
    <>
      <section className="py-24 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Industry Focus"
            title="High-impact sectors. Mission-critical systems."
            description="We engineer for organizations where downtime, security failure or data drift are not acceptable outcomes."
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {sectors.map((s) => (
            <article key={s.n} className="bg-noir p-8 hover:bg-surface transition-colors min-h-64 flex flex-col">
              <div className="text-gold font-display text-sm tracking-widest mb-6">{s.n}</div>
              <h2 className="font-display text-lg font-medium text-ink-1 mb-4 leading-snug">{s.title}</h2>
              <p className="text-sm text-ink-3 leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
