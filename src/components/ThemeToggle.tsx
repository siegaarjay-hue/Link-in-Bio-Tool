"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[var(--toggle-bg)] border border-[var(--card-border)] flex items-center justify-center cursor-pointer transition-all duration-200 ease-out hover:bg-[var(--toggle-hover)] hover:border-[var(--link-hover-border)]"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FiSun className="w-4 h-4 text-[var(--text-secondary)]" />
      ) : (
        <FiMoon className="w-4 h-4 text-[var(--text-secondary)]" />
      )}
    </button>
  );
}
