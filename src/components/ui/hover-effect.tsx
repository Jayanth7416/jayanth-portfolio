"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type HoverItem = {
  title: string;
  description: string;
  tech?: string[];
  link?: string;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          target="_blank"
          rel="noreferrer noopener"
          key={item.title + idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/10 block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.tech && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md border border-white/10 bg-white/5 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </Card>
        </a>
      ))}
    </div>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full p-6 overflow-hidden bg-black border border-white/10 group-hover:border-white/20 relative z-20 transition-colors",
      className,
    )}
  >
    <div className="relative z-50">
      <div className="p-2">{children}</div>
    </div>
  </div>
);

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-zinc-100 font-bold tracking-wide mt-2 text-lg">
    {children}
  </h4>
);

const CardDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm">
    {children}
  </p>
);
