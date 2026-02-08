'use client'

import Link from 'next/link'

export default function CampaignBanner() {
  // キャンペーン終了日
  const campaignEndDate = new Date('2026-02-13T23:59:59')
  const now = new Date()

  // キャンペーン終了後は表示しない
  if (now > campaignEndDate) {
    return null
  }

  return (
    <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-6 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* キャンペーンタイトル */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-2xl">🎉</span>
          <h2 className="text-white text-xl md:text-2xl font-bold">
            期間限定キャンペーン
          </h2>
        </div>

        {/* メインコピー */}
        <p className="text-white text-lg md:text-xl font-bold mb-2">
          先着1名様 Excel自動化ツール{' '}
          <span className="text-3xl md:text-4xl text-yellow-200">5,000円</span>
        </p>

        {/* 通常価格 */}
        <p className="text-white/90 text-sm md:text-base mb-3">
          （通常30,000円〜）
        </p>

        {/* 期限 */}
        <p className="text-white flex items-center justify-center gap-2 mb-4">
          <span className="text-xl">📅</span>
          <span className="font-medium">2026年2月13日まで</span>
        </p>

        {/* CTAボタン */}
        <Link
          href="/blog/excel-campaign-202602"
          className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-full
                     hover:bg-yellow-100 transition-colors duration-200 shadow-lg
                     hover:shadow-xl transform hover:-translate-y-0.5"
        >
          詳細を見る
        </Link>
      </div>
    </section>
  )
}
