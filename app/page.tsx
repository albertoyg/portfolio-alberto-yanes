"use client";

import { useState, useEffect } from "react";
import { MeSection, ProjectsSection, SkillsSection, ContactSection, ExperienceSection } from "./sections";
import { User, Workflow, CodeXml, Signal, Briefcase } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import myAvatar from "@/app/assets/me.png";
import Image from "next/image";
import FluidCursor from "./components/FluidCursor";

type Tab = "me" | "projects" | "skills" | "contact" | "experience";

const tabs: { id: Tab; label: string; icon: LucideIcon; color: string }[] = [
  { id: "me", label: "Me", icon: User, color: "text-emerald-500" },
  { id: "projects", label: "Projects", icon: Workflow, color: "text-sky-500" },
  { id: "skills", label: "Skills", icon: CodeXml, color: "text-violet-500" },
  { id: "experience", label: "Experience", icon: Briefcase, color: "text-blue-500" },
  { id: "contact", label: "Contact", icon: Signal, color: "text-amber-500" },
];

function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-zinc-900/50 hover:scale-110 transition-transform"
      aria-label="Toggle theme"
    >
      <span className="w-5 h-5 flex items-center justify-center text-lg">
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("me");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const renderSection = () => {
    switch (activeTab) {
      case "me":
        return <MeSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "contact":
        return <ContactSection />;
      case "experience":
        return <ExperienceSection />;
    }
  };

return (
  <div className="h-screen overflow-hidden relative">
    <FluidCursor />
    {/* Theme Toggle */}
    <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

    {/* Watermark */}
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none z-[1]">
      <span className="text-[12rem] md:text-[16rem] font-black text-zinc-300/30 dark:text-zinc-800/30 tracking-tighter leading-none">
        ALBERTO.YG
      </span>
    </div>

    {/* Fixed Header + Nav Section */}
    <header className="fixed top-0 left-0 right-0 z-30 flex flex-col items-center pt-4 md:pt-8 pb-2 md:pb-4 pointer-events-none">
      {/* Header */}
      <h2 className="text-sm md:text-lg text-zinc-600 dark:text-zinc-400 mb-0.5 md:mb-1">
        Hey, I&apos;m Alberto 👋
      </h2>
      <h1 className="text-2xl md:text-5xl font-bold tracking-tight mb-4 md:mb-8 text-center px-4">
        Scalable SaaS & AI Engineer
      </h1>

      {/* Avatar */}
      <div className="mb-3 md:mb-6 -mt-6 md:-mt-12">
        <Image 
          src={myAvatar} 
          alt="Alberto.YG" 
          width={160} 
          height={160}
          className="w-40 h-50"
        />
      </div>

      {/* Navigation Tabs - Grid on mobile, flex on desktop */}
      <nav className="grid grid-cols-3 md:flex gap-1 md:gap-2 pointer-events-auto px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex flex-col items-center gap-0.5 md:gap-1 px-3 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl transition-all duration-200
              ${
                activeTab === tab.id
                  ? "bg-white dark:bg-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-zinc-900/50 scale-105"
                  : "bg-white/50 dark:bg-zinc-800/50 hover:bg-white dark:hover:bg-zinc-800"
              }
            `}
          >
            <span className={`w-5 h-5 md:w-6 md:h-6 flex items-center justify-center ${tab.color}`}>
              <tab.icon size={16} className="md:w-5 md:h-5" />
            </span>
            <span className="text-[10px] md:text-xs font-medium text-zinc-700 dark:text-zinc-300">
              {tab.label}
            </span>
          </button>
        ))}
      </nav>
    </header>

    {/* Scrollable Content Container - adjust padding for mobile */}
    <div 
      className="h-screen overflow-y-auto pt-[410px] md:pt-[410px] pb-16 px-4 md:px-6 relative z-10"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0px, transparent 300px, black 330px)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, transparent 300px, black 330px)',
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="w-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-zinc-200/50 dark:shadow-zinc-900/50">
          {renderSection()}
        </div>
      </div>
    </div>
  </div>
);
}
