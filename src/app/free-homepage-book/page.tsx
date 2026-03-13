'use client'

import Image from 'next/image'
import { HiOutlineStar, HiOutlineBookOpen, HiOutlineCheckCircle, HiOutlineArrowDown } from 'react-icons/hi2'

const AMAZON_URL = 'https://amzn.to/4rgdesd'

function trackFreeCampaignClick() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'free_campaign_click', {
      event_category: 'kindle',
      event_label: '本格ホームページが作れる全手順',
    })
  }
}

export default function FreeHomepageBookPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-600 via-indigo-700 to-indigo-900 text-white">

      {/* ヒーローセクション */}
      <section className="relative px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* 無料バッジ */}
          <div className="inline-block mb-6 animate-bounce">
            <span className="bg-red-500 text-white text-lg md:text-xl font-bold px-6 py-2 rounded-full shadow-lg shadow-red-500/30">
              期間限定 無料！
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            【Claude Code】<br />
            プログラミング未経験でも<br className="md:hidden" />
            本格ホームページが作れる全手順
          </h1>

          <p className="text-white/70 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Kindle本が期間限定で無料ダウンロードできます
          </p>

          {/* 期間表示 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 mb-8 max-w-md mx-auto border border-white/20">
            <p className="text-white/60 text-xs mb-2">無料キャンペーン期間</p>
            <p className="text-xl md:text-2xl font-bold">
              3/18<span className="text-sm font-normal">(火)</span> 17:00
              <span className="mx-2 text-white/40">〜</span>
              3/22<span className="text-sm font-normal">(土)</span> 16:59
            </p>
            <p className="text-white/50 text-xs mt-1">※日本時間</p>
          </div>

          {/* 表紙画像 + CTAボタン */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-64 md:w-80 aspect-7/10 rounded-xl overflow-hidden shadow-2xl shadow-black/40">
              <Image
                src="/images/books/cafe-book.jpg"
                alt="【Claude Code】プログラミング未経験でも本格ホームページが作れる全手順 表紙"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>

            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackFreeCampaignClick}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <HiOutlineBookOpen className="w-6 h-6" />
              Amazonで無料ダウンロード
            </a>
          </div>

          {/* 下矢印 */}
          <div className="mt-12 animate-bounce">
            <HiOutlineArrowDown className="w-8 h-8 mx-auto text-white/40" />
          </div>
        </div>
      </section>

      {/* 本の内容紹介セクション */}
      <section className="px-4 py-16 bg-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-10">
            この本で学べること
          </h2>

          <div className="space-y-5">
            {[
              { title: 'Claude Codeの導入と基本操作', desc: 'AIプログラミングツール「Claude Code」のインストールから使い方まで、ゼロから丁寧に解説' },
              { title: 'おしゃれなカフェのホームページを一から作成', desc: 'デザインからコーディングまで、AIに日本語で指示するだけで本格的なサイトが完成' },
              { title: 'Next.jsを使ったモダンなWeb開発', desc: '最新のフレームワークを使った実践的な開発手法を、手を動かしながら習得' },
              { title: 'サーバーへの公開（デプロイ）手順', desc: '作ったサイトをインターネットに公開する方法まで、完全網羅' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <HiOutlineCheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/50 text-sm">
              プログラミング経験ゼロでもOK！AIに日本語で指示するだけで本格サイトが作れます。
            </p>
          </div>
        </div>
      </section>

      {/* レビューお願いセクション */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-yellow-500/10 border-2 border-yellow-400/40 rounded-2xl p-8 md:p-10 text-center">
            {/* 星アイコン */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <HiOutlineStar key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Amazonレビューのお願い
            </h2>

            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
              今回は<span className="text-yellow-300 font-bold">無料</span>でお読みいただけるキャンペーンです。<br />
              お読みいただいた感想を、ぜひ<span className="text-yellow-300 font-bold">Amazonレビュー</span>でお聞かせください！<br />
              皆さまのレビューが、執筆の大きな励みになります。
            </p>

            {/* レビュー手順 */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2 mt-6">
              {[
                { step: 1, text: '本を読む' },
                { step: 2, text: 'Amazonページへ' },
                { step: 3, text: 'レビューを書く' },
              ].map((item, i) => (
                <div key={item.step} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                    <span className="w-7 h-7 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {item.step}
                    </span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                  {i < 2 && (
                    <span className="text-white/30 text-xl hidden md:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 著者紹介セクション */}
      <section className="px-4 py-16 bg-white/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8">著者について</h2>
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 bg-white/10">
              <Image
                src="/images/kameme.png"
                alt="かめめ"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-2">かめめ</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                20年以上の経験を持つフルスタックエンジニア。
                AIプログラミングの可能性に注目し、プログラミング未経験者でも
                アプリやWebサイトを作れる方法をKindle本シリーズで発信中。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 最終CTAセクション */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-sm mb-3">無料キャンペーン期間</p>
          <p className="text-lg md:text-xl font-bold mb-6">
            3/18<span className="text-sm font-normal">(火)</span> 17:00
            <span className="mx-2 text-white/40">〜</span>
            3/22<span className="text-sm font-normal">(土)</span> 16:59
          </p>

          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackFreeCampaignClick}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <HiOutlineBookOpen className="w-6 h-6" />
            Amazonで無料ダウンロード
          </a>

          <p className="text-white/40 text-xs mt-6">
            ※ 無料期間終了後は通常価格に戻ります
          </p>
        </div>
      </section>

      {/* フッター */}
      <footer className="px-4 py-6 border-t border-white/10 text-center space-y-2">
        <a href="/" className="text-white/40 hover:text-white/60 text-xs transition-colors">
          かめめ トップページへ
        </a>
        <p className="text-white/30 text-xs">&copy; 2025 かめめ All rights reserved.</p>
      </footer>
    </div>
  )
}
