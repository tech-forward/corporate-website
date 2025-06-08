export default function About(){
  return(
    <section id="about" className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">会社情報</h2>
      <p className="mb-4">TechForward合同会社は、中小企業のシステム開発・DX推進・技術顧問を行うIT企業です。<br></br>実務経験豊富なエンジニアが、お客様の課題に合わせた最適なソリューションを提供します。</p>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>所在地:</strong> 〒450-0002 愛知県名古屋市中村区名駅4丁目24番5号第2森ビル401</li>
        <li><strong>設立:</strong> 2025年4月</li>
        <li><strong>主要技術：</strong>Python, TypeScript, Google Apps Script, クラウドプラットフォーム, CI/CD</li>
      </ul>
    </section>
  );
}
