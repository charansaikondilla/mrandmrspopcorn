// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // ✅ For custom domains, base must be "/" (not /repo-name/)
  base: '/',

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  plugins: [react()],

  build: {
    // ✅ GitHub Pages uses /docs for deployment
    outDir: 'docs',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
