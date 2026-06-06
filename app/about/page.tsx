import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — H Four Systems",
  description:
    "H Four Systems brings enterprise IT experience to small and mid-sized businesses — delivering practical modernization, automation, and operational systems that create real results.",
};

// ── Data ───────────────────────────────────────────────────────────

const trustMetrics = [
  { stat: "20+",    label: "Years Enterprise IT Experience", sub: "Systems, operations, and delivery" },
  { stat: "6",      label: "Industries Served",              sub: "From mortgage to agriculture"      },
  { stat: "40+",    label: "Systems Delivered",              sub: "Across SMB modernization projects" },
  { stat: "11 wks", label: "Avg. Time to Modern",            sub: "Discovery through delivery"        },
];

const isPoints = [
  "A website modernization partner",
  "A simple automation and workflow partner",
  "A lead capture and follow-up improvement partner",
  "A dashboard and business visibility partner",
  "A practical technology partner for small businesses",
];

const isNotPoints = [
  "Not a generic web design shop",
  "Not a staffing firm",
  "Not a bloated consulting company",
  "Not a software vendor pushing tools you do not need",
  "Not an AI hype company",
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
    title: "Built to be owned, not depended on",
    desc: "Every system we deliver is documented and designed so your team can operate, maintain, and evolve it independently — not so you stay reliant on us.",
  },
];

const principles = [
  {
    name: "Practical over clever",
    desc: "We build systems that work reliably, not systems that are technically impressive.",
  },
  {
    name: "Honest assessment",
    desc: "If your biggest problem isn't technology, we'll tell you — even if that means less work for us.",
  },
  {
    name: "No unnecessary complexity",
    desc: "Every recommendation has a clear business rationale. We don't introduce technology for its own sake.",
  },
];


// ── Page ───────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F4F7F9]">

      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-4">
            About H Four Systems
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-6">
            Enterprise experience.<br className="hidden sm:block" />
            Built for growing businesses.
          </h1>
          <p className="text-lg text-[#AEB7C2] leading-relaxed max-w-2xl">
            H Four Systems brings structured enterprise IT thinking to small and mid-sized
            businesses — delivering modern websites, automation, dashboards, and integrated
            systems that create real operational results without the complexity or cost of
            a large consulting firm.
          </p>
        </div>
      </section>

      {/* ── Positioning ── */}
      <section className="pb-10 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Full-width heading + intro */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-5">
              What H4 Systems Is — and What We Are Not
            </h2>
            <p className="text-[#AEB7C2] leading-relaxed max-w-2xl">
              H4 Systems exists to help small businesses improve the digital parts of their
              business that customers and owners feel every day — the website, the contact
              process, the follow-up workflow, the reporting, and the tools behind the scenes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* Left: What H4 Systems Is */}
            <div>
              <h3 className="text-xl font-bold text-[#F4F7F9] mb-5">
                What H4 Systems Is
              </h3>
              <p className="text-[#AEB7C2] text-sm leading-relaxed mb-4">
                H4 Systems is a practical modernization partner for small businesses. We help
                improve the parts of your business that are outdated, manual, scattered, or
                harder to manage than they should be.
              </p>
              <p className="text-[#AEB7C2] text-sm leading-relaxed mb-8">
                We focus on useful improvements like better websites, stronger lead capture,
                faster follow-up, simple automations, dashboards, and connected tools that
                make the business easier to run.
              </p>
              <ul className="space-y-4">
                {isPoints.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-3 text-sm text-[#AEB7C2] leading-relaxed"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6FAFA6]/15 border border-[#6FAFA6]/30 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6]" />
                    </div>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: What H4 Systems Is Not */}
            <div className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#F4F7F9] mb-5">
                What H4 Systems Is Not
              </h3>
              <p className="text-[#AEB7C2] text-sm leading-relaxed mb-8">
                H4 Systems is not here to sell unnecessary software, overcomplicate your
                operations, or hand you a strategy document with no execution. We focus on
                practical improvements that solve real problems and make sense for your business.
              </p>
              <ul className="space-y-4">
                {isNotPoints.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-3 text-sm text-[#AEB7C2] leading-relaxed"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6FAFA6]/15 border border-[#6FAFA6]/30 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6]" />
                    </div>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Closing line */}
          <p className="mt-10 pt-8 border-t border-[#AEB7C2]/10 text-[#AEB7C2] text-sm leading-relaxed">
            The goal is simple: help your business look better, respond faster, stay organized,
            and grow without adding more manual work.
          </p>

        </div>
      </section>

      {/* ── Trust Metrics ── */}
      <section className="pt-6 pb-10 px-6 bg-[#1A2333]">
        <div className="max-w-6xl mx-auto">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-8 text-center">
            By the Numbers
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustMetrics.map((m) => (
              <div
                key={m.label}
                className="bg-[#0B1220] border border-[#AEB7C2]/15 rounded-xl p-8 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#6FAFA6] mb-2 tracking-tight">
                  {m.stat}
                </div>
                <div className="text-[#F4F7F9] font-semibold text-sm mb-1">{m.label}</div>
                <div className="text-[#AEB7C2] text-xs">{m.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#AEB7C2]/40 text-xs mt-8">
            Metrics reflect aggregate outcomes across completed engagements.
            Individual results vary based on scope and business context.
          </p>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="pt-6 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-3">
              How We Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">
              Methodology built on operational reality.
            </h2>
            <p className="text-[#AEB7C2] max-w-xl">
              Our approach is shaped by working directly with business owners and operators —
              people who need results, not reports.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {methodology.map((m) => (
              <div
                key={m.title}
                className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl p-7
                           hover:border-[#6FAFA6]/30 transition-colors duration-200"
              >
                <div className="w-8 h-0.5 bg-[#6FAFA6] mb-4 rounded-full" />
                <h3 className="text-[#F4F7F9] font-semibold mb-3">{m.title}</h3>
                <p className="text-[#AEB7C2] text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guiding Principles ── */}
      <section className="pt-6 pb-10 px-6 bg-[#1A2333] border-t border-[#AEB7C2]/8">
        <div className="max-w-6xl mx-auto">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-8">
            What We Stand For
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {principles.map((p) => (
              <div key={p.name} className="flex gap-4">
                <div className="flex-shrink-0 w-0.5 bg-[#6FAFA6] rounded-full opacity-60 self-stretch" />
                <div>
                  <h3 className="text-[#F4F7F9] font-semibold text-[15px] mb-2">{p.name}</h3>
                  <p className="text-[#AEB7C2] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Personal Story ── */}
      {/* TODO: Add founder/background story section — to be written separately */}

      {/* ── CTA ── */}
      <section className="pt-6 pb-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-4">
            Work With Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-5">
            Ready to see what could be better?
          </h2>
          <p className="text-[#AEB7C2] leading-relaxed mb-10 max-w-xl mx-auto">
            Start with a free website and workflow review. No commitment, no sales pitch —
            just a clear look at what is working, what is not, and what is worth improving first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 font-mono
                         bg-[#6FAFA6] hover:bg-[#83BDB5] text-[#0B1220] font-bold
                         text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-md
                         transition-colors duration-200"
            >
              Request Free Assessment
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
