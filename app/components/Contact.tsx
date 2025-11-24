"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="min-h-[80vh] flex flex-col justify-center items-center px-4 text-center relative overflow-hidden py-20">

            {/* Background Gradient for focus */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-4xl mx-auto z-10 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight"
                >
                    Let's build something <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        extraordinary.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
                >
                    Have a project in mind? Send me a message and let's discuss how we can bring your ideas to life.
                </motion.p>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-md mx-auto space-y-4 text-left"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-colors"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
}