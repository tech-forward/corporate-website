import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-[url('/img/texture-cubes.png')] opacity-20"></div>
      <div className="relative z-10 flex flex-col items-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-2xl">
          テクノロジーの力で<br className="hidden md:inline"/>ビジネスを創造する
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-3xl text-center">
          TechForwardは、最先端技術を駆使して業務効率化と新しい価値創造を実現。<br className="hidden md:inline"/>生成AIとクラウドで中小企業・個人事業主の持続的成長をサポートします。
        </p>
        <Link href="/contact" className="btn-gradient px-8">無料相談申込み</Link>
      </div>
    </section>
  );
}
