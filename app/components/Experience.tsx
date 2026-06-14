"use client";

import RevealOnScroll from "./RevealOnScroll";
import { Briefcase, GraduationCap, Calendar, Laptop } from "lucide-react";

const experiences = [
  {
    year: "2022 – Present",
    title: "Technical Lead & Lead Web Developer",
    company: "OAU Law Reports",
    description: "Spearheaded full-stack development of the official law review platform using Next.js, TypeScript, and MongoDB. Optimised SSR and database queries to achieve sub-second page loads for large-scale legal archives. Manages digital infrastructure, SEO strategy, and automated deployment via Vercel and GitHub Actions.",
    icon: Laptop,
  },
  {
    year: "2025 – Present",
    title: "Lead Creative Developer",
    company: "For Better Days",
    description: "Leading a professional Web3 community, architecting and deploying the community's digital hub. Driving UI/UX design and brand strategy to establish a distinct visual identity aligned with the community's mission.",
    icon: Briefcase,
  },
  {
    year: "2023 – 2027 (Expected)",
    title: "BSc Computer Engineering",
    company: "Obafemi Awolowo University",
    description: "Specialising in embedded systems, digital logic design, and software architecture. Building a strong foundation in hardware-software integration while shipping real-world products alongside academics.",
    icon: GraduationCap,
  },
  {
    year: "2020 – Present",
    title: "Lead Creative Developer & UI/UX Designer",
    company: "Freelance & Remote",
    description: "Architecting high-performance web applications and brand identities for clients across Nigeria and remotely. End-to-end product lifecycle: discovery, design (Figma/Canva), development, and deployment using Next.js and modern design systems.",
    icon: Briefcase,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Journey
            </span>
          </h2>
        </RevealOnScroll>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <RevealOnScroll
                key={index}
                delay={index * 100}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
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
                        <span className="text-sm text-purple-400 font-mono">
                          {exp.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ) : (
                    // Left Side Content (for odd index, normal row)
                    // Card is first child, so it's on the Left.
                    <div className="md:text-right md:pr-12">
                      <div className="flex items-center gap-2 mb-2 justify-end">
                        <span className="text-sm text-purple-400 font-mono">
                          {exp.year}
                        </span>
                        <Calendar className="w-4 h-4 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Empty Space for the other side */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
