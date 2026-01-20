import type { Metadata } from 'next'
import Header from '@/components/auto/layout/Header'
import Footer from '@/components/auto/layout/Footer'
import InquiryForm from '@/components/auto/ui/InquiryForm'
import { GUARANTEES } from '@/lib/constants/auto'

export const metadata: Metadata = {
  title: '相談・見積',
  description: 'Windows自動化ツールの相談・見積は無料です。お気軽にお問い合わせください。全額返金保証付きで安心。',
}

export default function InquiryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16">
          <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">相談・見積（無料）</h1>
              <p className="text-secondary">
                業務の自動化について、お気軽にご相談ください
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {GUARANTEES.map((guarantee, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border"
                >
                  <div className="flex-shrink-0">{guarantee.icon}</div>
                  <div>
                    <h3 className="font-bold mb-1">{guarantee.title}</h3>
                    <p className="text-sm text-secondary">{guarantee.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto bg-card p-8 rounded-xl border border-border">
              <InquiryForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
