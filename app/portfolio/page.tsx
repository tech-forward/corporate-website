import Header from '../../components/Header';

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              開発実績
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              これまでに手がけたシステム開発プロジェクトの一部をご紹介します
            </p>
          </div>
        </section>
        
        {/* 実績一覧 */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              主要プロジェクト
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* プロジェクト1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">業務自動化システム</h3>
                  <p className="text-blue-100 text-sm">中小企業 | Google Apps Script</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">プロジェクト概要</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      手作業で行っていた在庫管理・発注業務をGoogle Apps Scriptで自動化。月40時間の作業時間を5時間に短縮し、人的エラーも大幅に削減しました。
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">使用技術</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Google Apps Script</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Google Sheets</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Gmail API</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">開発期間</span>
                      <span className="text-slate-700 font-medium">2週間</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* プロジェクト2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">顧客管理Webアプリ</h3>
                  <p className="text-green-100 text-sm">個人事業主 | TypeScript + Python</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">プロジェクト概要</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      顧客情報管理・請求書生成・売上分析機能を備えたWebアプリケーション。スマートフォンからも利用可能なレスポンシブデザインで開発。
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">使用技術</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">TypeScript</span>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Python</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">FastAPI</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">PostgreSQL</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">開発期間</span>
                      <span className="text-slate-700 font-medium">1ヶ月</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* プロジェクト3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">データ分析ダッシュボード</h3>
                  <p className="text-purple-100 text-sm">小売業 | Python + BI</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">プロジェクト概要</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      売上データ・在庫データを自動集計し、Tableauでリアルタイムダッシュボードを構築。経営判断に必要な指標を可視化しました。
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">使用技術</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Python</span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Tableau</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">SQL</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">AWS</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">開発期間</span>
                      <span className="text-slate-700 font-medium">3週間</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* プロジェクト4 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">API連携システム</h3>
                  <p className="text-orange-100 text-sm">スタートアップ | Python + FastAPI</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">プロジェクト概要</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      外部サービスとの連携を行うAPIシステムを構築。決済・メール送信・在庫管理など複数のサービスを統合し、業務フローを自動化。
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">使用技術</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Python</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">FastAPI</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Docker</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">AWS</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">開発期間</span>
                      <span className="text-slate-700 font-medium">2ヶ月</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 技術スタック */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              対応可能技術
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 text-2xl font-bold">PY</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Python</h3>
                <p className="text-slate-600 text-sm">FastAPI, Django, データ処理</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl font-bold">TS</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">TypeScript</h3>
                <p className="text-slate-600 text-sm">React, Next.js, Node.js</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl font-bold">GS</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Google Apps Script</h3>
                <p className="text-slate-600 text-sm">業務自動化, Googleサービス連携</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">CL</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">クラウド</h3>
                <p className="text-slate-600 text-sm">AWS, GCP, Firebase</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl font-bold">DA</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">データ分析</h3>
                <p className="text-slate-600 text-sm">SQL, Tableau, Power BI</p>
              </div>
            </div>
          </div>
        </section>

        {/* 開発プロセス */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              開発プロセス
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">要件定義</h3>
                  <p className="text-slate-600 text-sm">お客様のニーズを詳細にヒアリング</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">設計・提案</h3>
                  <p className="text-slate-600 text-sm">最適なアーキテクチャを設計</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">開発・テスト</h3>
                  <p className="text-slate-600 text-sm">アジャイルで品質重視の開発</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">納品・保守</h3>
                  <p className="text-slate-600 text-sm">納品後の継続サポート</p>
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
