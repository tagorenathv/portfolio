import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.tagorenathv.me',
      lastModified: new Date(),
    },
    {
      url: 'https://www.tagorenathv.me/#skills',
      lastModified: new Date(),
    },
    {
      url: 'https://www.tagorenathv.me/#experience',
      lastModified: new Date(),
    },
    {
      url: 'https://www.tagorenathv.me/#projects',
      lastModified: new Date(),
    },
    {
      url: 'https://www.tagorenathv.me/#certifications',
      lastModified: new Date(),
    },
    {
      url: 'https://www.tagorenathv.me/#contact',
      lastModified: new Date(),
    },
  ]
}
