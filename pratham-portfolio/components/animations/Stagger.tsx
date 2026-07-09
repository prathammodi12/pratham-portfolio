"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  once?: boolean;
  margin?: string;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  once = true,
  margin = "-80px",
  className,
  id,
  style,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as any });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
      id={id}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export function StaggerItem({ children, className, id, style }: StaggerItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
      id={id}
      style={style}
    >
      {children}
    </motion.div>
  );
}
