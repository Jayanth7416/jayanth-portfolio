"use client";
import { Timeline } from "@/components/ui/timeline";
import { experience } from "@/data/resume";

export const ExperienceSection = () => {
  const data = experience.map((job) => ({
    title: job.period,
    content: (
      <div>
        <div className="mb-2">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {job.role}
          </h3>
          <p className="text-sm md:text-base text-neutral-400 mt-1">
            {job.company}
            {job.client ? `  ·  ${job.client}` : ""}
          </p>
          <p className="text-xs text-neutral-500 mt-1">{job.location}</p>
        </div>
        <div className="mt-5 space-y-3">
          {job.bullets.map((b, i) => (
            <div
              key={i}
              className="flex gap-3 text-sm md:text-base text-neutral-300 leading-relaxed"
            >
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
              <p>{b}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="relative py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto mb-8 md:mb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-purple-400">
          Experience
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
          Where I&apos;ve <span className="text-gradient-purple">shipped.</span>
        </h2>
      </div>
      <Timeline data={data} />
    </section>
  );
};
