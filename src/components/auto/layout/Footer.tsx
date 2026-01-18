import Link from 'next/link'

export default function AutoFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-bold text-lg text-auto-primary">
              かめめオート
            </Link>
            <p className="text-sm text-secondary">
              Windows自動化ツール販売
            </p>
          </div>

          <div className="flex gap-6 text-sm text-secondary">
            <Link href="/" className="hover:text-auto-primary transition-colors">
              ホーム
            </Link>
            <Link href="/products" className="hover:text-auto-primary transition-colors">
              製品一覧
            </Link>
            <Link href="/inquiry" className="hover:text-auto-primary transition-colors">
              お問い合わせ
            </Link>
            <a
              href="https://kameme.jp"
              className="hover:text-auto-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              運営者情報
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-secondary">
          <p>&copy; {currentYear} かめめオート. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
