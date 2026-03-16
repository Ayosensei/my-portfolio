"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Oyeyemi Oyebade",
    role: "Managing Editor, OAU Law Reports",
    content:
      "Ayooluwa transformed our digital presence. The OAU Law Reports platform is now a world-class legal archive, thanks to his technical expertise and eye for design.",
    avatar: "OO",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Client <span className="text-gray-500">Voices</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            What partners and clients say about our collaborative journey.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-500 flex flex-col items-center text-center max-w-sm w-full"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-cyan-400 text-cyan-400"
                  />
                ))}
              </div>

              <Quote className="absolute top-8 right-8 text-white/10 w-12 h-12 -z-10" />

              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/20">
                  {testimonial.avatar}
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-white font-bold leading-none mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Background Glows */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      </div>

      {/* Subtle Bottom Border Line */}
      <div className="max-w-4xl mx-auto mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
