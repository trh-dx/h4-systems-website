import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resources — H Four Systems",
  description:
    "Practical tools and guides for small and mid-sized businesses modernizing their operations. Start with the free SMB Operations Assessment Checklist.",
};

// ── Data ───────────────────────────────────────────────────────────

const checklistSections = [
  {
    label: "Website & Lead Capture",
    color: "#6FAFA6",
    items: [
      "Does your site load in under 3 seconds on mobile?",
      "Is there a clear call to action above the fold?",
      "Do form submissions go to a monitored, tracked inbox?",
      "Can a visitor understand your offer within 5 seconds?",
      "Is your contact information easy to find on every page?",
    ],
  },
  {
    label: "Workflow & Process",
    color: "#83BDB5",
    items: [
      "Are job assignments documented, or communicated verbally/by text?",
      "Can any team member find the status of an open job without asking?",
      "How many manual steps happen between a new inquiry and a first response?",
      "Are recurring tasks systematized, or rebuilt from memory each time?",
      "What happens to a task when the person responsible is unavailable?",
    ],
  },
  {
    label: "Reporting & Visibility",
    color: "#AEB7C2",
    items: [
      "How old is your most recent performance report?",
      "How long does it take to produce a revenue or pipeline report?",
      "Do you know your current close rate without pulling a spreadsheet?",
      "Are KPIs tracked in one place or assembled from multiple sources?",
      "Can you identify your top revenue source from last month in under 60 seconds?",
    ],
  },
  {
    label: "Systems & Integration",
    color: "#F4F7F9",
    items: [
      "How many tools does your team use daily? Are they connected?",
      "Is customer data entered more than once across different systems?",
      "Do you have a single source of truth for client records?",
      "Are there manual data transfers between any of your tools?",
      "Which disconnection causes the most errors or delays?",
    ],
  },
];

const comingNext = [
  {
    title: "Industry Guide: HVAC & Field Services",
    desc: "Modernization priorities specific to dispatch, scheduling, and field team coordination.",
  },
  {
    title: "Industry Guide: Mortgage Operations",
    desc: "Where pipeline visibility, compliance prep, and document handling create the biggest operational drag.",
  },
  {
    title: "The 5 Signs Your Website Isn't Working",
    desc: "Specific, measurable indicators that your site is costing you leads — and what to do about each one.",
  },
];

