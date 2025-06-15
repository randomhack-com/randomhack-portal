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
        // Professional theme colors
        professional: {
          "primary": "#2563eb",          // Professional blue
          "secondary": "#059669",        // Professional green
          "accent": "#7c3aed",           // Professional purple
          "orange": "#ea580c",           // Professional orange
          "slate": "#475569",            // Professional slate
          "indigo": "#4f46e5",           // Professional indigo
          "emerald": "#10b981",          // Professional emerald
          "background": "#ffffff",       // Clean white background
          "surface": "#f8fafc",          // Light surface
          "card": "#ffffff",             // Card background
          "border": "#e2e8f0",           // Subtle border
          "muted": "#f1f5f9",            // Muted background
          "text": "#1e293b",             // Dark text
          "text-muted": "#64748b",       // Muted text
          "text-light": "#94a3b8",       // Light text
        },
        // Dark mode variants
        "professional-dark": {
          "background": "#0f172a",       // Dark background
          "surface": "#1e293b",          // Dark surface
          "card": "#334155",             // Dark card
          "border": "#475569",           // Dark border
          "muted": "#334155",            // Dark muted
          "text": "#f1f5f9",             // Light text
          "text-muted": "#cbd5e1",       // Muted light text
          "text-light": "#94a3b8",       // Light muted text
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
        // Professional animations
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "professional-gradient": "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        "professional-dark-gradient": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      },
      boxShadow: {
        "professional": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "professional-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "professional-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;