"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: 2 + Math.random() * 3,
  delay: Math.random() * 5,
  duration: 7 + Math.random() * 10,
}));

export default function BackgroundParticles() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.16),transparent_35%)]" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300/50 blur-[1px]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -25, 8, 0],
            opacity: [0.15, 0.7, 0.25, 0.15],
            scale: [0.9, 1.2, 0.95, 0.9],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
