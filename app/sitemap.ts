import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://noursafwan.vercel.app';
  const lastMod = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: lastMod,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
          'x-default': `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/ar`,
      lastModified: lastMod,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
          'x-default': `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: lastMod,
      alternates: {
        languages: {
          en: `${baseUrl}/en/about`,
          ar: `${baseUrl}/ar/about`,
        },
      },
    },
    {
      url: `${baseUrl}/ar/about`,
      lastModified: lastMod,
      alternates: {
        languages: {
          en: `${baseUrl}/en/about`,
          ar: `${baseUrl}/ar/about`,
        },
      },
    },
    {
      url: `${baseUrl}/en/projects`,
      lastModified: lastMod,
      alternates: {
        languages: {
          en: `${baseUrl}/en/projects`,
          ar: `${baseUrl}/ar/projects`,
        },
      },
    },
    {
      url: `${baseUrl}/ar/projects`,
      lastModified: lastMod,
      alternates: {
        languages: {
          en: `${baseUrl}/en/projects`,
          ar: `${baseUrl}/ar/projects`,
        },
      },
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: lastMod,
      alternates: {
        languages: {
          en: `${baseUrl}/en/contact`,
          ar: `${baseUrl}/ar/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/ar/contact`,
      lastModified: lastMod,
      alternates: {
        languages: {
          en: `${baseUrl}/en/contact`,
          ar: `${baseUrl}/ar/contact`,
        },
      },
    },
  ];
}
