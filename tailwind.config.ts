import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        border: "var(--border)",
        card: "var(--card)",
        "auto-primary": "var(--auto-primary)",
        "auto-accent": "var(--auto-accent)",
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
      },
      maxWidth: {
        container: 'var(--container-max-width)',
      },
      spacing: {
        section: 'var(--section-padding)',
      },
    },
  },
  plugins: [],
} satisfies Config;
