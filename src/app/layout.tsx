import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google';
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
  fallback: ['sans-serif'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'),
  title: {
    default: 'かめめ | フルスタックエンジニア',
    template: '%s | かめめ'
  },
  description: '20年以上の経験を持つフルスタックエンジニア。Python/Django、Next.js、Azure専門。IT業務と保育補助の両立をしながら、モダンな技術でシステム開発をサポートします。',
  keywords: ['フルスタックエンジニア', 'Python', 'Django', 'Next.js', 'Azure', 'TypeScript', 'かめめ'],
  authors: [{ name: 'かめめ' }],
  creator: 'かめめ',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'かめめポートフォリオ',
    title: 'かめめ | フルスタックエンジニア',
    description: '20年以上の経験を持つフルスタックエンジニア。Python/Django、Next.js、Azure専門。',
    images: [
      {
        url: '/images/kameme.png',
        width: 800,
        height: 800,
        alt: 'かめめのロゴ - 笑顔のカメのイラスト',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'かめめ | フルスタックエンジニア',
    description: '20年以上の経験を持つフルスタックエンジニア',
    images: ['/images/kameme.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'かめめ',
              jobTitle: 'フルスタックエンジニア',
              description: '20年以上の経験を持つフルスタックエンジニア',
              knowsAbout: ['Python', 'Django', 'Next.js', 'Azure', 'TypeScript', 'React'],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
