import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Tailwind CSS
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.nekosapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/dragonball-api': {
        target: 'https://web.dragonball-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dragonball-api/, '/api'),
      }
    }
  }
})
