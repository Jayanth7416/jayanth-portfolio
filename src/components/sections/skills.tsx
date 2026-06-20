"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
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
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-purple-400">
          Toolbelt
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
          What I work <span className="text-gradient-purple">with daily.</span>
        </h2>
      </div>

      <BentoGrid className="mb-16">
        {Object.entries(skills).map(([category, items], i) => (
          <BentoGridItem
            key={category}
            className={
              i === 0 ? "md:col-span-2" : i === 4 ? "md:col-span-2" : ""
            }
            icon={iconMap[category]}
            title={category}
            description={
              <div className="flex flex-wrap gap-1.5 mt-3">
                {items.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            }
            header={
              <div className="h-20 rounded-xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-white/5 flex items-center justify-center">
                <div className="text-4xl font-bold text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            }
          />
        ))}
      </BentoGrid>

      <InfiniteMarquee items={allSkills} speed="slow" />
    </section>
  );
};
