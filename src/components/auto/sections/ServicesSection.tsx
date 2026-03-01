import Link from 'next/link'
import { AI_SERVICES } from '@/lib/constants/auto'
import { HiOutlineCheck } from 'react-icons/hi'

export default function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">AI開発サービス</h2>
          <p className="text-secondary">
            Claude Codeを活用した開発サービスを提供しています
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {AI_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <div className="text-auto-primary mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <p className="text-3xl font-bold text-auto-primary mb-1">
                {service.price}
              </p>
              <p className="text-sm text-secondary mb-4">{service.priceNote}</p>
              <p className="text-secondary mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <HiOutlineCheck className="text-auto-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className="block w-full text-center bg-auto-primary text-white py-3 rounded-lg hover:bg-auto-primary/90 transition-colors font-medium"
              >
                無料で相談する
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
