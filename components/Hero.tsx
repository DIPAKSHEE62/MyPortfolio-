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

/* =========================================================================
   PAGE SPREAD CONTENTS (5 SECTIONS: Work, About, Experience, Writing, Contact)
   ========================================================================= */

function WorkLeftPage() {
  return (
    <div className="flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10 select-none">
      <div className="flex flex-col items-start gap-3">
        <TimeGreeting />
        <h1
          className={`${shareTech.className} text-2xl sm:text-3xl lg:text-[42px] xl:text-[46px] font-normal tracking-[-0.8px] leading-[1.12] text-ink pt-1`}
        >
          I&apos;m Dipakshee. Crafting thoughtful digital products & experiences.
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
        <Link
          href="#contact"
          className="relative inline-flex items-center justify-center gap-2 h-12 max-w-full px-7 text-[16px] font-sans font-semibold text-[#111] bg-[#FDB4C3] active:bg-[rgba(255,120,160,1)] border border-[#111] rounded-sm cursor-pointer select-none outline-none after:content-[''] after:block after:absolute after:-top-0.5 after:left-0 after:w-full after:h-12 after:bg-[#111] after:rounded-sm after:-z-10 after:translate-x-1.5 after:translate-y-1.5 after:transition-transform after:duration-200 hover:after:translate-x-0 hover:after:translate-y-0"
        >
          <span>Let&apos;s collaborate</span>
        </Link>
        <span className="font-mono text-[11px] font-bold tracking-wider text-muted/70 uppercase">
          01 / INTRO & WORK
        </span>
      </div>
    </div>
  );
}

function WorkRightPage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full p-6 sm:p-8 select-none">
      <div className="relative w-full max-w-72 sm:max-w-80 lg:max-w-88 xl:max-w-96">
        <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden border border-black/10 bg-white">
          <Image
            src="/profile_pic.png"
            alt="Dipakshee — Creative Developer & Designer"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Top-Right Cello Tape */}
        <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 z-20 pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] select-none">
          <Image
            src="/cello_tape.png"
            alt=""
            fill
            sizes="112px"
            className="object-contain"
            priority
          />
        </div>

        {/* Bottom-Left Cello Tape */}
        <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-28 sm:h-28 z-20 pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] rotate-180 select-none">
          <Image
            src="/cello_tape.png"
            alt=""
            fill
            sizes="112px"
            className="object-contain"
            priority
          />
        </div>

        <p className="text-center font-mono text-[11px] font-medium tracking-wide text-muted pt-3">
          Dipakshee • Designer & Creative Engineer
        </p>
      </div>
    </div>
  );
}

function AboutLeftPage() {
  return (
    <div className="flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10 select-none">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#B8A4ED]/20 text-[#6B53B8] text-[11px] font-mono font-bold uppercase tracking-wider w-fit">
          02 • About Me
        </div>
        <h2
          className={`${shareTech.className} text-2xl sm:text-3xl lg:text-[38px] font-normal tracking-[-0.6px] leading-[1.14] text-ink`}
        >
          Bridging tactile stationery warmth with digital engineering.
        </h2>
        <div className="space-y-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-ink/80 pt-1 font-sans">
          <p>
            I build digital products that feel tangible, purposeful, and delightfully human. Inspired by mid-century graphic design and mechanical stationery.
          </p>
          <p>
            My work focuses on the intersection of design systems, spatial layouts, and micro-interactions that make software feel good to use.
          </p>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-white/70 border border-black/5 flex items-center justify-between">
        <span className="font-mono text-[11.5px] text-ink/75">
          Based in India • Working Worldwide
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>
    </div>
  );
}

