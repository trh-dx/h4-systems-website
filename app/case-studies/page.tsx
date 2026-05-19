import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Studies — H Four Systems",
  description: "Real results from real engagements. See how H Four Systems cut closing times, eliminated manual workflows, and modernized operations across industries.",
};

const featured = {
  industry: "Mortgage Operations",
  client: "Regional Mortgage Group",
  region: "Mid-Atlantic, USA",
  challenge:
    "A regional mortgage lender operating across four states was running its entire pipeline on a combination of spreadsheets, email threads, and a legacy loan-origination system from 2009. Loan officers had no visibility into pipeline status. Compliance documentation was assembled manually before every audit. Closing timelines averaged 47 days.",
  outcomes: [
    { stat: "31 days", label: "Average closing time (down from 47)" },
    { stat: "68%", label: "Reduction in manual document handling" },
    { stat: "4 hrs", label: "Weekly compliance prep (down from 22 hrs)" },
  ],
  phases: [
    { name: "Discovery", detail: "Mapped 14 distinct manual handoffs across origination, processing, and closing teams." },
    { name: "Architecture", detail: "Designed a unified operational dashboard connected to existing LOS data via API." },
    { name: "Build", detail: "Delivered pipeline visibility tooling, automated document staging, and a compliance audit module." },
    { name: "Optimize", detail: "Reduced average touchpoints per loan from 38 to 11 over a 90-day optimization cycle." },
  ],
};

const caseStudies = [
  {
    industry: "HVAC & Field Services",
    client: "Clearwater HVAC",
    challenge: "Disconnected scheduling, paper work orders, and zero real-time job visibility across 12 field technicians.",
    outcome: "54% reduction in dispatch errors",
    tag: "Field Operations",
  },
  {
    industry: "Sanitation & Waste",
    client: "Tri-County Sanitation",
    challenge: "Route planning done daily via phone calls, billing on 30-day paper cycles, no fleet tracking.",
    outcome: "3.2× improvement in billing cycle time",
    tag: "Operations & Logistics",
  },
  {
    industry: "Ranch & Agriculture",
    client: "Lone Star Cattle Co.",
    challenge: "Inventory, health records, and vendor relationships managed in notebooks and a shared Excel file.",
    outcome: "Operational visibility across 4,800 head of cattle",
    tag: "Agricultural Systems",
  },
  {
    industry: "Service Business",
    client: "Meridian Property Services",
    challenge: "Proposal generation took 4–6 hours per job. Follow-up was manual. No lead tracking system.",
    outcome: "2.1× increase in proposal close rate",
    tag: "Sales & Lead Capture",
  },
];

