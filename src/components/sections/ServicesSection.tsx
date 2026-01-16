import SectionWrapper from '@/components/ui/SectionWrapper'
import { SERVICES } from '@/lib/constants'

export default function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      title="サービス内容"
      subtitle="提供可能なサービス"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* アイコン */}
            <div className="text-primary mb-4">{service.icon}</div>

            {/* タイトル */}
            <h3 className="text-2xl font-semibold mb-2 text-foreground">
              {service.title}
            </h3>

            {/* 料金 */}
            <div className="mb-4">
              <span className="text-3xl font-bold text-primary">
                {service.price}
              </span>
              {service.priceNote && (
                <p className="text-sm text-secondary mt-1">
                  ※{service.priceNote}
                </p>
              )}
            </div>

            {/* 説明 */}
            <p className="text-secondary mb-4 leading-relaxed">
              {service.description}
            </p>

            {/* 機能リスト */}
            <ul className="space-y-2 mb-6 grow">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAボタン */}
            <a
              href="#contact"
              className="inline-block w-full text-center bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              相談する
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
