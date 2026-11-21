"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { Instrument_Serif } from "next/font/google";
import TimeGreeting from "./hero/TimeGreeting";
import { NAVIGATION_ITEMS } from "./Navbar";

const shareTech = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface HeroProps {
  activeColor?: string;
  activeItemId?: string;
  onSelectTab?: (id: string) => void;
}

interface SideTabShapeProps {
  fillColor: string;
}

function SideTabShape({ fillColor }: SideTabShapeProps) {
  return (
    <svg
      viewBox="-2 0 42 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      {/* Authentic Vertical Trapezoid Flap Geometry: base docked against diary edge, sloped shoulders, outer flat edge */}
      <path
        d="M 0 0 C 0.8 0 1.8 0.4 2.8 1.2 L 37 11 C 39 12 40 14 40 16 L 40 84 C 40 86 39 88 37 89 L 2.8 98.8 C 1.8 99.6 0.8 100 0 100 L -2 100 L -2 0 Z"
        fill={fillColor}
      />
    </svg>
  );
}

export default function Hero({
  activeColor = "rgba(255, 176, 132, 0.90)",
  onSelectTab,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(greetingRef.current, {
        y: 12,
        opacity: 0,
        duration: 0.45,
      })
        .from(
          headlineRef.current,
          {
            y: 16,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.25"
        )
        .from(
          ctaRef.current,
          {
            y: 16,
            opacity: 0,
            duration: 0.45,
          },
          "-=0.2"
        )
        .from(
          photoRef.current,
          {
            scale: 0.96,
            opacity: 0,
            duration: 0.55,
            ease: "back.out(1.2)",
          },
          "-=0.35"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-6 sm:py-8 lg:py-10 flex-1 flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full max-w-[1560px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative flex items-start justify-center md:pl-10 lg:pl-11">
          {/* Main Diary Folder Jacket */}
          <div
            style={{ backgroundColor: activeColor }}
            className="flex-1 min-w-0 rounded-3xl sm:rounded-4xl p-4 sm:p-6 lg:p-8 shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-colors duration-300 relative z-10"
          >
            {/* Paper Stack Wrapper (Tactile layered stationery depth) */}
            <div className="relative w-full max-w-5xl xl:max-w-6xl mx-auto my-1 sm:my-2">
              {/* Paper Stack Layer 1 (Bottom peeking sheet, rotated -1.4deg) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[#F2EEE4] rounded-2xl sm:rounded-3xl rotate-[-1.4deg] translate-y-2 translate-x-1 border border-black/5 shadow-[0_6px_20px_rgba(0,0,0,0.05)] pointer-events-none"
              />

              {/* Paper Stack Layer 2 (Middle peeking sheet, rotated +1.1deg) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[#FAF7F0] rounded-2xl sm:rounded-3xl rotate-[1.1deg] translate-y-1 -translate-x-1 border border-black/4 shadow-[0_4px_14px_rgba(0,0,0,0.04)] pointer-events-none"
              />

              {/* Main Top Dotted Paper Sheet on which the content is placed */}
              <div className="relative z-10 w-full bg-gray-50 rounded-2xl sm:rounded-3xl dotted-paper-pattern py-8 sm:py-10 lg:py-12 px-6 sm:px-10 lg:px-12 border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column (7 cols): Greeting + Headline + CTAs */}
                  <div className="lg:col-span-7 flex flex-col items-start">
                    {/* Dynamic Time Greeting */}
                    <div ref={greetingRef} className="flex items-center">
                      <TimeGreeting />
                    </div>

                    {/* Display-XL Headline (Share Tech Font) */}
                    <h1
                      ref={headlineRef}
                      className={`${shareTech.className} text-3xl sm:text-4xl lg:text-[50px] xl:text-[56px] font-normal tracking-[-0.8px] leading-[1.1] text-ink pt-2`}
                    >
                      I&apos;m Dipakshee. Crafting thoughtful digital products & experiences.
                    </h1>

                    {/* Action Buttons Row */}
                    <div
                      ref={ctaRef}
                      className="flex flex-wrap items-center gap-3 pt-6 sm:pt-8 isolate"
                    >
                      {/* Primary CTA Button */}
                      <Link
                        href="#contact"
                        role="button"
                        className="relative inline-flex items-center justify-center gap-2 h-13 sm:h-14 max-w-full px-7 md:px-10 text-[18px] md:text-[19px] leading-6.5 font-sans font-semibold text-[#111] bg-[#FDB4C3] active:bg-[rgba(255,120,160,1)] border border-[#111] rounded-sm cursor-pointer select-none outline-none touch-manipulation after:content-[''] after:block after:absolute after:-top-0.5 after:left-0 after:w-full after:h-13 sm:after:h-14 after:bg-[#111] after:rounded-sm after:-z-10 after:translate-x-2 after:translate-y-2 after:transition-transform after:duration-200 after:ease-out hover:after:translate-x-0 hover:after:translate-y-0"
                      >
                        <span>Let&apos;s collaborate</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column (5 cols): Taped Profile Photograph */}
                  <div
                    ref={photoRef}
                    className="lg:col-span-5 flex justify-center lg:justify-end"
                  >
                    <div className="relative w-full max-w-92 sm:max-w-100 lg:max-w-105">
                      {/* Profile Photograph */}
                      <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden">
                        <Image
                          src="/profile_pic.png"
                          alt="Dipakshee — Creative Developer & Designer"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"
                          className="object-cover object-center"
                          priority
                        />
                      </div>

                      {/* Cello Tape on Top-Right Corner */}
                      <div className="absolute -top-7 -right-7 sm:-top-8 sm:-right-8 w-26 h-26 sm:w-32 sm:h-32 z-20 pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)] select-none">
                        <Image
                          src="/cello_tape.png"
                          alt=""
                          fill
                          sizes="(min-width: 640px) 128px, 104px"
                          className="object-contain"
                          priority
                        />
                      </div>

                      {/* Cello Tape on Bottom-Left Corner */}
                      <div className="absolute -bottom-7 -left-7 sm:-bottom-8 sm:-left-8 w-26 h-26 sm:w-32 sm:h-32 z-20 pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)] rotate-180 select-none">
                        <Image
                          src="/cello_tape.png"
                          alt=""
                          fill
                          sizes="(min-width: 640px) 128px, 104px"
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Diary Side Flaps Navigation (Docked to the Right Edge like an Authentic Diary) */}
          <nav
            aria-label="Diary Section Tabs"
            className="hidden md:flex flex-col gap-2 -ml-px pt-10 sm:pt-14 sticky top-10 sm:top-14 z-20 shrink-0"
          >
            {NAVIGATION_ITEMS.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.04)]"
                >
                  <Link
                    href={item.href}
                    onClick={() => onSelectTab?.(item.id)}
                    aria-label={item.label}
                    className="relative flex items-center justify-center w-10 sm:w-11 h-26 sm:h-28 py-3 text-ink select-none"
                  >
                    <SideTabShape fillColor={item.theme.active} />
                    <span className="relative z-10 text-[11px] sm:text-[12px] font-medium tracking-wider uppercase [writing-mode:vertical-rl] rotate-180 select-none text-ink/85">
                      {item.label}
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}