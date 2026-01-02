import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        mid: 'rgba(98, 116, 142, 1)',
        dark: '#314158',
        'border-light': '#E2E8F0',
        'bg-light': '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-figtree)', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

