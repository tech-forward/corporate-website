const services = [
  {title:'システム開発', text:'業務システム・Webアプリを要件に合わせて開発。設計から運用まで一貫対応。'},
  {title:'SaaS開発', text:'自社SaaS・ツール開発とサービス運営。継続的な機能改善を実施。'},
  {title:'技術顧問', text:'システム設計・開発体制構築・技術選定のアドバイザリーサービス。'},
  {title:'ITコンサルティング', text:'業務分析からシステム導入・運用改善まで、実務に即したDX支援。'}
];
export default function Services(){
  return(
    <section id="services" className="max-w-7xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-16">サービス内容</h2>
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
