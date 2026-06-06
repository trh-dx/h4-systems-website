import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Process — H Four Systems",
  description:
    "A simple four-step process: Review, Prioritize, Build, and Support. We start small, focus on what matters most, and help you improve at a pace that works for your business.",
};

// ── Data ───────────────────────────────────────────────────────────

const phases = [
  {
    num: "01",
    name: "Review",
    tagline: "Understand what is working and what is slowing you down.",
    desc: "We start by reviewing your current website, forms, lead capture, follow-up process, tools, and any manual steps that slow your business down.",
    activities: [
      "Review your current website and customer experience",
      "Identify where leads or requests may be getting lost",
      "Look at your forms, emails, spreadsheets, and follow-up steps",
      "Understand your goals, priorities, and budget",
    ],
    deliverable: "Website & workflow review notes",
    duration: "Usually 1–2 hours to start",
  },
  {
    num: "02",
    name: "Prioritize",
    tagline: "Decide what to fix first and what can wait.",
    desc: "Next, we organize what we found and help decide what should be fixed first, what can wait, and what will create the most value for your business.",
    activities: [
      "Create a practical improvement plan",
      "Separate must-haves from nice-to-haves",
      "Recommend the right starting point",
      "Keep the plan realistic for your business",
    ],
    deliverable: "Practical improvement plan",
    duration: "A few days to one week",
  },
  {
    num: "03",
    name: "Build & Connect",
    tagline: "Build practical improvements that work for your business.",
    desc: "Then we build the approved improvements. This may include a modern website, better contact forms, lead notifications, simple automations, dashboards, or connected tools.",
    activities: [
      "Build or update your website",
      "Add clear calls-to-action and lead capture",
      "Connect forms, notifications, spreadsheets, or CRM tools",
      "Create simple reporting or dashboard views",
      "Test everything before launch",
    ],
    deliverable: "Live website and connected tools",
    duration: "3–6 weeks depending on scope",
  },
  {
    num: "04",
    name: "Support & Improve",
    tagline: "Keep it working as your business grows.",
    desc: "After launch, we help monitor, support, and improve the solution so it continues to work for your business as your needs change.",
    activities: [
      "Make small updates and improvements",
      "Review what is working and what needs adjustment",
      "Help with website, workflow, or dashboard changes",
      "Support future improvements as the business grows",
    ],
    deliverable: "Ongoing support and improvements",
    duration: "Ongoing — at your pace",
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
            How We Work
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-6">
            A simple process from messy to modern.
          </h1>
          <p className="text-lg text-[#AEB7C2] leading-relaxed max-w-2xl">
            Every project starts by understanding what is working, what is slowing you down,
            and what is worth fixing first. From there, we prioritize practical improvements,
            build in manageable steps, and help you launch with confidence.
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

      {/* ── You don't have to fix everything at once ── */}
      <section className="pt-6 pb-6 px-6 bg-[#0B1220]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl overflow-hidden">
            {/* Header bar — matches phase card style */}
            <div className="bg-[#0B1220] border-b border-[#AEB7C2]/10 px-8 py-5 flex items-center gap-5">
              <div className="w-8 h-0.5 bg-[#6FAFA6] rounded-full" />
              <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase">
                Start Where It Makes Sense
              </div>
            </div>

            <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: copy */}
              <div>
                <h2 className="text-[#F4F7F9] font-bold text-2xl sm:text-3xl leading-tight mb-5">
                  You do not have to fix everything at once.
                </h2>
                <p className="text-[#AEB7C2] text-sm leading-relaxed mb-8">
                  Many small businesses start with the website and lead capture first. From there,
                  H4 Systems can help add simple automations, follow-up workflows, dashboards, or
                  integrations as the business is ready.
                </p>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#6FAFA6] hover:bg-[#83BDB5]
                             text-[#0B1220] font-semibold text-sm px-6 py-3 rounded-lg
                             transition-colors duration-200"
                >
                  Start with a Free Website &amp; Workflow Audit
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Right: phased approach hints */}
              <div className="space-y-4">
                {[
                  "Most small projects can start with a simple review",
                  "Website projects vary based on size and content readiness",
                  "Automation and dashboard work can be added in phases",
                  "We focus on the right next step, not unnecessary complexity",
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

      {/* ── CTA ── */}
      <section className="pt-6 pb-10 px-6 bg-[#1A2333]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-4">
            Get Started
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-5">
            Ready to take a look at what could be better?
          </h2>
          <p className="text-[#AEB7C2] leading-relaxed mb-10 max-w-xl mx-auto">
            The first step is a quick conversation — no commitment required.
            We&apos;ll look at your current website and workflow and help identify
            clear next steps that make sense for your business.
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
