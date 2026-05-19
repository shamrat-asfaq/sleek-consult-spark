import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import datacenter from "@/assets/datacenter.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Multiple Icon Technologies" },
      {
        name: "description",
        content:
          "Multiple Icon Technologies is a global intelligence engineering enterprise designing, building and operating intelligent digital ecosystems worldwide.",
      },
      { property: "og:title", content: "About — Multiple Icon Technologies" },
      {
        property: "og:description",
        content:
          "We do not deliver systems. We engineer intelligent digital civilizations.",
      },
      { property: "og:image", content: datacenter },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  "AI-Driven Enterprise Intelligence",
  "Cloud-Native & Hybrid Infrastructure",
  "Data-Centric Decision Ecosystems",
  "Intelligent Automation at Scale",
  "IoT-Enabled Smart Connectivity",
  "Cybersecurity-First Architecture",
  "Human + AI Collaborative Systems",
];

const stack = [
  { label: "Cloud", value: "AWS · Azure · GCP" },
  { label: "AI", value: "TensorFlow · PyTorch · OpenAI" },
  { label: "Data", value: "Hadoop · Spark · Snowflake" },
  { label: "Automation", value: "UiPath · Power Automate" },
  { label: "IoT", value: "MQTT · Edge AI" },
  { label: "Security", value: "Zero Trust · SIEM · IAM" },
];

function AboutPage() {
  return (
    <>
      <section className="py-24 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-6 block">
              Global Positioning
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-medium text-ink-1 leading-[1.05] text-balance mb-8">
              We engineer intelligent <span className="text-gold">digital civilizations</span>.
            </h1>
            <p className="text-ink-2 text-lg leading-relaxed max-w-3xl">
              Multiple Icon Technologies is a next-generation global enterprise
              technology and engineering transformation company. We operate at
              the convergence of Artificial Intelligence, Cloud, Data, IoT,
              Cybersecurity and Enterprise Automation — delivering end-to-end
              transformation for enterprises, governments and industrial
              organizations worldwide.
            </p>
          </div>
          <div className="lg:col-span-4 border-l-2 border-gold pl-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-2">
              Mission
            </div>
            <p className="text-ink-1 text-sm leading-relaxed">
              Transform traditional organizations into fully intelligent,
              autonomous, data-driven enterprises capable of real-time
              decision-making and global scalability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Strategic Foundation" title="Seven core pillars." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {pillars.map((p, i) => (
              <div key={p} className="bg-noir p-8 flex items-start gap-4 min-h-32">
                <span className="text-gold font-display text-xs tracking-widest pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg text-ink-1 leading-snug">{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-y border-hairline">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader
              eyebrow="Technology Stack"
              title="Battle-tested. Sovereign by design."
              description="We anchor capabilities in a hardened stack that prioritizes security, speed and sovereign operational control."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline border border-hairline self-start">
            {stack.map((s) => (
              <div key={s.label} className="bg-noir p-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold mb-2">
                  {s.label}
                </div>
                <div className="text-ink-1 font-display text-sm">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <figure className="border-l-2 border-gold pl-6">
            <blockquote className="font-display text-xl lg:text-2xl text-ink-1 italic leading-snug mb-6">
              "Technology is the foundation of modern civilization. We aim to
              build intelligent systems that empower global progress."
            </blockquote>
            <figcaption className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
              Office of the Chairman
            </figcaption>
          </figure>
          <figure className="border-l-2 border-gold pl-6">
            <blockquote className="font-display text-xl lg:text-2xl text-ink-1 italic leading-snug mb-6">
              "We focus on execution excellence — turning vision into scalable
              and impactful reality."
            </blockquote>
            <figcaption className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
              Managing Director
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
