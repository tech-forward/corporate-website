import Header from '../../components/Header';
import CaseStudies from '../../components/CaseStudies';
import type { Metadata } from 'next'; 
import { siteConfig } from '@/lib/siteConfig'; 
import { generatePageMetadata } from '@/lib/utils'; 

export const metadata: Metadata = generatePageMetadata({
  title: '実績・事例紹介',
  description: 'TechForwardがこれまでに手掛けたシステム開発、DX支援、ITコンサルティングの成功事例をご紹介します。様々な業界のお客様の課題解決とビジネス成長を支援してきた実績をご覧ください。',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  const caseStudiesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article', 
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.siteUrl}/case-studies`,
    },
    headline: `実績・事例紹介 - ${siteConfig.company}`,
    description: 'TechForwardがこれまでに手掛けたシステム開発、DX支援、ITコンサルティングの成功事例をご紹介。様々な業界のお客様の課題解決とビジネス成長を支援してきた実績をご覧ください。',
    image: `${siteConfig.siteUrl}/img/og-image.png`, 
    author: {
      '@type': 'Organization',
      name: siteConfig.company,
      url: siteConfig.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.company,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/img/logo.png`,
      },
    },
    datePublished: '2023-01-01T08:00:00+09:00', 
    dateModified: new Date().toISOString(), 
    articleSection: [
      '中小企業の業務自動化',
      '個人事業主の顧客管理システム構築',
      'スタートアップのMVP開発支援',
    ],
    keywords: '事例紹介, 導入事例, システム開発実績, DX支援事例, ITコンサルティング実績',
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person', 
          name: '製造業 A社様',
        },
        reviewBody: 'Google Apps Scriptでの業務自動化により、月40時間の作業が5時間に短縮されました。コストパフォーマンスが非常に高く、満足しています。',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person', 
          name: 'IT企業 B社様',
        },
        reviewBody: '技術顧問として継続的にサポートいただき、開発チームの技術力が大幅に向上しました。的確なアドバイスをいただけます。',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesJsonLd) }}
      />
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              実績・事例紹介
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              様々な業界でのシステム開発・DX支援により、お客様のビジネス成長を支援した実績をご紹介します
            </p>
          </div>
        </section>
        <CaseStudies />
        
        {/* 実績概要 */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">実績概要</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                IT支援サービスを通じて、多くのお客様のビジネス成長をサポートしています
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-slate-600 font-medium">プロジェクト実績</p>
                <p className="text-sm text-slate-500 mt-1">システム開発・顧問</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="text-3xl font-bold text-green-600 mb-2">5社</div>
                <p className="text-slate-600 font-medium">技術顧問契約</p>
                <p className="text-sm text-slate-500 mt-1">継続サポート中</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-slate-600 font-medium">顧客満足度</p>
                <p className="text-sm text-slate-500 mt-1">品質重視の開発</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">3年</div>
                <p className="text-slate-600 font-medium">平均サポート期間</p>
                <p className="text-sm text-slate-500 mt-1">長期パートナーシップ</p>
              </div>
            </div>
          </div>
        </section>

        {/* サービス別実績 */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              サービス別実績
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white border-2 border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">シ</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">システム開発</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <div>・業務自動化ツール</div>
                  <div>・Webアプリケーション</div>
                  <div>・API連携システム</div>
                  <div>・データ管理システム</div>
                </div>
              </div>
              <div className="bg-white border-2 border-green-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">技‍</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">技術顧問</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <div>・技術選定支援</div>
                  <div>・コードレビュー</div>
                  <div>・開発体制強化</div>
                  <div>・月額継続サポート</div>
                </div>
              </div>
              <div className="bg-white border-2 border-purple-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">IT</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">ITコンサルティング</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <div>・DX戦略策定</div>
                  <div>・システム企画</div>
                  <div>・業務フロー改善</div>
                  <div>・技術教育支援</div>
                </div>
              </div>
              <div className="bg-white border-2 border-orange-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">保</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">保守運用</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <div>・システムメンテナンス</div>
                  <div>・継続改善</div>
                  <div>・運用サポート</div>
                  <div>・障害対応</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 導入業界・効果 */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              導入業界・効果例
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-lg">社</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">中小企業</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>・業務自動化による工数削減</li>
                  <li>・Google Apps Script活用</li>
                  <li>・データ管理システム構築</li>
                  <li>・予算に応じたスモールスタート</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-lg">個</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">個人事業主</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>・顧客管理システム構築</li>
                  <li>・請求・売上管理自動化</li>
                  <li>・Webサイト・ポートフォリオ作成</li>
                  <li>・低コストでの導入支援</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-lg">ス</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">スタートアップ</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>・MVP開発・プロトタイプ作成</li>
                  <li>・クラウドインフラ構築</li>
                  <li>・技術選定・アーキテクチャ設計</li>
                  <li>・開発体制構築支援</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* お客様の声 */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              お客様の声
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <div className="text-slate-700 mb-4 italic text-lg leading-relaxed">
                  "Google Apps Scriptでの業務自動化により、月40時間の作業が5時間に短縮されました。コストパフォーマンスが非常に高く、満足しています。"
                </div>
                <div className="text-sm text-slate-600 font-medium">- 製造業 A社様</div>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <div className="text-slate-700 mb-4 italic text-lg leading-relaxed">
                  "技術顧問として継続的にサポートいただき、開発チームの技術力が大幅に向上しました。的確なアドバイスをいただけます。"
                </div>
                <div className="text-sm text-slate-600 font-medium">- IT企業 B社様</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
