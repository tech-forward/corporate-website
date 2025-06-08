// lib/siteConfig.ts の提案変更

export const siteConfig = {
  company: 'TechForward合同会社',
  companyEnglish: 'TechForward LLC',
  tagline: 'テクノロジーの力でビジネスを創造する',
  email: 'info@techforward.jp',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,

  // New properties
  logoPath: '/img/logo.png',
  defaultOgImagePath: '/img/og-image.png',

  founder: {
    name: '沼田 宏太',
    jobTitle: '代表社員 / エンジニア',
  },
  foundingDate: '2025-04-01', // YYYY-MM-DD形式

  address: {
    postalCode: '450-0002',
    prefecture: '愛知県',
    city: '名古屋市中村区',
    street: '名駅4丁目24番5号第2森ビル401',
    country: '日本',
  },

  // 主要な事業内容 (Aboutページの事業内容セクションやJSON-LDのknowsAboutのベースとして)
  mainBusinessActivities: [
    'システム開発・受託開発',
    'ITコンサルティング・DX支援',
    '技術顧問・継続サポート',
    'データ分析・BI導入支援',
  ],

  // サイト全体や会社を表す基本的な説明文
  siteDescription: 'TechForward合同会社は、システム開発、DX推進、ITコンサルティング、技術顧問サービスを通じて、お客様のビジネス成長を支援するIT企業です。',

  links: {
    github: 'https://github.com/techforward',
    twitter: 'https://twitter.com/techforward'
  },
  twitterHandle: '@techforward', // Twitterの@ユーザー名を追加
};