"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Instrument_Serif } from "next/font/google";
import TimeGreeting from "./hero/TimeGreeting";

const shareTech = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (7 cols): Greeting + Headline + CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start ">
            {/* Dynamic Time Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center"
            >
              <TimeGreeting />
            </motion.div>

            {/* Display-XL Headline (Share Tech Font) */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14, ease: "easeOut" }}
              className={`${shareTech.className} text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-[-0.5px] leading-[1.12] text-ink`}
            >
              I&apos;m Dipakshee. Crafting thoughtful digital products & experiences.
            </motion.h1>

            {/* Action Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.26, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3 pt-6 sm:pt-8 isolate"
            >
              {/* Primary CTA Button (Button-56 Neo-Brutalist Shadow Style) */}
              <Link
                href="#contact"
                role="button"
                className="relative inline-flex items-center justify-center gap-2 h-13 max-w-full px-7 md:px-11 text-[18px] md:text-[19px] leading-6.5 font-sans font-semibold text-[#111] bg-[#FDB4C3] active:bg-[rgba(255,120,160,1)] border border-[#111] rounded-sm cursor-pointer select-none outline-none touch-manipulation after:content-[''] after:block after:absolute after:-top-0.5 after:left-0 after:w-full after:h-13 after:bg-[#111] after:rounded-sm after:-z-10 after:translate-x-2 after:translate-y-2 after:transition-transform after:duration-200 after:ease-out hover:after:translate-x-0 hover:after:translate-y-0"
              >
                <span>Let&apos;s collaborate</span>
                {/* <ArrowUpRight className="w-4 h-4 opacity-80" /> */}
              </Link>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Taped Profile Photograph (NO border, cello tape pinned) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-110 sm:max-w-120 lg:max-w-125">
              {/* Profile Photograph (NO borders, realistic photo paper shadow) */}
              <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden">
                <Image
                  src="/profile_pic.png"
                  alt="Dipakshee — Creative Developer & Designer"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.015]"
                  priority
                />
              </div>

              {/* Cello Tape on Top-Right Corner */}
              <div className="absolute -top-7 -right-7 sm:-top-9 sm:-right-9 w-28 h-28 sm:w-36 sm:h-36 z-20 pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)] select-none">
                <Image
                  src="/cello_tape.png"
                  alt=""
                  fill
                  sizes="(min-width: 640px) 144px, 112px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Cello Tape on Bottom-Left Corner */}
              <div className="absolute -bottom-7 -left-7 sm:-bottom-9 sm:-left-9 w-28 h-28 sm:w-36 sm:h-36 z-20 pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)] rotate-180 select-none">
                <Image
                  src="/cello_tape.png"
                  alt=""
                  fill
                  sizes="(min-width: 640px) 144px, 112px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
