import type { Metadata } from 'next'
import Link from 'next/link'
import AutoHeader from '@/components/auto/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'プロフィール | かめめ - AIプログラミング専門家・フルスタックエンジニア',
  description: '現役SE歴20年以上。Claude Codeを活用したAIプログラミングの専門家。Python/Django、Next.js、Azure専門。',
  keywords: ['AIプログラミング', 'Claude Code', 'フルスタックエンジニア', 'Python', 'Django', 'Next.js', 'Azure', 'TypeScript', 'かめめ'],
  openGraph: {
    title: 'プロフィール | かめめ - AIプログラミング専門家',
    description: '現役SE歴20年以上。Claude Codeを活用したAIプログラミングの専門家。',
    images: [
      {
        url: '/images/kameme.png',
        width: 800,
        height: 800,
        alt: 'かめめのロゴ - 笑顔のカメのイラスト',
      },
    ],
  },
}

export default function ProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'かめめ',
            jobTitle: 'AIプログラミング専門家・フルスタックエンジニア',
            description: '現役SE歴20年以上。Claude Codeを活用したAIプログラミングの専門家',
            knowsAbout: ['Claude Code', 'AIプログラミング', 'バイブコーディング', 'Python', 'Django', 'Next.js', 'Azure', 'TypeScript', 'React'],
          }),
        }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white p-2 z-50"
      >
        メインコンテンツへスキップ
      </a>
      <AutoHeader />
      <main id="main-content">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />

        {/* トップページに戻る */}
        <div className="text-center py-16 bg-orange-50 dark:bg-gray-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg font-bold shadow-xl"
          >
            ← トップページに戻る
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
