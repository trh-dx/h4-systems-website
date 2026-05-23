import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Process — H Four Systems",
  description:
    "A four-phase engagement model: Discover, Strategize, Build, and Optimize. Structured enough to deliver reliably — flexible enough to fit your situation.",
};

// ── Data ───────────────────────────────────────────────────────────

const phases = [
  {
    num: "01",
    name: "Discover",
    tagline: "Understand the full operational picture.",
    desc: "Before recommending a single solution, we invest time in understanding how your business actually operates — not just how it's supposed to work on paper. We map systems, workflows, bottlenecks, and goals.",
    activities: [
      "Stakeholder interviews and process walkthroughs",
      "Current-state systems and tool inventory",
      "Workflow mapping and handoff analysis",
      "Pain point and opportunity prioritization",
      "Business goal alignment and success criteria definition",
    ],
    deliverable: "Operational Assessment Report",
    duration: "1–2 weeks",
  },
  {
    num: "02",
    name: "Strategize",
    tagline: "Define the right approach before writing a single line of code.",
    desc: "With a clear picture of the current state, we define the modernization strategy — what to build, in what order, and using what tools — and establish clear success criteria before any implementation begins.",
    activities: [
      "Modernization approach and solution design",
      "Technology selection and rationale",
      "Integration and data flow mapping",
      "Implementation phasing and priority sequencing",
      "Risk identification and mitigation planning",
    ],
    deliverable: "Modernization Strategy & Roadmap",
    duration: "1–2 weeks",
  },
  {
    num: "03",
    name: "Build",
    tagline: "Deliver working systems, not just recommendations.",
    desc: "We build in structured sprints with clear milestones and regular check-ins. Every deliverable is tested in the context of your real business operations — not just against functional requirements.",
    activities: [
      "Sprint-based development with weekly deliverables",
      "Stakeholder review and feedback loops",
      "Integration testing with existing systems",
      "Staff training and adoption support",
      "Documentation and operational runbooks",
    ],
    deliverable: "Live, production-ready systems",
    duration: "3–6 weeks depending on scope",
  },
  {
    num: "04",
    name: "Optimize",
    tagline: "Measure, refine, and improve over time.",
    desc: "Modernization doesn't end at launch. We monitor operational performance against the success criteria defined in Discovery, identify refinement opportunities, and continue improving the system as the business evolves.",
    activities: [
      "KPI monitoring against baseline metrics",
      "Post-launch issue resolution and refinement",
      "Workflow performance analysis",
      "Automation expansion opportunities",
      "Quarterly operational review",
    ],
    deliverable: "Ongoing operational optimization",
    duration: "Ongoing (3-month minimum)",
  },
];

// ── Page ───────────────────────────────────────────────────────────

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F4F7F9]">

      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-36 pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-4">
            Implementation Methodology
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-6">
            A structured path from<br className="hidden sm:block" /> current state to modern operations.
          </h1>
          <p className="text-lg text-[#AEB7C2] leading-relaxed max-w-2xl">
            Every engagement follows a consistent four-phase methodology. Structured enough
            to deliver reliably. Flexible enough to fit your specific situation.
          </p>
        </div>
      </section>

      {/* ── Phase Detail Cards ── */}
      <section className="pb-6 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl overflow-hidden"
            >
              {/* Phase header */}
              <div className="bg-[#0B1220] border-b border-[#AEB7C2]/10 px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                  <span className="text-[#6FAFA6] text-3xl font-bold font-mono tracking-tight">
                    {phase.num}
                  </span>
                  <div>
                    <div className="text-[#F4F7F9] font-bold text-xl">{phase.name}</div>
                    <div className="text-[#AEB7C2] text-sm">{phase.tagline}</div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs text-[#AEB7C2]/50 uppercase tracking-wider mb-0.5">
                    Duration
                  </div>
                  <div className="text-[#F4F7F9] text-sm font-medium">{phase.duration}</div>
                </div>
              </div>

              <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: description + deliverable */}
                <div>
                  <p className="text-[#AEB7C2] text-sm leading-relaxed mb-6">{phase.desc}</p>
                  <div className="bg-[#0B1220] border border-[#6FAFA6]/20 rounded-lg px-5 py-4">
                    <div className="text-xs text-[#AEB7C2]/50 uppercase tracking-wider mb-1">
                      Primary Deliverable
                    </div>
                    <div className="text-[#6FAFA6] font-semibold text-sm">
                      {phase.deliverable}
                    </div>
                  </div>
                </div>

                {/* Right: activities */}
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/60 mb-4">
                    Activities
                  </div>
                  <ul className="space-y-3">
                    {phase.activities.map((act) => (
                      <li key={act} className="flex items-start gap-3 text-sm text-[#AEB7C2]">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6FAFA6]/15 border border-[#6FAFA6]/30 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6]" />
                        </div>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Website Care Plan ── */}
      <section className="pt-6 pb-6 px-6 bg-[#0B1220]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl overflow-hidden">
            {/* Header bar — matches phase card style */}
            <div className="bg-[#0B1220] border-b border-[#AEB7C2]/10 px-8 py-5 flex items-center gap-5">
              <div className="w-8 h-0.5 bg-[#6FAFA6] rounded-full" />
              <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase">
                After Launch
              </div>
            </div>

            <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: copy */}
              <div>
                <h2 className="text-[#F4F7F9] font-bold text-2xl sm:text-3xl leading-tight mb-5">
                  We Don&apos;t Disappear After Go-Live
                </h2>
                <p className="text-[#AEB7C2] text-sm leading-relaxed mb-8">
                  Most projects don&apos;t end at launch — they evolve. Our Website Care Plan keeps
                  your site and systems running, updated, and improving over time.
                </p>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#6FAFA6] hover:bg-[#83BDB5]
                             text-[#0B1220] font-semibold text-sm px-6 py-3 rounded-lg
                             transition-colors duration-200"
                >
                  Ask About Our Care Plan
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Right: three bullet points */}
              <div className="space-y-4">
                {[
                  "Ongoing updates and content changes",
                  "Bug fixes and integration monitoring",
                  "Performance reviews and improvement recommendations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6FAFA6]/15 border border-[#6FAFA6]/30 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6]" />
                    </div>
                    <span className="text-[#AEB7C2] text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Assessment CTA ── */}
      <section className="pt-6 pb-10 px-6 bg-[#1A2333]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-4">
            Start the Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-5">
            Ready to begin your modernization assessment?
          </h2>
          <p className="text-[#AEB7C2] leading-relaxed mb-10 max-w-xl mx-auto">
            The first step is a structured discovery conversation — no commitment required.
            We&apos;ll map your current state and identify where the highest-leverage
            opportunities are.
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
              href="/services"
              className="inline-flex items-center justify-center font-mono border border-[#AEB7C2]/25
                         hover:border-[#6FAFA6]/50 text-[#AEB7C2] hover:text-[#F4F7F9] font-bold
                         text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-md
                         transition-colors duration-200"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
