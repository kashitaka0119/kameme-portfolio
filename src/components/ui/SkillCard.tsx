interface SkillCardProps {
  category: string
  items: string[]
  icon: React.ReactNode
}

export default function SkillCard({ category, items, icon }: SkillCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary">{icon}</div>
        <h3 className="text-xl font-semibold">{category}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span className="text-secondary">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
