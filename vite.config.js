import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Correct and stable configuration for Netlify + React + Vite
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
