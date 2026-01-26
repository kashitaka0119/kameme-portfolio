import { PORTFOLIO_WORKS } from '@/lib/constants/auto'
import { HiOutlinePlay } from 'react-icons/hi'
import { SiYoutube, SiX, SiTiktok, SiInstagram } from 'react-icons/si'

const platformIcons = {
  x: SiX,
  tiktok: SiTiktok,
  instagram: SiInstagram,
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">制作実績</h2>
          <p className="text-gray-600 dark:text-gray-400">
            YouTubeショート動画を配信しています
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {PORTFOLIO_WORKS.map((work) => (
            <a
              key={work.id}
              href={work.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow w-64"
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
                  <div className="flex gap-3 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
