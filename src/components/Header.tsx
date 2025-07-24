"use client";

import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#D4AF37] bg-white/30 backdrop-blur-sm">
            <img
              src="/magic-touch-catering-logo.svg"
              alt="Magic Touch Catering"
              className="max-h-10 w-auto"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white uppercase text-sm tracking-wide">
          <a href="#home" className="hover:text-[#D4AF37] transition">
            Home
          </a>
          <a href="#menu" className="hover:text-[#D4AF37] transition">
            Menu
          </a>
          <a href="#about" className="hover:text-[#D4AF37] transition">
            About
          </a>
          <a href="#contact" className="hover:text-[#D4AF37] transition">
            Contact
          </a>
        </nav>

        {/* Plan Catering Button */}
        <div className="hidden md:flex">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition">
            <ClipboardDocumentListIcon className="h-5 w-5" />
            Plan Catering
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4">
          <a
            href="#home"
            className="block text-white hover:text-[#D4AF37] transition"
          >
            Home
          </a>
          <a
            href="#menu"
            className="block text-white hover:text-[#D4AF37] transition"
          >
            Menu
          </a>
          <a
            href="#about"
            className="block text-white hover:text-[#D4AF37] transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="block text-white hover:text-[#D4AF37] transition"
          >
            Contact
          </a>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition">
            <ClipboardDocumentListIcon className="h-5 w-5" />
            Plan Catering
          </button>
        </div>
      )}
    </header>
  );
}
