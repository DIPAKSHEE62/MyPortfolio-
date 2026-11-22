"use client";

import { useState } from "react";
import Navbar, { NAVIGATION_ITEMS } from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeItemId, setActiveItemId] = useState<string>("work");
  const activeItem =
    NAVIGATION_ITEMS.find((item) => item.id === activeItemId) ||
    NAVIGATION_ITEMS[0];

  return (
    <main className="min-h-screen bg-canvas">
      <Navbar activeItemId={activeItemId} onSelectTab={setActiveItemId} />
      <Hero
        activeColor={activeItem.theme.active}
        activeItemId={activeItemId}
        onSelectTab={setActiveItemId}
      />
      <Footer />
    </main>
  );
}