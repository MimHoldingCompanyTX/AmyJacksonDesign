import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#243444',
        brass: '#B08A5A',
        greige: '#C9C1B9',
        ivory: '#F4F1EC',
        charcoal: '#2B2B2B',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        serif: ['var(--font-cormorant-garamond)', 'Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;