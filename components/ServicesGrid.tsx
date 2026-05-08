"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── SVG icons ──────────────────────────────────────────────────────

function WebsiteIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="4" y="8" width="36" height="26" rx="2" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="4" y1="15" x2="40" y2="15" stroke="#8FBFBA" strokeWidth="1.2" />
      <circle cx="10" cy="11.5" r="1.5" fill="#8FBFBA" opacity="0.6" />
      <circle cx="15.5" cy="11.5" r="1.5" fill="#8FBFBA" opacity="0.6" />
      <circle cx="21" cy="11.5" r="1.5" fill="#8FBFBA" opacity="0.6" />
      <rect x="10" y="20" width="10" height="8" rx="1" stroke="#8FBFBA" strokeWidth="1.2" />
      <line x1="23" y1="21" x2="34" y2="21" stroke="#8FBFBA" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="23" y1="24.5" x2="34" y2="24.5" stroke="#8FBFBA" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="14" y1="38" x2="30" y2="38" stroke="#8FBFBA" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="22" y1="34" x2="22" y2="38" stroke="#8FBFBA" strokeWidth="1.4" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="13" y="4" width="18" height="36" rx="3" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="13" y1="10" x2="31" y2="10" stroke="#8FBFBA" strokeWidth="1.2" />
      <line x1="13" y1="34" x2="31" y2="34" stroke="#8FBFBA" strokeWidth="1.2" />
      <circle cx="22" cy="37" r="1.5" fill="#8FBFBA" opacity="0.7" />
      <line x1="19" y1="17" x2="25" y2="17" stroke="#8FBFBA" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="17" y1="21" x2="27" y2="21" stroke="#8FBFBA" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="17" y1="25" x2="27" y2="25" stroke="#8FBFBA" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="5" y="18" width="9" height="9" rx="1.5" stroke="#8FBFBA" strokeWidth="1.4" />
      <rect x="18" y="7" width="9" height="9" rx="1.5" stroke="#8FBFBA" strokeWidth="1.4" />
      <rect x="18" y="29" width="9" height="9" rx="1.5" stroke="#8FBFBA" strokeWidth="1.4" />
      <rect x="31" y="18" width="9" height="9" rx="1.5" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="14" y1="22.5" x2="18" y2="22.5" stroke="#8FBFBA" strokeWidth="1.2" />
      <line x1="22.5" y1="16" x2="22.5" y2="18" stroke="#8FBFBA" strokeWidth="1.2" />
      <line x1="22.5" y1="29" x2="22.5" y2="29" stroke="#8FBFBA" strokeWidth="1.2" />
      <line x1="27" y1="22.5" x2="31" y2="22.5" stroke="#8FBFBA" strokeWidth="1.2" />
      <line x1="22.5" y1="22.5" x2="22.5" y2="29" stroke="#8FBFBA" strokeWidth="1.2" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="4" y="6" width="36" height="26" rx="2" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="4" y1="40" x2="40" y2="40" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="22" y1="32" x2="22" y2="40" stroke="#8FBFBA" strokeWidth="1.4" />
      <polyline
        points="9,26 16,17 23,21 33,11"
        fill="none"
        stroke="#8FBFBA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="33" cy="11" r="2.5" fill="#8FBFBA" opacity="0.75" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────

interface Service {
  title: string;
  desc: string;
  bullets: string[];
  cta: string;
  Icon: () => React.ReactElement;
  href: string;
}

const services: Service[] = [
  {
    title: "Website & Platform Modernization",
    desc: "Replace an outdated website with a modern, fast, lead-focused digital experience.",
    bullets: [
      "Modern website redesign",
      "Mobile-first layouts",
      "SEO foundation",
      "Contact and quote request forms",
      "Fast hosting and deployment",
    ],
    cta: "Modernize My Website",
    Icon: WebsiteIcon,
    href: "/contact",
  },
  {
    title: "Mobile-Friendly Website Design",
    desc: "Make your website easy to use on phones, tablets, and desktops so customers can call, browse, and request service quickly.",
    bullets: [
      "Responsive mobile layouts",
      "Tap-to-call buttons",
      "Easy-to-use contact forms",
      "Faster mobile browsing",
      "Better customer experience",
    ],
    cta: "Make My Site Mobile-Friendly",
    Icon: MobileIcon,
    href: "/contact",
  },
  {
    title: "Business Automation",
    desc: "Reduce repetitive manual work by connecting forms, emails, spreadsheets, CRMs, and internal workflows.",
    bullets: [
      "Lead intake automation",
      "Email and notification workflows",
      "Spreadsheet cleanup",
      "Task routing",
      "Manual process reduction",
    ],
    cta: "Automate My Workflow",
    Icon: AutomationIcon,
    href: "/contact",
  },
  {
    title: "Dashboards & Reporting",
    desc: "Give owners and teams a clear view of leads, jobs, revenue, labor, budgets, and performance.",
    bullets: [
      "KPI dashboards",
      "Budget vs. actual tracking",
      "Lead and customer reporting",
      "Work order visibility",
      "Monthly performance snapshots",
    ],
    cta: "Build My Dashboard",
    Icon: DashboardIcon,
    href: "/contact",
  },
];

// ── Service card ───────────────────────────────────────────────────

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { title, desc, bullets, cta, Icon, href } = service;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className="group bg-[#0B1220] border border-[#AEB7C2]/10 rounded-2xl p-8 flex flex-col hover:border-[#8FBFBA]/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300"
    >
      {/* Icon */}
      <div className="mb-5 p-2.5 inline-flex rounded-lg bg-[#1A2333] w-fit">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="text-[#F4F7F9] font-bold text-[17px] leading-snug mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#AEB7C2] text-[14px] leading-relaxed mb-5">{desc}</p>

      {/* Bullets */}
      <ul className="flex-1 mb-7 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-[#AEB7C2] text-[13px] leading-snug">
            <span className="mt-[3px] shrink-0 text-[#8FBFBA]">—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={href}
        className="inline-flex items-center gap-2 font-mono text-[#8FBFBA] text-[10px] font-bold tracking-[0.2em] uppercase group-hover:gap-3 transition-[gap] duration-200"
      >
        <span>{cta}</span>
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
      </a>
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────────

export default function ServicesGrid() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#1A2333] pt-16 pb-28 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <p className="font-mono text-[#8FBFBA] text-[10px] font-bold tracking-[0.28em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-[#F4F7F9] font-bold text-[clamp(22px,3.5vw,34px)] leading-snug mb-4">
            Modern systems for businesses that are ready to grow
          </h2>
          <p className="text-[#AEB7C2] text-[15px] leading-relaxed">
            From outdated websites to manual workflows, H Four Systems helps businesses create cleaner, faster, more connected digital operations.
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}