function AboutRightPage() {
  return (
    <div className="flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10 select-none">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
          Core Disciplines
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-white/80 border border-black/5 shadow-xs">
            <span className="font-mono text-[10px] text-muted">01</span>
            <h3 className="text-[14px] font-semibold text-ink pt-0.5">Product Design</h3>
            <p className="text-[12px] text-muted leading-snug pt-1">
              End-to-end UX architecture, wireframes, and design systems.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/80 border border-black/5 shadow-xs">
            <span className="font-mono text-[10px] text-muted">02</span>
            <h3 className="text-[14px] font-semibold text-ink pt-0.5">Frontend Engineering</h3>
            <p className="text-[12px] text-muted leading-snug pt-1">
              Next.js 16, React 19, TypeScript, and clean code ergonomics.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/80 border border-black/5 shadow-xs">
            <span className="font-mono text-[10px] text-muted">03</span>
            <h3 className="text-[14px] font-semibold text-ink pt-0.5">Motion & Interaction</h3>
            <p className="text-[12px] text-muted leading-snug pt-1">
              Physics-based choreographies, GSAP timelines, and tactile feedback.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/80 border border-black/5 shadow-xs">
            <span className="font-mono text-[10px] text-muted">04</span>
            <h3 className="text-[14px] font-semibold text-ink pt-0.5">Brand Stationery</h3>
            <p className="text-[12px] text-muted leading-snug pt-1">
              Tactile UI aesthetics, typography scales, and visual identities.
            </p>
          </div>
        </div>
      </div>

      <div className="text-right font-mono text-[11px] text-muted/70">
        P. 02 — DISCIPLINE
      </div>
    </div>
  );
}

function ExperienceLeftPage() {
  return (
    <div className="flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10 select-none">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#A4D4C5]/20 text-[#3B7E6D] text-[11px] font-mono font-bold uppercase tracking-wider w-fit">
          03 • Trajectory
        </div>
        <h2
          className={`${shareTech.className} text-2xl sm:text-3xl lg:text-[38px] font-normal tracking-[-0.6px] leading-[1.14] text-ink`}
        >
          Track record of shipping refined digital tools.
        </h2>
        <div className="space-y-3 pt-2">
          <div className="border-l-2 border-[#A4D4C5] pl-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[13.5px] font-semibold text-ink">Lead Product Designer</span>
              <span className="font-mono text-[10.5px] text-muted">2024 — Present</span>
            </div>
            <p className="text-[12px] text-muted leading-snug pt-0.5">
              Spearheading design systems and enterprise SaaS product experiences.
            </p>
          </div>
          <div className="border-l-2 border-[#A4D4C5]/60 pl-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[13.5px] font-semibold text-ink">Creative Frontend Dev</span>
              <span className="font-mono text-[10.5px] text-muted">2022 — 2024</span>
            </div>
            <p className="text-[12px] text-muted leading-snug pt-0.5">
              Engineered high-performance web apps and interactive platforms.
            </p>
          </div>
          <div className="border-l-2 border-[#A4D4C5]/40 pl-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[13.5px] font-semibold text-ink">UI/UX Designer</span>
              <span className="font-mono text-[10.5px] text-muted">2020 — 2022</span>
            </div>
            <p className="text-[12px] text-muted leading-snug pt-0.5">
              Rapid prototyping, client workflows, and design guidelines.
            </p>
          </div>
        </div>
      </div>

      <div className="text-right font-mono text-[11px] text-muted/70">
        P. 03 — CAREER
      </div>
    </div>
  );
}

