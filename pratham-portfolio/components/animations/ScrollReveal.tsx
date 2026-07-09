"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  margin?: string;
  scale?: number;
  viewportTrigger?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = true,
  margin = "-80px",
  scale,
  viewportTrigger = true,
  className,
  id,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as any });

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...(scale !== undefined ? { scale } : {}),
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(scale !== undefined ? { scale: 1 } : {}),
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] as const, // premium smooth custom ease
      },
    },
  };

  const animationState = viewportTrigger ? (isInView ? "visible" : "hidden") : "visible";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animationState}
      variants={variants}
      className={className}
      id={id}
      style={style}
    >
      {children}
    </motion.div>
  );
}
