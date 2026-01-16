'use client'

import Image from 'next/image'
import { smoothScrollTo } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-16 bg-gradient-to-b from-background to-card"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* プロフィール画像 */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/images/kameme.png"
              alt="かめめのロゴ - 笑顔のカメのイラスト"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* 名前 */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          かめめ
        </h1>

        {/* キャッチコピー */}
        <p className="text-xl md:text-2xl text-primary font-semibold mb-8">
          Excel作業の自動化で時間を節約。パソコンのお悩み解決します。
          <br />
          相談・お見積り無料、全額返金保証。
        </p>

        {/* 自己紹介 */}
        <div className="text-lg md:text-xl text-secondary space-y-3 mb-12 max-w-3xl mx-auto">
          <p>20年以上の業務システム開発経験を持つフルスタックエンジニア</p>
          <p>ITエンジニア＋保育補助のダブルワークをしています。</p>
          <p>
            専門はバックエンド（Python/Django）ですが、フロントエンド（Next.js）やクラウド（Azure）も対応可能です。
          </p>
          <p>
            AIツールを活用した効率的な開発も得意としています。Excelの自動化も得意です。
          </p>
        </div>

        {/* CTA ボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            onClick={() => smoothScrollTo('skills')}
            className="text-lg w-full sm:w-auto"
          >
            スキルを見る
          </Button>
          <Button
            variant="outline"
            onClick={() => smoothScrollTo('contact')}
            className="text-lg w-full sm:w-auto"
          >
            お問い合わせ
          </Button>
        </div>
      </div>
    </section>
  )
}
