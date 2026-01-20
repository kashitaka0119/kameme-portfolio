import { PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/constants/auto'

export default function ProductsSection() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">サービス内容</h2>
          <p className="text-secondary">
            様々な業務に対応した自動化ツールをご用意しています
          </p>
        </div>

        {/* カテゴリ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center p-4 rounded-lg bg-card border border-border"
            >
              <div className="text-auto-primary mb-2">{category.icon}</div>
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>

        {/* 製品カード */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl p-6 border border-border relative overflow-hidden"
            >
              {product.comingSoon && (
                <div className="absolute top-4 right-4 bg-auto-primary text-white text-xs px-2 py-1 rounded">
                  Coming Soon
                </div>
              )}
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <p className="text-secondary text-sm mb-4">{product.description}</p>
              <ul className="space-y-2 mb-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-sm text-secondary flex items-start gap-2">
                    <span className="text-auto-primary">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {product.price !== null ? (
                <p className="text-xl font-bold text-auto-primary">
                  ¥{product.price.toLocaleString()}<span className="text-sm font-normal">〜</span>
                </p>
              ) : (
                <p className="text-sm text-secondary">価格: お問い合わせ</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
