import type { Metadata } from 'next';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';
import AutoHeader from '@/components/auto/layout/Header';
import Footer from '@/components/layout/Footer'
import { getAllPosts, getAllTags } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'ブログ | かめめオート',
  description:
    'Windows自動化、Excel効率化、開発Tips等の技術記事をお届けします。業務効率化のヒントを発信中。',
  openGraph: {
    title: 'ブログ | かめめオート',
    description:
      'Windows自動化、Excel効率化、開発Tips等の技術記事をお届けします。',
    images: [
      {
        url: '/images/kameme.png',
        width: 800,
        height: 800,
        alt: 'かめめオート',
      },
    ],
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const tags = await getAllTags();

  return (
    <>
      <AutoHeader />
      <main className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">ブログ</h1>
          <p className="text-secondary mb-8">
            業務効率化や自動化に関する技術記事を発信しています。
          </p>

          {/* タグフィルター */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${encodeURIComponent(tag)}`}
                  className="px-3 py-1 bg-card border border-border rounded-full text-sm hover:bg-auto-primary hover:text-white hover:border-auto-primary transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}

          {/* 記事一覧 */}
          {posts.length === 0 ? (
            <p className="text-secondary">記事がまだありません。</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border-b border-border pb-8 last:border-b-0"
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-auto-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-secondary mb-3 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
                      <time dateTime={post.publishedAt}>
                        {format(parseISO(post.publishedAt), 'yyyy年M月d日', {
                          locale: ja,
                        })}
                      </time>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="text-auto-primary">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* かめめオートに戻る */}
          <div className="text-center pt-12 mt-8 border-t border-border pb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-xl font-bold"
            >
              ← かめめオートに戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
