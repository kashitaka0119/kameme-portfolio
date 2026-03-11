'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineBookOpen } from 'react-icons/hi2'
import { HiOutlinePlay, HiX } from 'react-icons/hi'

type Book = {
  title: string
  subtitle: string
  description: string
  url: string
  coverImage?: string
  badge?: string
  badgeColor?: string
  isComingSoon?: boolean
  tags: string[]
  recommended?: boolean
}

type VideoItem = {
  videoId: string
  title: string
  isShort: boolean
}

const books: Book[] = [
  {
    title: '本格ホームページが作れる全手順',
    subtitle: '【Claude Code】プログラミング未経験でも本格ホームページが作れる全手順',
    description: 'Claude Codeを使って、おしゃれなカフェのホームページを一から作成・公開する全手順を解説。',
    url: 'https://amzn.to/4rgdesd',
    coverImage: '/images/books/cafe-book.jpg',
    badge: 'おすすめ',
    badgeColor: 'bg-orange-500',
    tags: ['Claude Code', 'Webサイト', 'Next.js'],
  },
  {
    title: 'AIでアプリが作れる全手順',
    subtitle: '【Claude Code】プログラミング未経験でもAIでアプリが作れる全手順',
    description: 'Claude Codeの導入から実践まで。AIに日本語で指示するだけでアプリが作れる全手順を解説。',
    url: 'https://amzn.to/4l35cBa',
    coverImage: '/images/books/app-book.jpg',
    tags: ['Claude Code', '入門', 'Python'],
  },
  {
    title: 'WSL2+Docker環境構築ガイド',
    subtitle: 'Windows環境にWSL2+Docker環境を構築する手順',
    description: 'Windows環境にWSL2とDocker Desktopをインストールし、開発環境を構築する手順書。',
    url: 'https://amzn.to/4roEk0p',
    coverImage: '/images/books/wsl2-docker-book.jpg',
    tags: ['WSL2', 'Docker', 'Windows'],
  },
  {
    title: '本格WEBアプリが作れる全手順',
    subtitle: '【Claude Code】プログラミング未経験でも本格WEBアプリが作れる全手順',
    description: '予約管理WEBアプリをDjango+Bootstrapで作成し、Azureに公開するまでの全手順を解説。',
    url: '',
    badge: '執筆中',
    badgeColor: 'bg-green-500',
    isComingSoon: true,
    tags: ['Claude Code', 'Django', 'Azure'],
  },
]

const videos: VideoItem[] = [
  { videoId: 'RAQqMvSLnbo', title: '【Claude Code×バイブコーディング】\n本格ホームページをコード書かずに作ってみた', isShort: true },
  { videoId: 'HbZz7pSd6-w', title: '【Claude Code×バイブコーディング】\nExcel内容一括置換ツールをコード書かずに作ってみた', isShort: true },
]

// おすすめの読む順番
const readingOrder = [
  { step: 1, title: 'AIでアプリが作れる全手順', description: 'Claude Codeの基本を習得' },
  { step: 2, title: 'WSL2+Docker環境構築', description: '開発環境を準備' },
  { step: 3, title: '本格ホームページが作れる全手順', description: '実践プロジェクトに挑戦' },
]

function trackAmazonClick(bookTitle: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'amazon_click', {
      event_category: 'kindle',
      event_label: bookTitle,
    })
  }
}

