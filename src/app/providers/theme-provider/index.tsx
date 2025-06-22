"use client";
import { useEffect, useState } from "react";
import { ConfigProvider } from "antd";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [paginationItemSize, setPaginationItemSize] = useState<number>(40);

  useEffect(() => {
    let currentTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (!currentTheme) {
      currentTheme =
        (document.documentElement.getAttribute("data-theme") as
          | "light"
          | "dark") || "light";
    }
    setTheme(currentTheme);

    // Listen for theme changes
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

    // Set pagination item size based on screen width
    const updatePaginationItemSize = () => {
      setPaginationItemSize(window.innerWidth < 480 ? 30 : 40);
    };
    updatePaginationItemSize();
    window.addEventListener("resize", updatePaginationItemSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePaginationItemSize);
    };
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
            itemSize: paginationItemSize,
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
