import Link from 'next/link'
import { FaYoutube, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'

const SNS_LINKS = [
  { name: 'YouTube', url: 'https://www.youtube.com/@kameme_auto', icon: FaYoutube, color: '#FF0000' },
  { name: 'Instagram', url: 'https://www.instagram.com/kameme_auto/', icon: FaInstagram, color: '#E4405F' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@kameme_auto', icon: FaTiktok, color: '#000000' },
  { name: 'X', url: 'https://x.com/kameme_auto', icon: FaXTwitter, color: '#000000' },
]

export default function Footer() {
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
            <Link href="/#services" className="hover:text-auto-primary transition-colors">
              サービス内容
            </Link>
            <Link href="/#contact" className="hover:text-auto-primary transition-colors">
              お問い合わせ
            </Link>
            <Link href="/profile" className="hover:text-auto-primary transition-colors">
              運営者情報
            </Link>
          </div>
        </div>

        {/* SNSリンク */}
        <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-border">
          {SNS_LINKS.map((sns) => (
            <a
              key={sns.name}
              href={sns.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sns.name}
              className="hover:opacity-70 transition-opacity"
            >
              <sns.icon className="w-6 h-6" style={{ color: sns.color }} />
            </a>
          ))}
        </div>

        <div className="mt-4 text-center text-sm text-secondary">
          <p>&copy; {currentYear} かめめオート. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
