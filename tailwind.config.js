/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        cream: '#FDF1E6',
        paper: '#FFFFFF',
        // Text
        ink: '#221D19',
        body: '#4B4038',
        // Accent (buttons, links, badges)
        accent: {
          100: '#EDE4FB',
          200: '#D9C9F7',
          300: '#C4AEF3',
          400: '#A78BFA',
          500: '#8B6DF0',
          600: '#7451D6',
        },
        // Project-card palette (from the original Figma comps)
        clay: '#AE9678',
        terracotta: '#D9784F',
        espresso: '#5B4438',
        rust: '#8A3B12',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.75rem',
      },
      keyframes: {
        // Entrance: soft fade + rise (hero, carousel cards, page titles)
        rise: {
          from: { opacity: '0', translate: '0 18px' },
          to: { opacity: '1', translate: 'none' },
        },
        // Route change: quick, quiet fade so pages don't "snap" in
        'page-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        // Decorative shapes behind the portrait breathe very gently
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(4px, -8px)' },
        },
        'float-alt': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-6px, 6px)' },
        },
      },
      animation: {
        rise: 'rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'page-in': 'page-in 0.45s ease-out both',
        float: 'float 9s ease-in-out infinite',
        'float-alt': 'float-alt 11s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
