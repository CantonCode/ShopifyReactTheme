import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'
import react from '@vitejs/plugin-react'
import pageReload from 'vite-plugin-page-reload'
import ViteRestart from 'vite-plugin-restart'


export default defineConfig({
  plugins: [
    shopify({
      themeRoot: 'extensions/test-vite-app'
    }),
    pageReload('./extensions','extensions/test-vite-app/snippets/vite-tag.liquid'),
    react(),
    ViteRestart({
      restart: [
        './frontend/components/*.*',
      ]
    })
  ]
})
