'use client'

import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { FAQS } from '@/lib/constants/auto'
import { cn } from '@/lib/utils'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">よくある質問</h2>
          <p className="text-secondary">
            ご不明な点はお気軽にお問い合わせください
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-card/80 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <HiChevronDown
                  className={cn(
                    'text-xl text-auto-primary flex-shrink-0 transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <p className="px-6 pb-4 text-secondary">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
