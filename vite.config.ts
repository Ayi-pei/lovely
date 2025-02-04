import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  server: {
    port: 3002, // or any other port you prefer
  },

  build: {
    outDir: 'dist', // set the build output directory to ensure Netlify reads it correctly
    sourcemap: true, // generate source maps for easier debugging
    chunkSizeWarningLimit: 500, // avoid chunk size warning
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});