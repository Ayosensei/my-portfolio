"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="min-h-[60vh] flex flex-col justify-center items-center px-4 relative">
            <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        About <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            Me.
                        </span>
                    </h2>
                    <div className="h-1 w-20 bg-white/20 rounded-full" />
                </motion.div>

                {/* Right Column: Bio */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-400 text-lg leading-relaxed"
                >
                    <p className="mb-6">
                        I&apos;m <span className="text-white font-semibold">Ayooluwa Oyebade</span>, a Computer Engineering student and creative freelancer passionate about merging design with technology.
                    </p>
                    <p className="mb-6">
                        My journey involves mastering both the artistic and technical sides of the web. From crafting stunning graphics in <span className="text-cyan-400">Canva & Figma</span> to building robust applications with <span className="text-purple-400">React & Next.js</span>, I bring a holistic approach to every project.
                    </p>
                    <p>
                        Currently pursuing my degree (Class of &apos;27), I spend my free time freelancing, exploring new UI/UX trends, and refining my craft in frontend development.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
