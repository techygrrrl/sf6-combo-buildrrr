import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // ref: https://github.com/vercel/vercel/discussions/6538
  server: {
    port: 40078,
    proxy: {
      '/api': {
        target: 'http://localhost:40077',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
  build: {
    // sourcemap: true,
    target: ['es2016']
  }
})
