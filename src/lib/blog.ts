import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';
import { format } from 'date-fns';
import type { BlogPost, BlogPostMeta } from '@/types';

const POSTS_DIRECTORY = path.join(process.cwd(), 'content/blog');

/**
 * 日付をISO形式の文字列に変換
 * gray-matterがDateオブジェクトに変換する場合があるため
 */
function toISODateString(date: Date | string | undefined): string {
  if (!date) return '';
  if (typeof date === 'string') return date;
  return format(date, 'yyyy-MM-dd');
}

/**
 * 全記事のメタデータを取得（一覧表示用）
 * 公開日の降順でソート
 */
export async function getAllPosts(): Promise<BlogPostMeta[]> {
  // ディレクトリが存在しない場合は空配列を返す
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(POSTS_DIRECTORY);

  const posts = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(POSTS_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        publishedAt: toISODateString(data.publishedAt),
        updatedAt: data.updatedAt ? toISODateString(data.updatedAt) : undefined,
        thumbnail: data.thumbnail,
        tags: data.tags || [],
      } as BlogPostMeta;
    });

  // 公開日で降順ソート
  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * 最新の記事を指定件数取得
 */
export async function getLatestPosts(count: number): Promise<BlogPostMeta[]> {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, count);
}

/**
 * slug から個別記事を取得
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(POSTS_DIRECTORY, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkGfm).use(html).process(content);

  return {
    slug,
    title: data.title,
    description: data.description,
    content: processedContent.toString(),
    publishedAt: toISODateString(data.publishedAt),
    updatedAt: data.updatedAt ? toISODateString(data.updatedAt) : undefined,
    thumbnail: data.thumbnail,
    tags: data.tags || [],
    author: data.author,
  };
}

/**
 * タグ別に記事を取得
 */
export async function getPostsByTag(tag: string): Promise<BlogPostMeta[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

/**
 * 全タグを取得（重複なし、ソート済み）
 */
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const tagSet = new Set<string>();

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

/**
 * 全記事のslugを取得（静的生成用）
 */
export async function getAllPostSlugs(): Promise<string[]> {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''));
}
