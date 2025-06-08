import '../styles/globals.css';
import { siteConfig } from '../lib/siteConfig';
import type { Metadata } from 'next';

const siteUrl = 'https://www.techforward.jp'; // 実際のドメインに置き換えてください

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.company} | システム開発・技術顧問・ITコンサルティング`,
    template: `%s | ${siteConfig.company}`,
  },
  description: 'TechForwardは中小企業・個人事業主向けのシステム開発・ITコンサルティング・技術顧問サービスを提供します。業務効率化、DX推進、データ活用をサポートします。',
  keywords: ['システム開発', 'ITコンサルティング', '技術顧問', 'DX推進', '業務自動化', '中小企業', '個人事業主', 'TechForward'],
  authors: [{ name: siteConfig.company }],
  creator: siteConfig.company,
  publisher: siteConfig.company,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    title: `${siteConfig.company} | システム開発・技術顧問・ITコンサルティング`,
    description: 'TechForwardは中小企業・個人事業主向けのシステム開発・ITコンサルティング・技術顧問サービスを提供します。業務効率化、DX推進、データ活用をサポートします。',
    siteName: siteConfig.company,
    images: [
      {
        url: `${siteUrl}/img/og-image.png`, // public/img/og-image.png を配置してください
        width: 1200,
        height: 630,
        alt: `${siteConfig.company} OGP Image`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.company} | システム開発・技術顧問・ITコンサルティング`,
    description: 'TechForwardは中小企業・個人事業主向けのシステム開発・ITコンサルティング・技術顧問サービスを提供します。業務効率化、DX推進、データ活用をサポートします。',
    site: siteConfig.links.twitter, // 追加
    creator: '@techforward', // siteConfig.links.twitter から抽出して設定
    images: [`${siteUrl}/img/og-image.png`], // OGP画像と同じものを指定
  },
  icons: {
    icon: '/img/favicon-32x32.png', // public/favicon-32x32.png
    shortcut: '/img/favicon.ico', // public/favicon.ico
    apple: '/img/apple-touch-icon.png', // public/apple-touch-icon.png
    other: [
      {
        rel: 'icon',
        url: '/img/favicon-16x16.png', // public/favicon-16x16.png
        sizes: '16x16',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteConfig.company,
    alternateName: "TechForward LLC",
    url: siteUrl,
    logo: `${siteUrl}/img/logo.png`, // public/img/logo.png を配置してください
    description: 'TechForwardは中小企業・個人事業主向けのシステム開発・ITコンサルティング・技術顧問サービスを提供します。業務効率化、DX推進、データ活用をサポートします。',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: siteConfig.email,
        contactType: 'customer support', // または 'sales', 'technical support' など
        areaServed: 'JP', // 日本国内
        availableLanguage: ['Japanese', 'English'],
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '名駅4丁目24番5号第2森ビル401', // 後ほど市区町村以降の住所に更新してください
      addressLocality: '名古屋市中村区', // 例: 豊橋市 (ユーザー情報に合わせてください)
      addressRegion: '愛知県', // 例: 愛知県 (ユーザー情報に合わせてください)
      postalCode: '450-0002', // 後ほど郵便番号に更新してください
      addressCountry: 'JP',
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.twitter,
    ],
  };

  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="font-inter bg-gray-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300 pt-24">
        {children}
      </body>
    </html>
  );
}