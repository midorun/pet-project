import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsConfigPaths()],
  define: {
    __API_BASE_URL__: JSON.stringify('http://localhost:8000'),
  },
  base: 'http://localhost:8000',
})
