import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ValueStrip from "@/components/ValueStrip";

export const metadata: Metadata = {
  title: "Services — H Four Systems",
  description:
    "H4 Systems builds modern websites, simple automations, and business dashboards that help small businesses look more professional, capture more leads, and work more efficiently.",
};

// ── Icons — service cards ──────────────────────────────────────────

function WebUXIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="4" y="8" width="36" height="26" rx="2" stroke="#6FAFA6" strokeWidth="1.4" />
      <line x1="4" y1="15" x2="40" y2="15" stroke="#6FAFA6" strokeWidth="1.2" />
      <circle cx="10"  cy="11.5" r="1.5" fill="#6FAFA6" opacity="0.6" />
      <circle cx="15.5" cy="11.5" r="1.5" fill="#6FAFA6" opacity="0.6" />
      <circle cx="21"  cy="11.5" r="1.5" fill="#6FAFA6" opacity="0.6" />
      <rect x="9" y="19" width="11" height="9" rx="1" stroke="#6FAFA6" strokeWidth="1.2" />
      <line x1="23" y1="21"   x2="35" y2="21"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="23" y1="24.5" x2="35" y2="24.5" stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="23" y1="28"   x2="30" y2="28"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="15" y1="38"   x2="29" y2="38"   stroke="#6FAFA6" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="22" y1="34"   x2="22" y2="38"   stroke="#6FAFA6" strokeWidth="1.4" />
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="4"    y="19" width="9" height="9" rx="1.5" stroke="#6FAFA6" strokeWidth="1.4" />
      <rect x="17.5" y="7"  width="9" height="9" rx="1.5" stroke="#6FAFA6" strokeWidth="1.4" />
      <rect x="17.5" y="31" width="9" height="9" rx="1.5" stroke="#6FAFA6" strokeWidth="1.4" />
      <rect x="31"   y="19" width="9" height="9" rx="1.5" stroke="#6FAFA6" strokeWidth="1.4" />
      <line x1="13"   y1="23.5" x2="17.5" y2="23.5" stroke="#6FAFA6" strokeWidth="1.2" />
      <line x1="22"   y1="16"   x2="22"   y2="19"   stroke="#6FAFA6" strokeWidth="1.2" />
      <line x1="22"   y1="28"   x2="22"   y2="31"   stroke="#6FAFA6" strokeWidth="1.2" />
      <line x1="26.5" y1="23.5" x2="31"   y2="23.5" stroke="#6FAFA6" strokeWidth="1.2" />
      <line x1="13" y1="19" x2="17.5" y2="16" stroke="#6FAFA6" strokeWidth="0.8" strokeOpacity="0.45" strokeLinecap="round" />
      <line x1="13" y1="28" x2="17.5" y2="31" stroke="#6FAFA6" strokeWidth="0.8" strokeOpacity="0.45" strokeLinecap="round" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="4" y="6" width="36" height="26" rx="2" stroke="#6FAFA6" strokeWidth="1.4" />
      <line x1="4"  y1="40" x2="40" y2="40" stroke="#6FAFA6" strokeWidth="1.4" />
      <line x1="22" y1="32" x2="22" y2="40" stroke="#6FAFA6" strokeWidth="1.4" />
      <rect x="8"  y="22" width="5" height="5"  rx="0.5" fill="#6FAFA6" opacity="0.45" />
      <rect x="15" y="17" width="5" height="10" rx="0.5" fill="#6FAFA6" opacity="0.6"  />
      <rect x="22" y="13" width="5" height="14" rx="0.5" fill="#6FAFA6" opacity="0.75" />
      <rect x="29" y="18" width="5" height="9"  rx="0.5" fill="#6FAFA6" opacity="0.55" />
      <polyline
        points="10.5,24 17.5,18 24.5,14.5 31.5,19.5"
        fill="none" stroke="#6FAFA6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="31.5" cy="19.5" r="2" fill="#6FAFA6" opacity="0.9" />
    </svg>
  );
}

function AIDevIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 44 44" fill="none" aria-hidden>
      <circle cx="22" cy="22" r="7"   stroke="#6FAFA6" strokeWidth="1.4" />
      <circle cx="22" cy="22" r="2.5" fill="#6FAFA6"  opacity="0.8" />
      <circle cx="22" cy="8"  r="3"   stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="36" cy="16" r="3"   stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="36" cy="30" r="3"   stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="22" cy="38" r="3"   stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="8"  cy="30" r="3"   stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="8"  cy="16" r="3"   stroke="#6FAFA6" strokeWidth="1.3" />
      <line x1="22" y1="11"   x2="22" y2="15"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="33" y1="17.5" x2="29" y2="20"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="33" y1="28.5" x2="29" y2="26"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="22" y1="35"   x2="22" y2="29"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11" y1="28.5" x2="15" y2="26"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11" y1="17.5" x2="15" y2="20"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// ── Icons — process steps ──────────────────────────────────────────

function DiscoverIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="#6FAFA6" strokeWidth="1.4" />
      <line x1="18" y1="18" x2="24.5" y2="24.5" stroke="#6FAFA6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="11" stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="14" cy="14" r="6.5" stroke="#6FAFA6" strokeWidth="1.2" />
      <circle cx="14" cy="14" r="2.5" fill="#6FAFA6" />
    </svg>
  );
}

function BuildIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden>
      <polygon
        points="14,3 25,9 14,15 3,9"
        stroke="#6FAFA6" strokeWidth="1.3" strokeLinejoin="round" fill="none"
      />
      <polyline points="3,15 14,21 25,15" stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="3,21 14,27 25,21" stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TestIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path
        d="M14 3 L24 7 V15 C24 21 14 26 14 26 C14 26 4 21 4 15 V7 Z"
        stroke="#6FAFA6" strokeWidth="1.3" strokeLinejoin="round" fill="none"
      />
      <polyline
        points="9,14 13,18 19,10"
        stroke="#6FAFA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function LaunchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden>
      <polyline
        points="3,22 10,13 16,17 25,6"
        stroke="#6FAFA6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="25" cy="6" r="2.5" fill="#6FAFA6" opacity="0.9" />
      <polyline
        points="19,6 25,6 25,12"
        stroke="#6FAFA6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────

interface ServiceDef {
  Icon: () => React.ReactElement;
  category: string;
  title: string;
  desc: string;
  bullets: string[];
}

interface ProcessStep {
  num: string;
  title: string;
  Icon: () => React.ReactElement;
  desc: string;
}

const mainServices: ServiceDef[] = [
  {
    Icon: WebUXIcon,
    category: "Website Design & Development",
    title: "A Website That Works for Your Business",
    desc: "Modern websites that make your business look professional and make it easier for customers to contact you.",
    bullets: [
      "Outdated website rebuilds",
      "Mobile-friendly design",
      "Clear calls-to-action",
      "Contact forms and lead capture",
      "Fast, clean, easy-to-navigate pages",
    ],
  },
  {
    Icon: AutomationIcon,
    category: "Automation & Integrations",
    title: "Less Manual Work, Fewer Things Falling Through",
    desc: "Simple automations that help customer requests, form submissions, and follow-ups move to the right place without manual chasing.",
    bullets: [
      "Website form notifications",
      "Lead routing",
      "Spreadsheet or CRM updates",
      "Follow-up reminders",
      "Reduced duplicate data entry",
    ],
  },
  {
    Icon: DashboardIcon,
    category: "Dashboards & Business Intelligence",
    title: "See What's Happening in Your Business",
    desc: "Simple dashboards that show leads, activity, follow-up, and key business information in one place.",
    bullets: [
      "Lead tracking views",
      "Website inquiry summaries",
      "Activity and follow-up tracking",
      "Basic KPI dashboards",
      "Reporting from spreadsheets or connected tools",
    ],
  },
  {
    Icon: AIDevIcon,
    category: "AI-Assisted Development",
    title: "Faster Delivery, Cleaner Results",
    desc: "Modern tools and AI-assisted development used behind the scenes to plan faster, build cleaner, and deliver practical solutions more efficiently.",
    bullets: [
      "Faster planning and prototyping",
      "Content and copy support",
      "Workflow mapping",
      "Development assistance",
      "Practical recommendations — not AI hype",
    ],
  },
];

