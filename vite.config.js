import { defineConfig } from 'vite'

export default defineConfig({
  hotReload: true,
  files: [
    'src/index.js',
    'src/components/*.js',
    'src/pages/*.js',
  ],
})