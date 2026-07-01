"use client";
import { animate, useInView, useMotionValue, useTransform } from "motion/react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
  value: string;
  duration?: number;
  className?: string;
};

const parse = (value: string) => {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", number: null as number | null, suffix: value };
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
    decimals,
  };
};

export const AnimatedCounter = ({ value, duration = 1.4, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = parse(value);
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    parsed.number === null
      ? value
      : `${parsed.prefix}${v.toFixed(parsed.decimals ?? 0)}${parsed.suffix}`,
  );

  useEffect(() => {
    if (parsed.number === null) return;
    if (!inView) return;
    const controls = animate(mv, parsed.number, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, parsed.number, duration, mv]);

  if (parsed.number === null) {
    return <span className={className}>{value}</span>;
  }
  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
};
