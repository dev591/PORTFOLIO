"use client";

import { motion } from "framer-motion";

/** Slides children in when scrolled into view, in chunky pixel steps. Honours reduced motion via MotionConfig. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: (t) => Math.round(t * 5) / 5 }}
    >
      {children}
    </motion.div>
  );
}
