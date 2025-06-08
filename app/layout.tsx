import '../styles/globals.css';
import { siteConfig } from '../lib/siteConfig';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl as string),
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
    url: siteConfig.siteUrl,
    title: `${siteConfig.company} | システム開発・技術顧問・ITコンサルティング`,
    description: 'TechForwardは中小企業・個人事業主向けのシステム開発・ITコンサルティング・技術顧問サービスを提供します。業務効率化、DX推進、データ活用をサポートします。',
    siteName: siteConfig.company,
    images: [
      {
        url: `${siteConfig.siteUrl}/img/og-image.png`, 
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
    site: siteConfig.links.twitter, 
    creator: '@techforward', 
    images: [`${siteConfig.siteUrl}/img/og-image.png`], 
  },
  icons: {
    icon: '/img/favicon-32x32.png', 
    shortcut: '/img/favicon.ico', 
    apple: '/img/apple-touch-icon.png', 
    other: [
      {
        rel: 'icon',
        url: '/img/favicon-16x16.png', 
        sizes: '16x16',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.company,
    alternateName: "TechForward LLC",
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/img/logo.png`, 
    description: 'TechForwardは中小企業・個人事業主向けのシステム開発・ITコンサルティング・技術顧問サービスを提供します。業務効率化、DX推進、データ活用をサポートします。',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: siteConfig.email,
        contactType: 'customer support', 
        areaServed: 'JP', 
        availableLanguage: ['Japanese', 'English'],
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '名駅4丁目24番5号第2森ビル401', 
      addressLocality: '名古屋市中村区', 
      addressRegion: '愛知県', 
      postalCode: '450-0002', 
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
      <body className="font-inter bg-gray-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300 pt-24 flex flex-col min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}