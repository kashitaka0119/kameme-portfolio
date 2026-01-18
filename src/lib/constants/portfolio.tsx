import {
  SiPython,
  SiReact,
} from 'react-icons/si'
import {
  HiOutlineCode,
  HiOutlineCloud,
  HiOutlineServer,
  HiOutlineSparkles,
  HiOutlineCog,
  HiOutlineTable,
} from 'react-icons/hi'
import type { Skill, Experience, Service } from '@/types'

export const SKILLS: Skill[] = [
  {
    category: 'バックエンド',
    items: ['Python', 'Django', 'REST API'],
    icon: <SiPython className="text-3xl" />,
  },
  {
    category: 'フロントエンド',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: <SiReact className="text-3xl" />,
  },
  {
    category: 'クラウド',
    items: ['Azure App Service', 'Container Registry', 'Azure Functions', '仮想VM'],
    icon: <HiOutlineCloud className="text-3xl" />,
  },
  {
    category: 'データベース',
    items: ['PostgreSQL', 'Oracle', 'SQL Server'],
    icon: <HiOutlineServer className="text-3xl" />,
  },
  {
    category: 'AI/開発ツール',
    items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Git'],
    icon: <HiOutlineSparkles className="text-3xl" />,
  },
  {
    category: 'Office/業務効率化',
    items: ['Excel自動化(VBA)', 'Access', 'Word'],
    icon: <HiOutlineTable className="text-3xl" />,
  },
]

export const EXPERIENCES: Experience[] = [
  {
    title: '業務システム開発',
    description: '20年以上にわたり、業務システムの設計・開発・運用に従事。要件定義からリリースまで一貫して対応。',
  },
  {
    title: 'Azureインフラ構築・運用',
    description: 'Azure環境でのインフラ設計・構築、CI/CDパイプラインの整備、コンテナ化による運用効率化。',
  },
  {
    title: 'Excel/Access業務効率化',
    description: 'VBAによるExcel作業の自動化、Accessデータベース構築で日々の業務を効率化。',
  },
]

export const SERVICES: Service[] = [
  {
    title: 'ホームページ作成',
    description: '企業・個人向けのホームページを制作。デザインから公開まで一貫対応',
    features: [
      'レスポンシブデザイン（スマホ対応）',
      'SEO対策・検索エンジン最適化',
      'お問い合わせフォーム設置',
      '更新・保守サポート',
    ],
    icon: <HiOutlineCode className="text-4xl" />,
    price: '¥150,000〜',
    priceNote: 'デザイン・ページ数により変動',
  },
  {
    title: 'Webアプリケーション開発',
    description: 'Next.jsとDjangoを活用したモダンなWebアプリケーション開発',
    features: [
      'フルスタック開発（フロントエンド・バックエンド）',
      'REST API設計・実装',
      'レスポンシブデザイン対応',
      'パフォーマンス最適化',
    ],
    icon: <HiOutlineCode className="text-4xl" />,
    price: '¥300,000〜',
    priceNote: '規模・機能により変動',
  },
  {
    title: 'Azure環境構築・移行支援',
    description: 'Azureクラウドでのインフラ構築とシステム移行をサポート',
    features: [
      'Azure App Service環境構築',
      'コンテナ化・Docker対応',
      'CI/CDパイプライン整備',
      'セキュリティ対策・監視設定',
    ],
    icon: <HiOutlineCloud className="text-4xl" />,
    price: '¥200,000〜',
    priceNote: '環境規模により変動',
  },
  {
    title: '旧システムのリプレイス',
    description: '古いシステムを最新技術で刷新し、使いやすく生まれ変わらせます',
    features: [
      '既存システムの分析・評価',
      '最適な技術スタック提案',
      '段階的な移行計画策定',
      '運用・保守性の向上',
    ],
    icon: <HiOutlineCog className="text-4xl" />,
    price: '¥300,000〜',
    priceNote: '要件定義後にお見積り',
  },
  {
    title: 'AIツールを活用した開発効率化支援',
    description: 'Claude Code、Cursorなどを活用した開発プロセスの改善',
    features: [
      'AI開発ツールの導入支援',
      'コード品質の向上',
      '開発速度の向上',
      'ベストプラクティスの共有',
    ],
    icon: <HiOutlineSparkles className="text-4xl" />,
    price: '¥100,000〜',
    priceNote: '導入支援・研修含む',
  },
  {
    title: 'Excel/Access業務効率化',
    description: '日々の手作業をVBAマクロやAccessで自動化し、業務時間を削減',
    features: [
      'Excel VBAによる作業自動化',
      'Accessデータベース構築',
      'Word文書の自動生成',
      '既存ファイルの改修・機能追加',
    ],
    icon: <HiOutlineTable className="text-4xl" />,
    price: '¥30,000〜',
    priceNote: '小規模案件も対応可',
  },
]

export const NAV_ITEMS = [
  { label: 'ホーム', href: '#hero' },
  { label: 'スキル', href: '#skills' },
  { label: '経験', href: '#experience' },
  { label: 'サービス', href: '#services' },
  { label: 'お問い合わせ', href: '#contact' },
]
