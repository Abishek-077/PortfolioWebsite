"use client";

import { AnimatePresence, motion } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-xl rounded-2xl border border-cyan-300/20 bg-slate-900/95 p-6 shadow-[0_0_80px_-30px_rgba(34,211,238,0.7)]"
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Let&apos;s build something great</h3>
              <button
                onClick={onClose}
                className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
              >
                Close
              </button>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm outline-none ring-cyan-300/60 transition focus:ring-2"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm outline-none ring-cyan-300/60 transition focus:ring-2"
              />
              <textarea
                rows={5}
                placeholder="Project details"
                className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm outline-none ring-cyan-300/60 transition focus:ring-2"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-3 text-sm font-medium text-slate-950"
              >
                Send message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
