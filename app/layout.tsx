import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Sri Bodhirajaraama Dhamma School - Pilawala",
  description:
    "Official website of Sri Bodhirajaraama Dhamma School, Galgodahinna Sri Bodhirajaraama Viharaya, Pilawala South.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f8f5f0] text-slate-900 antialiased">
        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-600 text-white px-3 py-2 rounded"
        >
          Skip to main content
        </a>

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main id="main-content">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}