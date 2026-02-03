import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

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
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            a: {
              color: 'var(--auto-primary)',
              '&:hover': {
                color: 'var(--auto-accent)',
              },
            },
            h1: { color: 'var(--foreground)' },
            h2: { color: 'var(--foreground)' },
            h3: { color: 'var(--foreground)' },
            h4: { color: 'var(--foreground)' },
            strong: { color: 'var(--foreground)' },
            code: {
              color: 'var(--foreground)',
              backgroundColor: 'var(--card)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            blockquote: {
              borderLeftColor: 'var(--auto-primary)',
              color: 'var(--secondary)',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
