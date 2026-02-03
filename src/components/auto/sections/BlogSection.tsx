import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';
import { HiArrowRight } from 'react-icons/hi';
import { getLatestPosts } from '@/lib/blog';

export default async function BlogSection() {
  const posts = await getLatestPosts(3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-16 bg-card">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">最新記事</h2>
          <p className="text-secondary">
            業務効率化や自動化に関する記事を発信しています
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-background rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-auto-primary/10 text-auto-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold mb-2 group-hover:text-auto-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-secondary mb-3 line-clamp-2">
                  {post.description}
                </p>
                <time
                  dateTime={post.publishedAt}
                  className="text-xs text-secondary"
                >
                  {format(parseISO(post.publishedAt), 'yyyy年M月d日', {
                    locale: ja,
                  })}
                </time>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-auto-primary hover:underline"
          >
            すべての記事を見る
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
