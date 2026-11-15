"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  theme: {
    base: string;
    active: string;
  };
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: "work",
    label: "Work",
    href: "#work",
    theme: {
      base: "rgba(255, 176, 132, 0.52)", // peach
      active: "rgba(255, 176, 132, 0.90)",
    },
  },
  {
    id: "about",
    label: "About",
    href: "#about",
    theme: {
      base: "rgba(184, 164, 237, 0.48)", // lavender
      active: "rgba(184, 164, 237, 0.90)",
    },
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
    theme: {
      base: "rgba(164, 212, 197, 0.52)", // mint
      active: "rgba(164, 212, 197, 0.90)",
    },
  },
  {
    id: "writing",
    label: "Writing",
    href: "#writing",
    theme: {
      base: "rgba(232, 185, 74, 0.48)", // ochre
      active: "rgba(232, 185, 74, 0.90)",
    },
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    theme: {
      base: "rgba(255, 120, 160, 0.52)", // pink
      active: "rgba(255, 120, 160, 0.90)",
    },
  },
];

interface NavTabShapeProps {
  fillColor: string;
  isActive: boolean;
}

function NavTabShape({ fillColor, isActive }: NavTabShapeProps) {
  return (
    <svg
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-200"
    >
      {/* 1. Filled flap body */}
      <path
        d="M 22 0 L 78 0 C 82 0 85 1.5 87 5 L 98 37 C 99 39 99.5 40 100 40 L 0 40 C 0.5 40 1 39 2 37 L 13 5 C 15 1.5 18 0 22 0 Z"
        fill={fillColor}
        className={isActive ? "brightness-105" : "brightness-100"}
      />
      {/* 2. Border on upper 3 sides only (left slant, top edge, right slant) */}
      <path
        d="M 0 40 C 0.5 40 1 39 2 37 L 13 5 C 15 1.5 18 0 22 0 L 78 0 C 82 0 85 1.5 87 5 L 98 37 C 99 39 99.5 40 100 40"
        fill="none"
        stroke={isActive ? "rgba(0, 0, 0, 0.24)" : "rgba(0, 0, 0, 0.16)"}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeItemId, setActiveItemId] = useState<string>("work");

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        hasScrolled
          ? "bg-canvas/92 backdrop-blur-md border-b border-hairline shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          : "bg-canvas border-b border-hairline"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-end justify-between md:justify-center relative h-16">
        {/* Mobile Header Row */}
        <div className="md:hidden flex items-center justify-between w-full h-full pb-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            Dipakshee
          </span>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex items-center justify-center w-10 h-10 rounded-[10px] text-ink border border-hairline hover:bg-surface-card transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Desktop Navigation: Side-by-Side Translucent Flaps (Zero Overlap, Docked to Bottom Line) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-end justify-center gap-1.5 translate-y-px"
        >
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = activeItemId === item.id;

            return (
              <motion.div
                key={item.id}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                className="relative filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.04)] hover:drop-shadow-[0_6px_12px_rgba(0,0,0,0.08)] transition-all duration-150"
              >
                <Link
                  href={item.href}
                  onClick={() => setActiveItemId(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative flex items-center justify-center whitespace-nowrap min-w-31 h-11 px-7.5 text-[15.5px] font-medium tracking-tight text-ink backdrop-blur-sm transition-all duration-150 ${
                    isActive ? "font-semibold" : "opacity-90 hover:opacity-100"
                  }`}
                >
                  <NavTabShape
                    fillColor={isActive ? item.theme.active : item.theme.base}
                    isActive={isActive}
                  />
                  <span className="relative z-10 pb-0.5">{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-canvas/98 backdrop-blur-lg border-b border-hairline px-6 py-5 shadow-xl flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2 items-center w-full">
              {NAVIGATION_ITEMS.map((item, index) => {
                const isActive = activeItemId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="w-full relative filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActiveItemId(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className="relative flex items-center justify-center w-full h-12 px-6 text-[16px] font-medium text-ink"
                    >
                      <NavTabShape
                        fillColor={isActive ? item.theme.active : item.theme.base}
                        isActive={isActive}
                      />
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
