import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';
import AutoHeader from '@/components/auto/layout/Header';
import Footer from '@/components/auto/layout/Footer';
import YouTubePlayer from '@/components/blog/YouTubePlayer';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

// 静的生成のためのパス
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// 動的メタデータ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: '記事が見つかりません | かめめオート' };
  }

  return {
    title: `${post.title} | かめめオート`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      images: post.thumbnail
        ? [{ url: post.thumbnail }]
        : [{ url: '/images/kameme.png' }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            author: {
              '@type': 'Person',
              name: post.author || 'かめめ',
            },
            publisher: {
              '@type': 'Organization',
              name: 'かめめオート',
              logo: {
                '@type': 'ImageObject',
                url: '/images/kameme.png',
              },
            },
          }),
        }}
      />
      <AutoHeader />
      <main className="min-h-screen py-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 記事ヘッダー */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-secondary">
              <time dateTime={post.publishedAt}>
                {format(parseISO(post.publishedAt), 'yyyy年M月d日', {
                  locale: ja,
                })}
              </time>
              {post.updatedAt && post.updatedAt !== post.publishedAt && (
                <span className="text-sm">
                  （更新:{' '}
                  {format(parseISO(post.updatedAt), 'yyyy年M月d日', {
                    locale: ja,
                  })}
                  ）
                </span>
              )}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${encodeURIComponent(tag)}`}
                      className="text-auto-primary hover:underline"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* YouTube動画 */}
          {post.youtubeVideo && (
            <YouTubePlayer videoId={post.youtubeVideo} title={post.title} />
          )}

          {/* 記事本文 - Tailwind Typographyを適用 */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* 記事フッター */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center text-auto-primary hover:underline"
              >
                ← 記事一覧に戻る
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors shadow-xl font-bold"
              >
                かめめオートに戻る
              </Link>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
