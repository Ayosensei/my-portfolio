"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 text-center text-gray-500 text-sm bg-black/50 backdrop-blur-md border-t border-white/5">
            <div className="flex justify-center gap-6 mb-4">
                <a
                    href="https://github.com/Ayosensei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
                <a
                    href="https://x.com/saturnthesurfer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="mailto:ayosensei22@gmail.com" className="hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                </a>
            </div>
            <p>© {new Date().getFullYear()} Ayooluwa Oyebade. All rights reserved.</p>
        </footer>
    );
}
