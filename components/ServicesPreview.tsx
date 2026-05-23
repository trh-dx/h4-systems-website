"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── Icons ──────────────────────────────────────────────────────────

function WebDesignIcon() {
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
      {/* Left node */}
      <rect x="4"  y="19" width="9" height="9" rx="1.5" stroke="#6FAFA6" strokeWidth="1.4" />
      {/* Top node */}
      <rect x="17.5" y="7" width="9" height="9" rx="1.5" stroke="#6FAFA6" strokeWidth="1.4" />
      {/* Bottom node */}
      <rect x="17.5" y="31" width="9" height="9" rx="1.5" stroke="#6FAFA6" strokeWidth="1.4" />
      {/* Right node */}
      <rect x="31" y="19" width="9" height="9" rx="1.5" stroke="#6FAFA6" strokeWidth="1.4" />
      {/* Connectors */}
      <line x1="13"   y1="23.5" x2="17.5" y2="23.5" stroke="#6FAFA6" strokeWidth="1.2" />
      <line x1="22"   y1="16"   x2="22"   y2="19"   stroke="#6FAFA6" strokeWidth="1.2" />
      <line x1="22"   y1="28"   x2="22"   y2="31"   stroke="#6FAFA6" strokeWidth="1.2" />
      <line x1="26.5" y1="23.5" x2="31"   y2="23.5" stroke="#6FAFA6" strokeWidth="1.2" />
      {/* Diagonal connector hint */}
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
      {/* Chart bars */}
      <rect x="8"  y="22" width="5" height="5" rx="0.5" fill="#6FAFA6" opacity="0.45" />
      <rect x="15" y="17" width="5" height="10" rx="0.5" fill="#6FAFA6" opacity="0.6" />
      <rect x="22" y="13" width="5" height="14" rx="0.5" fill="#6FAFA6" opacity="0.75" />
      <rect x="29" y="18" width="5" height="9"  rx="0.5" fill="#6FAFA6" opacity="0.55" />
      {/* Trend line */}
      <polyline
        points="10.5,24 17.5,18 24.5,14.5 31.5,19.5"
        fill="none"
        stroke="#6FAFA6"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="31.5" cy="19.5" r="2" fill="#6FAFA6" opacity="0.9" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 44 44" fill="none" aria-hidden>
      {/* Central circle */}
      <circle cx="22" cy="22" r="7" stroke="#6FAFA6" strokeWidth="1.4" />
      <circle cx="22" cy="22" r="2.5" fill="#6FAFA6" opacity="0.8" />
      {/* Outer nodes */}
      <circle cx="22" cy="8"  r="3" stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="36" cy="16" r="3" stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="36" cy="30" r="3" stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="22" cy="38" r="3" stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="8"  cy="30" r="3" stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="8"  cy="16" r="3" stroke="#6FAFA6" strokeWidth="1.3" />
      {/* Spokes */}
      <line x1="22" y1="11"   x2="22" y2="15"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="33" y1="17.5" x2="29" y2="20"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="33" y1="28.5" x2="29" y2="26"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="22" y1="35"   x2="22" y2="29"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11" y1="28.5" x2="15" y2="26"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11" y1="17.5" x2="15" y2="20"   stroke="#6FAFA6" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────

interface ServiceItem {
  title: string;
  desc: string;
  Icon: () => React.ReactElement;
  href: string;
}

const services: ServiceItem[] = [
  {
    title: "Web Design & Development",
    desc: "Modern, responsive websites built for performance, usability, and growth.",
    Icon: WebDesignIcon,
    href: "/services",
  },
  {
    title: "Automation & Integrations",
    desc: "Streamline workflows and connect your systems to save time and reduce manual work.",
    Icon: AutomationIcon,
    href: "/services",
  },
  {
    title: "Dashboards & Business Intelligence",
    desc: "Real-time insights and reporting that help you make smarter, faster decisions.",
    Icon: DashboardIcon,
    href: "/services",
  },
  {
    title: "AI-Assisted Development",
    desc: "AI-powered workflows used to accelerate delivery and solve complex business challenges.",
    Icon: AIIcon,
    href: "/services",
  },
];

// ── Card ───────────────────────────────────────────────────────────

function ServiceCard({
  service,
  delay,
}: {
  service: ServiceItem;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { title, desc, Icon, href } = service;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-[#1A2333] border border-[#AEB7C2]/10 rounded-2xl p-8 flex flex-col
                 hover:border-[#6FAFA6]/50 hover:shadow-[0_8px_32px_rgba(111,175,166,0.12)]
                 hover:-translate-y-1 transition-[border-color,box-shadow,transform] duration-300"
    >
      {/* Icon */}
      <div className="mb-6 p-3 inline-flex rounded-xl bg-[#0B1220] border border-[#AEB7C2]/8 w-fit">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="text-[#F4F7F9] font-bold text-[17px] leading-snug tracking-tight mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#AEB7C2] text-[14px] leading-relaxed flex-1 mb-7">
        {desc}
      </p>

      {/* Learn More */}
      <a
        href={href}
        className="inline-flex items-center gap-2 font-mono text-[#6FAFA6] text-[11px] font-bold tracking-[0.2em] uppercase
                   group-hover:gap-3 transition-[gap] duration-200"
      >
        <span>Learn More</span>
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
      </a>
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────────

export default function ServicesPreview() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0B1220] pt-10 pb-14 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-2xl"
        >
          <p className="font-mono text-[#6FAFA6] text-[12px] font-bold tracking-[0.3em] uppercase mb-4">
            What We Build
          </p>
          <h2 className="text-[#F4F7F9] font-bold text-[clamp(24px,3.5vw,36px)] leading-tight tracking-tight mb-4">
            Modern systems for businesses ready to grow
          </h2>
          <p className="text-[#AEB7C2] text-[15px] leading-relaxed">
            From your first website to integrated automation and live dashboards — H4 Systems
            delivers practical digital solutions that scale with your business.
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 0.09} />
          ))}
        </div>

        {/* View all services link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-[#AEB7C2] hover:text-[#F4F7F9]
                       text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-200"
          >
            <span>View All Services</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
