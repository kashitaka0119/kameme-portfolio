import {
  SiPython,
  SiDjango,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import {
  HiOutlineCode,
  HiOutlineCloud,
  HiOutlineServer,
  HiOutlineSparkles,
  HiOutlineCog,
  HiOutlineChartBar
} from 'react-icons/hi'
import type { Skill, Experience, Service } from '@/types'

export const SKILLS: Skill[] = [
  {
    category: 'バックエンド',
    items: ['Python', 'Django', 'REST API', 'FastAPI'],
    icon: <SiPython className="text-3xl" />,
  },
  {
    category: 'フロントエンド',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: <SiReact className="text-3xl" />,
  },
  {
    category: 'クラウド',
    items: ['Azure App Service', 'Container Registry', 'Azure Functions'],
    icon: <HiOutlineCloud className="text-3xl" />,
  },
  {
    category: 'データベース',
    items: ['PostgreSQL', 'Oracle', 'InfluxDB'],
    icon: <HiOutlineServer className="text-3xl" />,
  },
  {
    category: 'AI/開発ツール',
    items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Git'],
    icon: <HiOutlineSparkles className="text-3xl" />,
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
    title: 'Grafanaダッシュボード構築',
    description: 'システム監視・分析のためのGrafanaダッシュボード設計・実装、データ可視化による意思決定支援。',
  },
  {
    title: '時系列データ管理システム',
    description: 'InfluxDBを活用した時系列データの収集・蓄積・分析システムの設計・開発。',
  },
]

export const SERVICES: Service[] = [
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
  },
  {
    title: '業務システムのモダナイゼーション',
    description: 'レガシーシステムの刷新と最新技術への移行',
    features: [
      '既存システムの分析・評価',
      '最適な技術スタック提案',
      '段階的な移行計画策定',
      '運用・保守性の向上',
    ],
    icon: <HiOutlineCog className="text-4xl" />,
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
  },
]

export const NAV_ITEMS = [
  { label: 'ホーム', href: '#hero' },
  { label: 'スキル', href: '#skills' },
  { label: '経験', href: '#experience' },
  { label: 'サービス', href: '#services' },
  { label: 'お問い合わせ', href: '#contact' },
]
