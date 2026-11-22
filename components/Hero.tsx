"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instrument_Serif } from "next/font/google";
import TimeGreeting from "./hero/TimeGreeting";
import { NAVIGATION_ITEMS } from "./Navbar";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
      <path
        d="M 0 0 C 0.8 0 1.8 0.4 2.8 1.2 L 37 11 C 39 12 40 14 40 16 L 40 84 C 40 86 39 88 37 89 L 2.8 98.8 C 1.8 99.6 0.8 100 0 100 L -2 100 L -2 0 Z"
        fill={fillColor}
      />
    </svg>
  );
}

function LeftTabShape({ fillColor }: SideTabShapeProps) {
  return (
    <svg
      viewBox="0 0 42 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <path
        d="M 40 0 C 39.2 0 38.2 0.4 37.2 1.2 L 3 11 C 1 12 0 14 0 16 L 0 84 C 0 86 1 88 3 89 L 37.2 98.8 C 38.2 99.6 39.2 100 40 100 L 42 100 L 42 0 Z"
        fill={fillColor}
      />
    </svg>
  );
}

interface FlapProps {
  item: (typeof NAVIGATION_ITEMS)[number];
  slotIndex: number;
  onTabClick: (id: string, e: React.MouseEvent) => void;
}

function RightFlap({ item, slotIndex, onTabClick }: FlapProps) {
  return (
    <div
      className="absolute left-full w-9 sm:w-10 lg:w-11 h-[14%] min-h-[72px] max-h-[108px] z-30 pointer-events-auto filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.06)] cursor-pointer select-none"
      style={{
        top: `${slotIndex * 19 + 4}%`,
      }}
      onClick={(e) => onTabClick(item.id, e)}
      title={`Navigate to ${item.label}`}
    >
      <div className="relative flex items-center justify-center w-full h-full py-2 sm:py-2.5 text-ink">
        <SideTabShape fillColor={item.theme.active} />
        <span className="relative z-10 text-[10px] sm:text-[11px] lg:text-[12px] font-medium tracking-wider uppercase [writing-mode:vertical-rl] rotate-180 select-none text-ink/85">
          {item.label}
        </span>
      </div>
    </div>
  );
}

function LeftFlap({ item, slotIndex, onTabClick }: FlapProps) {
  return (
    <div
      className="absolute right-full w-9 sm:w-10 lg:w-11 h-[14%] min-h-[72px] max-h-[108px] z-30 pointer-events-auto filter drop-shadow-[-2px_2px_4px_rgba(0,0,0,0.06)] cursor-pointer select-none"
      style={{
        top: `${slotIndex * 19 + 4}%`,
      }}
      onClick={(e) => onTabClick(item.id, e)}
      title={`Navigate to ${item.label}`}
    >
      <div className="relative flex items-center justify-center w-full h-full py-2 sm:py-2.5 text-ink">
        <LeftTabShape fillColor={item.theme.active} />
        <span className="relative z-10 text-[10px] sm:text-[11px] lg:text-[12px] font-medium tracking-wider uppercase [writing-mode:vertical-rl] rotate-180 select-none text-ink/85">
          {item.label}
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   PAGE SPREAD CONTENTS (5 SECTIONS: Work, About, Experience, Writing, Contact)
   ========================================================================= */

function WorkLeftPage() {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-6 lg:p-7 xl:p-8 2xl:p-10 select-none">
      <div className="flex flex-col items-start gap-2 lg:gap-3">
        <TimeGreeting />
        <h1
          className={`${shareTech.className} text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-[34px] 2xl:text-[42px] font-normal tracking-[-0.6px] lg:tracking-[-0.8px] leading-[1.14] text-ink pt-0.5 lg:pt-1`}
        >
          I&apos;m Dipakshee. Crafting thoughtful digital products &amp; experiences.
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 lg:gap-4 pt-3 lg:pt-5 isolate">
        <Link
          href="#contact"
          className="relative inline-flex items-center justify-center gap-2 h-10 lg:h-11 xl:h-12 max-w-full px-5 lg:px-6 xl:px-7 text-[14px] lg:text-[15px] xl:text-[16px] font-sans font-semibold text-[#111] bg-[#FDB4C3] active:bg-[rgba(255,120,160,1)] border border-[#111] rounded-none cursor-pointer select-none outline-none after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#111] after:rounded-none after:-z-10 after:translate-x-1.5 after:translate-y-1.5 lg:after:translate-x-2 lg:after:translate-y-2 after:transition-transform after:duration-200 hover:after:translate-x-0 hover:after:translate-y-0"
        >
          <span>Let&apos;s collaborate</span>
        </Link>
      </div>
    </div>
  );
}

function WorkRightPage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full p-2 sm:p-4 lg:p-5 xl:p-6 select-none">
      <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[430px] xl:max-w-[480px] 2xl:max-w-[530px]">
        <div className="relative w-full aspect-square rounded-none overflow-hidden">
          <Image
            src="/profile_pic.png"
            alt="Dipakshee — Creative Developer & Designer"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 530px"
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
    </div>
  );
}

