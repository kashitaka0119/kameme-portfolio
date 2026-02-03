export interface Skill {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

export interface Experience {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  price: string;
  priceNote?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface PortfolioWork {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  otherLinks?: {
    platform: 'x' | 'tiktok' | 'instagram';
    url: string;
  }[];
}

// ブログ関連の型定義
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string; // HTMLに変換済みのコンテンツ
  publishedAt: string; // ISO 8601形式
  updatedAt?: string;
  thumbnail?: string;
  tags: string[];
  author?: string;
  youtubeVideo?: string; // YouTube動画ID
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  thumbnail?: string;
  tags: string[];
}
