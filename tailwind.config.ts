
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Cyberpunk theme colors
        cyber: {
          "primary": "#ff5c8a",        // Neon pink (Adjusted for contrast)
          "secondary": "#05d9e8",      // Cyan
          "accent": "#d100d1",         // Magenta
          "purple": "#9c4dff",         // Neon purple (Adjusted for contrast)
          "blue": "#01c8ee",           // Electric blue
          "yellow": "#ffe600",         // Bright yellow
          "green": "#00ff9f",          // Neon green
          "black": "#0d1117",          // Dark background
          "darker": "#080a0e",         // Darker background
          "dark": "#161b22",           // Dark surface
          "border": "#1c2026",         // Subtle border
          "muted": "#30363d",          // Muted elements
          "text": "#f0f6fc",           // Primary text
          "text-muted": "#9eaab7",     // Secondary text (Adjusted for contrast)
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-matrix)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-matrix)" },
          to: { height: "0" },
        },
        // Custom cyberpunk animations
        glow: {
          "0%, 100%": { filter: "brightness(1) drop-shadow(0 0 5px rgba(1, 200, 238, 0.8))" },
          "50%": { filter: "brightness(1.2) drop-shadow(0 0 15px rgba(1, 200, 238, 0.9))" },
        },
        "glow-text": {
          "0%, 100%": { 
            "text-shadow": "0 0 4px rgba(1, 200, 238, 0.8), 0 0 11px rgba(1, 200, 238, 0.8)"
          },
          "50%": { 
            "text-shadow": "0 0 6px rgba(1, 200, 238, 0.9), 0 0 19px rgba(1, 200, 238, 0.9)"
          },
        },
        "border-glow": {
          "0%, 100%": { 
            "box-shadow": "0 0 5px rgba(255, 42, 109, 0.7), inset 0 0 5px rgba(255, 42, 109, 0.7)",
            "border-color": "rgba(255, 42, 109, 0.7)"
          },
          "50%": { 
            "box-shadow": "0 0 15px rgba(255, 42, 109, 1), inset 0 0 8px rgba(255, 42, 109, 1)",
            "border-color": "rgba(255, 42, 109, 1)"
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "cyber-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "scan-line": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "25%, 75%": { opacity: "0.5" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "glow-text": "glow-text 2s ease-in-out infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "cyber-pulse": "cyber-pulse 2s ease-in-out infinite",
        "scan-line": "scan-line 4s linear infinite",
        "blink": "blink 4s infinite",
      },
      backgroundImage: {
        "cyber-gradient": "linear-gradient(45deg, #0d1117 0%, #161b22 100%)",
        "cyber-glow": "linear-gradient(45deg, rgba(1, 200, 238, 0.2) 0%, rgba(255, 42, 109, 0.1) 100%)",
        "cyber-grid": "linear-gradient(rgba(16, 21, 30, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 21, 30, 0.8) 1px, transparent 1px)",
        "neon-glow": "conic-gradient(from 180deg at 50% 50%, #ff2a6d 0deg, #05d6e8 120deg, #6157ff 240deg, #ff2a6d 360deg)",
      },
      boxShadow: {
        "neon-glow": "0 0 5px theme('colors.cyber.blue'), 0 0 20px theme('colors.cyber.blue')",
        "neon-pink": "0 0 5px theme('colors.cyber.primary'), 0 0 20px theme('colors.cyber.primary')",
        "neon-purple": "0 0 5px theme('colors.cyber.purple'), 0 0 20px theme('colors.cyber.purple')",
        "cyber-card": "0 0 10px rgba(1, 200, 238, 0.3), 0 0 20px rgba(1, 200, 238, 0.2), inset 0 0 15px rgba(1, 200, 238, 0.1)",
      },
      dropShadow: {
        "neon-blue": "0 0 5px rgba(1, 200, 238, 0.7)",
        "neon-pink": "0 0 5px rgba(255, 42, 109, 0.7)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