function AboutLeftPage() {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-6 lg:p-7 xl:p-8 2xl:p-10 select-none">
      <div className="flex flex-col gap-2 lg:gap-3">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 xl:px-2.5 xl:py-1 rounded-none bg-brand-lavender/20 text-[#6B53B8] text-[10px] xl:text-[11px] font-mono font-bold uppercase tracking-wider w-fit">
          02 • About Me
        </div>
        <h2
          className={`${shareTech.className} text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] 2xl:text-[38px] font-normal tracking-[-0.5px] lg:tracking-[-0.6px] leading-[1.14] text-ink`}
        >
          Bridging tactile stationery warmth with digital engineering.
        </h2>
        <div className="space-y-1.5 lg:space-y-2.5 text-[12.5px] lg:text-[13px] xl:text-[14px] leading-relaxed text-ink/80 pt-0.5 font-sans">
          <p>
            I build digital products that feel tangible, purposeful, and delightfully human. Inspired by mid-century graphic design and mechanical stationery.
          </p>
          <p>
            My work focuses on the intersection of design systems, spatial layouts, and micro-interactions that make software feel good to use.
          </p>
        </div>
      </div>

      <div className="p-2.5 lg:p-3 xl:p-3.5 rounded-none bg-white/70 border border-black/5 flex items-center justify-between">
        <span className="font-mono text-[10.5px] lg:text-[11px] xl:text-[11.5px] text-ink/75">
          Based in India • Working Worldwide
        </span>
        <span className="w-2 h-2 rounded-none bg-emerald-500 animate-pulse" />
      </div>
    </div>
  );
}

function AboutRightPage() {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-6 lg:p-7 xl:p-8 2xl:p-10 select-none">
      <div className="flex flex-col gap-2 lg:gap-3">
        <span className="font-mono text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-muted">
          Core Disciplines
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-2.5 xl:gap-3 pt-0.5">
          <div className="p-2.5 lg:p-3 xl:p-3.5 rounded-none bg-white/80 border border-black/5 shadow-xs">
            <span className="font-mono text-[9px] xl:text-[10px] text-muted">01</span>
            <h3 className="text-[12.5px] lg:text-[13px] xl:text-[14px] font-semibold text-ink pt-0.5">Product Design</h3>
            <p className="text-[11px] lg:text-[11.5px] xl:text-[12px] text-muted leading-snug pt-0.5 lg:pt-1">
              End-to-end UX architecture, wireframes, and design systems.
            </p>
          </div>
          <div className="p-2.5 lg:p-3 xl:p-3.5 rounded-none bg-white/80 border border-black/5 shadow-xs">
            <span className="font-mono text-[9px] xl:text-[10px] text-muted">02</span>
            <h3 className="text-[12.5px] lg:text-[13px] xl:text-[14px] font-semibold text-ink pt-0.5">Frontend Engineering</h3>
            <p className="text-[11px] lg:text-[11.5px] xl:text-[12px] text-muted leading-snug pt-0.5 lg:pt-1">
              Next.js 16, React 19, TypeScript, and clean code ergonomics.
            </p>
          </div>
          <div className="p-2.5 lg:p-3 xl:p-3.5 rounded-none bg-white/80 border border-black/5 shadow-xs">
            <span className="font-mono text-[9px] xl:text-[10px] text-muted">03</span>
            <h3 className="text-[12.5px] lg:text-[13px] xl:text-[14px] font-semibold text-ink pt-0.5">Motion &amp; Interaction</h3>
            <p className="text-[11px] lg:text-[11.5px] xl:text-[12px] text-muted leading-snug pt-0.5 lg:pt-1">
              Physics-based choreographies, GSAP timelines, and tactile feedback.
            </p>
          </div>
          <div className="p-2.5 lg:p-3 xl:p-3.5 rounded-none bg-white/80 border border-black/5 shadow-xs">
            <span className="font-mono text-[9px] xl:text-[10px] text-muted">04</span>
            <h3 className="text-[12.5px] lg:text-[13px] xl:text-[14px] font-semibold text-ink pt-0.5">Brand Stationery</h3>
            <p className="text-[11px] lg:text-[11.5px] xl:text-[12px] text-muted leading-snug pt-0.5 lg:pt-1">
              Tactile UI aesthetics, typography scales, and visual identities.
            </p>
          </div>
        </div>
      </div>

      <div className="text-right font-mono text-[10px] xl:text-[11px] text-muted/70">
        P. 02 — DISCIPLINE
      </div>
    </div>
  );
}

