import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    // Uncomment to make the warning disappear .
    // jsx: 'automatic',
  },
  build: {
    minify: false
  },
  plugins: [react()],
})
