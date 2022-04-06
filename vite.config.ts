import { defineConfig } from 'vite';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import paths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    checker({
      typescript: true,
      overlay: false
    }),
    paths()
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
