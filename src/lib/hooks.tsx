import { ThemeType } from "@/types/types";
import { useEffect, useState } from "react";

export const useCardsColumns = () => {
  const [columns, setColumns] = useState(6);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width <= 756) setColumns(2);
      else if (width <= 980) setColumns(3);
      else if (width <= 1400) setColumns(4);
      else if (width <= 1600) setColumns(6);
      else setColumns(6);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return columns;
};

export const useCurrentTheme = (): ThemeType => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    let currentTheme = localStorage.getItem("theme") as ThemeType | null;
    if (!currentTheme) {
      currentTheme =
        (document.documentElement.getAttribute("data-theme") as ThemeType) ||
        "light";
    }
    return currentTheme;
  });

  useEffect(() => {
    // Listen for localStorage changes (cross-tab)
    const onStorage = () => {
      let currentTheme = localStorage.getItem("theme") as ThemeType | null;
      if (!currentTheme) {
        currentTheme =
          (document.documentElement.getAttribute("data-theme") as ThemeType) ||
          "light";
      }
      setTheme(currentTheme);
    };
    window.addEventListener("storage", onStorage);

    // Listen for data-theme attribute changes
    const observer = new MutationObserver(() => {
      const currentTheme =
        (document.documentElement.getAttribute("data-theme") as ThemeType) ||
        "light";
      setTheme(currentTheme);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      window.removeEventListener("storage", onStorage);
      observer.disconnect();
    };
  }, []);

  return theme;
};
