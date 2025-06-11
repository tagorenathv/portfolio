import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tagorenath V Portfolio',
    short_name: 'Tagorenath V Portfolio',
    description: "I am Tagorenath V, a seasoned software engineer specializing in designing scalable and cost-efficient software architectures. Dive into my portfolio to see the technologies I work with, detailed case studies of projects I've led, and the key achievements throughout my career. Additionally, I am committed to contributing to open-source projects and supporting startups in their digital transformation efforts, leveraging my expertise to foster innovation and growth.",
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        "src": "/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
  }
}