function ExperienceLeftPage() {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-6 lg:p-7 xl:p-8 2xl:p-10 select-none">
      <div className="flex flex-col gap-2 lg:gap-3">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 xl:px-2.5 xl:py-1 rounded-none bg-brand-mint/20 text-[#3B7E6D] text-[10px] xl:text-[11px] font-mono font-bold uppercase tracking-wider w-fit">
          03 • Trajectory
        </div>
        <h2
          className={`${shareTech.className} text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] 2xl:text-[38px] font-normal tracking-[-0.5px] lg:tracking-[-0.6px] leading-[1.14] text-ink`}
        >
          Track record of shipping refined digital tools.
        </h2>
        <div className="space-y-2 lg:space-y-2.5 pt-1">
          <div className="border-l-2 border-brand-mint pl-3">
            <div className="flex items-center justify-between">
              <span className="text-[12.5px] lg:text-[13px] xl:text-[13.5px] font-semibold text-ink">Lead Product Designer</span>
              <span className="font-mono text-[9.5px] xl:text-[10.5px] text-muted">2024 — Present</span>
            </div>
            <p className="text-[11px] lg:text-[11.5px] xl:text-[12px] text-muted leading-snug pt-0.5">
              Spearheading design systems and enterprise SaaS product experiences.
            </p>
          </div>
          <div className="border-l-2 border-brand-mint/60 pl-3">
            <div className="flex items-center justify-between">
              <span className="text-[12.5px] lg:text-[13px] xl:text-[13.5px] font-semibold text-ink">Creative Frontend Dev</span>
              <span className="font-mono text-[9.5px] xl:text-[10.5px] text-muted">2022 — 2024</span>
            </div>
            <p className="text-[11px] lg:text-[11.5px] xl:text-[12px] text-muted leading-snug pt-0.5">
              Engineered high-performance web apps and interactive platforms.
            </p>
          </div>
          <div className="border-l-2 border-brand-mint/40 pl-3">
            <div className="flex items-center justify-between">
              <span className="text-[12.5px] lg:text-[13px] xl:text-[13.5px] font-semibold text-ink">UI/UX Designer</span>
              <span className="font-mono text-[9.5px] xl:text-[10.5px] text-muted">2020 — 2022</span>
            </div>
            <p className="text-[11px] lg:text-[11.5px] xl:text-[12px] text-muted leading-snug pt-0.5">
              Rapid prototyping, client workflows, and design guidelines.
            </p>
          </div>
        </div>
      </div>

      <div className="text-right font-mono text-[10px] xl:text-[11px] text-muted/70">
        P. 03 — CAREER
      </div>
    </div>
  );
}

function ExperienceRightPage() {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-6 lg:p-7 xl:p-8 2xl:p-10 select-none">
      <div className="flex flex-col gap-2 lg:gap-3">
        <span className="font-mono text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-muted">
          Highlights &amp; Tooling
        </span>
        <div className="grid grid-cols-2 gap-2 lg:gap-3 pt-0.5">
          <div className="p-2.5 lg:p-3 xl:p-3.5 rounded-none bg-white/80 border border-black/5">
            <span className="text-xl lg:text-2xl xl:text-3xl font-bold font-mono text-ink">15+</span>
            <p className="text-[10px] lg:text-[10.5px] xl:text-[11px] text-muted pt-0.5 leading-snug">Shipped production apps</p>
          </div>
          <div className="p-2.5 lg:p-3 xl:p-3.5 rounded-none bg-white/80 border border-black/5">
            <span className="text-xl lg:text-2xl xl:text-3xl font-bold font-mono text-ink">99%</span>
            <p className="text-[10px] lg:text-[10.5px] xl:text-[11px] text-muted pt-0.5 leading-snug">Accessibility &amp; perf rating</p>
          </div>
        </div>

        <div className="pt-1">
          <span className="font-mono text-[9.5px] xl:text-[10.5px] text-muted uppercase tracking-wider block mb-1.5">
            Tooling &amp; Frameworks
          </span>
          <div className="flex flex-wrap gap-1 lg:gap-1.5">
            {["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "GSAP", "Figma", "Node.js", "GraphQL"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-none bg-white border border-black/5 text-[10px] lg:text-[10.5px] xl:text-[11px] font-mono text-ink/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="text-right font-mono text-[10px] xl:text-[11px] text-muted/70">
        P. 03 — TOOLING
      </div>
    </div>
  );
}

function WritingLeftPage() {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-6 lg:p-7 xl:p-8 2xl:p-10 select-none">
      <div className="flex flex-col gap-2 lg:gap-3">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 xl:px-2.5 xl:py-1 rounded-none bg-brand-ochre/20 text-[#8E6D1F] text-[10px] xl:text-[11px] font-mono font-bold uppercase tracking-wider w-fit">
          04 • Writing &amp; Notes
        </div>
        <h2
          className={`${shareTech.className} text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] 2xl:text-[38px] font-normal tracking-[-0.5px] lg:tracking-[-0.6px] leading-[1.14] text-ink`}
        >
          Reflections on digital craft &amp; tactile interfaces.
        </h2>
        <div className="space-y-2 lg:space-y-2.5 pt-0.5">
          <div className="p-2.5 lg:p-3 xl:p-3.5 rounded-none bg-white/70 border border-black/5">
            <span className="font-mono text-[9px] xl:text-[10px] text-muted uppercase">Essay 01</span>
            <h3 className="text-[12.5px] lg:text-[13px] xl:text-[13.5px] font-semibold text-ink pt-0.5">The Return of Physicality</h3>
            <p className="text-[11px] lg:text-[11.5px] xl:text-[12px] text-muted leading-snug pt-0.5">
              Why digital products crave tangible stationery analogies and physical weight.
            </p>
          </div>
          <div className="p-2.5 lg:p-3 xl:p-3.5 rounded-none bg-white/70 border border-black/5">
            <span className="font-mono text-[9px] xl:text-[10px] text-muted uppercase">Essay 02</span>
            <h3 className="text-[12.5px] lg:text-[13px] xl:text-[13.5px] font-semibold text-ink pt-0.5">Motion with Gravity</h3>
            <p className="text-[11px] lg:text-[11.5px] xl:text-[12px] text-muted leading-snug pt-0.5">
              Why natural easing and physics feel intuitive while linear transitions feel lifeless.
            </p>
          </div>
        </div>
      </div>

      <div className="text-right font-mono text-[10px] xl:text-[11px] text-muted/70">
        P. 04 — ESSAYS
      </div>
    </div>
  );
}

function WritingRightPage() {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-6 lg:p-7 xl:p-8 2xl:p-10 select-none">
      <div className="flex flex-col gap-2 lg:gap-3">
        <span className="font-mono text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-muted">
          Marginalia &amp; Quotes
        </span>
        <blockquote className="p-3 lg:p-3.5 xl:p-4 rounded-none bg-white/80 border border-black/5 italic text-[12px] lg:text-[12.5px] xl:text-[13px] leading-relaxed text-ink/85 font-serif">
          &ldquo;Simplicity is not the lack of clutter, that&apos;s a consequence of simplicity. Simplicity essentially describes the purpose and place of an object.&rdquo;
          <footer className="text-[10px] xl:text-[11px] font-mono text-muted not-italic pt-1.5">
            — Dieter Rams
          </footer>
        </blockquote>

        <div className="p-2.5 lg:p-3 xl:p-3.5 rounded-none bg-white/80 border border-black/5">
          <span className="font-mono text-[9.5px] xl:text-[10.5px] font-bold uppercase text-muted block mb-0.5">
            Current Readings
          </span>
          <p className="text-[11px] lg:text-[11.5px] xl:text-[12px] text-ink/80 leading-snug">
            Stationery craft history, spatial computing ergonomics, and generative typography.
          </p>
        </div>
      </div>

      <div className="text-right font-mono text-[10px] xl:text-[11px] text-muted/70">
        P. 04 — MARGINALIA
      </div>
    </div>
  );
}

