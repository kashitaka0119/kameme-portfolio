import type { Metadata } from 'next'
import AutoHeader from '@/components/auto/layout/Header'
import AutoFooter from '@/components/auto/layout/Footer'
import ProductsSection from '@/components/auto/sections/ProductsSection'
import CTASection from '@/components/auto/sections/CTASection'

export const metadata: Metadata = {
  title: '製品一覧',
  description: 'Windows自動化ツールの製品一覧。Excel自動化、ファイル整理、Web自動化など、様々な業務に対応したツールをご用意しています。',
}

export default function ProductsPage() {
  return (
    <>
      <AutoHeader />
      <main>
        <section className="py-16">
          <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">製品一覧</h1>
              <p className="text-secondary">
                業務効率化のための自動化ツールを準備中です
              </p>
            </div>
          </div>
        </section>
        <ProductsSection />
        <CTASection />
      </main>
      <AutoFooter />
    </>
  )
}
