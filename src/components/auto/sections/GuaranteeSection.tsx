import { GUARANTEES } from '@/lib/constants/auto'

export default function GuaranteeSection() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">安心の3つの保証</h2>
          <p className="text-secondary">
            初めての方でも安心してご利用いただけます
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {GUARANTEES.map((guarantee, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm border border-border text-center"
            >
              <div className="flex justify-center mb-4">
                {guarantee.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{guarantee.title}</h3>
              <p className="text-secondary text-sm">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
