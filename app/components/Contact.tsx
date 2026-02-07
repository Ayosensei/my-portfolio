"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // REPLACE "YOUR_FORMSPREE_ID" WITH YOUR ACTUAL ID FROM FORMSPREE.IO
        const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykdywvn";

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

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
                    Let&apos;s build something <br />
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
                    Have a project in mind? Send me a message and let&apos;s discuss how we can bring your ideas to life.
                </motion.p>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-md mx-auto space-y-4 text-left"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-colors"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-colors"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-colors resize-none"
                            placeholder="Tell me about your project..."
                            required
                        />
                    </div>
                    
                    {/* Status Messages */}
                    {status === "success" && (
                        <p className="text-green-400 text-sm font-medium text-center">Message sent successfully! I'll get back to you soon.</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-400 text-sm font-medium text-center">Something went wrong. Please try again later.</p>
                    )}

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "submitting" ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}