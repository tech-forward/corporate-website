
const services = [
  {title:'受託開発', text:'業務システム・Webアプリを短納期で開発。要件定義から運用までワンストップ。'},
  {title:'SaaS開発', text:'仮説検証に最適なMVPを最速でリリースし、継続的にフィードバックを反映。'},
  {title:'技術顧問 / CTO代行', text:'アーキテクチャ設計・コードレビュー・人材育成を伴走支援。'},
  {title:'ITコンサルティング', text:'業務プロセス分析からDXロードマップ策定、クラウド移行まで包括支援。'}
];
export default function Services(){
  return(
    <section id="services" className="max-w-7xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-16">事業内容</h2>
      <div className="grid lg:grid-cols-4 gap-10">
        {services.map((s,i)=>(
          <div key={i} className="glass p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
