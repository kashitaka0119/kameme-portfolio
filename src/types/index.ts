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
