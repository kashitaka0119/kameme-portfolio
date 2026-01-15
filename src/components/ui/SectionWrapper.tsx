import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-10 md:py-12 px-4 md:px-8',
        className
      )}
    >
      <div className="max-w-container mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-secondary text-lg">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
