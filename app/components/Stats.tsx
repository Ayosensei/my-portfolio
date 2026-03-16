"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Users2, Github } from "lucide-react";

const stats = [
  {
    label: "Finished Projects",
    value: "10+",
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    label: "Years of Craft",
    value: "5+",
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
];

export default function Stats() {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative group p-6 md:p-10 bg-black/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/10 transition-colors duration-500 flex flex-col items-center text-center w-full max-w-[280px]"
            >
              {/* Subtle background glow */}
              <div
                className={`absolute -right-10 -top-10 w-32 h-32 ${stat.bg} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div
                className={`inline-flex p-3 rounded-2xl ${stat.bg} ${stat.color} mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
              >
                <stat.icon size={28} />
              </div>

              <div className="relative z-10 w-full">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
