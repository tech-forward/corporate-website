import Header from '@/components/Header';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'セキュリティポリシー',
  description: `${siteConfig.company}の情報セキュリティに関する基本方針です。`,
  path: '/security-policy',
  noindex: true,
});

export default function SecurityPolicyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
          情報セキュリティポリシー
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">
            TechForward合同会社（以下、「当社」といいます。）は、お客様からお預かりする情報資産および当社の情報資産をあらゆる脅威から保護し、お客様ならびに社会の信頼に応えるため、情報セキュリティに関する基本方針を以下のとおり定め、これを推進し、維持することを宣言します。
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">1. 情報セキュリティ管理体制の構築</h2>
          <p className="mb-4">
            当社は、情報セキュリティ管理体制を確立し、情報セキュリティに関する責任者を任命するとともに、情報資産の適切な管理に取り組みます。
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">2. 情報資産の保護</h2>
          <p className="mb-4">
            当社は、保有するすべての重要な情報資産（個人情報、顧客情報、技術情報、営業情報など）について、機密性、完全性、可用性を確保するための適切な物理的、技術的、組織的対策を講じ、不正アクセス、紛失、破壊、改ざん、漏洩などのリスクから保護します。
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">3. 法令および契約上の要求事項の遵守</h2>
          <p className="mb-4">
            当社は、情報セキュリティに関する法令、規制、規範、およびお客様との契約上のセキュリティ要求事項を遵守します。
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">4. 従業員の教育・啓発</h2>
          <p className="mb-4">
            当社は、全従業員に対し、情報セキュリティの重要性を認識させ、情報資産の適正な利用を行うために必要な教育・啓発を継続的に実施します。
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">5. 技術的セキュリティ対策</h2>
          <p className="mb-4">
            当社は、情報システムおよび情報通信ネットワークの安全性を確保するため、アクセス制御、不正アクセス防止、ウイルス対策、データの暗号化、バックアップ等の技術的対策を講じます。特に、SaaS製品の開発・提供においては、セキュアコーディング、脆弱性診断、インフラストラクチャの堅牢化に努めます。
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">6. 委託先の管理</h2>
          <p className="mb-4">
            当社が業務を外部に委託する場合、委託先としての適格性を十分に審査し、当社と同等以上のセキュリティレベルを維持するよう契約等により求め、定期的に監査を行います。
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">7. 情報セキュリティインシデントへの対応</h2>
          <p className="mb-4">
            当社は、情報セキュリティに関するインシデントが発生した場合、またはその疑いが生じた場合に、迅速かつ適切に対応し、被害の拡大防止、原因究明、再発防止に努めます。
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">8. 継続的な改善</h2>
          <p className="mb-4">
            当社は、本ポリシーおよび関連規程、管理体制の評価と見直しを定期的に行い、情報セキュリティの継続的な改善に努めます。
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">9. お問い合わせ窓口</h2>
          <p className="mb-4">
            本ポリシーに関するお問い合わせは、当社のプライバシーポリシーに記載のお問い合わせ窓口までお願いいたします。
          </p>

          <p className="mt-8 text-right">
            制定日: 2025年6月9日
          </p>
        </div>
      </main>
      {/* フッターコンポーネントをここに追加 */}
    </>
  );
}