import { MetadataRoute } from 'next'

const siteUrl = 'https://www.techforward.jp'; // ドメインを確認

export default function sitemap(): MetadataRoute.Sitemap {
  // 現状は静的なトップページのみだが、将来ページが増えた際に動的に対応できる
  // TODO: サイトのページ構成に合わせて、他のページもここに追加する。
  // 例: /services, /case-studies, /portfolio, /about, /contact
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly', // コンテンツの更新頻度に合わせて調整 (e.g., 'monthly', 'weekly')
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    }
  ]
}