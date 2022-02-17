import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import paths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    paths(),
    checker({
      typescript: true,
      overlay: false
    })
  ],

  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },

  server: {
    port: 10888,
    https: true,
    host: true,
    proxy: {
      'https://localhost:10888': 'https://localhost:10888'
    }
  },

  build: {
    outDir: './dist'
  }
});
