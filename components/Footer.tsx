"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Instrument_Serif } from "next/font/google";

const shareTech = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full bg-[#161618] text-white border-t border-dashed border-white/15 py-12 sm:py-16 select-none">
      <div className="w-full max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 border-b border-white/10">
          {/* Colophon & Identity (Columns 1-7) */}
          <div className="md:col-span-7 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/10 border border-white/10 text-[11px] font-mono text-white/90">
              <span className="w-2 h-2 rounded-none bg-emerald-400 animate-pulse" />
              <span>Available for collaborations &amp; design advisory</span>
            </div>

            <h2
              className={`${shareTech.className} text-3xl sm:text-4xl text-white leading-[1.1] pt-1`}
            >
              Dipakshee — Creative Engineer &amp; Product Designer
            </h2>

            <p className="font-mono text-[11.5px] leading-relaxed text-white/60 max-w-lg">
              Stationery-inspired digital craft. Typeset in Instrument Serif &amp; Inter.
              Engineered with Next.js 16, React 19, GSAP &amp; Tailwind CSS.
            </p>
          </div>

          {/* Navigation & Back to Top (Columns 8-12) */}
          <div className="md:col-span-5 flex flex-col justify-between items-start md:items-end gap-6">
            <button
              onClick={scrollToTop}
              type="button"
              className="relative inline-flex items-center justify-center gap-2 h-11 px-5 text-[14px] font-sans font-semibold text-[#111] bg-[#FAF7F0] active:bg-[#F2EEE4] border border-[#111] rounded-none cursor-pointer select-none outline-none after:content-[''] after:block after:absolute after:-top-0.5 after:left-0 after:w-full after:h-11 after:bg-white/30 after:rounded-none after:-z-10 after:translate-x-1.5 after:translate-y-1.5 after:transition-transform after:duration-200 hover:after:translate-x-0 hover:after:translate-y-0"
              aria-label="Back to front cover"
            >
              <span>Back to Cover</span>
              <ArrowUp className="w-4 h-4 text-ink" />
            </button>

            {/* Social / Direct Channels */}
            <div className="flex flex-wrap items-center gap-4 text-[12px] font-mono text-white/75">
              <Link
                href="mailto:hello@dipakshee.dev"
                className="hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                hello@dipakshee.dev
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                GitHub
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                LinkedIn
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                Twitter / X
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 font-mono text-[11px] text-white/45">
          <p>© 2026 Dipakshee. Crafted with physical stationery warmth.</p>
          <div className="flex items-center gap-3">
            <span>Edition 2026</span>
            <span className="text-white/20">•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
