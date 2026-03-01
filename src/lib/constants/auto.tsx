import {
  HiOutlineShieldCheck,
  HiOutlineCurrencyYen,
  HiOutlineChat,
  HiOutlineTable,
  HiOutlineFolder,
  HiOutlineGlobe,
  HiOutlineCog,
  HiOutlineCode,
  HiOutlineSparkles,
} from 'react-icons/hi'
import type { Product, Guarantee, AutoNavItem, FAQ } from '@/types/auto'
import type { PortfolioWork } from '@/types'

export const AUTO_NAV_ITEMS: AutoNavItem[] = [
  { label: 'ホーム', href: '/' },
  { label: 'AI開発サービス', href: '/#services' },
  { label: '実績・YouTube', href: '/#portfolio' },
  { label: 'ブログ', href: '/blog' },
  { label: 'よくある質問', href: '/#faq' },
  { label: 'お問い合わせ', href: '/#contact' },
]

export const PORTFOLIO_WORKS: PortfolioWork[] = [
  {
    id: 'shorts-1',
    title: 'AI・ツール紹介',
    description: 'Excel自動化ツール',
    thumbnail: 'https://img.youtube.com/vi/-J4RdvGXYWo/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/shorts/-J4RdvGXYWo',
  },
  {
    id: 'shorts-0',
    title: 'AI・ツール紹介',
    description: 'PDF請求書作成ツール',
    thumbnail: 'https://img.youtube.com/vi/3WXjrX59aMg/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/shorts/3WXjrX59aMg',
  },
  {
    id: 'shorts-2',
    title: 'AI・ツール紹介',
    description: 'インターネット自動入力ツール',
    thumbnail: 'https://img.youtube.com/vi/F74evUgaykQ/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/shorts/F74evUgaykQ',
  },
]

// AI開発サービス（メインページ用）
export interface AIService {
  id: string
  name: string
  description: string
  features: string[]
  price: string
  priceNote: string
  icon: React.ReactNode
}

export const AI_SERVICES: AIService[] = [
  {
    id: 'it-consulting',
    name: 'ITコンサルティング',
    description: '業務効率化の提案から、業務効率化ツールの作成まで一貫してサポートします',
    features: [
      '業務効率化の提案・改善プラン策定',
      '業務効率化ツールの作成',
      'AIを活用した開発支援',
      '継続的なサポート',
    ],
    price: '月額 ¥100,000',
    priceNote: '相談・見積無料',
    icon: <HiOutlineSparkles className="text-4xl" />,
  },
]

export const PRODUCTS: Product[] = [
  {
    id: 'excel-auto-1',
    slug: 'excel-data-processor',
    name: 'Excel自動データ処理ツール',
    description: '複数のExcelファイルからデータを自動抽出・集計',
    price: 30000,
    features: [
      '複数ファイル一括処理',
      '自動集計レポート生成',
      'スケジュール実行対応',
    ],
    category: 'excel',
    comingSoon: false,
  },
  {
    id: 'file-auto-1',
    slug: 'file-organizer',
    name: 'ファイル自動整理ツール',
    description: '指定ルールでファイルを自動分類・リネーム',
    price: 30000,
    features: [
      'ルールベース自動分類',
      '日付・連番リネーム',
      'フォルダ監視モード',
    ],
    category: 'file',
    comingSoon: false,
  },
  {
    id: 'web-auto-1',
    slug: 'web-data-collector',
    name: 'Webデータ収集ツール',
    description: 'Webサイトからデータを自動収集・Excel出力',
    price: 50000,
    features: [
      '複数サイト対応',
      '定期実行機能',
      'Excel/CSV出力',
    ],
    category: 'web',
    comingSoon: false,
  },
  {
    id: 'custom-1',
    slug: 'custom-development',
    name: 'カスタム開発',
    description: 'お客様の業務に合わせたオーダーメイドツール',
    price: 50000,
    features: [
      '要件ヒアリング',
      '専用ツール開発',
      'アフターサポート',
    ],
    category: 'custom',
    comingSoon: false,
  },
]

export const GUARANTEES: Guarantee[] = [
  {
    title: '相談・見積無料',
    description: 'ご要望をヒアリングし、最適なツールをご提案します。お見積りまで完全無料です。',
    icon: <HiOutlineChat className="text-4xl text-auto-primary" />,
  },
  {
    title: '全額返金保証',
    description: 'ご購入後30日以内であれば、理由を問わず全額返金いたします。安心してお試しください。',
    icon: <HiOutlineCurrencyYen className="text-4xl text-auto-primary" />,
  },
  {
    title: '動作保証',
    description: 'お使いのWindows環境で動作しない場合は、調整対応または返金いたします。',
    icon: <HiOutlineShieldCheck className="text-4xl text-auto-primary" />,
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: 'excel',
    name: 'Excel自動化',
    icon: <HiOutlineTable className="text-3xl" />,
  },
  {
    id: 'file',
    name: 'ファイル管理',
    icon: <HiOutlineFolder className="text-3xl" />,
  },
  {
    id: 'web',
    name: 'Web自動化',
    icon: <HiOutlineGlobe className="text-3xl" />,
  },
  {
    id: 'custom',
    name: 'カスタム開発',
    icon: <HiOutlineCog className="text-3xl" />,
  },
]

export const FAQS: FAQ[] = [
  {
    question: 'Claude Codeとは何ですか？',
    answer: 'Claude CodeはAnthropic社が提供するAIプログラミングツールです。自然言語で指示するだけで、プログラムを自動生成できます。プログラミング未経験の方でもアプリ開発が可能になります。',
  },
  {
    question: 'バイブコーディングとは何ですか？',
    answer: 'AIに自然言語で指示してプログラムを作成する新しい開発手法です。従来のプログラミング知識がなくても、アイデアをソフトウェアに変換できます。',
  },
  {
    question: 'ITコンサルティングの流れは？',
    answer: 'お問い合わせ → ヒアリング → ご提案 → 契約 → サポート開始の流れです。ヒアリングからご提案までは無料です。業務効率化の提案からツール作成まで一貫してサポートします。',
  },
  {
    question: 'プログラミング未経験でも大丈夫ですか？',
    answer: 'はい、大丈夫です。Claude Codeを使えば、プログラミングの知識がなくてもアプリを作ることができます。Kindle本で基礎から学べます。',
  },
  {
    question: '月額料金に含まれる内容は？',
    answer: '業務効率化の提案・改善プランの策定、業務効率化ツールの作成、継続的なサポートが含まれます。お客様の業務に合わせた最適なプランをご提案します。',
  },
  {
    question: '支払い方法は？',
    answer: '銀行振込で全額前払いとなります。サービスにご不満がありましたら、理由を問わず全額返金いたします。',
  },
]
