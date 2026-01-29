import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ完了 | かめめ',
  description: 'お問い合わせありがとうございます。',
  robots: 'noindex, nofollow',
}

export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <svg
            className="w-20 h-20 mx-auto text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-4">
          お問い合わせありがとうございます
        </h1>
        <p className="text-foreground/70 mb-8">
          内容を確認の上、折り返しご連絡いたします。
          <br />
          しばらくお待ちください。
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold"
        >
          トップページに戻る
        </Link>
      </div>
    </main>
  )
}
