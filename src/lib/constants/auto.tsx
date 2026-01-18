import {
  HiOutlineShieldCheck,
  HiOutlineCurrencyYen,
  HiOutlineChat,
  HiOutlineTable,
  HiOutlineFolder,
  HiOutlineGlobe,
  HiOutlineCog,
} from 'react-icons/hi'
import type { Product, Guarantee, AutoNavItem } from '@/types/auto'

export const AUTO_NAV_ITEMS: AutoNavItem[] = [
  { label: 'ホーム', href: '/' },
  { label: '製品一覧', href: '/products' },
  { label: '相談・見積', href: '/inquiry' },
]

export const PRODUCTS: Product[] = [
  {
    id: 'excel-auto-1',
    slug: 'excel-data-processor',
    name: 'Excel自動データ処理ツール',
    description: '複数のExcelファイルからデータを自動抽出・集計',
    price: null,
    features: [
      '複数ファイル一括処理',
      '自動集計レポート生成',
      'スケジュール実行対応',
    ],
    category: 'excel',
    comingSoon: true,
  },
  {
    id: 'file-auto-1',
    slug: 'file-organizer',
    name: 'ファイル自動整理ツール',
    description: '指定ルールでファイルを自動分類・リネーム',
    price: null,
    features: [
      'ルールベース自動分類',
      '日付・連番リネーム',
      'フォルダ監視モード',
    ],
    category: 'file',
    comingSoon: true,
  },
  {
    id: 'web-auto-1',
    slug: 'web-data-collector',
    name: 'Webデータ収集ツール',
    description: 'Webサイトからデータを自動収集・Excel出力',
    price: null,
    features: [
      '複数サイト対応',
      '定期実行機能',
      'Excel/CSV出力',
    ],
    category: 'web',
    comingSoon: true,
  },
  {
    id: 'custom-1',
    slug: 'custom-development',
    name: 'カスタム開発',
    description: 'お客様の業務に合わせたオーダーメイドツール',
    price: null,
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
