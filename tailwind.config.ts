import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'scale(.95)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'floating': 'floating 5s linear infinite',
        'spin-slow': 'spin 7s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
      }
    },
    screens: {
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
} satisfies Config;
