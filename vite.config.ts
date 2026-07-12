import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Deploying to GitHub Pages at github.com/<user>/Portfolio, so the site
  // is served from /Portfolio/ rather than the domain root.
  base: '/Portfolio/',
})
