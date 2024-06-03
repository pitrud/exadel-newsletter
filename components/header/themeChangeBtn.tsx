"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeChangeBtn = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        setTheme(e.matches ? "dark" : "light")
      );

    // Setup dark/light mode for the first time
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    // Remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, [setTheme]);

  return (
    <button
      className="relative h-5 md:h-6 w-6 ml-2 md:ml-6"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Image src="/icon-day-night.svg" alt="" fill />
    </button>
  );
};

export default ThemeChangeBtn;
