"use client";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
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
  const [active, setActive] = useState<string>(navItems[0]?.link ?? "");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - prevScroll;
      setPrevScroll(current);
      if (current < 0.02) {
        setVisible(true);
      } else if (direction < -0.001) {
        setVisible(true);
      } else if (direction > 0.001) {
        setVisible(false);
      }
    }
  });

  useEffect(() => {
    const ids = navItems.map((n) => n.link.replace("#", ""));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )[0];
        if (visibleEntry) {
          setActive(`#${visibleEntry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.1, 0.25, 0.5, 0.75] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/10 rounded-full bg-black/60 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.15)] z-[5000] px-3 sm:px-4 py-1.5 items-center justify-center gap-1 sm:gap-2",
          className,
        )}
      >
        {navItems.map((nav) => {
          const isActive = active === nav.link;
          return (
            <a
              key={nav.link}
              href={nav.link}
              className={cn(
                "relative rounded-full px-3 py-1.5 flex items-center gap-1.5 text-sm transition-colors",
                isActive
                  ? "text-white"
                  : "text-neutral-400 hover:text-white",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active-pill"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10"
                />
              )}
              <span className="relative block sm:hidden">{nav.icon}</span>
              <span className="relative hidden sm:block">{nav.name}</span>
            </a>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
