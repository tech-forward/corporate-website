import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              詳細情報
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/case-studies" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">導入事例</h3>
                <p className="text-slate-600">お客様の活用例をご紹介</p>
              </Link>
              <Link href="/portfolio" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">開発実績</h3>
                <p className="text-slate-600">過去のプロジェクト事例</p>
              </Link>
              <Link href="/about" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">会社情報</h3>
                <p className="text-slate-600">技術チームとサービス体制</p>
              </Link>
              <Link href="/contact" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">お問い合わせ</h3>
                <p className="text-slate-600">無料相談承ります</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-900 text-slate-400 text-center py-6">
        2025 TechForward LLC All rights reserved.
      </footer>
    </>
  );
}
