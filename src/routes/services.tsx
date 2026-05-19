import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Multiple Icon Technologies" },
      {
        name: "description",
        content:
          "Six core capabilities: digital transformation, cloud infrastructure, AI & automation, data intelligence, cybersecurity and IoT for global enterprises.",
      },
      { property: "og:title", content: "Services — Multiple Icon Technologies" },
      {
        property: "og:description",
        content: "Six engineering capabilities for enterprise-scale transformation.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Digital Transformation & Consulting",
    outcome: "Fully digital, agile, and intelligent enterprise systems.",
    capabilities: [
      "Enterprise strategy & transformation roadmap",
      "Digital operating model design",
      "Legacy system modernization",
      "Agile & DevOps transformation",
      "Enterprise architecture governance",
      "IT risk & compliance frameworks",
    ],
  },
  {
    n: "02",
    title: "Cloud & Infrastructure Engineering",
    outcome: "Secure, scalable, and globally resilient digital infrastructure.",
    capabilities: [
      "Multi-cloud architecture (AWS, Azure, GCP)",
      "Hybrid cloud integration",
      "Data center modernization",
      "Zero Trust security architecture",
      "Disaster recovery systems",
      "Edge computing & distributed infrastructure",
    ],
  },
  {
    n: "03",
    title: "Data Analytics & Business Intelligence",
    outcome: "A fully data-driven intelligent enterprise.",
    capabilities: [
      "Big data engineering & data lakes",
      "Real-time analytics systems",
      "AI-powered dashboards",
      "Predictive & prescriptive analytics",
      "Customer intelligence systems",
      "Data governance frameworks",
    ],
  },
  {
    n: "04",
    title: "Artificial Intelligence & Automation",
    outcome: "Self-learning, autonomous enterprise systems.",
    capabilities: [
      "Machine learning & deep learning models",
      "Natural language processing",
      "Computer vision systems",
      "Robotic process automation (RPA)",
      "Intelligent document processing",
      "AI-driven decision engines",
    ],
  },
  {
    n: "05",
    title: "Cybersecurity & Smart IoT",
    outcome: "Fully connected autonomous infrastructure systems.",
    capabilities: [
      "Zero Trust security architecture",
      "SIEM & threat intelligence",
      "Identity & access management",
      "Industrial IoT & edge AI",
      "Smart city connectivity",
      "Real-time telemetry processing",
    ],
  },
  {
    n: "06",
    title: "Business Process Outsourcing",
    outcome: "High efficiency, low cost, scalable operations.",
    capabilities: [
      "Customer experience management",
      "Finance & HR outsourcing",
      "Knowledge process outsourcing",
      "Back-office automation",
      "Global support operations",
      "Process intelligence",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="py-24 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Core Service Ecosystem"
            title="Six engineering capabilities. One intelligence framework."
            description="Every engagement is delivered through embedded specialist squads operating under our global enterprise delivery model."
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-px bg-hairline border border-hairline">
          {services.map((s) => (
            <article key={s.n} className="bg-noir p-10 lg:p-14 hover:bg-surface transition-colors">
              <div className="text-gold font-display text-sm tracking-widest mb-6">{s.n}</div>
              <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink-1 mb-6 leading-tight">
                {s.title}
              </h2>
              <ul className="space-y-2 mb-8">
                {s.capabilities.map((c) => (
                  <li key={c} className="text-sm text-ink-2 flex gap-3">
                    <span className="text-gold mt-1.5">—</span> {c}
                  </li>
                ))}
              </ul>
              <div className="border-t border-hairline pt-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold mb-2">
                  Outcome
                </div>
                <p className="text-ink-1 text-sm">{s.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
