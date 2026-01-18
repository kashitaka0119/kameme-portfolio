import Link from 'next/link'
import { HiOutlineChat } from 'react-icons/hi'

export default function CTASection() {
  return (
    <section className="py-16 bg-auto-primary text-white">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          業務の自動化、まずはご相談ください
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          「こんな作業を自動化したい」「どのくらいの費用がかかる？」など、
          お気軽にお問い合わせください。相談・見積は無料です。
        </p>
        <Link
          href="/inquiry"
          className="inline-flex items-center gap-2 bg-white text-auto-primary px-8 py-4 rounded-lg hover:bg-white/90 transition-colors font-bold text-lg"
        >
          <HiOutlineChat className="text-xl" />
          無料で相談する
        </Link>
      </div>
    </section>
  )
}
