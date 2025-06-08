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
        url: `${siteUrl}/og-image.png`, // public/og-image.png を配置してください
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
    images: [`${siteUrl}/og-image.png`], // OGP画像と同じものを指定
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
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteConfig.company,
              url: siteUrl,
              logo: `${siteUrl}/logo.png`, // public/logo.png を配置してください
              description: 'TechForwardは中小企業・個人事業主向けのシステム開発・ITコンサルティング・技術顧問サービスを提供します。',
            }),
          }}
        />
      </head>
      <body className="font-inter bg-gray-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300 pt-24">
        {children}
      </body>
    </html>
  );
}