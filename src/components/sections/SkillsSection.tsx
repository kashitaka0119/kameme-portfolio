import SectionWrapper from '@/components/ui/SectionWrapper'
import SkillCard from '@/components/ui/SkillCard'
import { SKILLS } from '@/lib/constants'

export default function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      title="スキル"
      subtitle="長年の経験で培った技術スタック"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill) => (
          <SkillCard
            key={skill.category}
            category={skill.category}
            items={skill.items}
            icon={skill.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
