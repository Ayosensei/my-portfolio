"use client";

import { motion } from "framer-motion";
import { Code, Server, Palette, Terminal } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Dev",
        icon: Code,
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Framer Motion"],
        color: "text-cyan-400",
        borderColor: "group-hover:border-cyan-400/50",
    },
    {
        title: "Design & Creative",
        icon: Palette,
        skills: ["UI/UX Design", "Graphics Design", "Figma", "Canva", "Framer", "Adobe Suite"],
        color: "text-purple-400",
        borderColor: "group-hover:border-purple-400/50",
    },
    {
        title: "Tools & Workflow",
        icon: Terminal,
        skills: ["Git", "VS Code", "Freelancing", "Responsive Design", "Web Optimization"],
        color: "text-pink-400",
        borderColor: "group-hover:border-pink-400/50",
    },
];

export default function Skills() {
    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Technical <span className="text-gray-500">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <category.icon className={`w-6 h-6 ${category.color}`} />
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-3 py-1.5 text-sm text-gray-300 bg-black/30 border border-white/5 rounded-lg transition-colors duration-300 ${category.borderColor} hover:text-white`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
