"use client";

import Background from "@/app/components/Background";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Navbar from "@/app/components/Navbar";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />
      <Background />

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm md:text-lg tracking-[0.3em] text-gray-400 uppercase mb-4">
            Portfolio
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
        >
          CREATIVE <br /> DEVELOPER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-gray-400 max-w-lg text-lg md:text-xl leading-relaxed"
        >
          Specializing in Graphics Design, UI/UX, and Full Stack Web Development.
          Creating digital experiences that merge art with code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 1 },
            y: { repeat: Infinity, duration: 2 }
          }}
          className="absolute bottom-10"
        >
          <ArrowDown className="w-8 h-8 text-gray-500" />
        </motion.div>
      </section>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

    </main>
  );
}