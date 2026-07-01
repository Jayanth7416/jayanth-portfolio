"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { MouseEvent, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glow?: boolean;
};

export const TiltCard = ({
  children,
  className,
  intensity = 8,
  glow = true,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const px = useMotionValue(50);
  const py = useMotionValue(50);

  const springRX = useSpring(rx, { stiffness: 180, damping: 18 });
  const springRY = useSpring(ry, { stiffness: 180, damping: 18 });

  const rotateX = useTransform(springRX, (v) => `${v}deg`);
  const rotateY = useTransform(springRY, (v) => `${v}deg`);
  const bg = useTransform(
    [px, py],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}% ${y}%, rgba(139,92,246,0.18), transparent 60%)`,
  );

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width;
    const dy = (e.clientY - rect.top) / rect.height;
    rx.set(-(dy - 0.5) * intensity * 2);
    ry.set((dx - 0.5) * intensity * 2);
    px.set(dx * 100);
    py.set(dy * 100);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("relative [perspective:1200px]", className)}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: bg }}
        />
      )}
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </motion.div>
  );
};
