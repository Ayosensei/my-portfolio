"use client";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Stats from "@/app/components/Stats";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Background from "@/app/components/Background";
import BackToTop from "@/app/components/BackToTop";

export default function PageContent() {
  return (
    <main className="min-h-screen relative">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
