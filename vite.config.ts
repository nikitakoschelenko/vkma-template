import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import basicSsl from '@vitejs/plugin-basic-ssl';
import paths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    basicSsl(),
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
    https: true,
    host: true
  }
});
