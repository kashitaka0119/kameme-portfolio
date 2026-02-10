'use client'

import { useState } from 'react'
import { PORTFOLIO_WORKS } from '@/lib/constants/auto'
import { HiOutlinePlay, HiX } from 'react-icons/hi'
import { SiYoutube, SiX as SiXIcon, SiTiktok, SiInstagram } from 'react-icons/si'

const platformIcons = {
  x: SiXIcon,
  tiktok: SiTiktok,
  instagram: SiInstagram,
}

// YouTubeのURLからVideo IDを抽出
function extractVideoId(url: string): string | null {
  const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&]+)/)
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/)
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/)
  return shortsMatch?.[1] || watchMatch?.[1] || shortMatch?.[1] || null
}

export default function PortfolioSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const openModal = (youtubeUrl: string) => {
    const videoId = extractVideoId(youtubeUrl)
    if (videoId) {
      setSelectedVideo(videoId)
    }
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  return (
    <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">制作実績</h2>
          <p className="text-gray-600 dark:text-gray-400">
            YouTubeショート動画を配信しています
          </p>
          <a
            href="https://www.youtube.com/@kameme_auto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTubeチャンネルを見る
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {PORTFOLIO_WORKS.map((work) => (
            <div
              key={work.id}
              onClick={() => openModal(work.youtubeUrl)}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow w-64 cursor-pointer"
            >
              {/* サムネイル */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '9/16' }}>
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* 再生ボタンオーバーレイ */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <HiOutlinePlay className="text-white text-3xl ml-1" />
                  </div>
                </div>
                {/* YouTubeバッジ */}
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  <SiYoutube className="text-red-500" />
                  <span>Shorts</span>
                </div>
              </div>

              {/* コンテンツ */}
              <div className="p-4 text-center">
                <p className="font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {work.description}
                </p>

                {/* 他のSNSリンク */}
                {work.otherLinks && work.otherLinks.length > 0 && (
                  <div className="flex justify-center gap-3 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    {work.otherLinks.map((link) => {
                      const Icon = platformIcons[link.platform]
                      return (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Icon className="text-xl" />
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 動画再生モーダル */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeModal}
        >
          {/* 閉じるボタン */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="閉じる"
          >
            <HiX className="text-4xl" />
          </button>

          {/* 動画コンテナ */}
          <div
            className="relative w-full max-w-sm mx-4"
            style={{ aspectRatio: '9/16' }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