export default function BookSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)

  return (
    <section id="books" className="bg-linear-to-b from-blue-600 via-indigo-700 to-indigo-800 py-14 px-4">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <HiOutlineBookOpen className="w-7 h-7 text-yellow-300" />
            <span className="text-white/80 text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              Kindle本シリーズ
            </span>
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
            プログラミング未経験から始めるClaude Code
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
            AIに日本語で指示するだけ。コードを書かなくてもアプリが作れる時代の教科書シリーズ。
          </p>
        </div>

        {/* YouTube動画サムネイル */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          {videos.map((video) => (
            <div key={video.videoId} className="flex flex-col items-center gap-2">
              <button
                onClick={() => setSelectedVideo(video)}
                className="group relative rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                aria-label={`${video.title}を再生`}
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  width={270}
                  height={480}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ width: 270, height: 480 }}
                />
                {/* オーバーレイ */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <HiOutlinePlay className="text-white text-3xl ml-1" />
                  </div>
                </div>
                {/* ラベル */}
                <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {video.isShort ? 'Shorts 1分' : '詳しく解説'}
                </span>
              </button>
              <p className="text-white/70 text-sm font-medium whitespace-pre-line">{video.title}</p>
            </div>
          ))}
        </div>

        {/* 動画ポップアップモーダル */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedVideo(null)}
              aria-label="閉じる"
            >
              <HiX className="text-4xl" />
            </button>
            <div
              className={`relative mx-4 ${selectedVideo.isShort ? 'w-full max-w-sm' : 'w-full max-w-3xl'}`}
              style={{ aspectRatio: selectedVideo.isShort ? '9/16' : '16/9' }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            </div>
          </div>
        )}

        {/* 書籍カード一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {books.map((book, index) => (
            <div
              key={index}
              className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 flex flex-col ${
                book.recommended
                  ? 'border-yellow-400/50 shadow-lg shadow-yellow-400/10 hover:shadow-xl hover:shadow-yellow-400/20'
                  : book.isComingSoon
                    ? 'border-white/10 opacity-80'
                    : 'border-white/10 hover:border-white/30 hover:shadow-lg'
              } hover:-translate-y-1`}
            >
              {/* バッジ */}
              {book.badge && (
                <span className={`absolute -top-3 left-4 ${book.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                  {book.badge}
                </span>
              )}

              {/* 表紙画像 */}
              {book.coverImage ? (
                book.url ? (
                  <a href={book.url} target="_blank" rel="noopener noreferrer" onClick={() => trackAmazonClick(book.title)} className="relative w-full aspect-7/10 mb-4 rounded-lg overflow-hidden shadow-lg bg-white/5 block cursor-pointer hover:opacity-80 transition-opacity">
                    <Image
                      src={book.coverImage}
                      alt={book.subtitle}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </a>
                ) : (
                  <div className="relative w-full aspect-7/10 mb-4 rounded-lg overflow-hidden shadow-lg bg-white/5">
                    <Image
                      src={book.coverImage}
                      alt={book.subtitle}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                )
              ) : (
                <div className="w-full aspect-7/10 mb-4 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="text-white/30 text-sm">Coming Soon</span>
                </div>
              )}

              {/* タイトル */}
              <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                {book.url ? (
                  <a href={book.url} target="_blank" rel="noopener noreferrer" onClick={() => trackAmazonClick(book.title)} className="hover:text-orange-300 transition-colors">
                    {book.title}
                  </a>
                ) : (
                  book.title
                )}
              </h3>

              {/* 説明 */}
              <p className="text-white/60 text-sm mb-4 flex-1">
                {book.description}
              </p>

              {/* タグ */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {book.tags.map((tag) => (
                  <span key={tag} className="text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAボタン */}
              {book.isComingSoon ? (
                <div className="text-center text-white/40 text-sm font-medium py-2.5">
                  近日発売予定
                </div>
              ) : (
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackAmazonClick(book.title)}
                  className="inline-flex items-center justify-center gap-2 font-bold py-2.5 px-6 rounded-full transition-all duration-200 text-sm bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Amazonで見る
                </a>
              )}
            </div>
          ))}
        </div>

        {/* おすすめの読む順番 */}
        <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
          <h3 className="text-white font-bold text-lg mb-5 text-center">
            おすすめの読む順番
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {readingOrder.map((item, index) => (
              <div key={item.step} className="flex items-center gap-2">
                <div className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-white/50 text-xs">{item.description}</p>
                  </div>
                </div>
                {index < readingOrder.length - 1 && (
                  <span className="text-white/30 text-2xl hidden md:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
