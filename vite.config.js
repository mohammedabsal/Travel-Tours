import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base should match the GitHub Pages repository path (homepage in package.json)
  // If deploying to a custom domain or the site root, use '/' as the base.
  // Using '/' ensures built assets reference the root domain (e.g. https://aslamholidays.com/)
  base: '/',
})
