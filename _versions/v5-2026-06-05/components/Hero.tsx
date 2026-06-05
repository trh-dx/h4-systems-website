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
            className="font-mono text-[#6FAFA6] text-[13px] font-bold tracking-[0.28em] uppercase mb-8 sm:whitespace-nowrap"
          >
            Modern Solutions.&nbsp; Intelligent Systems.&nbsp; Real Results.
          </motion.p>

          {/* Headline */}
          <motion.div variants={fadeUp}>
            <h1 className="font-black uppercase leading-[0.88] tracking-tight">
              <span className="block text-[clamp(52px,7vw,92px)] text-[#F4F7F9]">
                Modernize.
              </span>
              <span className="block text-[clamp(52px,7vw,92px)] text-[#F4F7F9]">
                Automate.
              </span>
              <span className="block text-[clamp(52px,7vw,92px)] text-[#6FAFA6]">
                Elevate.
              </span>
            </h1>
          </motion.div>

          {/* Body copy */}
          <motion.p
            variants={fadeUp}
            className="text-[#AEB7C2] text-[15px] leading-[1.75] max-w-[520px] mt-8 mb-10"
          >
            We deliver modern websites, dashboards, and automation through AI-assisted development — built to launch faster, scale smarter, and create better customer experiences.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 font-mono bg-[#6FAFA6] hover:bg-[#83BDB5] text-[#0B1220] font-bold text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-md transition-colors duration-200"
            >
              Let&apos;s Transform
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center font-mono border border-[#AEB7C2]/25 hover:border-[#6FAFA6]/50 text-[#AEB7C2] hover:text-[#F4F7F9] font-bold text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-md transition-colors duration-200"
            >
              Explore Services
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
