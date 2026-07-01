"use client";
import { motion } from "motion/react";
import { profile, stats } from "@/data/resume";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.05em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs uppercase text-purple-400"
            >
              About
            </motion.span>
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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="relative group p-6 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden card-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
            <motion.div
              aria-hidden
              className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(139,92,246,0.15), transparent 55%)",
              }}
            />
            <div className="relative">
              <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                <AnimatedCounter value={s.value} />
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
