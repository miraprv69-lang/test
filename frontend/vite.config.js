import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This proxy is the key to connecting your frontend and backend
    proxy: {
      // Any request starting with '/api'
      '/api': {
        // Will be forwarded to your backend server
        target: 'http://localhost:3001',
        // Change origin to prevent CORS errors
        changeOrigin: true,
      },
    },
  },
})