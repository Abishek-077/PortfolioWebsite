"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "Designing Micro-interactions for SaaS Product Trust",
    description: "A practical breakdown of motion cues that improve confidence and conversion.",
    date: "Feb 09, 2026",
  },
  {
    title: "Architecting Reusable Frontend Systems",
    description: "How to structure component boundaries for fast iteration and long-term maintainability.",
    date: "Jan 22, 2026",
  },
  {
    title: "Measuring UX Performance Beyond Lighthouse",
    description: "A methodology for tracking user-perceived performance with actionable telemetry.",
    date: "Jan 05, 2026",
  },
];

export default function Blog() {
  return (
    <motion.section
      id="blog"
      className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-white">Recent Blog</h3>
        <a href="#" className="text-sm text-cyan-300 transition hover:text-cyan-200">
          View all posts
        </a>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <motion.article
            key={post.title}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
          >
            <p className="text-xs uppercase tracking-wide text-slate-400">{post.date}</p>
            <h4 className="mt-2 text-lg font-medium text-white">{post.title}</h4>
            <p className="mt-3 text-sm text-slate-300">{post.description}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
