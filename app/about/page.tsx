import Header from '../../components/Header';
import Technologies from '../../components/Technologies';
import About from '../../components/About';
import Philosophy from '../../components/Philosophy';
import type { Metadata } from 'next'; 
import { siteConfig } from '@/lib/siteConfig'; 

export const metadata: Metadata = {
  title: `私たちについて | ${siteConfig.company}`,
  description: `TechForward合同会社の会社概要ページです。${siteConfig.company}はシステム開発、DX推進、ITコンサルティング、技術顧問サービスを通じて、お客様のビジネス成長を支援します。代表挨拶、事業内容、開発体制、所在地などをご紹介します。`,
  openGraph: {
    title: `私たちについて | ${siteConfig.company}`,
    description: `TechForward合同会社の会社概要ページです。${siteConfig.company}はシステム開発、DX推進、ITコンサルティング、技術顧問サービスを通じて、お客様のビジネス成長を支援します。代表挨拶、事業内容、開発体制、所在地などをご紹介します。`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },
  twitter: {
    title: `私たちについて | ${siteConfig.company}`,
    description: `TechForward合同会社の会社概要ページです。${siteConfig.company}はシステム開発、DX推進、ITコンサルティング、技術顧問サービスを通じて、お客様のビジネス成長を支援します。代表挨拶、事業内容、開発体制、所在地などをご紹介します。`,
  },
};

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const aboutPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `私たちについて - ${siteConfig.company}`,
    description: `TechForward合同会社の会社概要、事業内容、代表者情報などをご紹介します。`,
    url: `${siteUrl}/about`,
    mainEntity: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`, 
      name: siteConfig.company,
      alternateName: 'TechForward LLC',
      description: 'システム開発、DX推進、ITコンサルティング、技術顧問サービスを提供するIT企業です。',
      url: siteUrl,
      logo: `${siteUrl}/img/logo.png`,
      founder: {
        '@type': 'Person',
        name: '沼田 宏太',
        jobTitle: '代表社員 / エンジニア',
      },
      foundingDate: '2025-04-01', 
      knowsAbout: [
        'システム開発',
        'デジタルトランスフォーメーション (DX)',
        'ITコンサルティング',
        '技術顧問',
        'Python',
        'TypeScript',
        'Google Apps Script',
        'クラウドコンピューティング',
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              私たちについて
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              システム開発・DX推進・技術顧問を通じて、お客様のビジネス成長を支援します
            </p>
          </div>
        </section>
        <About />
        <Technologies />
        <Philosophy />
        
        {/* 代表紹介セクション */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">代表挨拶</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                テクノロジーの力で、お客様と共に新しい価値を創造していきます
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">沼</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">沼田 宏太</h3>
                    <p className="text-blue-600 mb-4 text-lg">代表社員 / エンジニア</p>
                    <p className="text-slate-600 leading-relaxed">
                      システム開発とITコンサルティングの分野で豊富な経験を持ち、中小企業様のDX推進をサポートしてきました。
                      Python、TypeScript、クラウド技術などの最新技術を駆使しながらも、お客様の事業成長を第一に考えたソリューション提供を心がけています。
                      一社一社のお客様と深く向き合い、実用的で持続可能なITソリューションをお届けします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* パートナーネットワーク */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">開発体制</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                各分野の専門メンバーとの連携により、幅広いITニーズにお応えします
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">シ</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">システム開発者</h3>
                <p className="text-slate-600 text-sm">Python・TypeScript・クラウド技術の専門チーム</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-xl">フ</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">フロントエンド開発者</h3>
                <p className="text-slate-600 text-sm">Webアプリケーション・UI開発のエキスパート</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl">デ</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">データアナリスト</h3>
                <p className="text-slate-600 text-sm">BI・データ分析・業務改善の専門家</p>
              </div>
            </div>
          </div>
        </section>

        {/* 会社情報 */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">会社情報</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">商号</h3>
                    <p className="text-slate-600">TechForward合同会社</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">代表者</h3>
                    <p className="text-slate-600">代表社員 沼田 宏太</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">設立</h3>
                    <p className="text-slate-600">2025年4月</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">事業内容</h3>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>・システム開発・受託開発</li>
                      <li>・ITコンサルティング・DX支援</li>
                      <li>・技術顧問・継続サポート</li>
                      <li>・データ分析・BI導入支援</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">所在地</h3>
                    <p className="text-slate-600">〒450-0002 愛知県名古屋市中村区名駅4丁目24番5号第2森ビル401</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-900 text-slate-400 text-center py-6">
        &copy; 2025 TechForward LLC All rights reserved.
      </footer>
    </>
  );
}
