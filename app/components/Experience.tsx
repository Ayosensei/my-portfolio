"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
    {
        year: "2022 - 2027 (Expected)",
        title: "BSc Computer Engineering",
        company: "University of Technology",
        description: "Currently studying Computer Engineering. Focusing on software systems, embedded engineering, and digital logic design.",
        icon: GraduationCap,
    },
    {
        year: "2020 - Present",
        title: "Freelance Creative Developer",
        company: "Self-Employed",
        description: "Delivering custom web solutions and high-impact graphic designs. Specialized in building brand identities, UI/UX design, and performant web applications using React and Next.js.",
        icon: Briefcase,
    },
];

export default function Experience() {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Journey</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent opacity-30" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    } items-center gap-8 relative`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)] hidden md:block" />

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                                    {index % 2 === 0 ? (
                                        // Right Side Content (for even index, reversed row means this is actually left visually on desktop if we didn't swap text align, but let's keep it simple)
                                        // Wait, flex-row-reverse puts the first child (Card) on the right.
                                        // So for index 0 (even), Card is on Right.
                                        // Let's adjust the text alignment logic.
                                        <div className="md:text-left md:pl-12">
                                            <div className="flex items-center gap-2 mb-2 md:justify-start">
                                                <Calendar className="w-4 h-4 text-purple-400" />
                                                <span className="text-sm text-purple-400 font-mono">{exp.year}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                            <p className="text-gray-400 text-sm mb-4">{exp.company}</p>
                                            <p className="text-gray-500 leading-relaxed">{exp.description}</p>
                                        </div>
                                    ) : (
                                        // Left Side Content (for odd index, normal row)
                                        // Card is first child, so it's on the Left.
                                        <div className="md:text-right md:pr-12">
                                            <div className="flex items-center gap-2 mb-2 justify-end">
                                                <span className="text-sm text-purple-400 font-mono">{exp.year}</span>
                                                <Calendar className="w-4 h-4 text-purple-400" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                            <p className="text-gray-400 text-sm mb-4">{exp.company}</p>
                                            <p className="text-gray-500 leading-relaxed">{exp.description}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Empty Space for the other side */}
                                <div className="w-full md:w-1/2 hidden md:block" />

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
