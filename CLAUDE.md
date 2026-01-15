# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**重要: このリポジトリで作業する際は、すべての応答を日本語で行ってください。**

## プロジェクト概要

20年以上の経験を持つフルスタックエンジニア「かめめ」のプロフェッショナルなポートフォリオサイトです。スキル、実績、サービス内容、お問い合わせ機能を備えたシングルページアプリケーションとして構築されています。

## 技術スタック

- **フレームワーク**: Next.js 15.5.9 (App Router)
- **React**: 19.0.0
- **TypeScript**: 5.7.2 (strict mode有効)
- **スタイリング**: Tailwind CSS 4.1.13 + PostCSS
- **メール送信**: Resend API (お問い合わせフォーム用)
- **アイコン**: react-icons
- **ユーティリティ**: clsx, tailwind-merge, date-fns
- **国際化**: next-intl (将来の多言語対応用にインストール済み)

## 開発コマンド

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動 (http://localhost:3000)
npm run dev

# 本番用ビルド
npm run build

# 本番サーバーの起動
npm start

# リンターの実行
npm run lint
```

## アーキテクチャ

### ディレクトリ構造

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # ルートレイアウト(メタデータ、フォント、JSON-LD)
│   ├── page.tsx                 # メインページ(全セクションを集約)
│   ├── globals.css              # グローバルスタイル(テーマ用CSS変数)
│   └── api/
│       └── contact/
│           └── route.ts         # お問い合わせフォーム用POSTエンドポイント(Resend API)
├── components/
│   ├── sections/                # 主要ページセクション
│   │   ├── HeroSection.tsx     # 名前、キャッチコピー、自己紹介、CTA
│   │   ├── SkillsSection.tsx   # スキルカテゴリーのグリッド表示
│   │   ├── ExperienceSection.tsx # 実績・経験
│   │   ├── ServicesSection.tsx  # サービス内容
│   │   └── ContactSection.tsx  # お問い合わせフォーム
│   ├── ui/                      # 再利用可能なUIコンポーネント
│   │   ├── SectionWrapper.tsx  # セクション共通コンテナ
│   │   ├── SkillCard.tsx       # スキルカテゴリーカード
│   │   ├── Button.tsx          # ボタンバリアント
│   │   └── ContactForm.tsx     # バリデーション付きフォーム
│   └── layout/
│       ├── Header.tsx           # スティッキーナビ(ハンバーガーメニュー付き)
│       └── Footer.tsx           # シンプルな著作権表示フッター
├── lib/
│   ├── utils.ts                 # cn()ヘルパー(clsx + tailwind-merge)
│   └── constants.ts             # コンテンツデータ(スキル、サービス、経験)
└── types/
    └── index.ts                 # TypeScriptインターフェース

public/
└── images/
    └── kameme.png              # カメのロゴ/OGP画像
```

### シングルページアーキテクチャ

このポートフォリオはスムーススクロールナビゲーション付きのシングルページアプリケーションです。すべてのセクションがメインページに読み込まれ、ヘッダーのナビゲーションリンクはセクションID（`#hero`, `#skills`, `#experience`, `#services`, `#contact`）へスクロールします。

### パスエイリアス

`@/*`を使用して`src/`ディレクトリからインポートします:

```typescript
import { cn } from '@/lib/utils'
import { SKILLS } from '@/lib/constants'
import HeroSection from '@/components/sections/HeroSection'
```

## スタイリングシステム

### CSS変数

`globals.css`のCSS変数により、`prefers-color-scheme`を通じた自動ダークモード対応が可能です:

- **ライトモード**: `--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, `--border`, `--card`
- **ダークモード**: 同じ変数名で異なる値
- **スペーシング**: `--section-padding`, `--container-max-width`

これらは`tailwind.config.ts`でTailwindテーマカラーにマッピングされています。

### デザイントークン

- **プライマリカラー**: ブルー(#2563eb ライト、#3b82f6 ダーク) - CTAとアクセントに使用
- **フォント**: Noto Sans JP（layout.tsxで`next/font/google`経由で読み込み）
- **セクションパディング**: 5rem (var(--section-padding))
- **コンテナ最大幅**: 1200px
- **レスポンシブブレークポイント**: sm(640px)、md(768px)、lg(1024px)、xl(1280px)

### レスポンシブデザイン

モバイルファーストアプローチ:
- **モバイル（デフォルト）**: 1カラムレイアウト、ハンバーガーメニュー
- **タブレット（md: 768px）**: スキル/サービスの2カラムグリッド
- **デスクトップ（lg: 1024px）**: スキルの3カラムグリッド、横並びナビゲーション

## コンテンツ管理

すべてのコンテンツ（スキル、サービス、経験）は`src/lib/constants.ts`に集約されており、コンポーネントコードに触れずに簡単に更新できます。この分離により以下が容易になります:
- スキルリストの更新
- サービスの追加/削除
- 経験の説明文の修正
- 将来のCMS統合への準備

## APIルート

### お問い合わせフォームエンドポイント

`POST /api/contact`

**必要な環境変数**:
```env
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=your-email@example.com
```

**リクエストボディ**:
```json
{
  "name": "string",
  "email": "string (バリデーション済み)",
  "message": "string"
}
```

このエンドポイントは入力を検証し、Resend API経由でメールを送信し、JSONレスポンスを返します。

## SEO・メタデータ

### OpenGraph画像

`/public/images/kameme.png`にあるカメのロゴがOGPメタデータに使用されます。`layout.tsx`のメタデータでは`/images/kameme.png`として参照されています。

### JSON-LD構造化データ

Personスキーマが`layout.tsx`に埋め込まれており、SEOと検索エンジンのリッチリザルトを向上させます。

## コンポーネントパターン

### セクションコンポーネント

すべての主要セクションは、一貫したスタイリングのため`SectionWrapper`を使用します:

```typescript
<SectionWrapper id="skills" title="スキル" subtitle="オプションのサブタイトル">
  {/* セクションコンテンツ */}
</SectionWrapper>
```

### ユーティリティ関数

条件付きクラスには`@/lib/utils`の`cn()`ヘルパーを使用します:

```typescript
import { cn } from '@/lib/utils'

className={cn(
  "base-classes",
  condition && "conditional-classes",
  anotherCondition ? "true-classes" : "false-classes"
)}
```

## アクセシビリティ

- **セマンティックHTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`を使用
- **見出し階層**: h1（ヒーロー名）→ h2（セクションタイトル）→ h3（カードタイトル）
- **ARIAラベル**: ナビゲーションとインタラクティブ要素には適切なラベルが必要
- **フォーカスインジケーター**: すべてのインタラクティブ要素に視覚的なフォーカススタイル
- **スキップリンク**: キーボードユーザーがメインコンテンツにスキップ可能
- **代替テキスト**: すべての画像に日本語の説明的な代替テキストが必要

## 国際化

`next-intl`はインストール済みですが、まだ実装されていません。将来の多言語対応のために:
- 日本語を主要言語として維持（layout.tsxで`lang="ja"`）
- `lib/constants.ts`のコンテンツ定数を翻訳ファイルに移行可能
- ヘッダーに言語切り替えを追加

## パフォーマンスに関する考慮事項

- **フォント最適化**: Noto Sans JPは`next/font/google`経由で読み込み（セルフホスト、最適化済み）
- **画像最適化**: 新しい画像には Next.js の`<Image>`コンポーネントを使用
- **コード分割**: Next.js App Routerにより自動実行
- **CSSパージ**: Tailwindは本番ビルドで未使用CSSを自動削除
- **遅延読み込み**: フォールド以下のセクションはネイティブブラウザ遅延読み込みを使用

## 日本語コンテキスト

このサイトは日本語で以下の内容を含みます:
- 名前: かめめ（Kameme、「カメ」の意味）
- ロゴ: フレンドリーなカメのイラスト
- 主な対象者: 日本のクライアントと採用担当者
- テキストはプロフェッショナルな日本語ビジネストーンを維持すること

## 開発上の注意事項

- TypeScript strict modeが有効 - すべてのコードは完全に型付けが必要
- 現在テストは設定されていません
- ダークモードはCSSメディアクエリで自動（手動トグルなし）
- モバイルハンバーガーメニューはリンククリックと外部クリックで閉じること
- スムーススクロールはCSS `scroll-behavior: smooth` またはJavaScriptスクロールユーティリティで処理
