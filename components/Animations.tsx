"use client";

import React, { useRef, JSX } from "react";
import { motion, useInView, Variants } from "motion/react";

// ── FadeUp ──────────────────────────────────────────────────────────────────
// Simple fade + slide-up on scroll enter
interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function FadeUp({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerChildren ──────────────────────────────────────────────────────────
// Wraps a group and staggers each direct child's fade-up
interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { stagger: number; initial: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.initial,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.12,
  initialDelay = 0.1,
  once = true,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      custom={{ stagger: staggerDelay, initial: initialDelay }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}

// ── WordReveal ───────────────────────────────────────────────────────────────
// Splits text into words and animates each word in with a stagger
interface WordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  staggerDelay?: number;
  initialDelay?: number;
  once?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export function WordReveal({
  text,
  className = "",
  wordClassName = "",
  staggerDelay = 0.06,
  initialDelay = 0,
  once = true,
  as: Tag = "p",
}: WordRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, {
    once,
    margin: "-60px 0px",
  });

  const words = text.split(" ");

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{ y: "110%", opacity: 0 }}
            animate={
              inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }
            }
            transition={{
              duration: 0.55,
              delay: initialDelay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

// ── LineReveal ───────────────────────────────────────────────────────────────
// Full block slides up from a clip mask — good for single headlines
interface LineRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function LineReveal({
  children,
  className = "",
  delay = 0,
  once = true,
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-40px 0px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "105%" }}
        animate={inView ? { y: "0%" } : { y: "105%" }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
