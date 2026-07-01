"use client";
import { motion } from "motion/react";
import { Timeline } from "@/components/ui/timeline";
import { experience } from "@/data/resume";

export const ExperienceSection = () => {
  const data = experience.map((job) => ({
    title: job.period,
    content: (
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {job.role}
          </h3>
          <p className="text-sm md:text-base text-neutral-300 mt-1">
            {job.company}
            {job.client ? `  ·  ${job.client}` : ""}
          </p>
          <p className="text-xs text-neutral-500 mt-1">{job.location}</p>
        </motion.div>
        <div className="mt-5 space-y-3">
          {job.bullets.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex gap-3 text-sm md:text-base text-neutral-300 leading-relaxed"
            >
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
              <p>{b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="relative py-20 md:py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto mb-8 md:mb-12"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-purple-400">
          Experience
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
          Where I&apos;ve <span className="text-gradient-purple">shipped.</span>
        </h2>
      </motion.div>
      <Timeline data={data} />
    </section>
  );
};
