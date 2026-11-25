"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Avsnitt og blokker: fade + 12px opp, 500 ms, når de kommer inn i bildet.
 * `immediate` (toppseksjoner): samme animasjon, men ren CSS som starter ved
 * første opptegning – venter ikke på JavaScript (rask LCP).
 * Respekterer prefers-reduced-motion.
 */
type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "p" | "li" | "section" | "article";
  immediate?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function FadeUp({ children, className = "", delay = 0, as = "div", immediate = false }: Props) {
  const reduce = useReducedMotion();
  if (immediate) {
    const Plain = as;
    return (
      <Plain className={`fade-now ${className}`} style={{ animationDelay: `${delay}ms` }}>
        {children}
      </Plain>
    );
  }
  const Tag = motion[as];
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <Tag
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.5, ease, delay: delay / 1000 }}
    >
      {children}
    </Tag>
  );
}
