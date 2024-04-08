declare global {
  interface ImportMeta {
    env: Record<string, string>;
    // VITE_API_URL: string;
  }
}

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// const API_URL = import.meta.env.BASE_URL || 'http://localhost:4000';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    /*     proxy: {
      '/api': {
        target: API_URL as string,
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }, */
  },
});
