"use client";

import { motion, type Variants } from "framer-motion";
import CubeVisualization from "./CubeVisualization";

const bezier = [0.25, 0.46, 0.45, 0.94] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: bezier },
  },
};

const bullets = [
  "Replace outdated websites",
  "Capture more leads",
  "Automate simple follow-up",
  "See activity in one place",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220]">

      {/* Subtle top-left radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 15% 45%, rgba(26,35,51,0.7) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-44 pb-12 lg:pt-48 lg:pb-16">

        {/* ── Left: Text content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="font-mono text-[#6FAFA6] text-[12px] font-bold tracking-[0.22em] uppercase mb-6"
          >
            Business Website &amp; Workflow Modernization
          </motion.p>

          {/* Main headline */}
          <motion.div variants={fadeUp}>
            <h1 className="font-black leading-[1.05] tracking-tight mb-5">
              <span className="block text-[clamp(30px,4vw,54px)] text-[#F4F7F9]">
                Modern Websites.
              </span>
              <span className="block text-[clamp(30px,4vw,54px)] text-[#F4F7F9]">
                Smarter Follow-Up.
              </span>
              <span className="block text-[clamp(30px,4vw,54px)] text-[#F4F7F9]">
                Better Visibility.
              </span>
            </h1>
          </motion.div>

          {/* Brand accent line — present but subordinate */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
            <div className="w-5 h-px bg-[#6FAFA6] rounded-full flex-shrink-0" />
            <span className="font-mono text-[#6FAFA6] text-[11px] font-bold tracking-[0.26em] uppercase">
              Modernize. Automate. Elevate.
            </span>
          </motion.div>

          {/* Body copy */}
          <motion.p
            variants={fadeUp}
            className="text-[#AEB7C2] text-[15px] leading-[1.75] max-w-[520px] mb-7"
          >
            H4 Systems helps North Texas businesses build new and replace outdated websites
            and manual processes with clean, mobile-friendly websites, simple
            automations, and practical dashboards that help you capture leads,
            follow up faster, and see what&apos;s happening in your business.
          </motion.p>

          {/* Supporting bullets */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-x-6 gap-y-3 mb-9 max-w-[420px]"
          >
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6] flex-shrink-0" />
                <span className="text-[#AEB7C2] text-[13px] leading-snug">{bullet}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 font-mono
                         bg-[#6FAFA6] hover:bg-[#83BDB5] text-[#0B1220] font-bold
                         text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-md
                         transition-colors duration-200"
            >
              Request a Free Website Audit
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center font-mono
                         border border-[#AEB7C2]/25 hover:border-[#6FAFA6]/50
                         text-[#AEB7C2] hover:text-[#F4F7F9] font-bold
                         text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-md
                         transition-colors duration-200"
            >
              See What We Build
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Cube visualization ── */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden lg:flex items-center justify-center h-[480px] w-full"
        >
          <CubeVisualization />
        </motion.div>
      </div>

      {/* Bottom edge — fades hero bg into the section below */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1A2333] to-transparent pointer-events-none" />
    </section>
  );
}