function ExperienceRightPage() {
  return (
    <div className="flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10 select-none">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
          Highlights & Tooling
        </span>
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="p-3 rounded-xl bg-white/80 border border-black/5">
            <span className="text-2xl font-bold font-mono text-ink">15+</span>
            <p className="text-[11px] text-muted pt-0.5 leading-snug">Shipped production apps</p>
          </div>
          <div className="p-3 rounded-xl bg-white/80 border border-black/5">
            <span className="text-2xl font-bold font-mono text-ink">99%</span>
            <p className="text-[11px] text-muted pt-0.5 leading-snug">Accessibility & perf rating</p>
          </div>
        </div>

        <div className="pt-2">
          <span className="font-mono text-[10.5px] text-muted uppercase tracking-wider block mb-2">
            Tooling & Frameworks
          </span>
          <div className="flex flex-wrap gap-1.5">
            {["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "GSAP", "Figma", "Node.js", "GraphQL"].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white border border-black/5 text-[11px] font-mono text-ink/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="text-right font-mono text-[11px] text-muted/70">
        P. 03 — TOOLING
      </div>
    </div>
  );
}

function WritingLeftPage() {
  return (
    <div className="flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10 select-none">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#E8B94A]/20 text-[#8E6D1F] text-[11px] font-mono font-bold uppercase tracking-wider w-fit">
          04 • Writing & Notes
        </div>
        <h2
          className={`${shareTech.className} text-2xl sm:text-3xl lg:text-[38px] font-normal tracking-[-0.6px] leading-[1.14] text-ink`}
        >
          Reflections on digital craft & tactile interfaces.
        </h2>
        <div className="space-y-3 pt-1">
          <div className="p-3 rounded-xl bg-white/70 border border-black/5">
            <span className="font-mono text-[10px] text-muted uppercase">Essay 01</span>
            <h3 className="text-[13.5px] font-semibold text-ink pt-0.5">The Return of Physicality</h3>
            <p className="text-[12px] text-muted leading-snug pt-0.5">
              Why digital products crave tangible stationery analogies and physical weight.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white/70 border border-black/5">
            <span className="font-mono text-[10px] text-muted uppercase">Essay 02</span>
            <h3 className="text-[13.5px] font-semibold text-ink pt-0.5">Motion with Gravity</h3>
            <p className="text-[12px] text-muted leading-snug pt-0.5">
              Why natural easing and physics feel intuitive while linear transitions feel lifeless.
            </p>
          </div>
        </div>
      </div>

      <div className="text-right font-mono text-[11px] text-muted/70">
        P. 04 — ESSAYS
      </div>
    </div>
  );
}

function WritingRightPage() {
  return (
    <div className="flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10 select-none">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
          Marginalia & Quotes
        </span>
        <blockquote className="p-4 rounded-xl bg-white/80 border border-black/5 italic text-[13px] leading-relaxed text-ink/85 font-serif">
          &ldquo;Simplicity is not the lack of clutter, that&apos;s a consequence of simplicity. Simplicity essentially describes the purpose and place of an object.&rdquo;
          <footer className="text-[11px] font-mono text-muted not-italic pt-2">
            — Dieter Rams
          </footer>
        </blockquote>

        <div className="p-3 rounded-xl bg-white/80 border border-black/5">
          <span className="font-mono text-[10.5px] font-bold uppercase text-muted block mb-1">
            Current Readings
          </span>
          <p className="text-[12px] text-ink/80 leading-snug">
            Stationery craft history, spatial computing ergonomics, and generative typography.
          </p>
        </div>
      </div>

      <div className="text-right font-mono text-[11px] text-muted/70">
        P. 04 — MARGINALIA
      </div>
    </div>
  );
}

function ContactLeftPage() {
  return (
    <div className="flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10 select-none">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FF78A0]/20 text-[#A62B50] text-[11px] font-mono font-bold uppercase tracking-wider w-fit">
          05 • Get in Touch
        </div>
        <h2
          className={`${shareTech.className} text-2xl sm:text-3xl lg:text-[38px] font-normal tracking-[-0.6px] leading-[1.14] text-ink`}
        >
          Let&apos;s build something extraordinary together.
        </h2>
        <p className="text-[13.5px] leading-relaxed text-ink/80 pt-1 font-sans">
          I&apos;m available for select freelance collaborations, design consulting, and engineering leadership.
        </p>

        <div className="p-3.5 rounded-xl bg-white/80 border border-black/5 flex items-center justify-between mt-2">
          <div>
            <span className="text-[11px] font-mono text-muted uppercase block">Direct Email</span>
            <span className="text-[14px] font-semibold text-ink font-mono">hello@dipakshee.dev</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-emerald-500/15 text-emerald-600 font-medium">
            Open
          </span>
        </div>
      </div>

      <div className="text-right font-mono text-[11px] text-muted/70">
        P. 05 — CONTACT
      </div>
    </div>
  );
}

function ContactRightPage() {
  return (
    <div className="flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10 select-none">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
          Connect & Links
        </span>
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <Link
            href="https://github.com"
            target="_blank"
            className="p-3 rounded-xl bg-white/80 border border-black/5 hover:bg-white transition-colors"
          >
            <span className="text-[13px] font-semibold text-ink block">GitHub</span>
            <span className="text-[11px] font-mono text-muted">Code & repos</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="p-3 rounded-xl bg-white/80 border border-black/5 hover:bg-white transition-colors"
          >
            <span className="text-[13px] font-semibold text-ink block">LinkedIn</span>
            <span className="text-[11px] font-mono text-muted">Career updates</span>
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            className="p-3 rounded-xl bg-white/80 border border-black/5 hover:bg-white transition-colors"
          >
            <span className="text-[13px] font-semibold text-ink block">Twitter / X</span>
            <span className="text-[11px] font-mono text-muted">Thoughts & WIPs</span>
          </Link>
          <Link
            href="https://substack.com"
            target="_blank"
            className="p-3 rounded-xl bg-white/80 border border-black/5 hover:bg-white transition-colors"
          >
            <span className="text-[13px] font-semibold text-ink block">Substack</span>
            <span className="text-[11px] font-mono text-muted">Articles & notes</span>
          </Link>
        </div>

        <div className="p-3.5 rounded-xl bg-white/70 border border-black/5 text-center mt-2">
          <p className="text-[12.5px] text-ink/80 italic font-serif">
            &ldquo;Thank you for flipping through my diary.&rdquo;
          </p>
          <span className="text-[11.5px] font-mono text-muted block pt-1">— Dipakshee</span>
        </div>
      </div>

      <div className="text-right font-mono text-[11px] text-muted/70">
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

  useEffect(() => {
    // Only set up 3D scroll-driven book flipping on desktop screens
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const leaves = leafRefs.current.filter(Boolean) as HTMLDivElement[];
      if (leaves.length === 0 || !pinnedSectionRef.current) return;

      // Master scrubbed timeline for turning pages over the center spine
      const tl = gsap.timeline({
        paused: true,
      });

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

        // Dynamic paper curvature shadow
        if (shadowFront) {
          tl.fromTo(
            shadowFront,
            { opacity: 0 },
            {
              opacity: 0.22,
              duration: 0.5,
              ease: "power1.in",
            },
            i
          ).to(
            shadowFront,
            {
              opacity: 0,
              duration: 0.05,
            },
            i + 0.5
          );
        }

        if (shadowBack) {
          tl.fromTo(
            shadowBack,
            { opacity: 0.22 },
            {
              opacity: 0,
              duration: 0.5,
              ease: "power1.out",
            },
            i + 0.5
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
        scrub: 0.8,
        animation: tl,
        snap: {
          snapTo: 1 / 4,
          duration: { min: 0.2, max: 0.55 },
          ease: "power1.inOut",
        },
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
    }, pinnedSectionRef);

    return () => ctx.revert();
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
      className="relative w-full min-h-screen py-6 sm:py-8 lg:py-10 flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full max-w-[1560px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative flex items-start justify-center md:pl-10 lg:pl-11">
          {/* Main Diary Folder Jacket */}
          <div
            style={{ backgroundColor: activeColor }}
            className="flex-1 min-w-0 rounded-3xl sm:rounded-4xl p-4 sm:p-6 lg:p-8 shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-colors duration-500 relative z-10"
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

              {/* DESKTOP 2-PAGE BOOK SPREAD (Hinged at Fixed Center Spine) */}
              <div
                className="hidden md:block relative z-10 w-full min-h-[680px] lg:min-h-[720px] xl:min-h-[760px] rounded-2xl sm:rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                style={{ perspective: "2200px" }}
              >
                {/* 1. Base Left Page (Bottom-most left: Work Left) */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-50 dotted-paper-pattern rounded-l-2xl sm:rounded-l-3xl border-t border-b border-l border-black/5 overflow-hidden z-10">
                  <WorkLeftPage />
                </div>

                {/* 2. Base Right Page (Bottom-most right: Contact Right) */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 dotted-paper-pattern rounded-r-2xl sm:rounded-r-3xl border-t border-b border-r border-black/5 overflow-hidden z-10">
                  <ContactRightPage />
                </div>

                {/* 3. The 4 3D Turning Leaves (Hinged at Fixed Center Spine: transformOrigin 'left center') */}
                {/* LEAF 0: Front = Work Right, Back = About Left */}
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
                  <div
                    className="absolute inset-0 bg-gray-50 dotted-paper-pattern rounded-r-2xl sm:rounded-r-3xl border-t border-b border-r border-black/5 overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "translateZ(1px)",
                    }}
                  >
                    <WorkRightPage />
                    <div
                      ref={(el) => {
                        shadowFrontRefs.current[0] = el;
                      }}
                      className="absolute inset-0 bg-black pointer-events-none opacity-0"
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-gray-50 dotted-paper-pattern rounded-l-2xl sm:rounded-l-3xl border-t border-b border-l border-black/5 overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg) translateZ(1px)",
                    }}
                  >
                    <AboutLeftPage />
                    <div
                      ref={(el) => {
                        shadowBackRefs.current[0] = el;
                      }}
                      className="absolute inset-0 bg-black pointer-events-none opacity-0"
                    />
                  </div>
                </div>

                {/* LEAF 1: Front = About Right, Back = Experience Left */}
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
                  <div
                    className="absolute inset-0 bg-gray-50 dotted-paper-pattern rounded-r-2xl sm:rounded-r-3xl border-t border-b border-r border-black/5 overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "translateZ(1px)",
                    }}
                  >
                    <AboutRightPage />
                    <div
                      ref={(el) => {
                        shadowFrontRefs.current[1] = el;
                      }}
                      className="absolute inset-0 bg-black pointer-events-none opacity-0"
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-gray-50 dotted-paper-pattern rounded-l-2xl sm:rounded-l-3xl border-t border-b border-l border-black/5 overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg) translateZ(1px)",
                    }}
                  >
                    <ExperienceLeftPage />
                    <div
                      ref={(el) => {
                        shadowBackRefs.current[1] = el;
                      }}
                      className="absolute inset-0 bg-black pointer-events-none opacity-0"
                    />
                  </div>
                </div>

                {/* LEAF 2: Front = Experience Right, Back = Writing Left */}
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
                  <div
                    className="absolute inset-0 bg-gray-50 dotted-paper-pattern rounded-r-2xl sm:rounded-r-3xl border-t border-b border-r border-black/5 overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "translateZ(1px)",
                    }}
                  >
                    <ExperienceRightPage />
                    <div
                      ref={(el) => {
                        shadowFrontRefs.current[2] = el;
                      }}
                      className="absolute inset-0 bg-black pointer-events-none opacity-0"
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-gray-50 dotted-paper-pattern rounded-l-2xl sm:rounded-l-3xl border-t border-b border-l border-black/5 overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg) translateZ(1px)",
                    }}
                  >
                    <WritingLeftPage />
                    <div
                      ref={(el) => {
                        shadowBackRefs.current[2] = el;
                      }}
                      className="absolute inset-0 bg-black pointer-events-none opacity-0"
                    />
                  </div>
                </div>

                {/* LEAF 3: Front = Writing Right, Back = Contact Left */}
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
                  <div
                    className="absolute inset-0 bg-gray-50 dotted-paper-pattern rounded-r-2xl sm:rounded-r-3xl border-t border-b border-r border-black/5 overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "translateZ(1px)",
                    }}
                  >
                    <WritingRightPage />
                    <div
                      ref={(el) => {
                        shadowFrontRefs.current[3] = el;
                      }}
                      className="absolute inset-0 bg-black pointer-events-none opacity-0"
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-gray-50 dotted-paper-pattern rounded-l-2xl sm:rounded-l-3xl border-t border-b border-l border-black/5 overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg) translateZ(1px)",
                    }}
                  >
                    <ContactLeftPage />
                    <div
                      ref={(el) => {
                        shadowBackRefs.current[3] = el;
                      }}
                      className="absolute inset-0 bg-black pointer-events-none opacity-0"
                    />
                  </div>
                </div>

                {/* 4. FIXED CENTER SPINE (The Hinge Down the Middle) */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 z-30 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.03) 25%, rgba(0, 0, 0, 0.12) 50%, rgba(0, 0, 0, 0.03) 75%, transparent)",
                  }}
                >
                  {/* Spine Center Dashed Stitch Seam */}
                  <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-px border-r border-dashed border-black/20" />
                </div>
              </div>

              {/* MOBILE SINGLE PAGE CARD VIEW (Screens < md) */}
              <div className="md:hidden relative z-10 w-full bg-gray-50 rounded-2xl dotted-paper-pattern p-6 border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
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
                    onClick={(e) => handleTabClick(item.id, e)}
                    aria-label={item.label}
                    className="relative flex items-center justify-center w-10 sm:w-11 h-26 sm:h-28 py-3 text-ink select-none cursor-pointer"
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
