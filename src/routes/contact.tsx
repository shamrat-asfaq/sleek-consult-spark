import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Multiple Icon Technologies" },
      {
        name: "description",
        content:
          "Initiate a transformation protocol. Connect with our global command centers in Zurich, Singapore, London and New York.",
      },
      { property: "og:title", content: "Contact — Multiple Icon Technologies" },
      {
        property: "og:description",
        content: "Begin engineering. Establish a secure connection.",
      },
    ],
  }),
  component: ContactPage,
});

const offices = [
  { city: "Zurich", country: "CH", role: "Global Operations Hub" },
  { city: "Singapore", country: "SG", role: "Technology Forge" },
  { city: "London", country: "UK", role: "European Engineering Center" },
  { city: "New York", country: "US", role: "Americas Command" },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="py-24 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Establish Connection"
            title="Begin engineering."
            description="Contact our global command centers to initiate a transformation protocol tailored to your organization."
          />
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-px bg-hairline border border-hairline">
              {offices.map((o) => (
                <div key={o.city} className="bg-noir p-6 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold mb-1">
                      {o.role}
                    </div>
                    <div className="font-display text-lg text-ink-1">
                      {o.city}, {o.country}
                    </div>
                  </div>
                  <div className="text-ink-3 text-sm">24/7</div>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-4">
              <div className="flex justify-between border-b border-hairline pb-4">
                <span className="text-sm text-ink-3">Inquiry Portal</span>
                <span className="text-sm text-gold">ops@multiple-icon.tech</span>
              </div>
              <div className="flex justify-between border-b border-hairline pb-4">
                <span className="text-sm text-ink-3">Press & Media</span>
                <span className="text-sm text-gold">press@multiple-icon.tech</span>
              </div>
              <div className="flex justify-between border-b border-hairline pb-4">
                <span className="text-sm text-ink-3">Secure Channel</span>
                <span className="text-sm text-ink-1">+41 44 000 0000</span>
              </div>
            </div>
          </div>

          <div className="bg-surface p-10 ring-1 ring-white/5">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="size-3 rounded-full bg-gold mx-auto mb-6 animate-pulse" />
                <h3 className="font-display text-2xl text-ink-1 mb-4">Transmission Received.</h3>
                <p className="text-ink-3 text-sm max-w-sm mx-auto">
                  An engineering principal will respond within one business day.
                </p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <h3 className="font-display text-xl text-ink-1 mb-2">System Inquiry</h3>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ink-3">
                    Operational Identity
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-noir border border-hairline px-4 py-3 text-sm focus:border-gold outline-none transition-colors text-ink-1"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ink-3">
                    Enterprise Domain
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Organization"
                    className="w-full bg-noir border border-hairline px-4 py-3 text-sm focus:border-gold outline-none transition-colors text-ink-1"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ink-3">
                    Secure Channel
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Corporate Email"
                    className="w-full bg-noir border border-hairline px-4 py-3 text-sm focus:border-gold outline-none transition-colors text-ink-1"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ink-3">
                    Scope of Transformation
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your engagement..."
                    className="w-full bg-noir border border-hairline px-4 py-3 text-sm focus:border-gold outline-none transition-colors text-ink-1 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-noir text-xs font-bold uppercase tracking-widest py-4 transition-colors"
                >
                  Execute Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
