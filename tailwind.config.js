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
        display: ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.75rem',
      },
    },
  },
  plugins: [],
}
