import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        "avatar-float": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
          },
          "50%": {
            transform: "translateY(-10px) scale(1.015)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "0.55",
            transform: "scale(0.96)",
          },
          "50%": {
            opacity: "0.9",
            transform: "scale(1.04)",
          },
        },
        "abi-float": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
          },
          "50%": {
            transform: "translateY(-8px) scale(1.01)",
          },
        },
        "abi-aura": {
          "0%, 100%": {
            opacity: "0.48",
          },
          "50%": {
            opacity: "0.82",
          },
        },
        "abi-pan": {
          "0%": {
            transform: "scale(1.03) translate3d(0%, 0%, 0)",
          },
          "50%": {
            transform: "scale(1.05) translate3d(-0.6%, 0.45%, 0)",
          },
          "100%": {
            transform: "scale(1.03) translate3d(0%, 0%, 0)",
          },
        },
        "abi-sheen": {
          "0%": {
            backgroundPosition: "-170% 0",
          },
          "100%": {
            backgroundPosition: "170% 0",
          },
        },
        "abi-scan-vertical": {
          "0%": {
            transform: "translateY(-12%)",
            opacity: "0",
          },
          "16%": {
            opacity: "0.95",
          },
          "62%": {
            opacity: "0.3",
          },
          "100%": {
            transform: "translateY(108%)",
            opacity: "0",
          },
        },
        "kachra-float": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
          },
          "50%": {
            transform: "translateY(-11px) scale(1.012)",
          },
        },
        "kachra-aura": {
          "0%, 100%": {
            opacity: "0.44",
          },
          "50%": {
            opacity: "0.86",
          },
        },
        "kachra-pan": {
          "0%": {
            transform: "scale(1.05) translate3d(0%, 0%, 0)",
          },
          "35%": {
            transform: "scale(1.08) translate3d(-0.8%, -0.5%, 0)",
          },
          "70%": {
            transform: "scale(1.07) translate3d(0.7%, 0.55%, 0)",
          },
          "100%": {
            transform: "scale(1.05) translate3d(0%, 0%, 0)",
          },
        },
        "kachra-shift": {
          "0%, 100%": {
            opacity: "0.32",
          },
          "50%": {
            opacity: "0.68",
          },
        },
        "kachra-sheen": {
          "0%": {
            backgroundPosition: "-180% 0",
          },
          "100%": {
            backgroundPosition: "190% 0",
          },
        },
        "kachra-scan": {
          "0%": {
            transform: "translateY(-10%)",
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "68%": {
            opacity: "0.3",
          },
          "100%": {
            transform: "translateY(108%)",
            opacity: "0",
          },
        },
        "kachra-orbit": {
          "0%": {
            transform: "translateY(-50%) rotate(0deg) translateX(0px)",
          },
          "50%": {
            transform: "translateY(-50%) rotate(180deg) translateX(10px)",
          },
          "100%": {
            transform: "translateY(-50%) rotate(360deg) translateX(0px)",
          },
        },
        "kachra-orbit-reverse": {
          "0%": {
            transform: "translateY(-50%) rotate(360deg) translateX(0px)",
          },
          "50%": {
            transform: "translateY(-50%) rotate(180deg) translateX(-12px)",
          },
          "100%": {
            transform: "translateY(-50%) rotate(0deg) translateX(0px)",
          },
        },
        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        "avatar-float": "avatar-float 5s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4.5s ease-in-out infinite",
        "abi-float": "abi-float 6.2s ease-in-out infinite",
        "abi-aura": "abi-aura 4.8s ease-in-out infinite",
        "abi-pan": "abi-pan 12s ease-in-out infinite",
        "abi-sheen": "abi-sheen 5.6s linear infinite",
        "abi-scan-vertical": "abi-scan-vertical 4.2s ease-in-out infinite",
        "kachra-float": "kachra-float 5.5s ease-in-out infinite",
        "kachra-aura": "kachra-aura 4.6s ease-in-out infinite",
        "kachra-pan": "kachra-pan 8.8s ease-in-out infinite",
        "kachra-shift": "kachra-shift 3.2s ease-in-out infinite",
        "kachra-sheen": "kachra-sheen 4.3s linear infinite",
        "kachra-scan": "kachra-scan 3.3s ease-in-out infinite",
        "kachra-orbit": "kachra-orbit 7.4s linear infinite",
        "kachra-orbit-reverse": "kachra-orbit-reverse 8.2s linear infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [typography],
};

export default config;
