import type { Metadata } from 'next';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';
import AutoHeader from '@/components/auto/layout/Header';
import Footer from '@/components/layout/Footer'
import { getPostsByTag, getAllTags } from '@/lib/blog';

interface Props {
  params: Promise<{ tag: string }>;
}

// 静的生成のためのパス
export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({ tag: encodeURIComponent(tag) }));
}

// 動的メタデータ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: `${decodedTag}の記事一覧 | かめめオート`,
    description: `${decodedTag}に関する記事の一覧です。業務効率化や自動化のヒントを発信中。`,
    openGraph: {
      title: `${decodedTag}の記事一覧 | かめめオート`,
      description: `${decodedTag}に関する記事の一覧です。`,
    },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = await getPostsByTag(decodedTag);

  return (
    <>
      <AutoHeader />
      <main className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-auto-primary">#{decodedTag}</span> の記事
          </h1>
          <p className="text-secondary mb-8">
            {posts.length}件の記事があります。
          </p>

          {/* 記事一覧 */}
          {posts.length === 0 ? (
            <p className="text-secondary">
              このタグの記事はまだありません。
            </p>
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
                          {post.tags.map((t) => (
                            <span
                              key={t}
                              className={
                                t === decodedTag
                                  ? 'text-auto-primary font-bold'
                                  : 'text-auto-primary'
                              }
                            >
                              #{t}
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

          {/* 戻るリンク */}
          <div className="mt-8 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center text-auto-primary hover:underline"
            >
              ← 記事一覧に戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
