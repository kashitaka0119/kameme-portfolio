import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【期間限定無料】本格ホームページが作れる全手順 | かめめ',
  description:
    'Kindle本「【Claude Code】プログラミング未経験でも本格ホームページが作れる全手順」が期間限定で無料！プログラミング経験ゼロでも、AIに日本語で指示するだけで本格的なホームページが作れます。',
  keywords: [
    'Claude Code',
    'プログラミング未経験',
    'ホームページ作成',
    'Kindle無料',
    'バイブコーディング',
    'AIプログラミング',
    'Next.js',
  ],
  openGraph: {
    title: '【期間限定無料】本格ホームページが作れる全手順',
    description:
      'プログラミング未経験でもAIに日本語で指示するだけで本格ホームページが作れる！Kindle本が期間限定で無料ダウンロード。',
    images: ['/images/books/cafe-book.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '【期間限定無料】本格ホームページが作れる全手順',
    description:
      'プログラミング未経験でもAIに日本語で指示するだけで本格ホームページが作れる！',
    images: ['/images/books/cafe-book.jpg'],
  },
}

export default function FreeHomepageBookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
