import AutoHeader from '@/components/auto/layout/Header'
import AutoFooter from '@/components/auto/layout/Footer'
import HeroSection from '@/components/auto/sections/HeroSection'
import GuaranteeSection from '@/components/auto/sections/GuaranteeSection'
import ProductsSection from '@/components/auto/sections/ProductsSection'
import CTASection from '@/components/auto/sections/CTASection'

export default function AutoHome() {
  return (
    <>
      <AutoHeader />
      <main>
        <HeroSection />
        <GuaranteeSection />
        <ProductsSection />
        <CTASection />
      </main>
      <AutoFooter />
    </>
  )
}
