"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── Icons ──────────────────────────────────────────────────────────

function IndustriesIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <circle cx="18" cy="11" r="5"   stroke="#6FAFA6" strokeWidth="1.4" />
      <circle cx="9"  cy="26" r="3.5" stroke="#6FAFA6" strokeWidth="1.4" />
      <circle cx="27" cy="26" r="3.5" stroke="#6FAFA6" strokeWidth="1.4" />
      <path d="M12.5 24C14 20 22 20 23.5 24" stroke="#6FAFA6" strokeWidth="1.2" fill="none" />
      <path d="M4 34c1-3.5 4.5-5 4.5-5"  stroke="#6FAFA6" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M32 34c-1-3.5-4.5-5-4.5-5" stroke="#6FAFA6" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function SystemsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <line x1="3"  y1="32" x2="33" y2="32" stroke="#6FAFA6" strokeWidth="1.4" />
      <rect x="4"  y="22" width="6" height="10" rx="0.5" stroke="#6FAFA6" strokeWidth="1.3" />
      <rect x="14" y="15" width="6" height="17" rx="0.5" stroke="#6FAFA6" strokeWidth="1.3" />
      <rect x="24" y="9"  width="6" height="23" rx="0.5" stroke="#6FAFA6" strokeWidth="1.3" />
    </svg>
  );
}

function WorkflowsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <circle cx="18" cy="18" r="13" stroke="#6FAFA6" strokeWidth="1.4" />
      <polyline
        points="18,9 18,18 24,24"
        stroke="#6FAFA6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path
        d="M18 4l3.5 10.5H32l-9 6.5 3.5 10.5-9-6.5-9 6.5 3.5-10.5-9-6.5h10.5L18 4z"
        stroke="#6FAFA6"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────

const stats = [
  { value: "20+ Years",                  label: "IT & Systems Experience",    valueClass: "text-[26px] sm:text-[30px]", Icon: WorkflowsIcon  },
  { value: "Automation & Integration",   label: "Leadership",                 valueClass: "text-[18px] sm:text-[20px]", Icon: SystemsIcon    },
  { value: "Business Outcomes",          label: "Built Around Real Results",  valueClass: "text-[20px] sm:text-[22px]", Icon: IndustriesIcon },
  { value: "Practical ROI",              label: "Focused on Measurable Value",valueClass: "text-[24px] sm:text-[28px]", Icon: SuccessIcon    },
];

// ── Section ────────────────────────────────────────────────────────

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-[#0B1220] py-16 px-6 lg:px-10 border-t border-[#AEB7C2]/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map(({ value, label, valueClass, Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="flex items-start gap-4"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-1 opacity-90">
                <Icon />
              </div>
              {/* Text */}
              <div>
                <div className={`${valueClass} font-black text-[#F4F7F9] tracking-tight leading-tight`}>
                  {value}
                </div>
                <div className="font-mono text-[#AEB7C2] text-[10px] font-bold uppercase tracking-[0.18em] mt-2 leading-snug">
                  {label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
