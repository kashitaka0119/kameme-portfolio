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
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            {/* アイコン */}
            <div className="text-primary mb-4">{service.icon}</div>

            {/* タイトル */}
            <h3 className="text-2xl font-semibold mb-3 text-foreground">
              {service.title}
            </h3>

            {/* 説明 */}
            <p className="text-secondary mb-4 leading-relaxed">
              {service.description}
            </p>

            {/* 機能リスト */}
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
