"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { profile, education } from "@/data/resume";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { motion } from "motion/react";
import { Magnetic } from "@/components/ui/magnetic";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden border-t border-white/5"
    >
      <BackgroundBeams />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            initial={{ letterSpacing: "0.05em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.2em", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-xs uppercase text-purple-400"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Let&apos;s build{" "}
            <span className="text-shimmer">something.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-neutral-300 text-base md:text-lg max-w-xl mx-auto"
          >
            If you&apos;re modernizing claims pipelines, designing a Redshift mart,
            or just need someone to make your 6 AM SLA stop breaking — I&apos;d like
            to hear about it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex justify-center"
          >
            <Magnetic strength={0.3}>
              <a
                href={`mailto:${profile.email}`}
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium overflow-hidden shadow-[0_20px_60px_-20px_rgba(255,255,255,0.5)] transition-shadow hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.7)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <Mail size={16} />
                  {profile.email}
                </span>
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-neutral-300"
          >
            {[
              {
                href: profile.github,
                label: "github.com/Jayanth7416",
                Icon: GithubIcon,
                external: true,
              },
              {
                href: profile.linkedin,
                label: "linkedin.com/in/jaye151528",
                Icon: LinkedinIcon,
                external: true,
              },
            ].map(({ href, label, Icon, external }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Icon size={14} /> {label}
              </motion.a>
            ))}
            <span className="inline-flex items-center gap-2">
              <Phone size={14} /> {profile.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} /> {profile.location}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-16 pt-8 border-t border-white/5 text-xs text-neutral-500"
          >
            <p>
              <span className="text-neutral-400">{education.degree}</span>
              {" · "}
              {education.school}
              {" · "}
              {education.period}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
