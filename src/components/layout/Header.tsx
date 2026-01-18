'use client'

import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { NAV_ITEMS } from '@/lib/constants'
import { smoothScrollTo } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const elementId = href.replace('#', '')
    smoothScrollTo(elementId)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-md'
          : 'bg-background'
      }`}
    >
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            aria-label="ホームに戻る"
          >
            かめめ
          </button>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:block" aria-label="メインナビゲーション">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={process.env.NEXT_PUBLIC_AUTO_URL || '/?subdomain=auto'}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  自動化ツール販売
                </a>
              </li>
            </ul>
          </nav>

          {/* モバイルハンバーガーボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-foreground hover:text-primary transition-colors"
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <>
          {/* オーバーレイ */}
          <div
            className="fixed inset-0 bg-black/50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* メニュー本体 */}
          <nav
            className="fixed top-16 left-0 right-0 bg-background border-b border-border md:hidden shadow-lg"
            aria-label="モバイルナビゲーション"
          >
            <ul className="py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-3 text-foreground hover:bg-card hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={process.env.NEXT_PUBLIC_AUTO_URL || '/?subdomain=auto'}
                  className="block w-full text-left px-4 py-3 text-orange-500 hover:bg-card font-medium"
                >
                  自動化ツール販売
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  )
}
