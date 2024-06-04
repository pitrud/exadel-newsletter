import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ['"DM Sans", sans-serif'],
      },
    },
    colors: {
      gray: {
        DEFAULT: "#00000029",
        light: "#F3F3F3",
        dark: "#424141",
      },
      sea: {
        DEFAULT: "#209EBC",
        light: "#8ECAE6",
      },
      blue: {
        light: "rgb(142 202 230 / 15%)",
        medium: "rgb(142 202 230 / 35%)",
        DEFAULT: "rgb(142 202 230)",
        dark: "#023047",
      },
      white: {
        DEFAULT: "#fff",
      },
      transparent: {
        DEFAULT: "transparent",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
