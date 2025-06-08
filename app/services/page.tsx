import Header from '../../components/Header';
import Services from '../../components/Services';
import type { Metadata } from 'next'; 
import { siteConfig } from '@/lib/siteConfig'; 
import { generatePageMetadata } from '@/lib/utils'; 

export const metadata: Metadata = generatePageMetadata({
  title: '提供サービス',
  description: 'TechForwardが提供するITソリューション一覧。システム開発、SaaS開発、ITコンサルティング、技術顧問など、お客様のビジネス課題を解決するための多様なサービスをご紹介します。',
  path: '/services',
});

export default function ServicesPage() {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'システム開発',
          description: 'Webアプリケーション開発、業務システム構築、AI活用、業務自動化など、お客様のニーズに合わせたカスタムシステムを開発します。',
          url: `${siteConfig.siteUrl}/services#system-development`,
          provider: {
            '@type': 'Organization',
            name: siteConfig.company,
            url: siteConfig.siteUrl,
          },
          serviceType: 'SoftwareDevelopment',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'SaaS開発',
          description: '自社SaaS型ソリューションの開発・提供。汎用業務管理ツール、顧客管理システムなど、スモールスタートから大規模運用まで対応可能なSaaSを構築します。',
          url: `${siteConfig.siteUrl}/services#saas-development`,
          provider: {
            '@type': 'Organization',
            name: siteConfig.company,
            url: siteConfig.siteUrl,
          },
          // serviceType: 'SaaS' // More specific if available, or general SoftwareDevelopment
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'ITコンサルティング',
          description: 'DX推進支援、業務フロー改善、クラウド移行、データ活用戦略、生成AI導入支援など、お客様のビジネス変革をITの側面からトータルでサポートします。',
          url: `${siteConfig.siteUrl}/services#it-consulting`,
          provider: {
            '@type': 'Organization',
            name: siteConfig.company,
            url: siteConfig.siteUrl,
          },
          serviceType: 'ConsultingService',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: '技術顧問',
          description: '月額顧問サービスとして、技術選定、アーキテクチャレビュー、コードレビュー、開発チーム強化、技術教育などを提供し、お客様の技術力向上を支援します。',
          url: `${siteConfig.siteUrl}/services#technical-advisory`,
          provider: {
            '@type': 'Organization',
            name: siteConfig.company,
            url: siteConfig.siteUrl,
          },
          serviceType: 'TechnicalAdvisoryService', // Custom or a broader category if this doesn't fit well
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              提供サービス
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              システム開発からDX推進まで、中小企業の成長を支える幅広いITソリューションを提供します
            </p>
          </div>
        </section>
        <Services />
        
        {/* メインサービス詳細 */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              主なサービス
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* IDを追加 */}
              <div id="system-development" className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">シ</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">システム開発</h3>
                <ul className="text-slate-600 space-y-2 text-sm">
                  <li>・Webアプリケーション開発</li>
                  <li>・業務システム構築</li>
                  <li>・チャットボット・生成AI活用</li>
                  <li>・業務自動化ツール</li>
                  <li>・API連携・データ統合</li>
                </ul>
                <div className="mt-4 text-xs text-blue-600">
                  <strong>技術スタック：</strong> Python, TypeScript, Google Apps Script
                </div>
              </div>
              
              {/* IDを追加 */}
              <div id="saas-development" className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">S</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">SaaS開発</h3>
                <ul className="text-slate-600 space-y-2 text-sm">
                  <li>・自社SaaS型ソリューション</li>
                  <li>・汎用業務管理ツール</li>
                  <li>・顧客管理システム</li>
                  <li>・スケジュール調整ツール</li>
                  <li>・問い合わせ自動化システム</li>
                </ul>
                <div className="mt-4 text-xs text-green-600">
                  <strong>特徴：</strong> スモールスタートから大規模運用まで対応
                </div>
              </div>
              
              {/* IDを追加 */}
              <div id="it-consulting" className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">IT</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">ITコンサルティング</h3>
                <ul className="text-slate-600 space-y-2 text-sm">
                  <li>・DX推進支援</li>
                  <li>・業務フロー可視化・改善</li>
                  <li>・クラウド移行支援</li>
                  <li>・データ活用戦略</li>
                  <li>・生成AI導入支援</li>
                </ul>
                <div className="mt-4 text-xs text-purple-600">
                  <strong>アプローチ：</strong> 課題抽出から運用まで一貫サポート
                </div>
              </div>
              
              {/* IDを追加 */}
              <div id="technical-advisory" className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">技</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">技術顧問</h3>
                <ul className="text-slate-600 space-y-2 text-sm">
                  <li>・月額顧問サービス</li>
                  <li>・技術選定・アーキテクチャレビュー</li>
                  <li>・コードレビュー</li>
                  <li>・開発チーム強化支援</li>
                  <li>・技術教育・研修</li>
                </ul>
                <div className="mt-4 text-xs text-orange-600">
                  <strong>対応技術：</strong> Python, SQL, AWS/GCP, Tableau等
                </div>
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
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-lg">シ</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">システム開発</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>・業務システム30件以上</li>
                  <li>・Webアプリ20件以上</li>
                  <li>・自動化ツール50件以上</li>
                  <li>・API連携15件以上</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-lg">S</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">SaaS開発</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>・自社プロダクト5件</li>
                  <li>・顧客管理ツール8件</li>
                  <li>・業務管理システム12件</li>
                  <li>・月次売上500万円</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-lg">IT</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">ITコンサルティング</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>・DX支援25社</li>
                  <li>・システム選定30件</li>
                  <li>・業務改善提案40件</li>
                  <li>・コスト削減平均30%</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-lg">技</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">技術顧問</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>・顧問契約企業15社</li>
                  <li>・開発体制構築20件</li>
                  <li>・技術選定サポート35件</li>
                  <li>・継続率95%以上</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 技術・ツール */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              対応技術・ツール
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">開発技術</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="bg-white p-3 rounded-lg shadow-sm">Python（5年）</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">Google Apps Script（5年）</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">TypeScript/Node.js</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">SQL（5年）</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">Flask/Django</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">クラウド・インフラ</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="bg-white p-3 rounded-lg shadow-sm">AWS（3年）</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">GCP（3年）</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">Lambda/Cloud Functions</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">サーバレスアーキテクチャ</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">データ分析・BI</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="bg-white p-3 rounded-lg shadow-sm">Tableau（5年）</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">Looker Studio</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">Power BI</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">データウェアハウス設計</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 開発フロー */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              開発フロー
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">要件定義</h4>
                  <p className="text-slate-600 text-xs">
                    業務フローの可視化と改善ポイントの特定
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">見積・提案</h4>
                  <p className="text-slate-600 text-xs">
                    工数・期間・費用算出
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">設計・開発</h4>
                  <p className="text-slate-600 text-xs">
                    専門メンバーによる実装
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">テスト</h4>
                  <p className="text-slate-600 text-xs">
                    品質確認・受入テスト
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">納品・運用</h4>
                  <p className="text-slate-600 text-xs">
                    継続サポート体制
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* フッター */}
        <footer className="bg-slate-50 text-slate-600 text-center py-6">
          &copy; 2025 TechForward LLC All rights reserved.
        </footer>
      </main>
    </>
  );
}
