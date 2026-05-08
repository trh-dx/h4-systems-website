const nav = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

const trustMetrics = [
  { stat: "40+", label: "Systems Delivered", sub: "Across 6 industries" },
  { stat: "120+", label: "Workflows Automated", sub: "Manual processes eliminated" },
  { stat: "6", label: "Industries Served", sub: "From mortgage to agriculture" },
  { stat: "11 wks", label: "Avg. Time to Modern", sub: "Discovery through delivery" },
];

const methodology = [
  {
    title: "Operational first, technology second",
    desc: "We start with how your business actually operates — not with a technology recommendation. The best system is the one that solves the actual problem.",
  },
  {
    title: "Staged delivery over big-bang launches",
    desc: "High-impact improvements are delivered early in every engagement. Clients see value within weeks, not months.",
  },
  {
    title: "Integration over replacement",
    desc: "We work with the tools your team already uses wherever possible. Modernization doesn't mean ripping out everything and starting over.",
  },
  {
    title: "Documentation and knowledge transfer",
    desc: "Every system we deliver includes documentation, training, and support so your team can operate and evolve it independently.",
  },
];

const values = [
  {
    name: "Practical over clever",
    desc: "We build systems that work reliably, not systems that are technically impressive. Simplicity in service of outcomes.",
  },
  {
    name: "Honest assessment",
    desc: "If your biggest problem isn't technology, we'll tell you. We'd rather give you the right answer than the answer that creates more billable work.",
  },
  {
    name: "Long-term partnership",
    desc: "The businesses we work best with are ones that see modernization as an ongoing initiative, not a one-time project.",
  },
];

const positioningPoints = [
  "We are a modernization partner — not a web agency, not a staffing firm, not a software vendor.",
  "We operate at the intersection of business operations and technology — where strategy meets execution.",
  "Our engagements are structured, measurable, and built around business outcomes.",
  "We work with business owners and operators, not just IT departments.",
];

export default function AboutPage() {
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
          <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-4">About H Four Systems</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-6">
            We modernize how businesses operate.
          </h1>
          <p className="text-lg text-[#AEB7C2] leading-relaxed max-w-2xl">
            H Four Systems is a business modernization and operational systems firm. We help small and mid-sized businesses move from legacy processes and disconnected tools to integrated, automated, and visible operations.
          </p>
        </div>
      </section>

      {/* ── Positioning ── */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-6">What we are — and what we are not.</h2>
              <p className="text-[#AEB7C2] leading-relaxed mb-8">
                Most technology firms position themselves as either a software company, a web agency, or an IT consultancy. H Four Systems sits in a different category: operational modernization. We combine strategic assessment, systems architecture, and execution to deliver measurable operational improvement.
              </p>
              <ul className="space-y-4">
                {positioningPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-[#AEB7C2] leading-relaxed">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8FBFBA]/15 border border-[#8FBFBA]/30 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8FBFBA]" />
                    </div>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl p-8">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/60 mb-5">Our Focus Areas</div>
              <div className="space-y-4">
                {[
                  { area: "Business Modernization", detail: "Legacy systems → modern operational platforms" },
                  { area: "Intelligent Automation", detail: "Manual workflows → automated, reliable processes" },
                  { area: "Systems Integration", detail: "Disconnected tools → unified operational layer" },
                  { area: "Operational Visibility", detail: "Blind operations → real-time executive intelligence" },
                  { area: "Scalable Infrastructure", detail: "Growth-blocking systems → scalable digital foundations" },
                ].map((f) => (
                  <div key={f.area} className="flex gap-4 py-4 border-b border-[#AEB7C2]/10 last:border-0">
                    <div className="flex-shrink-0 w-0.5 bg-[#8FBFBA] rounded-full self-stretch" />
                    <div>
                      <div className="text-[#F4F7F9] font-semibold text-sm mb-0.5">{f.area}</div>
                      <div className="text-[#AEB7C2] text-xs">{f.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Metrics ── */}
      <section className="py-24 px-6 bg-[#1A2333]">
        <div className="max-w-6xl mx-auto">
          <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-8 text-center">By the Numbers</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustMetrics.map((m) => (
              <div key={m.label} className="bg-[#0B1220] border border-[#AEB7C2]/15 rounded-xl p-8 text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#8FBFBA] mb-2 tracking-tight">{m.stat}</div>
                <div className="text-[#F4F7F9] font-semibold text-sm mb-1">{m.label}</div>
                <div className="text-[#AEB7C2] text-xs">{m.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#AEB7C2]/40 text-xs mt-8">
            Metrics reflect aggregate outcomes across completed engagements. Individual results vary based on scope and business context.
          </p>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-3">How We Work</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">Methodology built on operational reality.</h2>
            <p className="text-[#AEB7C2] max-w-xl">Our approach is shaped by working directly with business owners and operators — people who need results, not reports.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {methodology.map((m) => (
              <div key={m.title} className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl p-7">
                <div className="w-8 h-0.5 bg-[#8FBFBA] mb-4 rounded-full" />
                <h3 className="text-[#F4F7F9] font-semibold mb-3">{m.title}</h3>
                <p className="text-[#AEB7C2] text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 px-6 bg-[#1A2333]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-3">What We Stand For</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9]">The values that shape every engagement.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.name} className="bg-[#0B1220] border border-[#AEB7C2]/15 rounded-xl p-8 hover:border-[#8FBFBA]/30 transition-colors">
                <div className="text-[#8FBFBA] text-2xl font-mono mb-5">◈</div>
                <h3 className="text-[#F4F7F9] font-semibold text-lg mb-3">{v.name}</h3>
                <p className="text-[#AEB7C2] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-4">Work With Us</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7F9] mb-5">
            Let's assess your modernization opportunity.
          </h2>
          <p className="text-[#AEB7C2] leading-relaxed mb-10 max-w-xl mx-auto">
            Every engagement starts with a free assessment. No obligation, no sales pitch — just a structured conversation about where your operations are today and where they could be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-[#8FBFBA] hover:bg-[#72A8A3] text-[#0B1220] font-semibold px-8 py-4 rounded-lg transition-colors">
              Schedule a Free Assessment
            </a>
            <a href="/process" className="inline-block border border-[#8FBFBA] hover:bg-[#8FBFBA]/10 text-[#8FBFBA] font-semibold px-8 py-4 rounded-lg transition-colors">
              View Our Process
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
