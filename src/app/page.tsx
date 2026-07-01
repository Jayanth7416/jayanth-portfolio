import { FloatingNav } from "@/components/ui/floating-nav";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Home, User, Briefcase, Code, FolderOpen, Mail } from "lucide-react";

const navItems = [
  { name: "Home", link: "#home", icon: <Home size={14} /> },
  { name: "About", link: "#about", icon: <User size={14} /> },
  { name: "Experience", link: "#experience", icon: <Briefcase size={14} /> },
  { name: "Skills", link: "#skills", icon: <Code size={14} /> },
  { name: "Projects", link: "#projects", icon: <FolderOpen size={14} /> },
  { name: "Contact", link: "#contact", icon: <Mail size={14} /> },
];

export default function Home_Page() {
  return (
    <main className="relative bg-black">
      <ScrollProgress />
      <CursorGlow />
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <footer className="py-8 px-6 text-center text-xs text-neutral-600 border-t border-white/5">
        Designed & built by Jayanth Kumar  ·  Next.js + Aceternity UI  ·  {new Date().getFullYear()}
      </footer>
    </main>
  );
}
