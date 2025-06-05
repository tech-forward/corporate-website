
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-[url('/img/texture-cubes.png')] opacity-20"></div>
      <div className="relative z-10 flex flex-col items-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-2xl">
          先進AIとクラウドで<br className="hidden md:inline"/>あなたのDXを加速
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-3xl text-center">
          TechForwardは、中小企業の業務にフィットしたAI活用とクラウド設計で、<br className="hidden md:inline"/>コスト最適化と新たな価値創出を同時に実現します。
        </p>
        <a href="#contact" className="btn-gradient px-8">無料DX相談</a>
      </div>
    </section>
  );
}
