"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-6 right-6 px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md hover:scale-110 transition"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
