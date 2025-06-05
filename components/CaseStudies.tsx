
const cases = [
  {company:'製造業 A 社', summary:'社内規格書 3 万ページを構造化し、AI 検索で調査時間を 90% 削減。'},
  {company:'人材サービス B 社', summary:'応募者と自動対話するチャットボットで面談設定率を 2.3 倍に向上。'},
  {company:'物流 C 社', summary:'配送ルート最適化で燃料コストを 12% 削減。'}
];
export default function CaseStudies(){
  return(
    <section id="cases" className="bg-slate-100 dark:bg-slate-800 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">導入事例</h2>
        <div className="grid lg:grid-cols-3 gap-10">
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
