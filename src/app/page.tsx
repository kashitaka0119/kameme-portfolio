import type { Metadata } from 'next'
import Header from '@/components/auto/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/auto/sections/HeroSection'
import TrustBadgeSection from '@/components/auto/sections/TrustBadgeSection'
import PortfolioSection from '@/components/auto/sections/PortfolioSection'
import ServicesSection from '@/components/auto/sections/ServicesSection'
import BlogSection from '@/components/auto/sections/BlogSection'
import FAQSection from '@/components/auto/sections/FAQSection'
import ContactSection from '@/components/auto/sections/ContactSection'
import BookSection from '@/components/auto/sections/BookSection'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kameme.jp'),
  title: {
    default: 'Claude Code｜AIプログラミング｜かめめ',
    template: '%s | かめめ'
  },
  description: 'Claude Code専門家によるAIプログラミング。現役SE歴20年以上。Claude Codeを活用したAI開発ツール受託・バイブコーディングで開発を革新します。',
  keywords: ['Claude Code', 'AIプログラミング', 'バイブコーディング', 'Vibe Coding', 'AI開発', 'AI開発ツール', 'フルスタックエンジニア', 'かめめ'],
  authors: [{ name: 'かめめ' }],
  creator: 'かめめ',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'Claude Code｜AIプログラミング｜かめめ',
    title: 'Claude Code｜AIプログラミング｜かめめ',
    description: 'Claude Code専門家によるAIプログラミング。Claude Codeを活用したAI開発ツール受託・バイブコーディングで開発を革新。',
    images: [
      {
        url: '/images/kameme.png',
        width: 800,
        height: 800,
        alt: 'Claude Code｜AIプログラミング｜かめめ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Code｜AIプログラミング｜かめめ',
    description: 'Claude Code専門家によるAIプログラミング。Claude Codeを活用したAI開発ツール受託・バイブコーディングで開発を革新。',
    images: ['/images/kameme.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Claude Code｜AIプログラミング｜かめめ',
            url: 'https://kameme.jp',
            logo: 'https://kameme.jp/images/kameme.png',
            description: 'Claude Code専門家によるAIプログラミング。AI開発ツール受託を提供。',
            founder: {
              '@type': 'Person',
              name: 'かめめ',
              jobTitle: 'AIプログラミング専門家・フルスタックエンジニア',
              knowsAbout: ['Claude Code', 'AIプログラミング', 'バイブコーディング', 'Python', 'Next.js', 'TypeScript', 'Azure'],
            },
          }),
        }}
      />
      <Header />
      <main>
        <BookSection />
        <HeroSection />
        <TrustBadgeSection />
        <ServicesSection />
        <PortfolioSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
