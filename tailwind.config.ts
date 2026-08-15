import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#060E20",
          900: "#0B1B3D", // Primary Dark Blue
          800: "#0D234A",
          700: "#162B54",
          600: "#1E3A8A",
          500: "#2563EB", // Accent Blue
          400: "#3B82F6",
          100: "#D0E4F7",
          50: "#EBF3FA",  // Light Blue Background
          25: "#F4F8FC",  // Ice Blue Canvas
        },
        slate: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          500: "#64748B",
          400: "#94A3B8",
          200: "#E2E8F0",
          100: "#F1F5F9",
          50: "#F8FAFC",
        },
        accentGold: {
          500: "#D97706",
          400: "#F59E0B",
          50: "#FFFBEB",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'apple': '0 20px 40px -15px rgba(11, 27, 61, 0.07), 0 8px 16px -4px rgba(11, 27, 61, 0.04)',
        'apple-hover': '0 30px 60px -12px rgba(11, 27, 61, 0.12), 0 12px 24px -6px rgba(11, 27, 61, 0.06)',
        'card': '0 4px 20px -2px rgba(11, 27, 61, 0.04)',
        'glow-blue': '0 0 50px -10px rgba(37, 99, 235, 0.25)',
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
