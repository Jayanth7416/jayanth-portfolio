"use client";
import { HoverEffect } from "@/components/ui/hover-effect";
import { projects, contractWork } from "@/data/resume";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 md:py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-[0.2em] text-purple-400">
          Projects
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
          Things I&apos;ve <span className="text-gradient-purple">built.</span>
        </h2>
      </div>

      <HoverEffect items={projects} />

      <div className="mt-20 relative p-8 md:p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.005] overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
        <div className="relative">
          <span className="text-xs uppercase tracking-[0.2em] text-purple-400">
            Side Work
          </span>
          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">
            {contractWork.title}
          </h3>
          <p className="mt-2 text-neutral-400 text-sm">{contractWork.orgs}</p>
          <div className="mt-6 space-y-3">
            {contractWork.bullets.map((b, i) => (
              <div
                key={i}
                className="flex gap-3 text-sm text-neutral-300 leading-relaxed"
              >
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
