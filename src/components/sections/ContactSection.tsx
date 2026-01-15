import SectionWrapper from '@/components/ui/SectionWrapper'
import ContactForm from '@/components/ui/ContactForm'

export default function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      title="お問い合わせ"
      subtitle="お気軽にご連絡ください"
      className="bg-card"
    >
      <ContactForm />
    </SectionWrapper>
  )
}
