"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── Icons ──────────────────────────────────────────────────────────

function SpeedIcon() {
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

function TargetIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="12" stroke="#6FAFA6" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="7"  stroke="#6FAFA6" strokeWidth="1.3" />
      <circle cx="16" cy="16" r="2.5" fill="#6FAFA6" />
    </svg>
  );
}

function CycleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M8 12C8 7.6 11.6 4 16 4c3.5 0 6.5 2.1 7.8 5.1"
        stroke="#6FAFA6"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <polyline
        points="20,8.5 23.8,9.1 24.5,5"
        stroke="#6FAFA6"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 20c0 4.4-3.6 8-8 8-3.5 0-6.5-2.1-7.8-5.1"
        stroke="#6FAFA6"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <polyline
        points="12,23.5 8.2,22.9 7.5,27"
        stroke="#6FAFA6"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
      <polygon
        points="16,4 28,10 16,16 4,10"
        stroke="#6FAFA6"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
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
    Icon: SpeedIcon,
    title: "Faster Delivery Cycles",
    text: "AI-assisted workflows built to accelerate implementation timelines.",
  },
  {
    Icon: TargetIcon,
    title: "Conversion-Focused Design",
    text: "Modern customer experiences optimized for engagement and usability.",
  },
  {
    Icon: CycleIcon,
    title: "Streamlined Operations",
    text: "Automation designed to reduce repetitive manual processes.",
  },
  {
    Icon: LayersIcon,
    title: "Built for Scalability",
    text: "Flexible digital platforms structured for long-term business growth.",
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

export default function ValueStrip() {
  return (
    <section className="bg-[#1A2333] pt-6 pb-10 px-6 lg:px-10 border-t border-[#AEB7C2]/8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((item, i) => (
            <ValueCard key={item.title} item={item} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
