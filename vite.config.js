import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'X-Robots-Tag': 'index, follow'
    }
  },
  preview: {
    headers: {
      'X-Robots-Tag': 'index, follow'
    }
  }
})
