import { MetadataRoute } from 'next';
import { ARTICLES, REVIEWS, VIDEOS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cascalho.cc';

  const staticPages = [
    '',
    '/gravel',
    '/trail-running',
    '/vida-outdoor',
    '/reviews',
    '/videos',
    '/escolhas',
    '/apoie',
    '/sobre',
    '/transparencia',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const reviewPages = REVIEWS.map((rev) => ({
    url: `${baseUrl}/reviews/${rev.slug}`,
    lastModified: new Date(rev.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const articlePages = ARTICLES.map((art) => ({
    url: `${baseUrl}/reviews/${art.slug}`,
    lastModified: new Date(art.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const videoPages = VIDEOS.map((vid) => ({
    url: `${baseUrl}/videos/${vid.slug}`,
    lastModified: new Date(vid.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...reviewPages, ...articlePages, ...videoPages];
}
