import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        embed: './src/embed.tsx'
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'embed' ? 'campak-bot.js' : '[name]-[hash].js';
        }
      }
    }
  }
});