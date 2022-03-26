import { defineConfig } from 'vite';

import preact from '@preact/preset-vite';
import legacy from '@vitejs/plugin-legacy';
import paths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    preact(),
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

  optimizeDeps: {
    include: ['preact/debug']
  },

  server: {
    port: 9000,
    https: true,
    host: true,
    proxy: {
      'https://localhost:6000': 'https://localhost:6000'
    }
  }
});
