import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // Relative base so built assets load from the file:// scheme inside the
  // Capacitor native shell (and from any subpath when hosted on the web).
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'MYP 56',
        short_name: 'MYP 56',
        description:
          'Study and organization tool for IB Middle Years Programme students. Aim for the full 56.',
        theme_color: '#1e293b',
        background_color: '#f8fafc',
        display: 'standalone',
        // Relative rather than '/', so installing the PWA still works if the
        // site ends up hosted at a subpath (e.g. a GitHub Pages project page)
        // rather than a domain root.
        start_url: './',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
})
