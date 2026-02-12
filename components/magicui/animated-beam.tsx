"use client";

import { motion } from "framer-motion";
import * as React from "react";

type AnimatedBeamProps = {
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
};

type BeamPath = {
  d: string;
  width: number;
  height: number;
};

function buildPath(container: HTMLElement, from: HTMLElement, to: HTMLElement, curvature: number): BeamPath {
  const containerRect = container.getBoundingClientRect();
  const fromRect = from.getBoundingClientRect();
  const toRect = to.getBoundingClientRect();

  const x1 = fromRect.left - containerRect.left + fromRect.width / 2;
  const y1 = fromRect.top - containerRect.top + fromRect.height / 2;
  const x2 = toRect.left - containerRect.left + toRect.width / 2;
  const y2 = toRect.top - containerRect.top + toRect.height / 2;

  const controlX = (x1 + x2) / 2;
  const controlY1 = y1 - curvature;
  const controlY2 = y2 + curvature;

  return {
    d: `M ${x1},${y1} C ${controlX},${controlY1} ${controlX},${controlY2} ${x2},${y2}`,
    width: containerRect.width,
    height: containerRect.height,
  };
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
}: AnimatedBeamProps) {
  const [path, setPath] = React.useState<BeamPath | null>(null);

  React.useEffect(() => {
    const update = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) {
        return;
      }

      setPath(buildPath(containerRef.current, fromRef.current, toRef.current, curvature));
    };

    update();

    const observer = new ResizeObserver(update);

    if (containerRef.current) observer.observe(containerRef.current);
    if (fromRef.current) observer.observe(fromRef.current);
    if (toRef.current) observer.observe(toRef.current);

    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [containerRef, fromRef, toRef, curvature]);

  if (!path) {
    return null;
  }

  return (
    <svg className="pointer-events-none absolute inset-0" width={path.width} height={path.height} fill="none">
      <path d={path.d} stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      <motion.path
        d={path.d}
        stroke="url(#beam-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: reverse ? 1 : 0 }}
        animate={{ pathLength: reverse ? 0 : 1 }}
        transition={{
          duration,
          delay,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "linear",
        }}
      />
      <defs>
        <linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={path.width} y2={path.height}>
          <stop stopColor="rgba(255,255,255,0)" />
          <stop offset="0.5" stopColor="rgba(251,146,60,0.85)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