function ContactLeftPage() {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-6 lg:p-7 xl:p-8 2xl:p-10 select-none">
      <div className="flex flex-col gap-2 lg:gap-3">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 xl:px-2.5 xl:py-1 rounded-none bg-[#FF78A0]/20 text-[#A62B50] text-[10px] xl:text-[11px] font-mono font-bold uppercase tracking-wider w-fit">
          05 • Get in Touch
        </div>
        <h2
          className={`${shareTech.className} text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] 2xl:text-[38px] font-normal tracking-[-0.5px] lg:tracking-[-0.6px] leading-[1.14] text-ink`}
        >
          Let&apos;s build something extraordinary together.
        </h2>
        <p className="text-[12.5px] lg:text-[13px] xl:text-[13.5px] leading-relaxed text-ink/80 pt-0.5 font-sans">
          I&apos;m available for select freelance collaborations, design consulting, and engineering leadership.
        </p>

        <div className="p-2.5 lg:p-3 xl:p-3.5 rounded-none bg-white/80 border border-black/5 flex items-center justify-between mt-1">
          <div>
            <span className="text-[10px] xl:text-[11px] font-mono text-muted uppercase block">Direct Email</span>
            <span className="text-[12.5px] lg:text-[13px] xl:text-[14px] font-semibold text-ink font-mono">hello@dipakshee.dev</span>
          </div>
          <span className="px-2 py-0.5 rounded-none text-[9.5px] xl:text-[10.5px] font-mono bg-emerald-500/15 text-emerald-600 font-medium">
            Open
          </span>
        </div>
      </div>

      <div className="text-right font-mono text-[10px] xl:text-[11px] text-muted/70">
        P. 05 — CONTACT
      </div>
    </div>
  );
}