const beforeAfter = [
  {
    label: "Lead Management",
    before: { state: "Spreadsheets + email threads", indicators: ["No central record", "Manual follow-up", "Leads fall through gaps"] },
    after: { state: "Unified lead pipeline", indicators: ["Automated intake forms", "Tracked through close", "Clear ownership per lead"] },
  },
  {
    label: "Operational Reporting",
    before: { state: "Monthly PDF reports", indicators: ["Always 30 days behind", "Built manually in Excel", "No actionable visibility"] },
    after: { state: "Live operational dashboard", indicators: ["Real-time KPI monitoring", "Automated data aggregation", "Executive-ready views"] },
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F4F7F9]">

      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-4">Transformation Case Studies</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-6">
            Operational modernization<br className="hidden sm:block" /> in practice.
          </h1>
          <p className="text-lg text-[#AEB7C2] leading-relaxed max-w-2xl">
            Each engagement is a structured transformation initiative — not a website project. We assess operations, architect modern systems, and deliver measurable outcomes.
          </p>
        </div>
      </section>

      {/* ── Featured Case Study ── */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="border border-[#AEB7C2]/15 rounded-2xl overflow-hidden">

            {/* Header bar */}
            <div className="bg-[#1A2333] px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#AEB7C2]/15">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#6FAFA6] bg-[#6FAFA6]/10 border border-[#6FAFA6]/20 px-3 py-1 rounded-full">
                  Featured Engagement
                </span>
                <span className="text-xs text-[#AEB7C2]">{featured.industry}</span>
              </div>
              <span className="text-xs text-[#AEB7C2]/60">{featured.region}</span>
            </div>

            <div className="bg-[#0B1220] p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left: narrative */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-2">{featured.client}</h2>
                  <div className="w-10 h-0.5 bg-[#6FAFA6] mb-6 rounded-full" />
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2] mb-3">Challenge</h3>
                  <p className="text-[#AEB7C2] text-sm leading-relaxed mb-8">{featured.challenge}</p>

                  <h3 className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2] mb-4">Implementation Phases</h3>
                  <div className="space-y-4">
                    {featured.phases.map((phase, i) => (
                      <div key={phase.name} className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6FAFA6]/15 border border-[#6FAFA6]/30 flex items-center justify-center mt-0.5">
                          <span className="text-[#6FAFA6] text-xs font-bold">{i + 1}</span>
                        </div>
                        <div>
                          <div className="text-[#F4F7F9] text-sm font-semibold mb-0.5">{phase.name}</div>
                          <div className="text-[#AEB7C2] text-xs leading-relaxed">{phase.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: outcomes */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2] mb-6">Measurable Outcomes</h3>
                    <div className="space-y-5">
                      {featured.outcomes.map((o) => (
                        <div key={o.label} className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl p-6">
                          <div className="text-4xl font-bold text-[#6FAFA6] mb-1 tracking-tight">{o.stat}</div>
                          <div className="text-[#AEB7C2] text-sm">{o.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-[#AEB7C2]/10">
                    <p className="text-xs text-[#AEB7C2]/60 leading-relaxed">
                      Outcomes represent post-implementation results measured at 90 days. Client details are representative composites used for illustration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Study Grid ── */}
      <section className="py-24 px-6 bg-[#1A2333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-2">Additional Engagements</h2>
          <p className="text-[#AEB7C2] mb-12 max-w-xl">Across industries, the pattern is the same — operational complexity slowing growth, and a clear path forward.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {caseStudies.map((cs) => (
              <div key={cs.client} className="bg-[#0B1220] border border-[#AEB7C2]/15 rounded-xl p-7 hover:border-[#6FAFA6]/30 transition-colors">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#6FAFA6] bg-[#6FAFA6]/10 border border-[#6FAFA6]/20 px-2.5 py-1 rounded-full">
                    {cs.tag}
                  </span>
                </div>
                <h3 className="text-[#F4F7F9] font-semibold text-lg mb-1">{cs.client}</h3>
                <div className="text-xs text-[#AEB7C2]/60 mb-4">{cs.industry}</div>
                <div className="w-6 h-px bg-[#AEB7C2]/20 mb-4" />
                <p className="text-[#AEB7C2] text-sm leading-relaxed mb-6">{cs.challenge}</p>
                <div className="bg-[#1A2333] border border-[#6FAFA6]/20 rounded-lg px-4 py-3">
                  <div className="text-xs text-[#AEB7C2]/60 mb-0.5 uppercase tracking-wider font-medium">Primary Outcome</div>
                  <div className="text-[#6FAFA6] font-semibold text-sm">{cs.outcome}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-2">Before & After</h2>
          <p className="text-[#AEB7C2] mb-14 max-w-xl">The operational gap between legacy processes and modern systems is often wider than businesses realize.</p>
          <div className="space-y-8">
            {beforeAfter.map((ba) => (
              <div key={ba.label} className="border border-[#AEB7C2]/15 rounded-xl overflow-hidden">
                <div className="bg-[#1A2333] px-6 py-3 border-b border-[#AEB7C2]/10">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]">{ba.label}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_48px_1fr]">
                  {/* Before */}
                  <div className="bg-[#0B1220] p-7">
                    <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/50 mb-3">Before</div>
                    <div className="text-[#F4F7F9] font-semibold mb-4">{ba.before.state}</div>
                    <ul className="space-y-2">
                      {ba.before.indicators.map((ind) => (
                        <li key={ind} className="flex items-center gap-2.5 text-sm text-[#AEB7C2]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#AEB7C2]/30 flex-shrink-0" />
                          {ind}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center bg-[#0B1220] border-l border-r border-[#AEB7C2]/10">
                    <svg className="w-5 h-5 text-[#6FAFA6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  {/* After */}
                  <div className="bg-[#0B1220] p-7 border-t md:border-t-0 border-[#AEB7C2]/10">
                    <div className="text-xs font-semibold tracking-widest uppercase text-[#6FAFA6] mb-3">After</div>
                    <div className="text-[#F4F7F9] font-semibold mb-4">{ba.after.state}</div>
                    <ul className="space-y-2">
                      {ba.after.indicators.map((ind) => (
                        <li key={ind} className="flex items-center gap-2.5 text-sm text-[#AEB7C2]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6] flex-shrink-0" />
                          {ind}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment CTA ── */}
      <section className="py-24 px-6 bg-[#1A2333]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-4">Start Your Transformation</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7F9] mb-5">
            Ready to assess your operational modernization opportunity?
          </h2>
          <p className="text-[#AEB7C2] leading-relaxed mb-10 max-w-xl mx-auto">
            Every engagement begins with a structured assessment — mapping your current state, identifying improvement opportunities, and defining a practical path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-[#6FAFA6] hover:bg-[#83BDB5] text-[#0B1220] font-semibold px-8 py-4 rounded-lg transition-colors">
              Schedule a Free Assessment
            </a>
            <a href="/process" className="inline-block border border-[#6FAFA6] hover:bg-[#6FAFA6]/10 text-[#6FAFA6] font-semibold px-8 py-4 rounded-lg transition-colors">
              View Our Process
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
