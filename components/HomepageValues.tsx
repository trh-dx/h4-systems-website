"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── Icons ──────────────────────────────────────────────────────────

function LaunchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
      <polyline
        points="20,4 11,17 18,17 12,28"
        stroke="#6FAFA6"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeadsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="12" stroke="#6FAFA6" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="7"  stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="16" cy="16" r="2.5" fill="#6FAFA6" />
    </svg>
  );
}

function ConnectIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
      {/* Left node */}
      <rect x="2" y="13" width="7" height="7" rx="1.5" stroke="#6FAFA6" strokeWidth="1.4" />
      {/* Center node */}
      <rect x="12.5" y="6" width="7" height="7" rx="1.5" stroke="#6FAFA6" strokeWidth="1.4" />
      {/* Bottom node */}
      <rect x="12.5" y="20" width="7" height="7" rx="1.5" stroke="#6FAFA6" strokeWidth="1.4" />
      {/* Right node */}
      <rect x="23" y="13" width="7" height="7" rx="1.5" stroke="#6FAFA6" strokeWidth="1.4" />
      {/* Connectors */}
      <line x1="9"    y1="16.5" x2="12.5" y2="16.5" stroke="#6FAFA6" strokeWidth="1.2" />
      <line x1="16"   y1="13"   x2="16"   y2="9.5"  stroke="#6FAFA6" strokeWidth="1.2" />
      <line x1="16"   y1="20"   x2="16"   y2="19.5" stroke="#6FAFA6" strokeWidth="1.2" />
      <line x1="19.5" y1="16.5" x2="23"   y2="16.5" stroke="#6FAFA6" strokeWidth="1.2" />
    </svg>
  );
}

function FoundationIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
      <polygon
        points="16,4 28,10 16,16 4,10"
        stroke="#6FAFA6"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <polyline
        points="4,16 16,22 28,16"
        stroke="#6FAFA6"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="4,22 16,28 28,22"
        stroke="#6FAFA6"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────

const values = [
  {
    Icon: LaunchIcon,
    title: "Launch Faster",
    text: "We use structured templates, modern tools, and AI-assisted development to move from idea to launch faster — without skipping the important details.",
  },
  {
    Icon: LeadsIcon,
    title: "Turn Visitors Into Leads",
    text: "We design clear pages, strong calls-to-action, and simple contact paths so more visitors know what to do next.",
  },
  {
    Icon: ConnectIcon,
    title: "Stop Losing Requests in Email and Texts",
    text: "We connect forms, notifications, spreadsheets, and follow-up steps so customer requests are easier to track.",
  },
  {
    Icon: FoundationIcon,
    title: "Build a Foundation You Can Grow With",
    text: "We build websites and workflows in a clean, organized way so they can be improved as your business grows.",
  },
];

// ── Card ───────────────────────────────────────────────────────────

function ValueCard({
  item,
  delay,
}: {
  item: (typeof values)[number];
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { Icon, title, text } = item;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-[#0B1220] border border-[#AEB7C2]/10 rounded-xl p-6 flex flex-col gap-4
                 hover:border-[#6FAFA6]/35 hover:shadow-[0_4px_24px_rgba(111,175,166,0.10)]
                 transition-[border-color,box-shadow] duration-300"
    >
      {/* Icon chip */}
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#1A2333] border border-[#AEB7C2]/10 shrink-0">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="text-[#F4F7F9] font-bold text-[15px] leading-snug tracking-tight">
        {title}
      </h3>

      {/* Body */}
      <p className="text-[#AEB7C2] text-[13px] leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────────

export default function HomepageValues() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#1A2333] pt-6 pb-10 px-6 lg:px-10 border-t border-[#AEB7C2]/8">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-8"
        >
          <h2 className="text-[#F4F7F9] font-bold text-[clamp(20px,2.8vw,28px)] leading-snug tracking-tight mb-3">
            Practical improvements that help your business work better
          </h2>
          <p className="text-[#AEB7C2] text-[14px] leading-relaxed max-w-2xl">
            H4 Systems focuses on the digital areas small businesses feel every day — your
            website, lead capture, follow-up process, and visibility into what&apos;s happening.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((item, i) => (
            <ValueCard key={item.title} item={item} delay={i * 0.08} />
          ))}
        </div>

      </div>
    </section>
  );
}
