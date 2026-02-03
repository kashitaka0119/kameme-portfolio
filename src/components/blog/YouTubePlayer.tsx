'use client'

import { useState } from 'react'
import { HiOutlinePlay, HiX } from 'react-icons/hi'
import { SiYoutube } from 'react-icons/si'

interface YouTubePlayerProps {
  videoId: string
  title?: string
}

export default function YouTubePlayer({ videoId, title = '動画を再生' }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <>
      {/* サムネイルカード */}
      <div
        onClick={() => setIsPlaying(true)}
        className="group mx-auto mb-8 max-w-xs cursor-pointer rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
      >
        <div className="relative" style={{ aspectRatio: '9/16' }}>
          <img
            src={thumbnailUrl}
            alt={title}
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
      </div>

      {/* 全画面モーダル */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setIsPlaying(false)}
        >
          {/* 閉じるボタン */}
          <button
            onClick={() => setIsPlaying(false)}
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
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  )
}
