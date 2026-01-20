'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-card">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-secondary">
            業務の自動化について、お気軽にご相談ください
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-background p-8 rounded-xl border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-auto-primary"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-auto-primary"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="自動化したい作業の内容、お困りごとなど、お気軽にご記入ください。"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-auto-primary resize-none"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 text-green-800 rounded-lg">
                お問い合わせありがとうございます。内容を確認後、ご連絡いたします。
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 text-red-800 rounded-lg">
                送信に失敗しました。時間をおいて再度お試しください。
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                'w-full py-4 rounded-lg font-bold text-lg transition-colors',
                'bg-blue-600 text-white hover:bg-blue-700',
                'disabled:opacity-50 disabled:cursor-not-allowed'
              )}
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>

            <p className="text-sm text-secondary text-center">
              ※ 相談・見積は無料です。お気軽にお問い合わせください。
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
