import { client } from '@/sanity/client';
import { ARTICLES, REVIEWS, VIDEOS, AFFILIATE_PRODUCTS, PROBLEM_GUIDES } from '@/lib/data';
import { ArticleItem, ReviewItem, VideoItem, AffiliateProduct, ProblemGuideItem } from '@/lib/types';


/**
 * Busca todos os artigos (posts) do Sanity CMS com fallback automático para lib/data.ts
 */
export async function getPosts(): Promise<ArticleItem[]> {
  if (!client) return ARTICLES;
  try {
    const groq = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      "id": _id,
      title,
      "slug": slug.current,
      category,
      author,
      publishedAt,
      readTime,
      excerpt,
      "coverImage": coverImage.asset->url,
      modules[] {
        ...,
        _type == "imageBlock" => {
          "imageUrl": image.asset->url,
          caption,
          alt
        }
      },
      content
    }`;
    const data = await client.fetch<ArticleItem[]>(groq, {}, { next: { revalidate: 10 } });
    if (data && data.length > 0) {
      return data;
    }
  } catch (error) {
    // CMS indisponível ou sem dados, utiliza fallback estático
  }
  return ARTICLES;
}

/**
 * Busca um artigo pelo Slug
 */
export async function getPostBySlug(slug: string): Promise<ArticleItem | undefined> {
  if (!client) return ARTICLES.find((a) => a.slug === slug);
  try {
    const groq = `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
      "id": _id,
      title,
      "slug": slug.current,
      category,
      author,
      publishedAt,
      readTime,
      excerpt,
      "coverImage": coverImage.asset->url,
      modules[] {
        ...,
        _type == "imageBlock" => {
          "imageUrl": image.asset->url,
          caption,
          alt
        }
      },
      content
    }`;
    const data = await client.fetch<ArticleItem>(groq, { slug }, { next: { revalidate: 10 } });
    if (data && data.title) {
      return data;
    }
  } catch (error) {
    // Fallback
  }
  return ARTICLES.find((a) => a.slug === slug);
}

/**
 * Busca todos os reviews com fallback automático
 */
export async function getReviews(): Promise<ReviewItem[]> {
  if (!client) return REVIEWS;
  try {
    const groq = `*[_type == "review" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      "id": _id,
      title,
      "slug": slug.current,
      category,
      productName,
      rating,
      publishedAt,
      excerpt,
      "coverImage": coverImage.asset->url,
      methodology,
      pros,
      cons,
      verdict,
      affiliateProducts[]-> {
        "id": _id,
        name,
        "title": name,
        category,
        priceEstimate,
        "price": priceEstimate,
        testedBadge,
        testedPeriod,
        honestContext,
        "testedContext": honestContext,
        limitation,
        affiliateUrl,
        storeName,
        "platform": storeName,
        "image": image.asset->url
      },
      modules[] {
        ...,
        _type == "imageBlock" => {
          "imageUrl": image.asset->url,
          caption,
          alt
        }
      },
      content
    }`;
    const data = await client.fetch<ReviewItem[]>(groq, {}, { next: { revalidate: 10 } });
    if (data && data.length > 0) {
      return data;
    }
  } catch (error) {
    // Fallback
  }
  return REVIEWS;
}

/**
 * Busca um review pelo Slug
 */
export async function getReviewBySlug(slug: string): Promise<ReviewItem | undefined> {
  if (!client) return REVIEWS.find((r) => r.slug === slug);
  try {
    const groq = `*[_type == "review" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
      "id": _id,
      title,
      "slug": slug.current,
      category,
      productName,
      rating,
      publishedAt,
      excerpt,
      "coverImage": coverImage.asset->url,
      methodology,
      pros,
      cons,
      verdict,
      affiliateProducts[]-> {
        "id": _id,
        name,
        "title": name,
        category,
        priceEstimate,
        "price": priceEstimate,
        testedBadge,
        testedPeriod,
        honestContext,
        "testedContext": honestContext,
        limitation,
        affiliateUrl,
        storeName,
        "platform": storeName,
        "image": image.asset->url
      },
      modules[] {
        ...,
        _type == "imageBlock" => {
          "imageUrl": image.asset->url,
          caption,
          alt
        }
      },
      content
    }`;
    const data = await client.fetch<ReviewItem>(groq, { slug }, { next: { revalidate: 10 } });
    if (data && data.title) {
      return data;
    }
  } catch (error) {
    // Fallback
  }
  return REVIEWS.find((r) => r.slug === slug);
}

/**
 * Busca todos os vídeos com fallback automático
 */
export async function getVideos(): Promise<VideoItem[]> {
  if (!client) return VIDEOS;
  try {
    const groq = `*[_type == "video" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      "id": _id,
      title,
      "slug": slug.current,
      youtubeUrl,
      publishedAt,
      duration,
      summary,
      keyTakeaways,
      chapters,
      transcriptSummary,
      mentionedProducts[]-> {
        "id": _id,
        name,
        "title": name,
        category,
        priceEstimate,
        "price": priceEstimate,
        testedBadge,
        testedPeriod,
        honestContext,
        "testedContext": honestContext,
        limitation,
        affiliateUrl,
        storeName,
        "platform": storeName,
        "image": image.asset->url
      }
    }`;
    const data = await client.fetch<VideoItem[]>(groq, {}, { next: { revalidate: 10 } });
    if (data && data.length > 0) {
      return data;
    }
  } catch (error) {
    // Fallback
  }
  return VIDEOS;
}

/**
 * Busca um vídeo pelo Slug
 */
export async function getVideoBySlug(slug: string): Promise<VideoItem | undefined> {
  if (!client) return VIDEOS.find((v) => v.slug === slug);
  try {
    const groq = `*[_type == "video" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
      "id": _id,
      title,
      "slug": slug.current,
      youtubeUrl,
      publishedAt,
      duration,
      summary,
      keyTakeaways,
      chapters,
      transcriptSummary,
      mentionedProducts[]-> {
        "id": _id,
        name,
        "title": name,
        category,
        priceEstimate,
        "price": priceEstimate,
        testedBadge,
        testedPeriod,
        honestContext,
        "testedContext": honestContext,
        limitation,
        affiliateUrl,
        storeName,
        "platform": storeName,
        "image": image.asset->url
      }
    }`;
    const data = await client.fetch<VideoItem>(groq, { slug }, { next: { revalidate: 10 } });
    if (data && data.title) {
      return data;
    }
  } catch (error) {
    // Fallback
  }
  return VIDEOS.find((v) => v.slug === slug);
}

/**
 * Busca equipamentos afiliados com fallback automático
 */
export async function getAffiliateProducts(): Promise<AffiliateProduct[]> {
  if (!client) return AFFILIATE_PRODUCTS;
  try {
    const groq = `*[_type == "affiliateProduct" && !(_id in path("drafts.**"))] {
      "id": _id,
      name,
      category,
      priceEstimate,
      testedBadge,
      testedPeriod,
      honestContext,
      limitation,
      affiliateUrl,
      storeName,
      "image": image.asset->url
    }`;
    const data = await client.fetch<AffiliateProduct[]>(groq, {}, { next: { revalidate: 10 } });
    if (data && data.length > 0) {
      return data;
    }
  } catch (error) {
    // Fallback
  }
  return AFFILIATE_PRODUCTS;
}

/**
 * Busca os guias/objetivos da home com fallback automático
 */
export async function getProblemGuides(): Promise<ProblemGuideItem[]> {
  if (!client) return PROBLEM_GUIDES;
  try {
    const groq = `*[_type == "problemGuide" && !(_id in path("drafts.**"))] | order(order asc) {
      "id": _id,
      problemTitle,
      description,
      category,
      targetSlug,
      iconName
    }`;
    const data = await client.fetch<ProblemGuideItem[]>(groq, {}, { next: { revalidate: 10 } });
    if (data && data.length > 0) {
      return data;
    }
  } catch (error) {
    // Fallback
  }
  return PROBLEM_GUIDES;
}

