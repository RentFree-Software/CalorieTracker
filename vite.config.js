import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/CalorieTracker/',
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
        manifest:{
          name: 'Calorie Tracker',
          short_name: 'Calorie Tracker',
          description: 'A simple calorie tracking app built with Vue.js, compiled with vite.',
          theme_color: '#000000',
          icons: [
            {
              src: 'icons/pwa-180x180.png',
              sizes: '180x180',
              type: 'image/png'
            },
            {
              src: 'icons/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icons/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: 'icons/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            },
            {
              src: 'icons/pwa-1024x1024.png',
              sizes: '1024x1024',
              type: 'image/png'
            },
          ]

        },
      
        registerType: 'autoUpdate' })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
