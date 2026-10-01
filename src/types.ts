export interface Transaction {
  id: string;
  title: string;
  category: string;
  type: 'income' | 'expense';
  amount: number;
  date: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AuthUserProfile {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}
