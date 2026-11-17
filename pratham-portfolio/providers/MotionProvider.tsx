"use client";

import React from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/**
 * Loads only the DOM animation feature set (instead of the full framer-motion
 * bundle) and honours the visitor's "reduce motion" OS setting.
 * Components must use `m.*` instead of `motion.*` (enforced by `strict`).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
