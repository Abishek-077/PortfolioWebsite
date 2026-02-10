"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";

const links = ["About", "Projects", "Testimonials", "Blog", "Contact"];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <motion.header
        className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-lg font-semibold tracking-wide text-white">
            AC.
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {links.map((item) => (
              <button
                key={item}
                className="group relative py-2 transition hover:text-cyan-300"
                onClick={() => item === "Contact" && setIsContactOpen(true)}
              >
                {item}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="rounded-full border border-white/20 p-2 text-slate-200 transition hover:border-cyan-300/70 hover:text-cyan-300"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? "☀️" : "🌙"}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
