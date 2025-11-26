import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    allowedHosts: ["brinkwebsite.onrender.com"],
    port: 10000,
  },
  build: {
    outDir: 'dist',
  },
  base: '/',
})



