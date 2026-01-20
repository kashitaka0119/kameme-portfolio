'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { AUTO_NAV_ITEMS } from '@/lib/constants/auto'

export default function AutoHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/kameme.png"
              alt="かめめオート"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-lg text-auto-primary">かめめオート</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {AUTO_NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-auto-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/profile"
              className="text-foreground hover:text-auto-primary transition-colors"
            >
              プロフィール
            </Link>
            <Link
              href="/#contact"
              className="bg-auto-primary text-white px-4 py-2 rounded-lg hover:bg-auto-primary/90 transition-colors"
            >
              無料相談
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            {isMenuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {AUTO_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-auto-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/profile"
                className="text-foreground hover:text-auto-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                プロフィール
              </Link>
              <Link
                href="/#contact"
                className="bg-auto-primary text-white px-4 py-3 rounded-lg hover:bg-auto-primary/90 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                無料相談
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
