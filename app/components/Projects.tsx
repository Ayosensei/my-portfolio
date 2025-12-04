"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Weather App",
        description: "A weather app built with Next.js and OpenWeather API. Features real-time weather updates and dark mode UI.",
        tags: ["Next.js", "TypeScript", "OpenWeather API"],
        link: "https://weather-app-dun-psi-81.vercel.app/",
        github: "https://github.com/Ayosensei/weather-app",
        color: "from-purple-500 to-cyan-500", // Custom gradient for this card
    },
    {
        title: "Football Insight Hub",
        description: "A football statistics and analysis platform built with React, also features dark mode UI.",
        tags: ["React", "Tailwind", "Football API"],
        link: "https://football-insight-hub.vercel.app/",
        github: "https://github.com/Ayosensei/football-insight-hub",
        color: "from-blue-500 to-emerald-500",
    },
    {
        title: "AI Storyteller",
        description: "An AI-powered application that generates unique bedtime stories based on user prompts.",
        tags: ["Gemini API", "Node.js", "React"],
        link: "https://ai-storyteller-blush.vercel.app/",
        github: "https://github.com/Ayosensei/ai-storyteller",
        color: "from-orange-500 to-red-500",
    },
    {
        title: "Crypto Portfolio",
        description: "Real-time cryptocurrency tracker with live charts and portfolio management tools.",
        tags: ["WebSockets", "Chart.js", "API"],
        link: "https://crypto-tracker-y6b8.vercel.app/",
        github: "https://github.com/Ayosensei/crypto-tracker",
        color: "from-pink-500 to-rose-500",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen py-32 px-4 relative">
            <div className="max-w-6xl mx-auto">

                {/* Section Title with a glow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6">
                        Selected Works
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full blur-sm" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Animated Border Gradient */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl opacity-20 group-hover:opacity-70 blur transition duration-500`} />

                            {/* Card Content */}
                            <div className="relative h-full bg-black/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-colors duration-300">

                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                                    </div>

                                    <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                                        {project.description}
                                    </p>

                                    {/* Tags as Pills */}
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-1.5 text-xs uppercase tracking-wider font-semibold bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:border-white/30 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Buttons at the bottom */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <a
                                        href={project.link}
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white rounded-lg font-bold text-sm hover:bg-white/10 transition-colors"
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}