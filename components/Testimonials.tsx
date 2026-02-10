"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maya Lin",
    role: "Product Lead, Orbit",
    quote: "The best blend of product thinking and engineering execution we've worked with.",
  },
  {
    name: "Daniel Cruz",
    role: "Founder, Briefly",
    quote: "Speed, polish, and communication were all exceptional from kickoff to launch.",
  },
  {
    name: "Anita Sharma",
    role: "Marketing Director, Northstar",
    quote: "Our conversion rate jumped significantly after the redesign and UX motion pass.",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="relative z-10 mx-auto w-full max-w-6xl overflow-hidden px-6 py-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="mb-8 text-2xl font-semibold text-white">Testimonials</h3>

      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-45%"] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {[...testimonials, ...testimonials].map((item, idx) => (
          <motion.article
            key={`${item.name}-${idx}`}
            whileHover={{ scale: 1.02 }}
            className="min-w-[320px] rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <p className="text-sm leading-relaxed text-slate-200">“{item.quote}”</p>
            <p className="mt-4 text-sm font-medium text-white">{item.name}</p>
            <p className="text-xs text-slate-400">{item.role}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
