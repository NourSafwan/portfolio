/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://noursafwan.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 1.0,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/en'),
    await config.transform(config, '/ar'),
  ],
};
