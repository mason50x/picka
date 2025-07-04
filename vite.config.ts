import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'supabase': ['@supabase/supabase-js']
        }
      }
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
});