const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discover",
    Icon: DiscoverIcon,
    desc: "We learn about your business, goals, workflows, and customer experience challenges.",
  },
  {
    num: "02",
    title: "Strategize",
    Icon: StrategyIcon,
    desc: "We define the right modernization approach, priorities, and success measures.",
  },
  {
    num: "03",
    title: "Build",
    Icon: BuildIcon,
    desc: "We design, develop, automate, and integrate with quality and speed.",
  },
  {
    num: "04",
    title: "Test & Refine",
    Icon: TestIcon,
    desc: "We validate functionality, usability, performance, and operational fit.",
  },
  {
    num: "05",
    title: "Launch & Grow",
    Icon: LaunchIcon,
    desc: "We support launch, adoption, optimization, and future improvements.",
  },
];

// ── Page ───────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F4F7F9]">

      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0B1220]">
        {/* Subtle left radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 8% 50%, rgba(26,35,51,0.8) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-44 pb-16">
          <p className="font-mono text-[#6FAFA6] text-[12px] font-bold tracking-[0.28em] uppercase mb-7">
            Services
          </p>
          <h1 className="font-black leading-tight tracking-tight mb-7">
            <span className="block text-[clamp(28px,4.5vw,56px)] text-[#F4F7F9]">Modern websites.</span>
            <span className="block text-[clamp(28px,4.5vw,56px)] text-[#F4F7F9]">Better user experience.</span>
            <span className="block text-[clamp(28px,4.5vw,56px)] text-[#6FAFA6]">More customers.</span>
          </h1>
          <p className="text-[#AEB7C2] text-[16px] leading-[1.75] max-w-2xl mb-10">
            From modern websites to the internal systems that power daily operations, we deliver
            AI-assisted digital solutions built to help businesses operate smarter, move faster, and
            create better customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 font-mono bg-[#6FAFA6] hover:bg-[#83BDB5]
                         text-[#0B1220] font-bold text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-md
                         transition-colors duration-200"
            >
              Request Free Assessment
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center font-mono border border-[#AEB7C2]/25
                         hover:border-[#6FAFA6]/50 text-[#AEB7C2] hover:text-[#F4F7F9] font-bold
                         text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-md transition-colors duration-200"
            >
              View Case Studies
            </a>
          </div>
        </div>

        {/* Bottom fade into Value Strip */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1A2333] to-transparent pointer-events-none" />
      </section>

      {/* ── Value Strip ── */}
      <ValueStrip />

      {/* ── Services Grid ── */}
      <section className="bg-[#0B1220] pt-6 pb-10 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-[#6FAFA6] text-[12px] font-bold tracking-[0.3em] uppercase mb-4">
              What We Deliver
            </p>
            <h2 className="text-[#F4F7F9] font-bold text-[clamp(24px,3.5vw,38px)] leading-tight tracking-tight mb-4">
              Services built for practical modernization
            </h2>
            <p className="text-[#AEB7C2] text-[15px] leading-relaxed">
              Four core service areas — each focused on a specific business outcome, built to deliver
              real results without unnecessary complexity.
            </p>
          </div>

          {/* 2×2 main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {mainServices.map(({ Icon, category, title, desc, bullets }) => (
              <div
                key={title}
                className="group bg-[#1A2333] border border-[#AEB7C2]/10 rounded-2xl p-8 flex flex-col
                           hover:border-[#6FAFA6]/50 hover:shadow-[0_8px_32px_rgba(111,175,166,0.12)]
                           hover:-translate-y-1 transition-[border-color,box-shadow,transform] duration-300"
              >
                {/* Icon */}
                <div className="mb-5 p-3 inline-flex rounded-xl bg-[#0B1220] border border-[#AEB7C2]/8 w-fit">
                  <Icon />
                </div>

                {/* Category label */}
                <p className="font-mono text-[#6FAFA6] text-[11px] font-bold tracking-[0.22em] uppercase mb-2">
                  {category}
                </p>

                {/* Service title */}
                <h3 className="text-[#F4F7F9] font-bold text-[20px] leading-snug tracking-tight mb-3">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-[#AEB7C2] text-[14px] leading-relaxed mb-6">
                  {desc}
                </p>

                {/* Bullet list */}
                <ul className="flex-1 mb-7 space-y-2.5">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[#AEB7C2] text-[13px] leading-snug"
                    >
                      <span className="mt-[3px] shrink-0 text-[#6FAFA6]">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 font-mono text-[#6FAFA6] text-[11px] font-bold
                             tracking-[0.2em] uppercase group-hover:gap-3 transition-[gap] duration-200"
                >
                  <span>Get Started</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="bg-[#1A2333] pt-6 pb-10 px-6 lg:px-10 border-t border-[#AEB7C2]/8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-16 max-w-xl">
            <p className="font-mono text-[#6FAFA6] text-[12px] font-bold tracking-[0.3em] uppercase mb-4">
              How We Work
            </p>
            <h2 className="text-[#F4F7F9] font-bold text-[clamp(22px,3vw,36px)] leading-tight tracking-tight">
              A Practical Process for Successful Outcomes
            </h2>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative grid grid-cols-5 gap-0">
              {/* Spanning connector line — behind the circles */}
              <div className="absolute top-[21px] left-[10%] right-[10%] h-px bg-[#AEB7C2]/15" />

              {processSteps.map(({ num, title, Icon, desc }) => (
                <div key={num} className="relative flex flex-col items-center px-4">
                  {/* Number circle — sits on top of the line */}
                  <div
                    className="relative z-10 w-11 h-11 rounded-full border border-[#6FAFA6]/50 bg-[#1A2333]
                               flex items-center justify-center mb-5"
                  >
                    <span className="font-mono text-[#6FAFA6] font-bold text-[13px] tracking-tight">
                      {num}
                    </span>
                  </div>

                  {/* Step icon */}
                  <div className="mb-3 opacity-80">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#F4F7F9] font-bold text-[15px] mb-2 text-center">{title}</h3>

                  {/* Description */}
                  <p className="text-[#AEB7C2] text-[13px] leading-relaxed text-center">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical stacked */}
          <div className="lg:hidden flex flex-col">
            {processSteps.map(({ num, title, Icon, desc }, i) => (
              <div key={num} className="flex gap-5 pb-8">
                {/* Left column: number bubble + vertical line */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-10 h-10 rounded-full border border-[#6FAFA6]/50 bg-[#1A2333]
                               flex items-center justify-center shrink-0"
                  >
                    <span className="font-mono text-[#6FAFA6] font-bold text-[12px]">{num}</span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="flex-1 w-px bg-[#AEB7C2]/15 mt-2 min-h-[24px]" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-1 pb-2">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon />
                    <h3 className="text-[#F4F7F9] font-bold text-[15px]">{title}</h3>
                  </div>
                  <p className="text-[#AEB7C2] text-[13px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-[#0B1220] pt-6 pb-10 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative overflow-hidden rounded-2xl bg-[#1A2333] border border-[#AEB7C2]/10
                       px-8 py-10 md:px-14 text-center"
          >
            {/* Subtle radial glow behind the copy */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 50% 70% at 50% 50%, rgba(111,175,166,0.06) 0%, transparent 70%)",
              }}
            />

            {/* Teal top accent bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#6FAFA6] to-transparent rounded-full opacity-70" />

            <div className="relative">
              <p className="font-mono text-[#6FAFA6] text-[12px] font-bold tracking-[0.3em] uppercase mb-5">
                Get Started
              </p>
              <h2 className="text-[#F4F7F9] font-black text-[clamp(26px,4vw,46px)] leading-tight tracking-tight mb-6 max-w-2xl mx-auto">
                Ready to Modernize and Grow?
              </h2>
              <p className="text-[#AEB7C2] text-[16px] leading-[1.75] max-w-xl mx-auto mb-10">
                Let&apos;s discuss how H4 Systems can help you improve your digital experience,
                streamline operations, and create systems built for growth.
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 font-mono bg-[#6FAFA6]
                           hover:bg-[#83BDB5] text-[#0B1220] font-bold text-[13px] tracking-[0.18em]
                           uppercase px-10 py-4 rounded-md transition-colors duration-200"
              >
                Request Free Assessment
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
