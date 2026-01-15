import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須フィールドが入力されていません' },
        { status: 400 }
      )
    }

    // メール送信
    const data = await resend.emails.send({
      from: 'お問い合わせフォーム <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'your-email@example.com',
      subject: `【ポートフォリオ】${name}様からお問い合わせ`,
      text: `
お名前: ${name}
メールアドレス: ${email}

メッセージ:
${message}
      `,
      html: `
<h2>お問い合わせ内容</h2>
<p><strong>お名前:</strong> ${name}</p>
<p><strong>メールアドレス:</strong> ${email}</p>
<h3>メッセージ:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json(
      { message: '送信完了しました', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('メール送信エラー:', error)
    return NextResponse.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    )
  }
}
