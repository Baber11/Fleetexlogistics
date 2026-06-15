"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 64 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -48 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -64 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 64 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export type RevealDirection = keyof typeof variants;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: RevealDirection;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "-80px 0px" }}
      transition={{ duration, delay: delay / 1000, ease }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  direction?: RevealDirection;
}

export function Stagger({
  children,
  className = "",
  stagger = 0.12,
  direction = "up",
}: StaggerProps) {
  const reduce = useReducedMotion();
  const items = Array.isArray(children) ? children : [children];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-60px 0px" }}
      transition={{ staggerChildren: stagger }}
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={variants[direction]}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

interface FloatProps {
  children?: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}

export function Float({
  children,
  className = "",
  distance = 16,
  duration = 5,
}: FloatProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [-distance / 2, distance / 2, -distance / 2] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({ children, className = "", speed = 60 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative h-[115%] w-full -mt-[7.5%]">
        {children}
      </motion.div>
    </div>
  );
}

interface MotionCardProps {
  children: ReactNode;
  className?: string;
}

export function MotionCard({ children, className = "" }: MotionCardProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -6, transition: { duration: 0.35, ease } }}
    >
      {children}
    </motion.div>
  );
}

interface HeroTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function HeroText({ children, className = "", delay = 0 }: HeroTextProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

interface LineDrawProps {
  className?: string;
  delay?: number;
}

export function LineDraw({ className = "", delay = 0.5 }: LineDrawProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className} />;
  }

  return (
    <motion.div
      className={className}
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, delay, ease }}
    />
  );
}
