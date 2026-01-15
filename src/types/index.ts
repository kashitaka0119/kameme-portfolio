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
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
