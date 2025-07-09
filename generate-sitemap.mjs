import fs from 'fs';

const siteUrl = 'https://noursafwan.vercel.app';
const locales = ['en', 'ar'];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${siteUrl}/en</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${siteUrl}/ar"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en"/>
  </url>
  <url>
    <loc>${siteUrl}/ar</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${siteUrl}/ar"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en"/>
  </url>
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemapContent);
console.log('✅ sitemap.xml generated successfully!');