import SectionWrapper from '@/components/ui/SectionWrapper'
import { EXPERIENCES } from '@/lib/constants'

export default function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      title="実績・経験"
      subtitle="幅広い分野での開発経験"
      className="bg-card"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="bg-background border-l-4 border-primary p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              {exp.title}
            </h3>
            <p className="text-secondary leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
