import type { Metadata } from 'next'
import ProfileHeader from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'プロフィール | かめめ - フルスタックエンジニア',
  description: '20年以上の経験を持つフルスタックエンジニア。Python/Django、Next.js、Azure専門。IT業務と保育補助の両立をしながら、モダンな技術でシステム開発をサポートします。',
  keywords: ['フルスタックエンジニア', 'Python', 'Django', 'Next.js', 'Azure', 'TypeScript', 'かめめ'],
  openGraph: {
    title: 'プロフィール | かめめ - フルスタックエンジニア',
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
}

export default function ProfilePage() {
  return (
    <>
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white p-2 z-50"
      >
        メインコンテンツへスキップ
      </a>
      <ProfileHeader />
      <main id="main-content">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
