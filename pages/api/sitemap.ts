import type { NextApiRequest, NextApiResponse } from 'next';

export default function sitemap(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/xml');
  const baseUrl = 'https://www.tagorenathv.me';

  // Define your site's static and dynamic sections
  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() },
    { url: '/#skills', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { url: '/#experience', changefreq: 'monthly', priority: 0.9, lastmod: new Date().toISOString() },
    { url: '/#projects', changefreq: 'monthly', priority: 0.9, lastmod: new Date().toISOString() },
    { url: '/#certifications', changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() },
    { url: '/#contact', changefreq: 'yearly', priority: 0.6, lastmod: new Date().toISOString() }
  ];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(page => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`)
  .join('')}
</urlset>`;

  res.status(200).send(sitemap);
}
