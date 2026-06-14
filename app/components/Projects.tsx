"use client";

import React from "react";
import RevealOnScroll from "./RevealOnScroll";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CloverBoys",
    description: "A high-performance Web3 community platform with immersive scroll-driven animations, Canvas-powered backgrounds, and a luxury dark brand identity built to establish market positioning.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Canvas API"],
    link: "https://cloverboys.vercel.app",
    github: "#",
    color: "from-green-500/20 to-emerald-500/20",
    accent: "#10b981",
  },
  {
    title: "SIGNAL",
    description: "A dark-themed match-3 web game with a recursive cascade engine, multi-input system supporting drag, click, and mobile swipe, and a premium Cinematic Dark UI aesthetic.",
    tags: ["React", "Vite", "Vanilla CSS", "Game Engine"],
    link: "https://signal-cloverboys.vercel.app/",
    github: "#",
    color: "from-red-500/20 to-orange-500/20",
    accent: "#ef4444",
  },
  {
    title: "TacticLab",
    description: "A tactical analysis engine bridging Football Manager theory and visual tactic building. Monorepo architecture with a Rust/WASM core engine, Next.js frontend, and Supabase backend.",
    tags: ["Next.js", "TypeScript", "Rust", "WASM", "Supabase", "Turborepo"],
    link: "https://tacticlab-web.vercel.app",
    github: "#",
    color: "from-blue-500/20 to-indigo-500/20",
    accent: "#6366f1",
  },
  {
    title: "OAULR Website",
    description: "The official digital legal repository for the Faculty of Law, OAU. Built for high-traffic academic research with Next.js App Router, optimised SSR, and sub-second page loads for large legal archives.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB"],
    link: "https://oaulawreports.vercel.app",
    github: "https://github.com/Ayosensei/oaulr-frontend",
    color: "from-indigo-500/20 to-blue-600/20",
    accent: "#3b82f6",
  },
  {
    title: "Saturn Onchain",
    description: "A minimal, high-end digital hub for a Web3/blockchain authority. Dark void aesthetic with subtle motion and premium typography, designed to feel like a high-end crypto terminal.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "https://saturn-onchain.vercel.app/",
    github: "#",
    color: "from-purple-500/20 to-violet-500/20",
    accent: "#a855f7",
  },
  {
    title: "Typify",
    description: "A minimalist, high-performance typing speed application with real-time keystroke logic, WPM speed curve charts, and a distraction-free focus mode built for accuracy and speed.",
    tags: ["React", "Vite", "Zustand", "Chart.js", "Framer Motion"],
    link: "https://typify-rho.vercel.app/",
    github: "#",
    color: "from-cyan-500/20 to-teal-500/20",
    accent: "#06b6d4",
  },
  {
    title: "Trade Journal",
    description: "A full-stack trading performance tracker with a detailed logging system, Chart.js equity curve dashboards, position sizing tools, and secure JWT/Firebase authentication.",
    tags: ["React", "Node.js", "MongoDB", "Chart.js", "Firebase"],
    link: "https://trade-journal-sigma.vercel.app/",
    github: "https://github.com/Ayosensei/trade-journal",
    color: "from-yellow-400/20 to-orange-500/20",
    accent: "#eab308",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <RevealOnScroll delay={index * 100}>
      <div
        className="group relative h-full bg-black/40 border border-white/10 p-8 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-colors duration-500 overflow-hidden shadow-2xl"
      >
        {/* Content */}
        <div>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
              <ArrowUpRight className="text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs uppercase tracking-tighter font-bold bg-white/5 border border-white/5 rounded-md text-gray-500 group-hover:text-gray-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold text-sm hover:scale-105 transition-transform"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-colors"
          >
            <Github size={16} /> Code
          </a>
        </div>

        {/* Interactive Border Highlight */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-20`}
        />
      </div>
    </RevealOnScroll>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-32 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Selected <span className="text-gray-500">Works</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
