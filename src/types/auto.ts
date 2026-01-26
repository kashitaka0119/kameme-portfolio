export interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number | null
  features: string[]
  category: 'excel' | 'file' | 'web' | 'custom'
  thumbnail?: string
  comingSoon?: boolean
}

export interface Guarantee {
  title: string
  description: string
  icon: React.ReactNode
}

export interface AutoNavItem {
  label: string
  href: string
}

export interface InquiryFormData {
  name: string
  email: string
  company?: string
  phone?: string
  inquiryType: 'consultation' | 'quote' | 'custom'
  message: string
}

export interface FAQ {
  question: string
  answer: string
}
