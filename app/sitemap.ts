import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  // 現状は静的なトップページのみだが、将来ページが増えた際に動的に対応できる
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/case-studies',
    '/contact',
    '/privacy-policy',
    '/security-policy',
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    // changeFrequency: 'monthly', // 必要に応じて設定
    // priority: route === '' ? 1 : 0.8, // 必要に応じて設定
  }));

  return routes;
}