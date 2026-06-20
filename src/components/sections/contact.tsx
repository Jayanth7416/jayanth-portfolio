"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { profile, education } from "@/data/resume";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { motion } from "motion/react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden border-t border-white/5"
    >
      <BackgroundBeams />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-purple-400">
            Contact
          </span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-white tracking-tight">
            Let&apos;s build something.
          </h2>
          <p className="mt-6 text-neutral-400 text-base md:text-lg max-w-xl mx-auto">
            If you&apos;re modernizing claims pipelines, designing a Redshift mart,
            or just need someone to make your 6 AM SLA stop breaking — I&apos;d like
            to hear about it.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
          >
            <Mail size={16} />
            {profile.email}
          </a>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-neutral-400">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <GithubIcon size={14} /> github.com/Jayanth7416
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <LinkedinIcon size={14} /> linkedin.com/in/jaye151528
            </a>
            <span className="inline-flex items-center gap-2">
              <Phone size={14} /> {profile.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} /> {profile.location}
            </span>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 text-xs text-neutral-500">
            <p>
              <span className="text-neutral-400">{education.degree}</span>
              {" · "}
              {education.school}
              {" · "}
              {education.period}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
