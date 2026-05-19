import { createFileRoute, Link } from "@tanstack/react-router";
import { IndustriesTicker } from "@/components/site/IndustriesTicker";
import { SectionHeader } from "@/components/site/SectionHeader";
import telemetry from "@/assets/telemetry.jpg";
import datacenter from "@/assets/datacenter.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Multiple Icon Technologies — Engineering Intelligence" },
      {
        name: "description",
        content:
          "Global enterprise transformation through AI, cloud, data, IoT and cybersecurity. We engineer intelligent digital ecosystems for enterprises and governments worldwide.",
      },
      { property: "og:title", content: "Multiple Icon Technologies" },
      {
        property: "og:description",
        content: "Engineering Intelligence. Enabling the Future.",
      },
      { property: "og:image", content: telemetry },
      { name: "twitter:image", content: telemetry },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    n: "01",
    title: "Digital Transformation",
    body: "Architecting enterprise-scale transitions into autonomous digital environments with precision engineering.",
  },
  {
    n: "02",
    title: "Cloud Infrastructure",
    body: "Sovereign multi-cloud architectures designed for high-availability industrial and governmental workloads.",
  },
  {
    n: "03",
    title: "AI & Automation",
    body: "Deploying neural-driven operational intelligence to automate complex decision-making chains at scale.",
  },
  {
    n: "04",
    title: "Cybersecurity",
    body: "Zero-trust defense-in-depth protocols protecting critical national and enterprise infrastructure assets.",
  },
  {
    n: "05",
    title: "Smart IoT",
    body: "Connecting the physical world with intelligent sensor arrays and real-time edge telemetry processing.",
  },
  {
    n: "06",
    title: "Data Intelligence",
    body: "Transforming raw informational flows into actionable predictive intelligence and executive BI streams.",
  },
];

const protocol = [
  { title: "Discovery & Audit", body: "Deep-tissue analysis of existing stacks and operational bottlenecks." },
  { title: "Strategic Synthesis", body: "Architecture design with zero-trust principles and modular scalability." },
  { title: "Rapid Deployment", body: "Iterative rollout with continuous integration and real-time monitoring." },
  { title: "Continuous Optimization", body: "Telemetry-driven refinement and autonomous performance tuning." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-24 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-hairline border border-hairline">
            <div className="lg:col-span-8 bg-noir p-8 lg:p-14">
              <div className="flex items-center gap-2 mb-8">
                <span className="size-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold/80">
                  Operational Status: Optimal
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-7xl font-medium text-ink-1 leading-[1.02] text-balance max-w-[20ch] mb-8">
                Engineering <span className="text-gold">Intelligence.</span>{" "}
                Enabling the Future.
              </h1>
              <p className="text-base sm:text-lg text-ink-2 max-w-[52ch] leading-relaxed mb-10">
                We are not a service provider. We are a global intelligence
                engineering enterprise shaping the future of digital civilization
                through precision technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-gold hover:bg-gold-light text-noir text-xs font-bold uppercase tracking-widest px-6 py-4 inline-flex items-center gap-2 transition-colors"
                >
                  Initialize Project <ArrowUpRight size={14} />
                </Link>
                <Link
                  to="/services"
                  className="border border-hairline hover:border-gold text-ink-1 text-xs font-bold uppercase tracking-widest px-6 py-4 inline-flex items-center gap-2 transition-colors"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 bg-surface p-8 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-xs text-ink-3 mb-1 uppercase tracking-wider">Active Nodes</div>
                  <div className="text-3xl font-display font-medium text-ink-1">1,402</div>
                </div>
                <div className="border-l-2 border-gold/40 pl-4">
                  <div className="text-xs text-ink-3 mb-1 uppercase tracking-wider">Data Throughput</div>
                  <div className="text-3xl font-display font-medium text-ink-1">4.8 PB/s</div>
                </div>
                <div className="border-l-2 border-gold/20 pl-4">
                  <div className="text-xs text-ink-3 mb-1 uppercase tracking-wider">Global Sectors</div>
                  <div className="text-3xl font-display font-medium text-ink-1">10+</div>
                </div>
              </div>
              <img
                src={telemetry}
                alt="Gold circuit telemetry visualization"
                width={1280}
                height={704}
                className="w-full aspect-video object-cover outline outline-1 -outline-offset-1 outline-white/5"
              />
            </div>
          </div>
        </div>
      </section>

      <IndustriesTicker />

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="01 — Core Pillars" title="Capabilities engineered for scale." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {pillars.map((p) => (
              <Link
                to="/services"
                key={p.n}
                className="bg-noir p-8 hover:bg-surface transition-colors group flex flex-col min-h-64"
              >
                <div className="text-gold mb-8 font-display text-sm tracking-widest">{p.n}</div>
                <h3 className="font-display text-xl font-medium text-ink-1 mb-4">{p.title}</h3>
                <p className="text-sm text-ink-3 leading-relaxed max-w-[40ch] mb-8">{p.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink-2 group-hover:text-gold transition-colors">
                  Examine module <ArrowUpRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="py-24 bg-surface border-y border-hairline">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="02 — Implementation Protocol"
              title="Accelerated delivery framework."
              description="We deploy embedded engineering squads that integrate with your organization, moving from discovery to autonomous operation in measurable sprints."
            />
            <div className="space-y-8">
              {protocol.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`size-3 rounded-full ${
                        i === protocol.length - 1
                          ? "bg-gold"
                          : "border border-gold bg-noir"
                      }`}
                    />
                    {i < protocol.length - 1 && (
                      <div className="w-px flex-1 bg-hairline mt-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <h4 className="text-ink-1 font-medium mb-1">{step.title}</h4>
                    <p className="text-sm text-ink-3 max-w-[48ch]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={datacenter}
              alt="Server facility wireframe with gold accents"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover outline outline-1 -outline-offset-1 outline-white/10"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold p-6 ring-1 ring-white/10 hidden xl:block">
              <div className="text-4xl font-display font-medium text-noir">99.9%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-noir/60">
                System Uptime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-24 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-6 block">
              Leadership Statement
            </span>
            <p className="font-display text-2xl lg:text-4xl text-ink-1 italic leading-tight mb-8 text-pretty">
              "Technology is the foundation of modern civilization. We aim to
              build intelligent systems that empower global progress — turning
              vision into scalable and impactful reality."
            </p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-surface outline outline-1 -outline-offset-1 outline-gold/40" />
              <div>
                <div className="text-ink-1 font-medium text-sm">Office of the Chairman</div>
                <div className="text-gold text-[10px] font-bold uppercase tracking-[0.2em]">
                  Multiple Icon Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-end">
          <h2 className="font-display text-4xl lg:text-6xl font-medium text-ink-1 leading-[1.05] text-balance">
            Begin <span className="text-gold">engineering</span> your next decade.
          </h2>
          <div>
            <p className="text-ink-2 mb-8 max-w-md">
              Connect with our global command centers to initiate a
              transformation protocol tailored to your organization.
            </p>
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-light text-noir text-xs font-bold uppercase tracking-widest px-8 py-4 inline-flex items-center gap-2 transition-colors"
            >
              Establish Connection <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
