import type { Metadata } from 'next'
import Header from '@/components/auto/layout/Header'
import Footer from '@/components/auto/layout/Footer'
import HeroSection from '@/components/auto/sections/HeroSection'
import PortfolioSection from '@/components/auto/sections/PortfolioSection'
import GuaranteeSection from '@/components/auto/sections/GuaranteeSection'
import ProductsSection from '@/components/auto/sections/ProductsSection'
import ContactSection from '@/components/auto/sections/ContactSection'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kameme.jp'),
  title: {
    default: 'Windows自動化ツール販売 | かめめオート',
    template: '%s | かめめオート'
  },
  description: '業務効率化のためのWindows自動化ツール（exe）を販売。相談・見積無料、全額返金保証付き。Excel自動化、ファイル整理、Web自動化など。',
  keywords: ['Windows自動化', 'exe', '業務効率化', 'RPA', 'マクロ', 'Excel自動化', 'Python'],
  authors: [{ name: 'かめめ' }],
  creator: 'かめめ',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'かめめオート',
    title: 'Windows自動化ツール販売 | かめめオート',
    description: '業務効率化のためのWindows自動化ツール（exe）を販売。相談・見積無料、全額返金保証付き。',
    images: [
      {
        url: '/images/kameme.png',
        width: 800,
        height: 800,
        alt: 'かめめオート - Windows自動化ツール販売',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windows自動化ツール販売 | かめめオート',
    description: '業務効率化のためのWindows自動化ツール（exe）を販売。相談・見積無料、全額返金保証付き。',
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
            '@type': 'Organization',
            name: 'かめめオート',
            url: 'https://kameme.jp',
            logo: 'https://kameme.jp/images/kameme.png',
            description: '業務効率化のためのWindows自動化ツールを販売',
          }),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ProductsSection />
        <GuaranteeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
