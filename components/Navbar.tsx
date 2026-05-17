"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "PROCESS", href: "/process" },
  { label: "CASE STUDIES", href: "/case-studies" },
  { label: "RESOURCES", href: "#" },
];

function H4Logo() {
  return (
    <a href="/" className="flex items-center group">
      <img
        src="/brand_assets/H4%20Systems%20Logo.png"
        alt="H Four Systems"
        className="h-20 w-auto object-contain"
      />
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0B1220]/90 backdrop-blur-md border-b border-[#AEB7C2]/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">
          <H4Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#AEB7C2] hover:text-[#F4F7F9] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/contact"
            className="hidden lg:inline-flex items-center font-mono bg-[#8FBFBA] hover:bg-[#A8D4CF] text-[#0B1220] font-bold text-[10px] tracking-[0.18em] px-6 py-3 rounded-md transition-colors duration-200"
          >
            LET&apos;S TALK
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-[#AEB7C2] hover:text-[#F4F7F9] transition-colors p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-24 left-0 right-0 z-40 bg-[#0B1220] border-b border-[#AEB7C2]/10 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono py-3 text-[10px] font-bold tracking-[0.2em] text-[#AEB7C2] hover:text-[#F4F7F9] transition-colors border-b border-[#AEB7C2]/8 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center font-mono bg-[#8FBFBA] hover:bg-[#A8D4CF] text-[#0B1220] font-bold text-[10px] tracking-[0.18em] px-6 py-3.5 rounded-md transition-colors"
              >
                LET&apos;S TALK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
