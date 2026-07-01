"use client";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { TiltCard } from "@/components/ui/tilt-card";
import { skills } from "@/data/resume";
import {
  Code2,
  Database,
  Cloud,
  Layers,
  Workflow,
  Heart,
  GitBranch,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Languages: <Code2 className="h-5 w-5 text-indigo-300" />,
  "ETL & Big Data": <Layers className="h-5 w-5 text-purple-300" />,
  AWS: <Cloud className="h-5 w-5 text-cyan-300" />,
  Databases: <Database className="h-5 w-5 text-emerald-300" />,
  "Modeling & Warehousing": <Workflow className="h-5 w-5 text-amber-300" />,
  "Orchestration & CI/CD": <GitBranch className="h-5 w-5 text-rose-300" />,
  Domain: <Heart className="h-5 w-5 text-pink-300" />,
};

export const SkillsSection = () => {
  const allSkills = Object.values(skills).flat();

  return (
    <section id="skills" className="relative py-20 md:py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-purple-400">
          Toolbelt
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
          What I work <span className="text-gradient-purple">with daily.</span>
        </h2>
      </motion.div>

      <BentoGrid className="mb-16">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={
              i === 0 ? "md:col-span-2" : i === 4 ? "md:col-span-2" : ""
            }
          >
            <TiltCard intensity={6} className="group h-full">
              <BentoGridItem
                icon={iconMap[category]}
                title={category}
                description={
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {items.map((t, idx) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: 0.15 + idx * 0.025,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 border border-white/10 text-neutral-300 hover:border-purple-400/40 hover:text-white transition-colors"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                }
                header={
                  <div className="relative h-20 rounded-xl bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-cyan-500/15 border border-white/5 flex items-center justify-center overflow-hidden">
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 opacity-40"
                      animate={{
                        background: [
                          "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.25), transparent 50%)",
                          "radial-gradient(circle at 80% 70%, rgba(168,85,247,0.25), transparent 50%)",
                          "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.25), transparent 50%)",
                        ],
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="relative text-4xl font-bold text-white/15 group-hover:text-white/30 transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                }
              />
            </TiltCard>
          </motion.div>
        ))}
      </BentoGrid>

      <InfiniteMarquee items={allSkills} speed="slow" />
    </section>
  );
};
