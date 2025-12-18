"use client";

import { useState, useEffect } from "react";
import { MeSection, ProjectsSection, SkillsSection, ContactSection } from "./sections";

type Tab = "me" | "projects" | "skills" | "contact";

const tabs: { id: Tab; label: string; icon: string; color: string }[] = [
  { id: "me", label: "Me", icon: "😊", color: "text-emerald-500" },
  { id: "projects", label: "Projects", icon: "💼", color: "text-sky-500" },
  { id: "skills", label: "Skills", icon: "📚", color: "text-violet-500" },
  { id: "contact", label: "Contact", icon: "🔑", color: "text-amber-500" },
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
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Theme Toggle */}
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

      {/* Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none">
        <span className="text-[12rem] md:text-[16rem] font-black text-zinc-300 dark:text-zinc-900 tracking-tighter leading-none">
          Portfolio
        </span>
      </div>

      <main className="relative z-10 flex flex-col items-center w-full max-w-2xl px-6 py-16">
        {/* Logo */}
        <div className="mb-6">
          <svg
            className="w-10 h-10"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 4L4 14V26L20 36L36 26V14L20 4Z"
              fill="currentColor"
              className="text-zinc-900 dark:text-zinc-100"
            />
            <path
              d="M20 4L4 14L20 24L36 14L20 4Z"
              fill="currentColor"
              className="text-zinc-700 dark:text-zinc-300"
            />
          </svg>
        </div>

        {/* Header */}
        <h2 className="text-lg text-zinc-600 dark:text-zinc-400 mb-1">
          Hey, I&apos;m Alberto 👋
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          My Portfolio
        </h1>

        {/* Avatar Placeholder */}
        <div className="w-40 h-40 mb-10 rounded-full bg-linear-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center">
          <span className="text-6xl">🧑‍💻</span>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex flex-col items-center gap-1 px-5 py-3 rounded-xl transition-all duration-200
                ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-zinc-900/50 scale-105"
                    : "bg-white/50 dark:bg-zinc-800/50 hover:bg-white dark:hover:bg-zinc-800"
                }
              `}
            >
              <span className={`w-6 h-6 flex items-center justify-center text-base ${tab.color}`}>
                {tab.icon}
              </span>
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {tab.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Content Section */}
        <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-xl shadow-zinc-200/50 dark:shadow-zinc-900/50">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}
