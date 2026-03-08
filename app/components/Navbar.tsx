"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-amber-950 text-amber-50 text-xs md:text-[13px]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 px-4 py-1.5">
          <span className="text-center md:text-left">
            Galgodahinna Sri Bodhirajaraama Viharaya, Pilawala South
          </span>
          <span className="flex items-center gap-3">
            <span>📞 0788661982</span>
            <span className="hidden sm:inline">
              ✉️ sribodhirajaramadahampasala@gmail.com
            </span>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-amber-200 bg-white shadow-sm">

        <nav className="max-w-7.5xl mx-auto flex items-center justify-between px-6 py-3">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo1.png"
              alt="School Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              priority
            />

            <div className="leading-tight">
              <div className="font-semibold text-base text-amber-900">
                Sri Bodhirajaraama Dhamma School
              </div>
              <div className="text-[11px] md:text-xs text-slate-500">
                Galgodahinna Sri Bodhirajaraama Viharaya, Pilawala
              </div>
            </div>
          </div>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#5A3A1E]">
            <li><a href="/" className="hover:text-amber-600">Home</a></li>
            <li><a href="/about" className="hover:text-amber-600">About</a></li>
            <li><a href="/history" className="hover:text-amber-600">History</a></li>
            <li><a href="/teaching" className="hover:text-amber-600">Teaching</a></li>
            <li><a href="/classes" className="hover:text-amber-600">Classes</a></li>
            <li><a href="/events" className="hover:text-amber-600">Events</a></li>
            <li><a href="/gallery" className="hover:text-amber-600">Gallery</a></li>
            <li><a href="/contact" className="hover:text-amber-600">Contact</a></li>
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-[2px] bg-amber-900"></span>
              <span className="w-6 h-[2px] bg-amber-900"></span>
              <span className="w-6 h-[2px] bg-amber-900"></span>
            </button>

            <a
              href="/registration"
              className="hidden sm:inline-flex rounded-full bg-[#C06014] px-5 py-1.5 text-xs font-semibold text-white shadow hover:bg-[#f78009]"
            >
              Online Registration
            </a>

            <a
              href="/admin/login"
              className="flex items-center gap-2 rounded-full bg-white border border-amber-300 px-4 py-1.5 text-xs font-semibold text-[#5A3A1E]"
            >
              <img src="/images/admin.png" className="h-4 w-4" />
              Admin
            </a>

          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-amber-100">
            <ul className="flex flex-col text-sm font-semibold text-[#5A3A1E]">
              <li><a href="/" className="block px-6 py-3">Home</a></li>
              <li><a href="/about" className="block px-6 py-3">About</a></li>
              <li><a href="/history" className="block px-6 py-3">History</a></li>
              <li><a href="/teaching" className="block px-6 py-3">Teaching</a></li>
              <li><a href="/classes" className="block px-6 py-3">Classes</a></li>
              <li><a href="/events" className="block px-6 py-3">Events</a></li>
              <li><a href="/gallery" className="block px-6 py-3">Gallery</a></li>
              <li><a href="/contact" className="block px-6 py-3">Contact</a></li>
            </ul>
          </div>
        )}

      </header>
    </>
  );
}