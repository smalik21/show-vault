"use client";
import { useEffect, useState } from "react";
import { ConfigProvider } from "antd";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    let currentTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (!currentTheme) {
      currentTheme =
        (document.documentElement.getAttribute("data-theme") as
          | "light"
          | "dark") || "light";
    }
    setTheme(currentTheme);
    // Listen for changes
    const observer = new MutationObserver(() => {
      const htmlTheme = document.documentElement.getAttribute("data-theme") as
        | "light"
        | "dark";
      setTheme(htmlTheme || "light");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowOffset: 16,
            arrowSize: 32,
          },
          Pagination: {
            itemActiveBg: "#f66b0e",
            itemBg: "transparent",
            colorBgTextHover: theme === "dark" ? "#151515" : "#d5d5d5",
            colorBgTextActive: theme === "dark" ? "#151515" : "#d5d5d5",
            colorText: theme === "dark" ? "white" : "black",
            colorPrimary: theme === "dark" ? "white" : "black",
            colorPrimaryHover: theme === "dark" ? "white" : "black",
            colorPrimaryTextActive: theme === "dark" ? "white" : "black",
            colorTextDisabled: theme === "dark" ? "#205375" : "black",
            itemSize: 40,
            fontSize: 16,
            borderRadius: 50,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
