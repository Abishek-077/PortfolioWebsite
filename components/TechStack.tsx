"use client";

import { motion } from "framer-motion";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Framer Motion",
  "PostgreSQL",
  "Figma",
];

export default function TechStack() {
  return (
    <motion.section
      className="relative z-10 mx-auto w-full max-w-6xl px-6 py-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="mb-6 text-center text-sm uppercase tracking-[0.2em] text-slate-400">Technology Stack</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {stack.map((item) => (
          <motion.div
            key={item}
            whileHover={{ y: -4, scale: 1.02 }}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center text-sm text-slate-200 backdrop-blur-sm"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
