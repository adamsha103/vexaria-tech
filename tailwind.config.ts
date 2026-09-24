import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        brand: {
          dark: "#0B1220",
          card: "#111B2E",
          cardHover: "#16233B",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(37, 99, 235, 0.4)",
          blue: "#2563EB",
          cyan: "#06B6D4",
          violet: "#7C3AED",
          lightBg: "#F8FAFC",
          softGray: "#F1F5F9",
          darkText: "#0F172A",
          mutedText: "#64748B",
          lightMuted: "#94A3B8",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #2563EB, #06B6D4)",
        "secondary-gradient": "linear-gradient(to right, #7C3AED, #2563EB)",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(37, 99, 235, 0.25), rgba(6, 182, 212, 0.15), rgba(124, 58, 237, 0.1), transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.005) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "glow": "glow 8s ease-in-out infinite alternate",
        "marquee": "marquee 25s linear infinite",
        "fadeIn": "fadeIn 0.3s ease-out forwards",
        "slideDown": "slideDown 0.3s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(35px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 25px -5px rgba(37, 99, 235, 0.4)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.4)",
        "glow-violet": "0 0 25px -5px rgba(124, 58, 237, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
