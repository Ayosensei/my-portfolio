"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CloverBoys",
    description:
      "A high-performance web platform facilitating early pattern recognition and community-driven Web3 engagement. Features immersive scroll-driven animations and a luxury-themed brand identity.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Canvas"],
    link: "https://cloverboys.vercel.app",
    github: "#",
    color: "from-green-500/20 to-emerald-500/20",
    accent: "#10b981",
  },
  {
    title: "SIGNAL",
    description:
      "A high-performance, dark-themed match-3 web game with a recursive match-and-cascade system, multi-input interaction, and a premium 'Cinematic Dark' aesthetic.",
    tags: ["React", "Vite", "Vanilla CSS", "Game Engine"],
    link: "https://signal-cloverboys.vercel.app/",
    github: "#",
    color: "from-red-500/20 to-orange-500/20",
    accent: "#ef4444",
  },
  {
    title: "OAULR Website",
    description:
      "The official digital legal repository for the Faculty of Law, Obafemi Awolowo University. Built with Next.js App Router for high-traffic academic research and legal archiving.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://oaulawreports.vercel.app",
    github: "https://github.com/Ayosensei/oaulr-frontend",
    color: "from-indigo-500/20 to-blue-600/20",
    accent: "#6366f1",
  },
  {
    title: "Trade Journal",
    description:
      "A comprehensive trading performance tracker featuring a detailed trade logging system, interactive Chart.js dashboards, and secure JWT/Firebase authentication.",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
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
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-32 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Selected <span className="text-gray-500">Works</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
