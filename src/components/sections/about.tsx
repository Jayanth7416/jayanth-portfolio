"use client";
import { motion } from "motion/react";
import { profile, stats } from "@/data/resume";

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-purple-400">
              About
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
              Seven years <br /> in the trenches of
              <br />
              <span className="text-gradient-purple">healthcare data.</span>
            </h2>
          </motion.div>
        </div>
        <div className="md:col-span-3 space-y-5">
          {profile.longBio.map((para, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-neutral-300 leading-relaxed text-base md:text-lg"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="relative group p-6 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
            <div className="relative">
              <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {s.value}
              </div>
              <div className="text-xs mt-2 text-neutral-400 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
