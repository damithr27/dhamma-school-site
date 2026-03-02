import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Footer from "./components/Footer";



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
        {/* Top contact bar */}
        <div className="bg-amber-950 text-amber-50 text-xs md:text-[13px]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 px-4 py-1.5">
            <span className="text-center md:text-left">
              Galgodahinna Sri Bodhirajaraama Viharaya, Pilawala South
            </span>
            <span className="flex items-center gap-3">
              <span>📞 0788661982</span>
              <span className="hidden sm:inline">✉️ sribodhirajaramadahampasala@gmail.com</span>
            </span>
          </div>
        </div>

      <header className="sticky top-0 z-50 border-b border-amber-200 bg-white shadow-sm">
  <nav className="max-w-7.5xl mx-auto flex items-center justify-between px-6 py-3">
    
    {/* LEFT — Logo + Name */}
    <div className="flex items-center gap-3">
      <img src="/images/Logo1.png" alt="School Logo" className="h-12 w-12 object-contain" />

      <div className="leading-tight">
        <div className="font-semibold text-base text-amber-900">
          Sri Bodhirajaraama Dhamma School
        </div>
        <div className="text-[11px] md:text-xs text-slate-500">
          Galgodahinna Sri Bodhirajaraama Viharaya, Pilawala
        </div>
      </div>
    </div>

    {/* CENTER — Nav Links */}
   <ul className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-semibold text-[#5A3A1E]">
  <li><a href="/" className="hover:text-amber-600 transition">Home</a></li>
  <li><a href="/about" className="hover:text-amber-600 transition">About</a></li>
  <li><a href="/history" className="hover:text-amber-600 transition">History</a></li>
  <li><a href="/teaching" className="hover:text-amber-600 transition">Teaching</a></li>
  <li><a href="/classes" className="hover:text-amber-600 transition">Classes</a></li>
  <li><a href="/events" className="hover:text-amber-600 transition">Events</a></li>
  <li><a href="/gallery" className="hover:text-amber-600 transition">Gallery</a></li>
  <li><a href="/contact" className="hover:text-amber-600 transition">Contact</a></li>
</ul>
    {/* RIGHT — Lang, Registration, Admin */}
    <div className="flex items-center gap-4">
      
     

      {/* Online Registration */}
      <a
        href="/registration"
        className="hidden sm:inline-flex rounded-full bg-[#C06014] px-5 py-1.5 text-xs font-semibold text-white shadow hover:bg-[#f78009] transition"
      >
        Online Registration
      </a>

      {/* Admin Login */}
      <a
        href="/admin/login"
        className="flex items-center gap-2 rounded-full bg-white border border-amber-300 px-4 py-1.5 text-xs font-semibold text-[#5A3A1E] shadow hover:bg-amber-100 transition"
      >
        <img
          src="/images/admin.png"
          alt="Admin Login"
          className="h-4 w-4"
        />
        Admin
      </a>

    </div>
  </nav>
</header>


        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}
