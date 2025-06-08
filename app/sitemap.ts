import { MetadataRoute } from 'next';

const URL = 'https://www.techforward.jp';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '', // ホームページ (app/page.tsx)
    '/about',
    '/services',
    '/case-studies',
    '/portfolio',
    '/contact',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}