"use client";

import RevealOnScroll from "./RevealOnScroll";

export default function About() {
    return (
        <section id="about" className="min-h-[60vh] flex flex-col justify-center items-center px-4 relative">
            <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Heading */}
                <RevealOnScroll variant="left">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        About <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            Me.
                        </span>
                    </h2>
                    <div className="h-1 w-20 bg-white/20 rounded-full" />
                </RevealOnScroll>

                {/* Right Column: Bio */}
                <RevealOnScroll variant="right" delay={200} className="text-gray-400 text-lg leading-relaxed">
                    <p className="mb-6">
                        I'm Ayooluwa Oyebade — a Computer Engineering student at OAU and a Creative Developer with 5 years of building things on the web. I work at the intersection of frontend engineering and design, which means I can take a project from a rough idea all the way to a polished, deployed product.
                    </p>
                    <p className="mb-6">
                        What sets me apart is that I don't just write code — I think about the product. From architecture decisions and performance to typography and motion design, I care about the whole experience. My clients get a developer who can think like a designer and a designer who can ship like a developer.
                    </p>
                    <p>
                        Currently available for freelance and contract work — web apps, landing pages, brand identities, and everything in between. Based in Ile-Ife, Nigeria. Working globally.
                    </p>
                </RevealOnScroll>
            </div>
        </section>
    );
}
