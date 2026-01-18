import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineChat, HiOutlineShieldCheck } from 'react-icons/hi'

export default function AutoHeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-auto-primary/5 to-auto-accent/5">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-auto-primary">Windows自動化ツール</span>で
              <br />
              業務を効率化
            </h1>
            <p className="text-lg text-secondary mb-6">
              面倒な繰り返し作業を自動化。
              <br />
              Excel処理、ファイル整理、Web作業など、
              <br />
              あなたの業務をexeツールでサポートします。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Link
                href="/inquiry"
                className="inline-flex items-center justify-center gap-2 bg-auto-primary text-white px-6 py-3 rounded-lg hover:bg-auto-primary/90 transition-colors font-medium"
              >
                <HiOutlineChat className="text-xl" />
                無料で相談する
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 border border-auto-primary text-auto-primary px-6 py-3 rounded-lg hover:bg-auto-primary/10 transition-colors font-medium"
              >
                製品を見る
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <div className="flex items-center gap-2 text-secondary">
                <HiOutlineChat className="text-auto-primary" />
                <span>相談・見積無料</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <HiOutlineShieldCheck className="text-auto-primary" />
                <span>全額返金保証</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/images/kameme.png"
              alt="かめめオート"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
