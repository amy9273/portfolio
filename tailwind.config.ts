import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#171021',
        aubergine: '#29183B',
        'royal-violet': '#7041A6',
        'electric-lavender': '#A77BEB',
        'pale-lilac': '#D8C5FF',
        cloud: '#F6F3FA',
        mist: '#E9E3F0',
        graphite: '#22202A',
        'muted-mauve': '#9D8AAE',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      borderRadius: {
        card: '1.25rem',
        panel: '1.75rem',
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'border-sweep': 'border-sweep 6s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'border-sweep': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
