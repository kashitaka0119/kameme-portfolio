'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { validateEmail } from '@/lib/utils'
import Button from './Button'
import type { ContactFormData } from '@/types'

export default function ContactForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'メッセージを入力してください'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

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
        router.push('/thanks')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('送信エラー:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // エラーをクリア
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* お名前 */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          お名前 <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* メールアドレス */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          メールアドレス <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* メッセージ */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          メッセージ <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* 送信ボタン */}
      <Button type="submit" variant="primary" isLoading={isSubmitting} className="w-full">
        送信する
      </Button>

      {/* ステータスメッセージ */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg">
          お問い合わせを送信しました。ありがとうございます！
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg">
          送信に失敗しました。もう一度お試しください。
        </div>
      )}
    </form>
  )
}
