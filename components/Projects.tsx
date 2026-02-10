"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Helio Analytics",
    summary: "Real-time metrics dashboard with custom chart pipelines and role-aware views.",
    tags: ["Next.js", "TypeScript", "Prisma", "Charting"],
  },
  {
    title: "Nexa Commerce",
    summary: "Headless storefront with blazing product pages and motion-rich shopping flow.",
    tags: ["React", "Node", "Stripe", "Tailwind"],
  },
  {
    title: "Pilot CRM",
    summary: "Sales workspace unifying lead scoring, automation, and communication history.",
    tags: ["SaaS", "PostgreSQL", "Framer Motion", "Auth"],
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="mb-8 text-2xl font-semibold text-white">Projects Showcase</h3>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -8, rotateX: 3, rotateY: -4 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
            className="group rounded-2xl bg-gradient-to-br from-cyan-300/40 via-indigo-300/20 to-fuchsia-300/35 p-[1px] shadow-[0_0_55px_-30px_rgba(34,211,238,0.95)]"
          >
            <div className="h-full rounded-2xl border border-white/10 bg-slate-900/95 p-5">
              <h4 className="text-lg font-medium text-white">{project.title}</h4>
              <p className="mt-3 text-sm text-slate-300">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-xs text-cyan-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
