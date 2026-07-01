"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "@/data/resume";
import { ArrowRight, Mail, MapPin, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Magnetic } from "@/components/ui/magnetic";
import { useRef } from "react";

const FloatOrb = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    aria-hidden
    className={className}
    animate={{
      x: [0, 30, -20, 0],
      y: [0, -25, 15, 0],
      scale: [1, 1.08, 0.95, 1],
    }}
    transition={{ duration: 14, ease: "easeInOut", repeat: Infinity, delay }}
  />
);

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="absolute inset-0 bg-grid-white mask-radial opacity-30" />

      <FloatOrb
        className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px]"
      />
      <FloatOrb
        delay={2}
        className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]"
      />
      <FloatOrb
        delay={4}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]"
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-5xl px-6 mx-auto text-center pt-20 pb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-xs text-neutral-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for senior data engineering roles
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] [perspective:1000px]"
          aria-label={profile.shortName}
        >
          {profile.shortName.split(" ").map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden pr-[0.25em] pb-[0.12em]"
            >
              <motion.span
                variants={{
                  hidden: { y: "1em", opacity: 0, rotateX: -40 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="inline-block text-gradient will-change-transform"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-xl md:text-2xl text-neutral-300 font-light"
        >
          {profile.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-2 text-sm md:text-base text-neutral-500"
        >
          {profile.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 max-w-2xl mx-auto text-neutral-300 text-base md:text-lg leading-relaxed"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-medium text-sm overflow-hidden shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)] transition-shadow hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.7)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Get in touch
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-white/[0.02] backdrop-blur-md text-neutral-200 hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300 text-sm"
            >
              View experience
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex items-center gap-5 justify-center text-neutral-400 text-sm"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> {profile.location}
          </span>
          <span className="w-px h-4 bg-white/10" />
          {[
            { href: profile.github, label: "GitHub", Icon: GithubIcon },
            { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
            { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-white transition-colors"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-neutral-500 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
};
