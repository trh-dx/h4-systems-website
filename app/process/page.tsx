const nav = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

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
    name: "Architect",
    tagline: "Design a modernization strategy, not just a project plan.",
    desc: "With a clear picture of the current state, we design the target architecture — what the modernized system will look like, how it will integrate with existing tools, and what the implementation sequence should be.",
    activities: [
      "Target-state systems architecture design",
      "Technology stack selection and rationale",
      "Integration and data flow mapping",
      "Implementation phasing and dependency sequencing",
      "Risk identification and mitigation planning",
    ],
    deliverable: "Modernization Architecture Blueprint",
    duration: "1–2 weeks",
  },
  {
    num: "03",
    name: "Build",
    tagline: "Deliver working systems, not just recommendations.",
    desc: "We build in structured sprints with clear milestones and regular check-ins. Every deliverable is tested in context of your real business operations — not just functional requirements.",
    activities: [
      "Sprint-based development with weekly deliverables",
      "Stakeholder review and feedback loops",
      "Integration testing with existing systems",
      "Staff training and adoption support",
      "Documentation and operational runbooks",
    ],
    deliverable: "Live, production-ready systems",
    duration: "4–12 weeks depending on scope",
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

const maturityLevels = [
  {
    level: "Legacy",
    label: "Before",
    traits: ["Manual processes", "Disconnected tools", "No visibility", "Reactive operations"],
    color: "border-[#AEB7C2]/20 bg-[#0B1220]",
    labelColor: "text-[#AEB7C2]/50",
  },
  {
    level: "Transitional",
    label: "During",
    traits: ["Systems mapped", "Architecture defined", "Automation staged", "Dashboards building"],
    color: "border-[#8FBFBA]/20 bg-[#0B1220]",
    labelColor: "text-[#8FBFBA]/70",
  },
  {
    level: "Modern",
    label: "After",
    traits: ["Integrated systems", "Automated workflows", "Real-time visibility", "Proactive operations"],
    color: "border-[#8FBFBA]/40 bg-[#8FBFBA]/5",
    labelColor: "text-[#8FBFBA]",
  },
];

const principles = [
  {
    title: "Outcomes over deliverables",
    desc: "We measure success by operational improvement, not by whether we shipped a feature.",
  },
  {
    title: "No unnecessary complexity",
    desc: "Every recommendation has a clear business rationale. We don't introduce technology for its own sake.",
  },
  {
    title: "Staged, sequenced delivery",
    desc: "High-leverage improvements are delivered early. We don't make clients wait 12 weeks to see results.",
  },
  {
    title: "Built to be maintained",
    desc: "Every system we deliver is documented, supported, and designed to evolve as the business grows.",
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F4F7F9]">

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1220]/95 backdrop-blur-sm border-b border-[#AEB7C2]/10">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
          <a href="/">
            <img src="/H4%20Systems%20Logo.png" alt="H Four Systems" className="h-20 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-[#AEB7C2] hover:text-[#F4F7F9] transition-colors">
                {item.label}
              </a>
            ))}
            <a href="/contact" className="text-sm bg-[#8FBFBA] hover:bg-[#72A8A3] text-[#0B1220] font-semibold px-4 py-2 rounded-md transition-colors">
              Schedule a Review
            </a>
          </nav>
          <button className="md:hidden text-[#AEB7C2] hover:text-[#F4F7F9]" aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-4">Implementation Methodology</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-6">
            A structured path from<br className="hidden sm:block" /> current state to modern operations.
          </h1>
          <p className="text-lg text-[#AEB7C2] leading-relaxed max-w-2xl">
            Every engagement follows a consistent four-phase methodology. Structured enough to deliver reliably. Flexible enough to fit your specific situation.
          </p>
        </div>
      </section>

      {/* ── Timeline bar ── */}
      <section className="pb-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="hidden md:flex items-center">
            {phases.map((phase, i) => (
              <div key={phase.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#8FBFBA]/15 border border-[#8FBFBA]/40 flex items-center justify-center">
                      <span className="text-[#8FBFBA] text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-[#F4F7F9] font-semibold text-sm">{phase.name}</span>
                  </div>
                  <div className="w-full h-0.5 bg-[#8FBFBA]/20 relative">
                    <div className="absolute inset-y-0 left-0 w-full bg-[#8FBFBA]/40 rounded-full" />
                  </div>
                </div>
                {i < phases.length - 1 && (
                  <svg className="w-4 h-4 text-[#AEB7C2]/30 flex-shrink-0 mx-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Phase Detail Cards ── */}
      <section className="pb-24 px-6 pt-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {phases.map((phase) => (
            <div key={phase.num} className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl overflow-hidden">
              {/* Phase header */}
              <div className="bg-[#0B1220] border-b border-[#AEB7C2]/10 px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                  <span className="text-[#8FBFBA] text-3xl font-bold font-mono tracking-tight">{phase.num}</span>
                  <div>
                    <div className="text-[#F4F7F9] font-bold text-xl">{phase.name}</div>
                    <div className="text-[#AEB7C2] text-sm">{phase.tagline}</div>
                  </div>
                </div>
                <div className="flex gap-6 text-right">
                  <div>
                    <div className="text-xs text-[#AEB7C2]/50 uppercase tracking-wider mb-0.5">Duration</div>
                    <div className="text-[#F4F7F9] text-sm font-medium">{phase.duration}</div>
                  </div>
                </div>
              </div>

              <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#AEB7C2] text-sm leading-relaxed mb-6">{phase.desc}</p>
                  <div className="bg-[#0B1220] border border-[#8FBFBA]/20 rounded-lg px-5 py-4">
                    <div className="text-xs text-[#AEB7C2]/50 uppercase tracking-wider mb-1">Primary Deliverable</div>
                    <div className="text-[#8FBFBA] font-semibold text-sm">{phase.deliverable}</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/60 mb-4">Activities</div>
                  <ul className="space-y-3">
                    {phase.activities.map((act) => (
                      <li key={act} className="flex items-start gap-3 text-sm text-[#AEB7C2]">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8FBFBA]/15 border border-[#8FBFBA]/30 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8FBFBA]" />
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

      {/* ── Maturity Model ── */}
      <section className="py-24 px-6 bg-[#1A2333]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-3">Operational Maturity</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">Where you are. Where you're going.</h2>
            <p className="text-[#AEB7C2] max-w-xl">The modernization journey has three clear states. Most businesses we work with start in Legacy and reach Modern within one engagement cycle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {maturityLevels.map((m) => (
              <div key={m.level} className={`border rounded-xl p-8 ${m.color}`}>
                <div className={`text-xs font-semibold tracking-widest uppercase mb-1 ${m.labelColor}`}>{m.label}</div>
                <div className="text-[#F4F7F9] font-bold text-xl mb-6">{m.level}</div>
                <ul className="space-y-3">
                  {m.traits.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-sm text-[#AEB7C2]">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${m.label === "After" ? "bg-[#8FBFBA]" : "bg-[#AEB7C2]/30"}`} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-3">Guiding Principles</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9]">How we approach every engagement.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p) => (
              <div key={p.title} className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl p-6">
                <div className="w-8 h-0.5 bg-[#8FBFBA] mb-4 rounded-full" />
                <h3 className="text-[#F4F7F9] font-semibold mb-3">{p.title}</h3>
                <p className="text-[#AEB7C2] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment CTA ── */}
      <section className="py-24 px-6 bg-[#1A2333]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-4">Start the Process</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7F9] mb-5">
            Ready to begin your modernization assessment?
          </h2>
          <p className="text-[#AEB7C2] leading-relaxed mb-10 max-w-xl mx-auto">
            The first step is a structured discovery conversation — no commitment required. We'll map your current state and identify where the highest-leverage opportunities are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-[#8FBFBA] hover:bg-[#72A8A3] text-[#0B1220] font-semibold px-8 py-4 rounded-lg transition-colors">
              Schedule a Free Assessment
            </a>
            <a href="/services" className="inline-block border border-[#8FBFBA] hover:bg-[#8FBFBA]/10 text-[#8FBFBA] font-semibold px-8 py-4 rounded-lg transition-colors">
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-6 border-t border-[#AEB7C2]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-center md:text-left">
            <div className="text-[#F4F7F9] font-semibold mb-1">H Four Systems</div>
            <div className="text-[#AEB7C2] text-sm">Modern websites. Practical systems. Better business outcomes.</div>
          </div>
          <div className="text-[#AEB7C2]/50 text-sm">© 2026 H Four Systems. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
