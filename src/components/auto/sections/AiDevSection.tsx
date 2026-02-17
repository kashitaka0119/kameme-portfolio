import { HiExternalLink } from 'react-icons/hi'

const NOTE_ARTICLE = {
  title: '【Claude Code】プログラミング未経験でもAIでアプリが作れる全手順',
  description:
    'AIに日本語で話しかけるだけで、アプリが作れる。バイブコーディングという新しい開発スタイルで、あなたのアイデアを形にします。',
  url: 'https://note.com/kameme_auto/n/na9e273898be4',
  image:
    'https://assets.st-note.com/production/uploads/images/252262538/de78df3d2cd4f044374713a9e295d11a.png',
}

export default function AiDevSection() {
  return (
    <section id="ai-dev" className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">AIでつくる</h2>
          <p className="text-gray-600 dark:text-gray-400">
            日本語で話しかけるだけでアプリが完成する、新しい開発スタイル
          </p>
        </div>

        <a
          href={NOTE_ARTICLE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
        >
          <div className="md:flex">
            <div className="md:w-1/2 overflow-hidden">
              <img
                src={NOTE_ARTICLE.image}
                alt={NOTE_ARTICLE.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <span className="inline-block text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded w-fit mb-3">
                note
              </span>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {NOTE_ARTICLE.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {NOTE_ARTICLE.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium">
                記事を読む
                <HiExternalLink className="text-base" />
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
