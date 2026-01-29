import localFont from 'next/font/local'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css"

const GA_ID = 'G-8HX49N7CGG'
const AW_ID = 'AW-17905805612'

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
        <GoogleAnalytics gaId={GA_ID} />
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `gtag('config', '${AW_ID}');`,
          }}
        />
      </body>
    </html>
  )
}
