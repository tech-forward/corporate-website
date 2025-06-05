
'use client';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-white drop-shadow-lg">TechForward</a>
        <ul className="hidden md:flex space-x-8 text-white/90 text-sm font-medium">
          <li><a href="#services" className="hover:text-white">サービス</a></li>
          <li><a href="#cases" className="hover:text-white">事例</a></li>
          <li><a href="#technologies" className="hover:text-white">技術</a></li>
          <li><a href="#about" className="hover:text-white">会社情報</a></li>
          <li><a href="#contact" className="hover:text-white">お問い合わせ</a></li>
        </ul>
        {/* mobile toggle placeholder */}
      </nav>
    </header>
  );
}
