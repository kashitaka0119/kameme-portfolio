import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineChat, HiOutlineBriefcase, HiOutlineBookOpen } from 'react-icons/hi'

export default function AutoHeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-auto-primary/5 to-auto-accent/5">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              AIの力で、
              <br />
              <span className="text-auto-primary">あなたのアイデアをカタチに。</span>
            </h1>
            <p className="text-lg text-secondary mb-6">
              現役SE歴20年以上。Claude Codeを活用したAIプログラミングで、
              <br className="hidden md:block" />
              開発効率と品質を劇的に向上させます。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                <HiOutlineChat className="text-xl" />
                無料で相談する
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <div className="flex items-center gap-2 text-secondary">
                <HiOutlineChat className="text-auto-primary" />
                <span>相談・見積無料</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <HiOutlineBriefcase className="text-auto-primary" />
                <span>SE歴20年以上</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <HiOutlineBookOpen className="text-auto-primary" />
                <span>Kindle著者</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/images/kameme.png"
              alt="かめめ - AIプログラミング専門家"
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
