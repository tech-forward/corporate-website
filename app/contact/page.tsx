import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              システム開発・DX推進のご相談から技術顧問まで、お気軽にお問い合わせください
            </p>
          </div>
        </section>
        
        {/* サービス相談の流れ */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">ご相談の流れ</h2>
              <p className="text-slate-600">お客様のニーズに合わせて、最適なサポートをご提案いたします</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">初回ヒアリング</h3>
                <p className="text-slate-600 text-sm">課題・要件の詳細確認（30分・無料）</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">現状分析</h3>
                <p className="text-slate-600 text-sm">システム・業務フローの詳細分析</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-600 font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">提案・見積</h3>
                <p className="text-slate-600 text-sm">最適なソリューションと費用をご提案</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">プロジェクト開始</h3>
                <p className="text-slate-600 text-sm">開発・導入・継続サポート</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <ContactForm />
        </section>
        
        <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  よくあるご相談
                </h2>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <h4 className="font-semibold text-slate-900 mb-2">「業務を自動化したい」</h4>
                    <p className="text-slate-600 text-sm">Google Apps Script等を活用した業務効率化をご提案します</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                    <h4 className="font-semibold text-slate-900 mb-2">「Webシステムを作りたい」</h4>
                    <p className="text-slate-600 text-sm">予算・要件に応じた最適な技術スタックで開発いたします</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                    <h4 className="font-semibold text-slate-900 mb-2">「技術的なアドバイスが欲しい」</h4>
                    <p className="text-slate-600 text-sm">月額顧問契約で継続的な技術支援をご提供します</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                    <h4 className="font-semibold text-slate-900 mb-2">「データを活用したい」</h4>
                    <p className="text-slate-600 text-sm">BIツール導入・ダッシュボード構築をサポートします</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  お問い合わせ情報
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-indigo-600 text-sm">📧</span>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">メール</div>
                      <div className="text-slate-600">info@techforward.com</div>
                    </div>
                  </div>
                  {/* TODO: 電話番号を設定する
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 text-sm">📞</span>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">電話</div>
                      <div className="text-slate-600">03-1234-5678</div>
                    </div>
                  </div>
                  */}
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-pink-600 text-sm">📍</span>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">所在地</div>
                      <div className="text-slate-600">〒450-0002 愛知県名古屋市中村区名駅4丁目24番5号第2森ビル401</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-xl text-white">
                  <h3 className="text-lg font-semibold mb-2">無料相談実施中</h3>
                  <p className="text-sm text-indigo-100 mb-4">
                    システム開発・DX推進・技術顧問など、まずは30分の無料相談からお気軽にどうぞ
                  </p>
                  <div className="text-sm">
                    <div>📅 平日 9:00 - 18:00</div>
                    <div>💻 オンライン対応可能</div>
                    <div>🏢 対面での打ち合わせも可能</div>
                  </div>
                </div>

                {/* 対応可能サービス */}
                <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">対応可能サービス</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                    <div>・システム開発</div>
                    <div>・業務自動化</div>
                    <div>・技術顧問</div>
                    <div>・クラウド移行</div>
                    <div>・データ分析</div>
                    <div>・DX推進支援</div>
                    <div>・生成AI活用</div>
                    <div>・保守・運用</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-900 text-slate-400 text-center py-6">
        © 2025 TechForward LLC All rights reserved.
      </footer>
    </>
  );
}
