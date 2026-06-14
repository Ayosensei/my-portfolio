"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, ExternalLink, FileDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full"
        >
          Open to freelance & contract work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6"
        >
          Building Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-cyan-400">
            Products That Work.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed mb-10"
        >
          I am <span className="text-white font-medium">Ayooluwa Oyebade</span>, a Computer Engineer and Creative Developer. I design and build high-performance web apps and brand identities, from concept to deployment, for startups, communities, and creators.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold transition-all hover:bg-cyan-400 hover:text-black"
          >
            View Projects
            <ExternalLink
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Ayosensei"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:ayosensei22@gmail.com"
              className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="/assets/Ayooluwa_Oyebade_CV.pdf"
              download
              className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 text-sm font-medium px-5"
              aria-label="Download CV"
            >
              <FileDown size={20} />
              CV
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="will-change-transform"
        >
          <ArrowDown size={20} className="text-cyan-400/50" />
        </motion.div>
      </motion.div>


    </section>
  );
}
