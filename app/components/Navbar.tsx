"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
            <div className="pointer-events-auto flex items-center gap-1 p-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white rounded-full group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {/* Show icon only on mobile, text on larger screens if desired, or both */}
                            <item.icon className="w-4 h-4 md:hidden" />
                            <span className="hidden md:block">{item.name}</span>
                        </span>

                        {/* Hover effect background */}
                        <span className="absolute inset-0 rounded-full bg-white/10 scale-0 transition-transform duration-200 group-hover:scale-100" />
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}
