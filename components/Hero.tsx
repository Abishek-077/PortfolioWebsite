"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="about"
      className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-20 pt-16 md:grid-cols-[1.2fr_1fr]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-300">Creative Developer</p>
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
          Building modern digital experiences that feel alive.
        </h1>
        <p className="mt-5 max-w-xl text-slate-300">
          I design and engineer performant interfaces with delightful motion, clean architecture, and
          purposeful storytelling.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-sm font-medium text-slate-950"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-xl border border-white/20 px-5 py-3 text-sm text-slate-200 transition hover:border-cyan-300/70 hover:text-cyan-200"
          >
            Download Resume
          </motion.button>
        </div>

        <div className="mt-8 flex gap-4 text-sm text-slate-300">
          {['GitHub', 'LinkedIn', 'X', 'Behance'].map((item) => (
            <a key={item} href="#" className="transition hover:text-cyan-300">
              {item}
            </a>
          ))}
        </div>
      </div>

      <motion.div
        whileHover={{ rotateX: 4, rotateY: -5 }}
        transition={{ type: "spring", stiffness: 140, damping: 14 }}
        className="rounded-3xl border border-cyan-300/20 bg-gradient-to-b from-white/10 to-white/5 p-1 shadow-[0_0_80px_-25px_rgba(34,211,238,0.65)]"
      >
        <div className="rounded-[22px] border border-white/10 bg-slate-900/90 p-6">
          <p className="text-sm text-cyan-300">Now focusing on</p>
          <h2 className="mt-3 text-2xl font-medium text-white">High-conversion SaaS dashboards</h2>
          <p className="mt-3 text-sm text-slate-300">
            React, Next.js, motion-first interactions, scalable design systems, and DX-friendly code.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
