import type { Metadata } from 'next'
import Header from '@/components/auto/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductsSection from '@/components/auto/sections/ProductsSection'
import GuaranteeSection from '@/components/auto/sections/GuaranteeSection'
import ContactSection from '@/components/auto/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Windows自動化ツール販売',
  description: '業務効率化のためのWindows自動化ツール（exe）を販売。相談・見積無料、全額返金保証付き。Excel自動化、ファイル整理、Web自動化など。',
  keywords: ['Windows自動化', 'exe', '業務効率化', 'RPA', 'マクロ', 'Excel自動化', 'Python'],
  openGraph: {
    title: 'Windows自動化ツール販売 | かめめ',
    description: '業務効率化のためのWindows自動化ツール（exe）を販売。相談・見積無料、全額返金保証付き。',
    images: [
      {
        url: '/images/kameme.png',
        width: 800,
        height: 800,
        alt: 'かめめ - Windows自動化ツール販売',
      },
    ],
  },
}

export default function AutoToolsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-br from-auto-primary/5 to-auto-accent/5">
          <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              毎月8時間のExcel作業を、
              <br />
              <span className="text-auto-primary">5分に。</span>
            </h1>
            <p className="text-lg text-secondary">
              マクロ不要。あなた専用の自動化ツールをオーダーメイド。
              <br />
              相談無料・30日間返金保証
            </p>
          </div>
        </section>
        <ProductsSection />
        <GuaranteeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
