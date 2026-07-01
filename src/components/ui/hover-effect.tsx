"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";

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
        <motion.a
          href={item?.link}
          target="_blank"
          rel="noreferrer noopener"
          key={item.title + idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.55,
            delay: idx * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-500/25 via-purple-500/25 to-cyan-500/15 block rounded-2xl blur-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <ProjectCard>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.tech && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md border border-white/10 bg-white/5 text-neutral-300 group-hover:border-purple-400/40 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </ProjectCard>
        </motion.a>
      ))}
    </div>
  );
};

const ProjectCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mx", `${x}%`);
    e.currentTarget.style.setProperty("--my", `${y}%`);
  };

  return (
    <div
      onMouseMove={handleMove}
      className={cn(
        "relative rounded-2xl h-full w-full p-6 overflow-hidden bg-black border border-white/10 group-hover:border-white/25 z-20 transition-all duration-300 card-glow",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(139,92,246,0.16), transparent 55%)",
        }}
      />
      <div className="relative z-30 p-2">
        {children}
        <div className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-purple-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View
          <ArrowUpRight
            size={12}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </div>
  );
};

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
