
import '../styles/globals.css';
import { siteConfig } from '../lib/siteConfig';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${siteConfig.company} | 次世代AIとクラウドでDXを加速`,
  description: 'TechForwardは先進AIとクラウド技術で中小企業のDXを伴走支援するパートナーです',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/favicon-180x180.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="font-inter bg-gray-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300 pt-24">
        {children}
      </body>
    </html>
  );
}
