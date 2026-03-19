"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-2 p-2 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-full shadow-lg">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-300 hover:text-white transition-colors lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            href="#testimonials"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
          >
            Contact
          </a>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-24 mx-4 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl lg:hidden flex flex-col items-center gap-4"
          >
            <a
              href="#home"
              className="w-full px-6 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="w-full px-6 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="w-full px-6 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="w-full px-6 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="w-full px-6 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Journey
            </a>
            <a
              href="#testimonials"
              className="w-full px-6 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="w-full px-6 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
