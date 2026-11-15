import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dipakshee — Portfolio",
  description: "Personal Portfolio & Work Showcase built with warm clay aesthetics",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-canvas text-ink selection:bg-brand-peach selection:text-ink"
      >
        {children}
      </body>
    </html>
  );
}
