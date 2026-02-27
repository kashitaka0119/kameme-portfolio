'use client'

export default function BookSection() {
  // 無料キャンペーン期間
  const campaignStartDate = new Date('2026-02-28T17:00:00+09:00')
  const campaignEndDate = new Date('2026-03-05T16:59:00+09:00')
  const now = new Date()
  const isCampaignActive = now >= campaignStartDate && now < campaignEndDate
  const isCampaignUpcoming = now < campaignStartDate

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-10 px-4">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* YouTube動画 埋め込み */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <iframe
              width="270"
              height="480"
              src="https://www.youtube.com/embed/HbZz7pSd6-w"
              title="【Claude Code】Kindle本紹介 ショート"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-2xl"
            />
            <iframe
              width="270"
              height="480"
              src="https://www.youtube.com/embed/8j0-Qnh36bU"
              title="【Claude Code】Kindle本紹介 長尺"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-2xl"
            />
          </div>

          {/* テキストコンテンツ */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="text-3xl">📕</span>
              <span className="text-white/80 text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                Kindle本 出版
              </span>
            </div>

            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
              AIでプログラムをつくる
            </h2>

            <p className="text-white text-lg md:text-xl font-bold mb-2">
              【Claude Code】
              <br />
              プログラミング未経験でもAIでアプリが作れる全手順
            </p>

            <p className="text-white/80 text-sm md:text-base mb-6">
              プログラミング経験ゼロでも、AIに指示するだけでアプリが作れる時代。
              <br className="hidden md:block" />
              Claude Codeの導入から実践まで、すべてを解説します。
            </p>

            {/* 無料キャンペーンバッジ */}
            {isCampaignUpcoming && (
              <div className="inline-block bg-yellow-400 text-yellow-900 font-bold px-4 py-2 rounded-lg mb-6 text-sm md:text-base">
                🎁 2/28 17:00から無料キャンペーン開始！（3/5まで）
              </div>
            )}
            {isCampaignActive && (
              <div className="inline-block bg-yellow-400 text-yellow-900 font-bold px-4 py-2 rounded-lg mb-6 text-sm md:text-base">
                🎁 今なら無料で読めます！（3/5まで）
              </div>
            )}

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://www.amazon.co.jp/dp/B0GPQ65B5L"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 px-8 rounded-full
                           hover:bg-orange-600 transition-colors duration-200 shadow-lg
                           hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isCampaignActive ? '無料でダウンロード' : isCampaignUpcoming ? '2/28から無料！Amazonで見る' : 'Amazonで見る'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
