"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── SVG icons ──────────────────────────────────────────────────────

function AutomationIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 44 44" fill="none" aria-hidden>
      <circle cx="22" cy="9"  r="4.5" stroke="#8FBFBA" strokeWidth="1.4" />
      <circle cx="9"  cy="32" r="4.5" stroke="#8FBFBA" strokeWidth="1.4" />
      <circle cx="35" cy="32" r="4.5" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="22" y1="13.5" x2="11"  y2="27.5" stroke="#8FBFBA" strokeWidth="1.2" />
      <line x1="22" y1="13.5" x2="33"  y2="27.5" stroke="#8FBFBA" strokeWidth="1.2" />
      <line x1="13" y1="32"   x2="31"  y2="32"   stroke="#8FBFBA" strokeWidth="1.2" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="4"  y="17" width="10" height="10" rx="1.5" stroke="#8FBFBA" strokeWidth="1.4" />
      <rect x="30" y="17" width="10" height="10" rx="1.5" stroke="#8FBFBA" strokeWidth="1.4" />
      <rect x="17" y="17" width="10" height="10" rx="1.5" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="14" y1="22" x2="17" y2="22" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="27" y1="22" x2="30" y2="22" stroke="#8FBFBA" strokeWidth="1.4" />
      <circle cx="22" cy="8"  r="3.5" stroke="#8FBFBA" strokeWidth="1.4" />
      <circle cx="22" cy="36" r="3.5" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="22" y1="11.5" x2="22" y2="17"  stroke="#8FBFBA" strokeWidth="1.2" />
      <line x1="22" y1="27"   x2="22" y2="32.5" stroke="#8FBFBA" strokeWidth="1.2" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="4" y="6" width="36" height="24" rx="2" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="4"  y1="40" x2="40" y2="40" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="22" y1="30" x2="22" y2="40" stroke="#8FBFBA" strokeWidth="1.4" />
      <polyline
        points="10,26 17,16 23,20 33,10"
        fill="none"
        stroke="#8FBFBA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="33" cy="10" r="2.5" fill="#8FBFBA" opacity="0.75" />
    </svg>
  );
}

function ModernizationIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 44 44" fill="none" aria-hidden>
      <path
        d="M22 4L7 11v11c0 9.4 6.4 18.2 15 20.6C30.6 40.2 37 31.4 37 22V11L22 4z"
        stroke="#8FBFBA"
        strokeWidth="1.4"
      />
      <polyline
        points="15,22 20,27 30,17"
        stroke="#8FBFBA"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────

interface Service {
  title: string;
  titleLine2: string;
  desc: string;
  Icon: () => React.ReactElement;
  href: string;
}

const services: Service[] = [
  {
    title: "Intelligent",
    titleLine2: "Automation",
    desc: "Streamline operations and eliminate repetitive tasks with smart automation.",
    Icon: AutomationIcon,
    href: "/services",
  },
  {
    title: "Systems",
    titleLine2: "Integration",
    desc: "Connect your tools, data, and platforms into a unified, efficient ecosystem.",
    Icon: IntegrationIcon,
    href: "/services",
  },
  {
    title: "Data &",
    titleLine2: "Dashboards",
    desc: "Turn raw data into actionable insights with custom dashboards and reporting.",
    Icon: DashboardIcon,
    href: "/services",
  },
  {
    title: "Digital",
    titleLine2: "Modernization",
    desc: "Modern platforms built for performance, scalability, and long-term growth.",
    Icon: ModernizationIcon,
    href: "/services",
  },
];

// ── Service card ───────────────────────────────────────────────────

function ServiceCard({
  service,
  delay,
}: {
  service: Service;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { title, titleLine2, desc, Icon, href } = service;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
      className="group bg-[#0B1220] border border-[#AEB7C2]/10 rounded-xl p-10 flex flex-col hover:border-[#8FBFBA]/28 transition-all duration-300 cursor-pointer"
    >
      {/* Icon */}
      <div className="mb-6">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="text-[#F4F7F9] font-bold text-[19px] uppercase tracking-[0.08em] leading-snug mb-4">
        {title}
        <br />
        {titleLine2}
      </h3>

      {/* Description */}
      <p className="text-[#AEB7C2] text-[15px] leading-relaxed flex-1 mb-7">{desc}</p>

      {/* Learn more */}
      <a
        href={href}
        className="inline-flex items-center gap-2 font-mono text-[#8FBFBA] text-[11px] font-bold tracking-[0.2em] uppercase group-hover:gap-3 transition-[gap] duration-200"
      >
        <span>Learn More</span>
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
    <section className="bg-[#1A2333] pt-10 pb-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-[#8FBFBA] text-[11px] font-bold tracking-[0.28em] uppercase">
            Solutions That Drive Results
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.titleLine2} service={s} delay={i * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}
