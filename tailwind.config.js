/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
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

        /** Custom Colors */
        "dark-a0": "var(--clr-dark-a0)",
        "light-a0": "var(--clr-light-a0)",
        "primary-a0": "var(--clr-primary-a0)",
        "primary-a10": "var(--clr-primary-a10)",
        "primary-a20": "var(--clr-primary-a20)",
        "primary-a30": "var(--clr-primary-a30)",
        "primary-a40": "var(--clr-primary-a40)",
        "primary-a50": "var(--clr-primary-a50)",
        "surface-a0": "var(--clr-surface-a0)",
        "surface-a10": "var(--clr-surface-a10)",
        "surface-a20": "var(--clr-surface-a20)",
        "surface-a30": "var(--clr-surface-a30)",
        "surface-a40": "var(--clr-surface-a40)",
        "surface-a50": "var(--clr-surface-a50)",
        "surface-tonal-a0": "var(--clr-surface-tonal-a0)",
        "surface-tonal-a10": "var(--clr-surface-tonal-a10)",
        "surface-tonal-a20": "var(--clr-surface-tonal-a20)",
        "surface-tonal-a30": "var(--clr-surface-tonal-a30)",
        "surface-tonal-a40": "var(--clr-surface-tonal-a40)",
        "surface-tonal-a50": "var(--clr-surface-tonal-a50)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
