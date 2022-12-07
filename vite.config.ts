import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    basicSsl()
  ],

  build: {
    outDir: './dist'
  },

  server: {
    https: true,
    host: true
  }
})