function ContactRightPage() {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-6 lg:p-7 xl:p-8 2xl:p-10 select-none">
      <div className="flex flex-col gap-2 lg:gap-3">
        <span className="font-mono text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-muted">
          Connect &amp; Links
        </span>
        <div className="grid grid-cols-2 gap-2 lg:gap-2.5 pt-0.5">
          <Link
            href="https://github.com"
            target="_blank"
            className="p-2.5 lg:p-3 rounded-none bg-white/80 border border-black/5 hover:bg-white transition-colors"
          >
            <span className="text-[12px] lg:text-[12.5px] xl:text-[13px] font-semibold text-ink block">GitHub</span>
            <span className="text-[10px] lg:text-[10.5px] xl:text-[11px] font-mono text-muted">Code &amp; repos</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="p-2.5 lg:p-3 rounded-none bg-white/80 border border-black/5 hover:bg-white transition-colors"
          >
            <span className="text-[12px] lg:text-[12.5px] xl:text-[13px] font-semibold text-ink block">LinkedIn</span>
            <span className="text-[10px] lg:text-[10.5px] xl:text-[11px] font-mono text-muted">Career updates</span>
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            className="p-2.5 lg:p-3 rounded-none bg-white/80 border border-black/5 hover:bg-white transition-colors"
          >
            <span className="text-[12px] lg:text-[12.5px] xl:text-[13px] font-semibold text-ink block">Twitter / X</span>
            <span className="text-[10px] lg:text-[10.5px] xl:text-[11px] font-mono text-muted">Thoughts &amp; WIPs</span>
          </Link>
          <Link
            href="https://substack.com"
            target="_blank"
            className="p-2.5 lg:p-3 rounded-none bg-white/80 border border-black/5 hover:bg-white transition-colors"
          >
            <span className="text-[12px] lg:text-[12.5px] xl:text-[13px] font-semibold text-ink block">Substack</span>
            <span className="text-[10px] lg:text-[10.5px] xl:text-[11px] font-mono text-muted">Articles &amp; notes</span>
          </Link>
        </div>

        <div className="p-2.5 lg:p-3 xl:p-3.5 rounded-none bg-white/70 border border-black/5 text-center mt-1">
          <p className="text-[11.5px] lg:text-[12px] xl:text-[12.5px] text-ink/80 italic font-serif">
            &ldquo;Thank you for flipping through my diary.&rdquo;
          </p>
          <span className="text-[10.5px] lg:text-[11px] xl:text-[11.5px] font-mono text-muted block pt-0.5">— Dipakshee</span>
        </div>
      </div>

      <div className="text-right font-mono text-[10px] xl:text-[11px] text-muted/70">
        P. 05 — SIGN-OFF
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN HERO & BOOK SPREAD COMPONENT
   ========================================================================= */

export default function Hero({
  activeColor = "rgba(255, 176, 132, 0.90)",
  onSelectTab,
}: HeroProps) {
  const pinnedSectionRef = useRef<HTMLElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const [activePageIndex, setActivePageIndex] = useState(0);

  // References for the 4 3D turning leaves (page turns 1..4)
  const leafRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shadowFrontRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shadowBackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const spineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const leaves = leafRefs.current.filter(Boolean) as HTMLDivElement[];
      if (leaves.length === 0 || !pinnedSectionRef.current) return;

      // Master scrubbed timeline for turning pages over the center spine
      const tl = gsap.timeline({
        paused: true,
      });

      // Ensure center spine crease starts completely hidden when pages are flat
      if (spineRef.current) {
        gsap.set(spineRef.current, { opacity: 0 });
      }

      // 4 turns: each turn takes 1 unit of timeline time (total 4)
      leaves.forEach((leaf, i) => {
        const shadowFront = shadowFrontRefs.current[i];
        const shadowBack = shadowBackRefs.current[i];

        // Elevate z-index while turning so leaf swings cleanly above both stacks
        tl.set(leaf, { zIndex: 40 + i }, i);

        // 3D rotation pivoting along the center spine (transformOrigin: "left center")
        tl.to(
          leaf,
          {
            rotateY: -180,
            duration: 1,
            ease: "power1.inOut",
          },
          i
        );

        // Dynamic paper curvature shadow (appears right as leaf bends along the spine)
        if (shadowFront) {
          tl.to(
            shadowFront,
            {
              opacity: 1,
              duration: 0.12,
              ease: "power1.out",
            },
            i
          ).to(
            shadowFront,
            {
              opacity: 0,
              duration: 0.13,
              ease: "power1.in",
            },
            i + 0.12
          );
        }

        if (shadowBack) {
          tl.to(
            shadowBack,
            {
              opacity: 1,
              duration: 0.13,
              ease: "power1.out",
            },
            i + 0.75
          ).to(
            shadowBack,
            {
              opacity: 0,
              duration: 0.12,
              ease: "power1.in",
            },
            i + 0.88
          );
        }

        // Spine bend & crease effect:
        if (spineRef.current) {
          tl.to(
            spineRef.current,
            {
              opacity: 1,
              duration: 0.12,
              ease: "power1.out",
            },
            i
          )
            .to(
              spineRef.current,
              {
                opacity: 0,
                duration: 0.13,
                ease: "power1.in",
              },
              i + 0.12
            )
            .to(
              spineRef.current,
              {
                opacity: 1,
                duration: 0.13,
                ease: "power1.out",
              },
              i + 0.75
            )
            .to(
              spineRef.current,
              {
                opacity: 0,
                duration: 0.12,
                ease: "power1.in",
              },
              i + 0.88
            );
        }

        // Once settled at -180deg on the left stack, set resting z-index
        tl.set(leaf, { zIndex: 11 + i }, i + 1);
      });

      // ScrollTrigger pins the book spread and scrubs the timeline bidirectionally
      const st = ScrollTrigger.create({
        trigger: pinnedSectionRef.current,
        start: "top top",
        end: "+=2800",
        pin: true,
        scrub: 0.4,
        animation: tl,
        onUpdate: (self) => {
          const progress = self.progress;
          const pageIndex = Math.min(
            Math.floor(progress * 4 + 0.5),
            NAVIGATION_ITEMS.length - 1
          );
          setActivePageIndex(pageIndex);
          const currentItem = NAVIGATION_ITEMS[pageIndex];
          if (currentItem) {
            onSelectTab?.(currentItem.id);
          }
        },
      });

      scrollTriggerRef.current = st;
    });

    return () => mm.revert();
  }, [onSelectTab]);

  const handleTabClick = (itemId: string, e: React.MouseEvent) => {
    e.preventDefault();
    onSelectTab?.(itemId);
    const targetIndex = NAVIGATION_ITEMS.findIndex((s) => s.id === itemId);
    if (targetIndex !== -1) {
      setActivePageIndex(targetIndex);
      if (scrollTriggerRef.current) {
        const st = scrollTriggerRef.current;
        const progress = targetIndex / (NAVIGATION_ITEMS.length - 1);
        const targetScroll = st.start + progress * (st.end - st.start);
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      ref={pinnedSectionRef}
      className="relative w-full min-h-screen py-1 sm:py-2 lg:py-3 flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full max-w-[1800px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="relative flex items-center justify-center">
          {/* Main Book Spread Wrapper (Centered with generous clearance for left & right flaps) */}
          <div className="relative w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1480px] mx-auto my-1 sm:my-2 px-6 sm:px-8 md:px-12 lg:px-14 xl:px-16">
            {/* DESKTOP 2-PAGE BOOK SPREAD (Hinged at Fixed Center Spine) */}
            <div
              className="hidden md:block relative z-10 w-full h-[clamp(650px,91vh,980px)] rounded-[8px] shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
              style={{ perspective: "2200px" }}
            >
              {/* 1. Base Left Page (Bottom-most left: Work Left — Peach Divider) */}
              <div
                className="absolute top-0 left-0 w-1/2 h-full rounded-l-[8px] pt-3.5 pb-3.5 pl-6 md:pt-4 md:pb-4 md:pl-8 lg:pt-5 lg:pb-5 lg:pl-10 xl:pt-6 xl:pb-6 xl:pl-12 2xl:pt-8 2xl:pb-8 2xl:pl-16 pr-0 z-10"
                style={{ backgroundColor: NAVIGATION_ITEMS[0].theme.active }}
              >
                <div className="w-full h-full bg-gray-50 dotted-paper-pattern rounded-none border-t border-b border-l border-black/5 overflow-hidden">
                  <WorkLeftPage />
                </div>
              </div>

              {/* 2. Base Right Page (Bottom-most right: Contact Right — Pink Divider) */}
              <div
                className="absolute top-0 right-0 w-1/2 h-full rounded-r-[8px] pt-3.5 pb-3.5 pr-6 md:pt-4 md:pb-4 md:pr-8 lg:pt-5 lg:pb-5 lg:pr-10 xl:pt-6 xl:pb-6 xl:pr-12 2xl:pt-8 2xl:pb-8 2xl:pr-16 pl-0 z-10"
                style={{ backgroundColor: NAVIGATION_ITEMS[4].theme.active }}
              >
                <div className="w-full h-full bg-gray-50 dotted-paper-pattern rounded-none border-t border-b border-r border-black/5 overflow-hidden">
                  <ContactRightPage />
                </div>
                {/* Static Right Flap for Contact (Item 4, Pink) */}
                <RightFlap
                  item={NAVIGATION_ITEMS[4]}
                  slotIndex={4}
                  onTabClick={handleTabClick}
                />
              </div>

              {/* 3. The 4 3D Turning Leaves (Hinged at Fixed Center Spine: transformOrigin 'left center') */}
              {/* LEAF 0: Front = Work Right (Peach Divider), Back = About Left (Lavender Divider) */}
              <div
                ref={(el) => {
                  leafRefs.current[0] = el;
                }}
                className="absolute top-0 right-0 w-1/2 h-full origin-left"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "left center",
                  willChange: "transform",
                  zIndex: 24,
                }}
              >
                {/* FRONT FACE: Peach divider with Work Right page + Peach flap */}
                <div
                  className="absolute inset-0 rounded-r-[8px] pt-3.5 pb-3.5 pr-6 md:pt-4 md:pb-4 md:pr-8 lg:pt-5 lg:pb-5 lg:pr-10 xl:pt-6 xl:pb-6 xl:pr-12 2xl:pt-8 2xl:pb-8 2xl:pr-16 pl-0"
                  style={{
                    backgroundColor: NAVIGATION_ITEMS[0].theme.active,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "translateZ(1px)",
                  }}
                >
                  <div className="w-full h-full bg-gray-50 dotted-paper-pattern rounded-none border-t border-b border-r border-black/5 overflow-hidden">
                    <WorkRightPage />
                  </div>
                  <div
                    ref={(el) => {
                      shadowFrontRefs.current[0] = el;
                    }}
                    className="absolute inset-0 pointer-events-none opacity-0 rounded-r-[8px]"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.06) 15%, transparent 40%)",
                    }}
                  />
                  <RightFlap
                    item={NAVIGATION_ITEMS[0]}
                    slotIndex={0}
                    onTabClick={handleTabClick}
                  />
                </div>

                {/* BACK FACE: Lavender divider with About Left page + Peach flap on left */}
                <div
                  className="absolute inset-0 rounded-l-[8px] pt-3.5 pb-3.5 pl-6 md:pt-4 md:pb-4 md:pl-8 lg:pt-5 lg:pb-5 lg:pl-10 xl:pt-6 xl:pb-6 xl:pl-12 2xl:pt-8 2xl:pb-8 2xl:pl-16 pr-0"
                  style={{
                    backgroundColor: NAVIGATION_ITEMS[1].theme.active,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg) translateZ(1px)",
                  }}
                >
                  <div className="w-full h-full bg-gray-50 dotted-paper-pattern rounded-none border-t border-b border-l border-black/5 overflow-hidden">
                    <AboutLeftPage />
                  </div>
                  <div
                    ref={(el) => {
                      shadowBackRefs.current[0] = el;
                    }}
                    className="absolute inset-0 pointer-events-none opacity-0 rounded-l-[8px]"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.06) 15%, transparent 40%)",
                    }}
                  />
                  <LeftFlap
                    item={NAVIGATION_ITEMS[0]}
                    slotIndex={0}
                    onTabClick={handleTabClick}
                  />
                </div>
              </div>

              {/* LEAF 1: Front = About Right (Lavender Divider), Back = Experience Left (Mint Divider) */}
              <div
                ref={(el) => {
                  leafRefs.current[1] = el;
                }}
                className="absolute top-0 right-0 w-1/2 h-full origin-left"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "left center",
                  willChange: "transform",
                  zIndex: 23,
                }}
              >
                {/* FRONT FACE: Lavender divider with About Right page + Lavender flap */}
                <div
                  className="absolute inset-0 rounded-r-[8px] pt-3.5 pb-3.5 pr-6 md:pt-4 md:pb-4 md:pr-8 lg:pt-5 lg:pb-5 lg:pr-10 xl:pt-6 xl:pb-6 xl:pr-12 2xl:pt-8 2xl:pb-8 2xl:pr-16 pl-0"
                  style={{
                    backgroundColor: NAVIGATION_ITEMS[1].theme.active,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "translateZ(1px)",
                  }}
                >
                  <div className="w-full h-full bg-gray-50 dotted-paper-pattern rounded-none border-t border-b border-r border-black/5 overflow-hidden">
                    <AboutRightPage />
                  </div>
                  <div
                    ref={(el) => {
                      shadowFrontRefs.current[1] = el;
                    }}
                    className="absolute inset-0 pointer-events-none opacity-0 rounded-r-[8px]"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.06) 15%, transparent 40%)",
                    }}
                  />
                  <RightFlap
                    item={NAVIGATION_ITEMS[1]}
                    slotIndex={1}
                    onTabClick={handleTabClick}
                  />
                </div>

                {/* BACK FACE: Mint divider with Experience Left page + Lavender flap on left */}
                <div
                  className="absolute inset-0 rounded-l-[8px] pt-3.5 pb-3.5 pl-6 md:pt-4 md:pb-4 md:pl-8 lg:pt-5 lg:pb-5 lg:pl-10 xl:pt-6 xl:pb-6 xl:pl-12 2xl:pt-8 2xl:pb-8 2xl:pl-16 pr-0"
                  style={{
                    backgroundColor: NAVIGATION_ITEMS[2].theme.active,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg) translateZ(1px)",
                  }}
                >
                  <div className="w-full h-full bg-gray-50 dotted-paper-pattern rounded-none border-t border-b border-l border-black/5 overflow-hidden">
                    <ExperienceLeftPage />
                  </div>
                  <div
                    ref={(el) => {
                      shadowBackRefs.current[1] = el;
                    }}
                    className="absolute inset-0 pointer-events-none opacity-0 rounded-l-[8px]"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.06) 15%, transparent 40%)",
                    }}
                  />
                  <LeftFlap
                    item={NAVIGATION_ITEMS[1]}
                    slotIndex={1}
                    onTabClick={handleTabClick}
                  />
                </div>
              </div>

              {/* LEAF 2: Front = Experience Right (Mint Divider), Back = Writing Left (Ochre Divider) */}
              <div
                ref={(el) => {
                  leafRefs.current[2] = el;
                }}
                className="absolute top-0 right-0 w-1/2 h-full origin-left"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "left center",
                  willChange: "transform",
                  zIndex: 22,
                }}
              >
                {/* FRONT FACE: Mint divider with Experience Right page + Mint flap */}
                <div
                  className="absolute inset-0 rounded-r-[8px] pt-3.5 pb-3.5 pr-6 md:pt-4 md:pb-4 md:pr-8 lg:pt-5 lg:pb-5 lg:pr-10 xl:pt-6 xl:pb-6 xl:pr-12 2xl:pt-8 2xl:pb-8 2xl:pr-16 pl-0"
                  style={{
                    backgroundColor: NAVIGATION_ITEMS[2].theme.active,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "translateZ(1px)",
                  }}
                >
                  <div className="w-full h-full bg-gray-50 dotted-paper-pattern rounded-none border-t border-b border-r border-black/5 overflow-hidden">
                    <ExperienceRightPage />
                  </div>
                  <div
                    ref={(el) => {
                      shadowFrontRefs.current[2] = el;
                    }}
                    className="absolute inset-0 pointer-events-none opacity-0 rounded-r-[8px]"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.06) 15%, transparent 40%)",
                    }}
                  />
                  <RightFlap
                    item={NAVIGATION_ITEMS[2]}
                    slotIndex={2}
                    onTabClick={handleTabClick}
                  />
                </div>

                {/* BACK FACE: Ochre divider with Writing Left page + Mint flap on left */}
                <div
                  className="absolute inset-0 rounded-l-[8px] pt-3.5 pb-3.5 pl-6 md:pt-4 md:pb-4 md:pl-8 lg:pt-5 lg:pb-5 lg:pl-10 xl:pt-6 xl:pb-6 xl:pl-12 2xl:pt-8 2xl:pb-8 2xl:pl-16 pr-0"
                  style={{
                    backgroundColor: NAVIGATION_ITEMS[3].theme.active,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg) translateZ(1px)",
                  }}
                >
                  <div className="w-full h-full bg-gray-50 dotted-paper-pattern rounded-none border-t border-b border-l border-black/5 overflow-hidden">
                    <WritingLeftPage />
                  </div>
                  <div
                    ref={(el) => {
                      shadowBackRefs.current[2] = el;
                    }}
                    className="absolute inset-0 pointer-events-none opacity-0 rounded-l-[8px]"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.06) 15%, transparent 40%)",
                    }}
                  />
                  <LeftFlap
                    item={NAVIGATION_ITEMS[2]}
                    slotIndex={2}
                    onTabClick={handleTabClick}
                  />
                </div>
              </div>

              {/* LEAF 3: Front = Writing Right (Ochre Divider), Back = Contact Left (Pink Divider) */}
              <div
                ref={(el) => {
                  leafRefs.current[3] = el;
                }}
                className="absolute top-0 right-0 w-1/2 h-full origin-left"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "left center",
                  willChange: "transform",
                  zIndex: 21,
                }}
              >
                {/* FRONT FACE: Ochre divider with Writing Right page + Ochre flap */}
                <div
                  className="absolute inset-0 rounded-r-[8px] pt-3.5 pb-3.5 pr-6 md:pt-4 md:pb-4 md:pr-8 lg:pt-5 lg:pb-5 lg:pr-10 xl:pt-6 xl:pb-6 xl:pr-12 2xl:pt-8 2xl:pb-8 2xl:pr-16 pl-0"
                  style={{
                    backgroundColor: NAVIGATION_ITEMS[3].theme.active,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "translateZ(1px)",
                  }}
                >
                  <div className="w-full h-full bg-gray-50 dotted-paper-pattern rounded-none border-t border-b border-r border-black/5 overflow-hidden">
                    <WritingRightPage />
                  </div>
                  <div
                    ref={(el) => {
                      shadowFrontRefs.current[3] = el;
                    }}
                    className="absolute inset-0 pointer-events-none opacity-0 rounded-r-[8px]"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.06) 15%, transparent 40%)",
                    }}
                  />
                  <RightFlap
                    item={NAVIGATION_ITEMS[3]}
                    slotIndex={3}
                    onTabClick={handleTabClick}
                  />
                </div>

                {/* BACK FACE: Pink divider with Contact Left page + Ochre flap on left */}
                <div
                  className="absolute inset-0 rounded-l-[8px] pt-3.5 pb-3.5 pl-6 md:pt-4 md:pb-4 md:pl-8 lg:pt-5 lg:pb-5 lg:pl-10 xl:pt-6 xl:pb-6 xl:pl-12 2xl:pt-8 2xl:pb-8 2xl:pl-16 pr-0"
                  style={{
                    backgroundColor: NAVIGATION_ITEMS[4].theme.active,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg) translateZ(1px)",
                  }}
                >
                  <div className="w-full h-full bg-gray-50 dotted-paper-pattern rounded-none border-t border-b border-l border-black/5 overflow-hidden">
                    <ContactLeftPage />
                  </div>
                  <div
                    ref={(el) => {
                      shadowBackRefs.current[3] = el;
                    }}
                    className="absolute inset-0 pointer-events-none opacity-0 rounded-l-[8px]"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.06) 15%, transparent 40%)",
                    }}
                  />
                  <LeftFlap
                    item={NAVIGATION_ITEMS[3]}
                    slotIndex={3}
                    onTabClick={handleTabClick}
                  />
                </div>
              </div>

              {/* 4. FIXED CENTER SPINE (Crease upon the continuous white page) */}
              <div
                ref={spineRef}
                aria-hidden="true"
                className="absolute top-3.5 bottom-3.5 md:top-4 md:bottom-4 lg:top-5 lg:bottom-5 xl:top-6 xl:bottom-6 2xl:top-8 2xl:bottom-8 left-1/2 -translate-x-1/2 w-8 sm:w-10 z-30 pointer-events-none opacity-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.04) 25%, rgba(0, 0, 0, 0.16) 50%, rgba(0, 0, 0, 0.04) 75%, transparent)",
                }}
              >
                {/* Spine Center Dashed Stitch Seam */}
                <div className="absolute top-3 bottom-3 left-1/2 -translate-x-1/2 w-px border-r border-dashed border-black/25" />
              </div>
            </div>

            {/* MOBILE SINGLE PAGE CARD VIEW (Screens < md) */}
            <div
              style={{
                backgroundColor:
                  NAVIGATION_ITEMS[activePageIndex]?.theme.active || activeColor,
              }}
              className="md:hidden relative z-10 w-full rounded-[8px] p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-colors duration-500"
            >
              {/* Mobile Quick Section Switcher */}
              <div className="flex items-center justify-between gap-1 mb-4 pb-2 border-b border-black/10 overflow-x-auto">
                {NAVIGATION_ITEMS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={(e) => handleTabClick(item.id, e)}
                    style={{
                      backgroundColor: activePageIndex === idx ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                    }}
                    className={`px-2.5 py-1 text-[11px] font-mono font-medium uppercase tracking-wider rounded-[6px] transition-colors ${
                      activePageIndex === idx ? "text-ink font-bold shadow-xs" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="w-full bg-gray-50 rounded-none dotted-paper-pattern p-3 sm:p-5 border border-black/5 shadow-xs">
                {activePageIndex === 0 && (
                  <div className="space-y-6">
                    <WorkLeftPage />
                    <WorkRightPage />
                  </div>
                )}
                {activePageIndex === 1 && (
                  <div className="space-y-6">
                    <AboutLeftPage />
                    <AboutRightPage />
                  </div>
                )}
                {activePageIndex === 2 && (
                  <div className="space-y-6">
                    <ExperienceLeftPage />
                    <ExperienceRightPage />
                  </div>
                )}
                {activePageIndex === 3 && (
                  <div className="space-y-6">
                    <WritingLeftPage />
                    <WritingRightPage />
                  </div>
                )}
                {activePageIndex === 4 && (
                  <div className="space-y-6">
                    <ContactLeftPage />
                    <ContactRightPage />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
