"use client";

import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

type AnimatedListProps = {
  children: React.ReactNode[];
  className?: string;
  delay?: number;
};

export function AnimatedList({ children, className, delay = 2500 }: AnimatedListProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % children.length);
    }, delay);

    return () => window.clearInterval(timer);
  }, [children.length, delay]);

  const visibleItems = Array.from({ length: 4 }, (_, i) => {
    const index = (activeIndex + i) % children.length;
    return { index, node: children[index] };
  });

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <AnimatePresence initial={false} mode="popLayout">
        {visibleItems.map((item, listIndex) => (
          <motion.div
            key={`${item.index}-${listIndex}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1 - listIndex * 0.15, y: listIndex * 4, scale: 1 - listIndex * 0.03 }}
            exit={{ opacity: 0, y: -24, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mx-auto w-full"
          >
            {item.node}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
