export type CategoryType = 'gravel' | 'trail-running' | 'vida-outdoor' | 'reviews' | 'pensamento' | 'cidade';

export interface AffiliateProduct {
  id: string;
  title: string;
  model: string;
  variant?: string;
  platform: 'Mercado Livre' | 'Shopee' | 'Outro';
  seller?: string;
  price: string;
  originalPrice?: string;
  shippingInfo?: string;
  rating?: number;
  reviewsCount?: number;
  affiliateUrl: string;
  checkedAt: string;
  disclosureText: string;
  category: CategoryType;
  testedContext: string;
  image: string;
  isEditorPick?: boolean;
}

export interface ReviewMethodology {
  productAndVariant: string;
  periodOfUse: string;
  distanceOrHours: string;
  terrainAndWeather: string;
  configuration: string;
  criteria: string[];
  strongPoints: string[];
  limitations: string[];
  indicatedFor: string;
  alternatives: string[];
  priceAndDate: string;
}

export interface ReviewItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: CategoryType;
  coverImage: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  methodology: ReviewMethodology;
  verdict: string;
  affiliateProducts: AffiliateProduct[];
  fullContentHtml?: string;
  youtubeId?: string;
}

export interface VideoItem {
  id: string;
  slug: string;
  title: string;
  youtubeId: string;
  publishedAt: string;
  duration: string;
  summary: string;
  chapters: { time: string; title: string; desc: string }[];
  transcriptSummary: string;
  mentionedProducts: AffiliateProduct[];
  relatedArticlesSlugs?: string[];
  corrections?: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: CategoryType;
  author: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  contentMarkdown?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any;
  tags?: string[];
  isFeatured?: boolean;
}

export interface ProblemGuideItem {
  id: string;
  problemTitle: string;
  description: string;
  category: CategoryType;
  targetSlug: string;
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  yearsActive: string;
  avatar: string;
}
