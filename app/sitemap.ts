import { MetadataRoute } from 'next';
import { getPosts, getReviews, getVideos } from '@/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://cascalho.cc';

  const posts = await getPosts();
  const reviews = await getReviews();
  const videos = await getVideos();

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

  const reviewPages = reviews.map((rev) => ({
    url: `${baseUrl}/reviews/${rev.slug}`,
    lastModified: new Date(rev.updatedAt || rev.publishedAt || Date.now()),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const articlePages = posts.map((art) => ({
    url: `${baseUrl}/artigos/${art.slug}`,
    lastModified: new Date(art.publishedAt || Date.now()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const videoPages = videos.map((vid) => ({
    url: `${baseUrl}/videos/${vid.slug}`,
    lastModified: new Date(vid.publishedAt || Date.now()),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...reviewPages, ...articlePages, ...videoPages];
}
