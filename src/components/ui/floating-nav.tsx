"use client";
import { useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: React.ReactNode }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - prevScroll;
      setPrevScroll(current);
      if (current < 0.05) {
        setVisible(true);
      } else if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/10 rounded-full bg-black/60 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.15)] z-[5000] px-6 py-2 items-center justify-center space-x-4",
          className,
        )}
      >
        {navItems.map((nav, idx) => (
          <a
            key={`link-${idx}`}
            href={nav.link}
            className={cn(
              "relative text-neutral-300 hover:text-white items-center flex space-x-1 text-sm transition-colors",
            )}
          >
            <span className="block sm:hidden">{nav.icon}</span>
            <span className="hidden sm:block text-sm">{nav.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
