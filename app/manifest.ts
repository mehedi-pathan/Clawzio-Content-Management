import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Clawzio - AI-Powered Growth for YouTubers',
    short_name: 'Clawzio',
    description: 'Empowering Creators. Unlocking Trends. Grow with Clawzio.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['productivity', 'social', 'utilities'],
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
  }
}
