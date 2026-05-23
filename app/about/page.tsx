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

const differentiators = [
  {
    title: "Enterprise thinking at SMB scale",
    desc: "20+ years of enterprise IT and systems delivery — applied practically, without the overhead or cost of a large consulting firm.",
  },
  {
    title: "We work with owners, not IT departments",
    desc: "Most of our clients are business owners and operators who need results, not reports. We communicate in business terms.",
  },
  {
    title: "Measured by operational outcomes",
    desc: "Success is defined before we build anything. If the work doesn't deliver a measurable operational improvement, something went wrong.",
  },
  {
    title: "No vendor agenda",
    desc: "We don't sell software. We recommend and build what solves your specific problem — using the best tool for the job, not the one we profit from.",
  },
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

const positioningPoints = [
  "A modernization partner — not a web agency, staffing firm, or software vendor.",
  "We operate where business operations and technology execution meet.",
  "Engagements are structured, measurable, and built around business outcomes.",
  "We work with business owners and operators, not just IT departments.",
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
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* Left: what we are */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-6">
                What we are — and what we are not.
              </h2>
              <p className="text-[#AEB7C2] leading-relaxed mb-8">
                Most technology firms position themselves as either a software company, a web
                agency, or an IT consultancy. H Four Systems sits in a different category:
                operational modernization. We combine strategic assessment, systems architecture,
                and execution to deliver measurable operational improvement.
              </p>
              <ul className="space-y-4">
                {positioningPoints.map((pt) => (
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

            {/* Right: what sets us apart */}
            <div className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl p-8">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/60 mb-6">
                What Sets Us Apart
              </div>
              <div className="space-y-0">
                {differentiators.map((d) => (
                  <div
                    key={d.title}
                    className="flex gap-4 py-5 border-b border-[#AEB7C2]/10 last:border-0"
                  >
                    <div className="flex-shrink-0 w-0.5 bg-[#6FAFA6] rounded-full self-stretch opacity-70" />
                    <div>
                      <div className="text-[#F4F7F9] font-semibold text-sm mb-1">{d.title}</div>
                      <div className="text-[#AEB7C2] text-xs leading-relaxed">{d.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
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
            Let&apos;s assess your modernization opportunity.
          </h2>
          <p className="text-[#AEB7C2] leading-relaxed mb-10 max-w-xl mx-auto">
            Every engagement starts with a free assessment. No obligation, no sales pitch —
            just a structured conversation about where your operations are today and where
            they could be.
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
