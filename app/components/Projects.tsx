"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Cyber-Weather",
    description:
      "A futuristic, immersive weather dashboard built for the Year 2096. Features a high-fidelity cyberpunk aesthetic with real-time atmospheric data, 3D interactive radar systems, and glassmorphic UI elements.",
    tags: ["Next.js", "TypeScript", "Open-Meteo API"],
    link: "https://cyber-weather-app.vercel.app/",
    github: "https://github.com/Ayosensei/cyber-weather",
    color: "from-purple-500/20 to-cyan-500/20",
    accent: "#a855f7",
  },
  {
    title: "Football Insight Hub",
    description:
      "A football statistics and analysis platform built with React, also features dark mode UI.",
    tags: ["React", "Tailwind", "Football API"],
    link: "https://football-insight-hub.vercel.app/",
    github: "https://github.com/Ayosensei/football-insight-hub",
    color: "from-blue-500/20 to-emerald-500/20",
    accent: "#3b82f6",
  },
  {
    title: "AI Storyteller",
    description:
      "An AI-powered application that generates unique bedtime stories based on user prompts.",
    tags: ["Gemini API", "Node.js", "React"],
    link: "https://ai-storyteller-blush.vercel.app/",
    github: "https://github.com/Ayosensei/ai-storyteller",
    color: "from-orange-500/20 to-red-500/20",
    accent: "#f97316",
  },
  {
    title: "Crypto Portfolio",
    description:
      "Real-time cryptocurrency tracker with live charts and portfolio management tools.",
    tags: ["WebSockets", "Chart.js", "API"],
    link: "https://crypto-tracker-y6b8.vercel.app/",
    github: "https://github.com/Ayosensei/crypto-tracker",
    color: "from-pink-500/20 to-rose-500/20",
    accent: "#ec4899",
  },
  {
    title: "Trade Journal",
    description:
      "A comprehensive trading journal for tracking trades, analyzing performance, and refining strategies.",
    tags: ["React", "Node.js", "Tailwind"],
    link: "https://trade-journal-sigma.vercel.app/",
    github: "https://github.com/Ayosensei/trade-journal",
    color: "from-yellow-400/20 to-orange-500/20",
    accent: "#eab308",
  },
  {
    title: "Typify",
    description:
      "A sleek typing practice application designed to improve speed and accuracy with a minimalist interface.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://typify-rho.vercel.app/",
    github: "https://github.com/Ayosensei/typify",
    color: "from-green-400/20 to-teal-500/20",
    accent: "#22c55e",
  },
  {
    title: "OAULR Website",
    description:
      "The official website for the Obafemi Awolowo University Law Reports, featuring archives and publications.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://oaulawreports.vercel.app",
    github: "https://github.com/Ayosensei/oaulr-frontend",
    color: "from-indigo-500/20 to-blue-600/20",
    accent: "#6366f1",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for natural feeling
  const mouseXSpring = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 150, damping: 20 });

  // Transforms for 2.5D tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  // Transforms for content depth (inner parallax)
  const contentX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"]);
  const contentY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Calculate relative mouse position from -0.5 to 0.5
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-colors duration-500 overflow-hidden shadow-2xl"
      >
        {/* Dynamic Glow Effect */}
        <motion.div
          style={{
            x: contentX,
            y: contentY,
            background: `radial-gradient(circle at center, ${project.accent}33 0%, transparent 70%)`,
          }}
          className="absolute -inset-24 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none -z-10"
        />

        {/* Content with Depth */}
        <motion.div style={{ translateZ: 50 }}>
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
        </motion.div>

        {/* Action Buttons with higher depth */}
        <motion.div
          style={{ translateZ: 80 }}
          className="flex items-center gap-4 mt-auto"
        >
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
        </motion.div>

        {/* Interactive Border Highlight */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-20`}
        />
      </motion.div>
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
          viewport={{ once: true }}
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
