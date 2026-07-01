"use client";
import { motion } from "motion/react";
import { HoverEffect } from "@/components/ui/hover-effect";
import { projects, contractWork } from "@/data/resume";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 md:py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-purple-400">
          Projects
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
          Things I&apos;ve <span className="text-gradient-purple">built.</span>
        </h2>
      </motion.div>

      <HoverEffect items={projects} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 relative p-8 md:p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.005] overflow-hidden card-glow group"
      >
        <motion.div
          aria-hidden
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
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
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-3 text-sm text-neutral-300 leading-relaxed"
              >
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                <p>{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
