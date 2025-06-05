
export default function About(){
  return(
    <section id="about" className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">会社情報</h2>
      <p className="mb-4">TechForward合同会社は、AI とクラウド技術で中小企業の可能性を切り拓く DX パートナーです。<br></br>ソフトウェア開発と業務自動化の両軸で10年以上の実績を持ちます。</p>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>所在地:</strong> 愛知県豊橋市</li>
        <li><strong>設立:</strong> 2025年4月</li>
        <li><strong>主要技術：</strong>Python, TypeScript, Cloud Platforms, Container & CI/CD</li>
      </ul>
    </section>
  );
}
