"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-2 p-2 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-full shadow-lg">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-300 hover:text-white transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <div className="hidden lg:flex items-center gap-1">
          <a
            href="#home"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
          >
            About
          </a>
          <a
            href="#skills"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
          >
            Journey
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
          >
            Contact
          </a>
        </div>

        <div
          className={`lg:hidden flex flex-col items-center gap-1 ${mobileMenuOpen ? "block" : "hidden"}`}
        >
          <a
            href="#home"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Journey
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
