"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "motion/react";
import { profile } from "@/data/resume";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="absolute inset-0 bg-grid-white mask-radial opacity-30" />

      <div className="relative z-10 max-w-5xl px-6 mx-auto text-center pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-xs text-neutral-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for senior data engineering roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gradient leading-[1.05]"
        >
          {profile.shortName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-xl md:text-2xl text-neutral-300 font-light"
        >
          {profile.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2 text-sm md:text-base text-neutral-500"
        >
          {profile.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-2xl mx-auto text-neutral-400 text-base md:text-lg leading-relaxed"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.02] backdrop-blur-md text-neutral-300 hover:bg-white/[0.05] hover:text-white transition-colors text-sm"
          >
            View experience
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex items-center gap-5 justify-center text-neutral-500 text-sm"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> {profile.location}
          </span>
          <span className="w-px h-4 bg-white/10" />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
