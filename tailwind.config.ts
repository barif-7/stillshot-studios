import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-950': '#0a0a0a',
        'neutral-900': '#0f0f0f',
        'neutral-850': '#141414',
        'neutral-800': '#1a1a1a',
        'neutral-750': '#1f1f1f',
        'neutral-700': '#262626',
        'neutral-600': '#404040',
        'neutral-500': '#525252',
        'neutral-400': '#a3a3a3',
        'neutral-300': '#d4d4d4',
        'neutral-200': '#e5e5e5',
        'neutral-100': '#f5f5f5',
        'amber-400': '#fbbf24',
        'amber-500': '#f59e0b',
        'amber-300': '#fcd34d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
export default config