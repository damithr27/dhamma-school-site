"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-200 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/images/Logo1.png" alt="Logo" className="h-12 w-12" />
          <div>
            <div className="font-semibold text-amber-900">
              Sri Bodhirajaraama Dhamma School
            </div>
            <div className="text-xs text-slate-500">
              Pilawala
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-sm font-semibold text-[#5A3A1E]">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/history">History</a></li>
          <li><a href="/teaching">Teaching</a></li>
          <li><a href="/classes">Classes</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="/registration"
            className="hidden sm:inline-flex rounded-full bg-[#C06014] px-5 py-1.5 text-xs text-white"
          >
            Online Registration
          </a>

          <a
            href="/admin/login"
            className="rounded-full border border-amber-300 px-4 py-1.5 text-xs"
          >
            Admin
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-amber-200 px-6 py-4 space-y-3">
          <a href="/" className="block">Home</a>
          <a href="/about" className="block">About</a>
          <a href="/history" className="block">History</a>
          <a href="/teaching" className="block">Teaching</a>
          <a href="/classes" className="block">Classes</a>
          <a href="/events" className="block">Events</a>
          <a href="/gallery" className="block">Gallery</a>
          <a href="/contact" className="block">Contact</a>
        </div>
      )}
    </header>
  );
}