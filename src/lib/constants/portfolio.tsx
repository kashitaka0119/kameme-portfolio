import {
  SiPython,
  SiReact,
} from 'react-icons/si'
import {
  HiOutlineCode,
  HiOutlineCloud,
  HiOutlineServer,
  HiOutlineSparkles,
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
    title: 'Excel・Windows自動化ツール',
    description: 'Pythonで作成したexeファイルで、日々の繰り返し作業を自動化',
    features: [
      'Excel/CSVデータの自動処理',
      'ファイル整理・リネーム自動化',
      'Webデータ収集・スクレイピング',
      'カスタムツール開発',
    ],
    icon: <HiOutlineTable className="text-4xl" />,
    price: '¥30,000〜',
    priceNote: '相談・見積無料、全額返金保証',
  },
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
]

export const NAV_ITEMS = [
  { label: 'ホーム', href: '#hero' },
  { label: 'スキル', href: '#skills' },
  { label: '経験', href: '#experience' },
  { label: 'サービス', href: '#services' },
  { label: 'お問い合わせ', href: '#contact' },
]
