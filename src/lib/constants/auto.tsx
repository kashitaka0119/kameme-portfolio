import {
  HiOutlineShieldCheck,
  HiOutlineCurrencyYen,
  HiOutlineChat,
  HiOutlineTable,
  HiOutlineFolder,
  HiOutlineGlobe,
  HiOutlineCog,
} from 'react-icons/hi'
import type { Product, Guarantee, AutoNavItem, FAQ } from '@/types/auto'
import type { PortfolioWork } from '@/types'

export const AUTO_NAV_ITEMS: AutoNavItem[] = [
  { label: 'ホーム', href: '/' },
  { label: '制作実績', href: '/#portfolio' },
  { label: 'サービス内容', href: '/#services' },
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
    description: 'Webデータ収集ツール',
    thumbnail: 'https://img.youtube.com/vi/R5iMquopdO0/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/shorts/R5iMquopdO0',
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
    question: '納品までの流れは？',
    answer: 'お問い合わせ → ヒアリング → お見積り → 開発 → 納品の流れです。ヒアリングからお見積りまでは無料で対応いたします。開発期間は内容により異なりますが、シンプルなツールであれば1〜2週間程度です。',
  },
  {
    question: '支払い方法は？',
    answer: '銀行振込で全額前払いとなります。サービスにご不満がありましたら、理由を問わず全額返金いたします。',
  },
  {
    question: '全額返金保証とは？',
    answer: 'ご購入後30日以内であれば、理由を問わずキャンセルできます。キャンセルの場合、料金の全額を14日以内に返金いたします。',
  },
  {
    question: 'Excelマクロでできるのでは？',
    answer: 'Excelマクロでは難しい、複数アプリをまたいだ操作、ファイルフォルダの操作、インターネットからのデータ収集、他のソフトとの連携などの複雑な作業が自動化できます。',
  },
  {
    question: '業務内容が変わった場合、修正してもらえますか？',
    answer: '納品後30日以内の軽微な修正は無料です。それ以降や大きな変更は有償にて対応いたします。お気軽にご相談ください。',
  },
  {
    question: '対応しているWindowsバージョンは？',
    answer: 'Windows 11に対応しています。',
  },
  {
    question: 'カスタマイズは可能ですか？',
    answer: 'はい、完全オーダーメイドであなただけのオリジナル自動化ツールを開発します。',
  },
  {
    question: 'サポート期間はどのくらいですか？',
    answer: '納品後30日間は無料で操作方法のご質問や、軽微な修正に対応いたします。',
  },
  {
    question: '複数のPCで使用できますか？',
    answer: '基本的に1ライセンス1PCとなりますが、複数PC利用のご相談も承っております。お気軽にお問い合わせください。',
  },
]
