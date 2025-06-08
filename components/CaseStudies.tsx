const cases = [
  {company:'製造業', summary:'Excelでの在庫管理をGoogle Apps Scriptで自動化。発注忘れによる欠品が月3件からゼロに。'},
  {company:'個人事業主', summary:'顧客管理システム導入で請求書作成が半日作業から30分に短縮。未回収売掛金も大幅減少。'},
  {company:'小売チェーン', summary:'店舗売上データの手動集計作業を自動化。本部への日次報告時間を2時間から15分に短縮。'},
  {company:'IT企業', summary:'複数の外部APIを統合したシステムで営業データの一元管理を実現。見積作成時間を半減。'}
];
export default function CaseStudies(){
  return(
    <section id="cases" className="bg-slate-100 dark:bg-slate-800 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">導入事例</h2>
        <div className="grid lg:grid-cols-4 gap-10">
          {cases.map((c,i)=>(
            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{c.company}</h3>
              <p className="text-sm mb-4">{c.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
