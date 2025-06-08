import { siteConfig } from './siteConfig';
import type { Metadata } from 'next';

interface PageMetadataParams {
  title?: string; // ページ固有のタイトル部分 (例: 'サービス一覧')。省略時は会社名のみ。
  description: string;
  path: string; // サイトルートからの相対パス (例: '/services', '/about')
  ogImage?: string; // ページ固有のOGP画像パス (例: '/img/services-og.png')。省略時は siteConfig.defaultOgImagePath を使用
  noindex?: boolean; // trueの場合、検索エンジンにnoindexを指示
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  noindex = false, // デフォルトはインデックス許可
}: PageMetadataParams): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.company}`
    : siteConfig.company;
  const canonicalUrl = `${siteConfig.siteUrl}${path}`;
  const imageUrl = `${siteConfig.siteUrl}${ogImage || siteConfig.defaultOgImagePath}`;

  const metadata: Metadata = {
    title: pageTitle,
    description: description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: description,
      url: canonicalUrl,
      siteName: siteConfig.company,
      images: [
        {
          url: imageUrl,
          width: 1200, // 標準的なOGP画像の幅
          height: 630, // 標準的なOGP画像の高さ
          alt: `${title || siteConfig.company}のイメージ画像`,
        },
      ],
      type: 'website',
      locale: 'ja_JP',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: description,
      images: [imageUrl],
      // site: '@YourTwitterHandle', // 必要に応じて siteConfig に追加して参照
      // creator: '@YourTwitterHandleForCreator', // 必要に応じて siteConfig に追加して参照
    },
  };

  if (noindex) {
    metadata.robots = {
      index: false,
      follow: true, // followは通常trueで良いでしょう
    };
  }

  return metadata;
}