// ── Page ───────────────────────────────────────────────────────────

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F4F7F9]">

      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-36 pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-4">
            Resources
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-6">
            Practical tools for businesses<br className="hidden sm:block" /> modernizing their operations.
          </h1>
          <p className="text-lg text-[#AEB7C2] leading-relaxed max-w-2xl">
            Built from the same framework we use in every assessment. Start here
            to understand where your operations stand — before talking to anyone.
          </p>
        </div>
      </section>

      {/* ── Featured Resource ── */}
      <section className="pt-6 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl overflow-hidden">

            {/* Header bar */}
            <div className="bg-[#0B1220] border-b border-[#AEB7C2]/10 px-8 py-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                <span className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase bg-[#6FAFA6]/10 border border-[#6FAFA6]/20 px-3 py-1 rounded-full">
                  Free Download
                </span>
                <span className="text-[#AEB7C2]/50 text-xs">PDF Checklist</span>
              </div>
              <span className="text-[#AEB7C2]/40 text-xs hidden sm:block">4 sections · 20 questions</span>
            </div>

            <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

              {/* Left: description + form */}
              <div>
                <h2 className="text-[#F4F7F9] font-bold text-2xl sm:text-3xl leading-tight mb-4">
                  SMB Operations Assessment Checklist
                </h2>
                <p className="text-[#AEB7C2] text-sm leading-relaxed mb-6">
                  A structured self-assessment across the four operational areas where small
                  and mid-sized businesses most commonly lose time, leads, and visibility.
                  Use it to identify where your highest-leverage improvements are before
                  making any technology decisions.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "20 diagnostic questions across 4 operational areas",
                    "Identify gaps without needing a consultant first",
                    "Brings structure to a conversation you're already having",
                    "Built from our real assessment framework",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#AEB7C2]">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6FAFA6]/15 border border-[#6FAFA6]/30 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Email capture form */}
                <div className="bg-[#0B1220] border border-[#AEB7C2]/15 rounded-xl p-6">
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/60 mb-4">
                    Get the Checklist
                  </div>
                  <form action="mailto:contact@hfoursystems.com" method="get" encType="text/plain" className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-1.5">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Jane"
                          className="w-full bg-[#1A2333] border border-[#AEB7C2]/20 rounded-lg px-4 py-2.5
                                     text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30
                                     focus:outline-none focus:border-[#6FAFA6]/60 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-1.5">
                          Business Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="jane@yourcompany.com"
                          className="w-full bg-[#1A2333] border border-[#AEB7C2]/20 rounded-lg px-4 py-2.5
                                     text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30
                                     focus:outline-none focus:border-[#6FAFA6]/60 transition-colors"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full group inline-flex items-center justify-center gap-2
                                 bg-[#6FAFA6] hover:bg-[#83BDB5] text-[#0B1220] font-bold
                                 text-[13px] tracking-[0.16em] uppercase py-3 rounded-lg
                                 transition-colors duration-200 font-mono"
                    >
                      Send Me the Checklist
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </button>
                    <p className="text-[#AEB7C2]/35 text-xs text-center">
                      We&apos;ll send it within one business day. No spam, no list.
                    </p>
                  </form>
                </div>
              </div>

              {/* Right: document preview mockup */}
              <div className="flex flex-col gap-3">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/40 px-1">
                  Preview
                </div>
                <div className="rounded-xl overflow-hidden border border-[#AEB7C2]/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                  {/* Paper document */}
                  <div className="bg-[#fafaf8]">
                    {/* Doc header */}
                    <div className="bg-[#0B1220] px-6 py-4 flex items-center justify-between">
                      <div>
                        <div className="text-[#6FAFA6] text-[8px] font-bold tracking-widest uppercase mb-0.5">H Four Systems</div>
                        <div className="text-white text-[10px] font-bold">SMB Operations Assessment Checklist</div>
                      </div>
                      <div className="text-[#6FAFA6]/50 text-[7px] font-mono">v1.0</div>
                    </div>
                    {/* Intro line */}
                    <div className="px-6 py-3 border-b border-[#e0e0d8]">
                      <div className="text-[8px] text-[#666] leading-relaxed">
                        Use this checklist to assess your current operational state across four
                        key areas. Answer each question honestly — the gaps are where the
                        highest-leverage improvements typically live.
                      </div>
                    </div>
                    {/* Sections preview */}
                    {checklistSections.slice(0, 3).map((section, si) => (
                      <div key={section.label} className={`px-6 py-3 ${si < 2 ? "border-b border-[#e8e8e0]" : ""}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: section.color }} />
                          <div className="text-[8px] font-bold text-[#333] uppercase tracking-wider">{section.label}</div>
                        </div>
                        {section.items.slice(0, si === 0 ? 3 : 2).map((item, ii) => (
                          <div key={ii} className="flex items-start gap-2 mb-1.5">
                            <div className={`flex-shrink-0 w-3 h-3 rounded-sm border mt-0.5 flex items-center justify-center
                              ${ii === 0 && si === 0 ? "bg-[#6FAFA6] border-[#6FAFA6]" : "border-[#bbb] bg-white"}`}>
                              {ii === 0 && si === 0 && (
                                <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                                  <path d="M1 3.5L2.8 5.5L6 1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </div>
                            <div className="text-[7px] text-[#555] leading-tight">{item}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                    {/* Fade / more indicator */}
                    <div className="relative">
                      <div className="px-6 py-2 opacity-30">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-sm bg-[#F4F7F9] flex-shrink-0" />
                          <div className="text-[8px] font-bold text-[#333] uppercase tracking-wider">Systems & Integration</div>
                        </div>
                        {[0,1].map(i => (
                          <div key={i} className="flex items-start gap-2 mb-1.5">
                            <div className="flex-shrink-0 w-3 h-3 rounded-sm border border-[#bbb] bg-white mt-0.5" />
                            <div className="h-1.5 bg-[#ccc] rounded-sm" style={{ width: `${60 + i * 20}%` }} />
                          </div>
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fafaf8]/60 to-[#fafaf8]" />
                    </div>
                    {/* Footer */}
                    <div className="px-6 py-3 border-t border-[#e0e0d8] flex items-center justify-between">
                      <span className="text-[7px] text-[#999]">hfoursystems.com</span>
                      <span className="text-[7px] text-[#999]">Free to use and share</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── What it covers ── */}
      <section className="pt-6 pb-10 px-6 bg-[#1A2333]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-3">
              What&apos;s Inside
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">
              Four sections. Twenty questions.
            </h2>
            <p className="text-[#AEB7C2] max-w-xl text-sm leading-relaxed">
              Each section targets a different operational area. Most businesses will find
              one or two where the gaps are obvious — that&apos;s where to start.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {checklistSections.map((section) => (
              <div
                key={section.label}
                className="bg-[#0B1220] border border-[#AEB7C2]/15 rounded-xl p-7
                           hover:border-[#6FAFA6]/30 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: section.color }} />
                  <h3 className="text-[#F4F7F9] font-semibold text-sm tracking-wide">{section.label}</h3>
                </div>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs text-[#AEB7C2] leading-relaxed">
                      <div className="flex-shrink-0 w-3.5 h-3.5 rounded border border-[#AEB7C2]/25 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coming Next ── */}
      <section className="pt-6 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-3">
              Coming Next
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">
              More guides in development.
            </h2>
            <p className="text-[#AEB7C2] max-w-xl text-sm leading-relaxed">
              Industry-specific guides and focused topic pieces — built around the operational
              problems we see most often.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {comingNext.map((item) => (
              <div
                key={item.title}
                className="bg-[#1A2333] border border-[#AEB7C2]/10 rounded-xl p-7 opacity-70"
              >
                <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/40 mb-4">
                  Coming Soon
                </div>
                <div className="w-6 h-0.5 bg-[#6FAFA6]/40 mb-4 rounded-full" />
                <h3 className="text-[#F4F7F9] font-semibold text-sm leading-snug mb-3">{item.title}</h3>
                <p className="text-[#AEB7C2] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Secondary CTA ── */}
      <section className="pt-6 pb-10 px-6 bg-[#1A2333]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-4">
            Prefer a Live Version?
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-5">
            The free assessment covers all of this — and more.
          </h2>
          <p className="text-[#AEB7C2] leading-relaxed mb-8 max-w-xl mx-auto text-sm">
            The checklist tells you where to look. The assessment tells you what to do about it.
            In 90 minutes, we map your current state and deliver a prioritized modernization
            roadmap — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 font-mono
                         bg-[#6FAFA6] hover:bg-[#83BDB5] text-[#0B1220] font-bold
                         text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-md
                         transition-colors duration-200"
            >
              Schedule a Free Assessment
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/process"
              className="inline-flex items-center justify-center font-mono border border-[#AEB7C2]/25
                         hover:border-[#6FAFA6]/50 text-[#AEB7C2] hover:text-[#F4F7F9] font-bold
                         text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-md
                         transition-colors duration-200"
            >
              View Our Process
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
