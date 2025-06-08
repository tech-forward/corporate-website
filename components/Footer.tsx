// components/Footer.tsx
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

const Footer = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {siteConfig.company}. All Rights Reserved.
          </p>
          <nav className="flex space-x-4">
            <Link href="/privacy-policy" className="text-sm hover:text-slate-900 transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/security-policy" className="text-sm hover:text-slate-900 transition-colors">
              情報セキュリティポリシー
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;