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

  build: {
    outDir: './dist'
  },

  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },

  server: {
    port: 9000,
    https: true,
    host: true,
    proxy: {
      'https://localhost:9000': 'https://localhost:9000'
    }
  }
});
