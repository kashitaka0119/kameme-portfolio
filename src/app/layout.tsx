import localFont from 'next/font/local'
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css"

const notoSansJP = localFont({
  src: [
    {
      path: '../../public/fonts/NotoSansJP-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NotoSansJP-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NotoSansJP-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Yu Gothic', 'Meiryo', 'sans-serif'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body>
        {children}
        <GoogleAnalytics gaId="G-8HX49N7CGG" />
      </body>
    </html>
  )
}
