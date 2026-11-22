"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

export interface NavigationItem {
  id: string;
  index: string;
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
    index: "01",
    label: "Work",
    href: "#work",
    theme: {
      base: "rgba(255, 176, 132, 0.52)", // peach
      active: "rgba(255, 176, 132, 0.90)",
    },
  },
  {
    id: "about",
    index: "02",
    label: "About",
    href: "#about",
    theme: {
      base: "rgba(184, 164, 237, 0.48)", // lavender
      active: "rgba(184, 164, 237, 0.90)",
    },
  },
  {
    id: "experience",
    index: "03",
    label: "Experience",
    href: "#experience",
    theme: {
      base: "rgba(164, 212, 197, 0.52)", // mint
      active: "rgba(164, 212, 197, 0.90)",
    },
  },
  {
    id: "writing",
    index: "04",
    label: "Writing",
    href: "#writing",
    theme: {
      base: "rgba(232, 185, 74, 0.48)", // ochre
      active: "rgba(232, 185, 74, 0.90)",
    },
  },
  {
    id: "contact",
    index: "05",
    label: "Contact",
    href: "#contact",
    theme: {
      base: "rgba(255, 120, 160, 0.52)", // pink
      active: "rgba(255, 120, 160, 0.90)",
    },
  },
];

export interface NavbarProps {
  activeItemId?: string;
  onSelectTab?: (id: string) => void;
}

export default function Navbar({
  activeItemId: externalActiveId,
  onSelectTab,
}: NavbarProps = {}) {
  const [internalActiveId, setInternalActiveId] = useState<string>("work");
  const activeItemId = externalActiveId ?? internalActiveId;
  const setActiveItemId = onSelectTab ?? setInternalActiveId;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!drawerRef.current) return;

    if (isMobileMenuOpen) {
      gsap.fromTo(
        drawerRef.current,
        { opacity: 0, y: -10, display: "none" },
        { opacity: 1, y: 0, display: "flex", duration: 0.22, ease: "power2.out" }
      );
    } else {
      gsap.to(drawerRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.18,
        ease: "power2.in",
        onComplete: () => {
          if (drawerRef.current) drawerRef.current.style.display = "none";
        },
      });
    }
  }, [isMobileMenuOpen]);
  return (
    <header
      className={`md:hidden sticky top-0 z-40 w-full transition-all duration-200 ${
        hasScrolled ? "bg-canvas/95 backdrop-blur-md shadow-xs" : "bg-canvas"
      }`}
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 flex items-center justify-end h-14">
        {/* Mobile Navigation Toggle (Mobile Only) */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex items-center justify-center w-9 h-9 rounded-none text-ink border border-hairline hover:bg-surface-card transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        ref={drawerRef}
        style={{ display: "none" }}
        className="md:hidden absolute top-full left-0 w-full bg-canvas/98 backdrop-blur-lg border-b border-hairline px-6 py-5 shadow-xl flex flex-col gap-2"
      >
        <div className="flex flex-col gap-2 items-center w-full">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = activeItemId === item.id;

            return (
              <div
                key={item.id}
                className="w-full relative"
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    setActiveItemId(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className="relative flex items-center justify-between w-full h-12 px-6 text-[15px] font-medium text-ink rounded-none transition-all"
                  style={{
                    backgroundColor: isActive
                      ? item.theme.active
                      : item.theme.base,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs opacity-60">
                      {item.index}
                    </span>
                    <span className={isActive ? "font-semibold" : ""}>
                      {item.label}
                    </span>
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-none bg-ink" />
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}