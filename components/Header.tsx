'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-slate-900/95 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-white">TechForward</Link>
        <ul className="hidden md:flex space-x-8 text-slate-200 text-sm font-medium">
          <li><Link href="/" className="hover:text-white transition-colors">ホーム</Link></li>
          <li><Link href="/services" className="hover:text-white transition-colors">サービス</Link></li>
          <li><Link href="/case-studies" className="hover:text-white transition-colors">事例</Link></li>
          <li><Link href="/portfolio" className="hover:text-white transition-colors">開発実績</Link></li>
          <li><Link href="/about" className="hover:text-white transition-colors">私たちについて</Link></li>
          <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
        </ul>
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-6 py-4 space-y-4">
            <Link href="/" className="block text-slate-200 hover:text-white transition-colors" onClick={() => setOpen(false)}>ホーム</Link>
            <Link href="/services" className="block text-slate-200 hover:text-white transition-colors" onClick={() => setOpen(false)}>サービス</Link>
            <Link href="/case-studies" className="block text-slate-200 hover:text-white transition-colors" onClick={() => setOpen(false)}>事例</Link>
            <Link href="/portfolio" className="block text-slate-200 hover:text-white transition-colors" onClick={() => setOpen(false)}>開発実績</Link>
            <Link href="/about" className="block text-slate-200 hover:text-white transition-colors" onClick={() => setOpen(false)}>私たちについて</Link>
            <Link href="/contact" className="block text-slate-200 hover:text-white transition-colors" onClick={() => setOpen(false)}>お問い合わせ</Link>
          </div>
        </div>
      )}
    </header>
  );
}
