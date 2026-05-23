"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── Decorative mark — subtle grid of teal dots ─────────────────────

function GridMark() {
  const cols = 5;
  const rows = 4;
  const gap = 18;
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({ x: c * gap, y: r * gap });
    }
  }
  return (
    <svg
      width={cols * gap}
      height={rows * gap}
      viewBox={`0 0 ${cols * gap} ${rows * gap}`}
      aria-hidden
      className="opacity-[0.18]"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x + 1} cy={d.y + 1} r="1.5" fill="#6FAFA6" />
      ))}
    </svg>
  );
}

// ── Section ────────────────────────────────────────────────────────

export default function CredibilityBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#1A2333] pt-6 pb-10 px-6 lg:px-10 border-t border-[#AEB7C2]/8">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-[#0B1220] border border-[#AEB7C2]/10 px-8 py-10 md:px-14 md:py-12">

          {/* Corner dot-grid decorations */}
          <div className="absolute top-8 right-8 hidden md:block">
            <GridMark />
          </div>
          <div className="absolute bottom-8 left-8 hidden md:block rotate-180">
            <GridMark />
          </div>

          {/* Teal left accent bar */}
          <div className="absolute left-0 top-12 bottom-12 w-[3px] bg-gradient-to-b from-transparent via-[#6FAFA6] to-transparent opacity-60 rounded-full" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-xl"
            >
              <p className="font-mono text-[#6FAFA6] text-[12px] font-bold tracking-[0.3em] uppercase mb-5">
                Our Background
              </p>
              <h2 className="text-[#F4F7F9] font-black text-[clamp(26px,4vw,42px)] leading-tight tracking-tight mb-6">
                Enterprise Experience.<br />
                <span className="text-[#6FAFA6]">SMB Focus.</span>
              </h2>
              <p className="text-[#AEB7C2] text-[15px] leading-[1.75] max-w-lg">
                With a background in enterprise IT and systems-driven delivery, H4 Systems brings
                structured processes, reliability, and practical modernization to small and
                mid-sized businesses.
              </p>
            </motion.div>

            {/* Right: CTA */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-start lg:items-end gap-5 shrink-0"
            >
              {/* Trust badges */}
              <div className="flex flex-col gap-3">
                {[
                  "20+ years enterprise IT & systems experience",
                  "Structured delivery processes, not ad-hoc builds",
                  "Outcomes built around your business goals",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="w-4 h-[2px] bg-[#6FAFA6] shrink-0 rounded-full" />
                    <span className="text-[#AEB7C2] text-[13px] leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 font-mono bg-[#6FAFA6] hover:bg-[#83BDB5]
                           text-[#0B1220] font-bold text-[12px] tracking-[0.18em] uppercase
                           px-8 py-4 rounded-md transition-colors duration-200 mt-2"
              >
                Let&apos;s Build Something Great
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
