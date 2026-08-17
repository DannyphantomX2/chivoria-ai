"use client";

import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border"
      style={{ borderColor: "var(--border-strong)", color: "var(--text)" }}
    >
      {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
      {theme === "dark" ? "Dark mode" : "Light mode"}
    </button>
  );
}
