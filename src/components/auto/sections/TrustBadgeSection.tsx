import { HiOutlineBriefcase, HiOutlineBookOpen } from 'react-icons/hi'
import { FaYoutube } from 'react-icons/fa6'

export default function TrustBadgeSection() {
  return (
    <section className="py-10 bg-card border-y border-border">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <HiOutlineBriefcase className="text-3xl text-auto-primary" />
            <p className="font-bold text-lg">現役SE歴20年以上</p>
            <p className="text-sm text-secondary">業務システム開発の豊富な経験</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HiOutlineBookOpen className="text-3xl text-auto-primary" />
            <p className="font-bold text-lg">Kindle著者</p>
            <p className="text-sm text-secondary">「AIでプログラムをつくる【Claude Code】」</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaYoutube className="text-3xl text-red-500" />
            <p className="font-bold text-lg">YouTube配信中</p>
            <p className="text-sm text-secondary">Claude Code｜AIプログラミング｜かめめ</p>
          </div>
        </div>
      </div>
    </section>
  )
}
