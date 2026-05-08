"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const assessmentCovers = [
  {
    title: "Current-State Systems Review",
    desc: "We map the tools, workflows, and processes your business currently relies on — including the gaps and bottlenecks.",
  },
  {
    title: "Automation Opportunity Analysis",
    desc: "We identify the highest-leverage manual processes that can be systematized to save time and reduce errors.",
  },
  {
    title: "Website & Lead Capture Evaluation",
    desc: "We assess whether your website is actively working as a lead-generation asset or functioning as a passive brochure.",
  },
  {
    title: "Systems Integration Assessment",
    desc: "We identify disconnected tools and map the integration opportunities that would unify your operational data.",
  },
  {
    title: "Modernization Priority Roadmap",
    desc: "You receive a prioritized, practical roadmap — not a 200-page report. Actionable next steps sequenced by impact.",
  },
];

const whatYouGet = [
  "90-minute structured assessment session",
  "Written operational findings summary",
  "Prioritized modernization opportunity list",
  "Recommended next steps with rough scope",
  "No obligation — no sales pressure",
];

const industries = [
  "Mortgage & Finance",
  "HVAC & Field Services",
  "Sanitation & Waste",
  "Ranch & Agriculture",
  "Mid-Market Operations",
  "Service Business",
  "Other",
];

const challenges = [
  "Manual processes slowing the team down",
  "Disconnected systems with no unified view",
  "Website not generating leads",
  "No real-time operational visibility",
  "Slow reporting and data access",
  "Preparing for growth or scale",
  "Other / Not sure yet",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F4F7F9]">

      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-4">Business Modernization Assessment</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-6">
            Understand your modernization opportunity. At no cost.
          </h1>
          <p className="text-lg text-[#AEB7C2] leading-relaxed max-w-2xl">
            Every engagement begins with a structured assessment. We map where your business is today, identify where the highest-leverage opportunities are, and define a practical path forward — before any commitment is made.
          </p>
        </div>
      </section>

      {/* ── Assessment detail + Form ── */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: Assessment detail */}
            <div className="space-y-8">
              {/* What the assessment covers */}
              <div className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl p-8">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/60 mb-6">What the Assessment Covers</div>
                <div className="space-y-5">
                  {assessmentCovers.map((item, i) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8FBFBA]/15 border border-[#8FBFBA]/30 flex items-center justify-center mt-0.5">
                        <span className="text-[#8FBFBA] text-xs font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <div className="text-[#F4F7F9] font-semibold text-sm mb-1">{item.title}</div>
                        <div className="text-[#AEB7C2] text-xs leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What you receive */}
              <div className="bg-[#0B1220] border border-[#8FBFBA]/20 rounded-xl p-8">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#8FBFBA] mb-5">What You Receive</div>
                <ul className="space-y-3">
                  {whatYouGet.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#AEB7C2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FBFBA] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-[#8FBFBA]/15">
                  <div className="text-xs text-[#AEB7C2]/50 uppercase tracking-wider mb-0.5">Format</div>
                  <div className="text-[#F4F7F9] text-sm font-medium">Video call — 60 to 90 minutes</div>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl p-8">
              <div className="text-[#F4F7F9] font-bold text-xl mb-2">Request Your Assessment</div>
              <p className="text-[#AEB7C2] text-sm mb-8">We'll follow up within one business day to confirm a time that works.</p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30 focus:outline-none focus:border-[#8FBFBA]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30 focus:outline-none focus:border-[#8FBFBA]/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Operations LLC"
                    className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30 focus:outline-none focus:border-[#8FBFBA]/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane@yourcompany.com"
                    className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30 focus:outline-none focus:border-[#8FBFBA]/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                    Industry
                  </label>
                  <select className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm focus:outline-none focus:border-[#8FBFBA]/60 transition-colors appearance-none">
                    <option value="" className="text-[#AEB7C2]/50">Select your industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                    Primary Challenge
                  </label>
                  <select className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm focus:outline-none focus:border-[#8FBFBA]/60 transition-colors appearance-none">
                    <option value="">What's slowing you down most?</option>
                    {challenges.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                    Additional Context <span className="text-[#AEB7C2]/40 normal-case font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Anything else we should know before the assessment — size of team, current tools, timeline pressures..."
                    className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30 focus:outline-none focus:border-[#8FBFBA]/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8FBFBA] hover:bg-[#72A8A3] text-[#0B1220] font-semibold py-4 rounded-lg transition-colors text-sm"
                >
                  Request Free Assessment
                </button>

                <p className="text-[#AEB7C2]/40 text-xs text-center">
                  No commitment required. We will follow up within one business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alternative contact ── */}
      <section className="py-16 px-6 bg-[#1A2333]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#AEB7C2] text-sm mb-2">Prefer to reach out directly?</div>
          <div className="text-[#F4F7F9] font-semibold text-lg mb-1">contact@hfoursystems.com</div>
          <div className="text-[#AEB7C2]/60 text-sm">We respond to all inquiries within one business day.</div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
