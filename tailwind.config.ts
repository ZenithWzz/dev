import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          primary: '#6366F1',
          dark: '#312E81',
        },
      },
      boxShadow: {
        glow: '0 30px 60px -15px rgba(99, 102, 241, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
