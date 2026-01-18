import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  console.log('=== Middleware called ===', pathname)

  // 既にリライト先のパスを含む場合はスキップ
  if (pathname.startsWith('/portfolio') || pathname.startsWith('/auto')) {
    return NextResponse.next()
  }

  // サブドメイン判定
  const hostname = request.headers.get('host') || ''
  const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1')

  let isAutoSite = false

  if (isLocalhost) {
    // 開発環境: クエリパラメータでサブドメインをシミュレート
    const url = new URL(request.url)
    isAutoSite = url.searchParams.get('subdomain') === 'auto'
  } else {
    // 本番環境: ホスト名からサブドメイン抽出
    const hostParts = hostname.split('.')
    isAutoSite = hostParts.length >= 3 && hostParts[0] === 'auto'
  }

  // リライト先を決定
  const destination = isAutoSite ? `/auto${pathname}` : `/portfolio${pathname}`

  console.log('Rewriting to:', destination)

  return NextResponse.rewrite(new URL(destination, request.url))
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|icon.png|images|fonts).*)'],
}
