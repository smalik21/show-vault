"use client";

import styles from "./ThemeSwitcher.module.scss";
import { ThemeType } from "@/types/types";
import { useEffect, useState } from "react";
import { YellowStarIcon } from "@/lib/icons";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<ThemeType | null>(null);

  useEffect(() => {
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") as ThemeType | null;

    // Detect system preference if no saved theme
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme: ThemeType =
      savedTheme || (prefersDarkMode ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    if (!theme) return;

    const newTheme: ThemeType = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Prevent flashing (only render button when theme is set)
  if (!theme) return null;

  return (
    <button onClick={toggleTheme} className={styles.switchContainer}>
      <YellowStarIcon width={30} height={30} />
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeSwitcher;
