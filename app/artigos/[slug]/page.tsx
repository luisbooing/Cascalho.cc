import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { getPostBySlug, getPosts } from '@/lib/queries';
import { urlFor } from '@/sanity/image';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 10;

export async function generateStaticParams() {
  const articles = await getPosts();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const article = await getPostBySlug(params.slug);
  if (!article) return { title: 'Artigo não encontrado — Cascalho.CC' };
  const canonicalUrl = `https://cascalho.cc/artigos/${params.slug}`;
  return {
    title: `${article.title} — Cascalho.CC`,
    description: article.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} — Cascalho.CC`,
      description: article.excerpt,
      url: canonicalUrl,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author || 'George Volpão'],
      images: article.coverImage ? [{ url: article.coverImage, width: 1200, height: 675, alt: article.title }] : [],
    },
  };
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref && !value?.asset?.url) return null;
      const imageUrl = value.asset?.url || (value ? urlFor(value).url() : '');
      if (!imageUrl) return null;
      return (
        <figure className="my-8 rounded-2xl overflow-hidden border border-cascalho-ink/15 shadow-sm">
          <Image
            src={imageUrl}
            alt={value.alt || 'Imagem do artigo'}
            width={1200}
            height={675}
            className="w-full h-auto max-h-[500px] object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          {value.caption && (
            <figcaption className="p-3 text-center text-xs text-cascalho-muted bg-cascalho-surface border-t border-cascalho-ink/10">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    customTable: ({ value }: { value: any }) => {
      if (!value) return null;
      const headers: string[] = value.headers || [];
      const rows: any[] = value.rows || [];
      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-cascalho-ink/20 bg-white shadow-sm">
          {value.caption && (
            <div className="px-5 py-3 font-extrabold text-xs sm:text-sm text-cascalho-ink bg-cascalho-surface border-b border-cascalho-ink/15">
              📊 {value.caption}
            </div>
          )}
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            {headers.length > 0 && (
              <thead>
                <tr className="bg-cascalho-ink text-cascalho-paper font-bold border-b border-cascalho-ink/10">
                  {headers.map((h: string, idx: number) => (
                    <th key={idx} className="p-3.5 sm:p-4 font-extrabold border-r last:border-r-0 border-white/10">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-cascalho-ink/10 text-cascalho-ink/90">
              {rows.map((row: any, rIdx: number) => {
                const cells: string[] = row.cells || [];
                return (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-cascalho-paper/40'}>
                    {cells.map((cell: string, cIdx: number) => (
                      <td key={cIdx} className="p-3.5 sm:p-4 font-medium border-r last:border-r-0 border-cascalho-ink/10">
                        {cell}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    calloutBox: ({ value }: { value: any }) => {
      if (!value) return null;
      const type = value.type || 'info';
      const styles: Record<string, { bg: string; border: string; text: string; icon: string }> = {
        info: {
          bg: 'bg-cascalho-teal/10',
          border: 'border-cascalho-teal',
          text: 'text-cascalho-teal',
          icon: '💡',
        },
        warning: {
          bg: 'bg-cascalho-coral/10',
          border: 'border-cascalho-coral',
          text: 'text-cascalho-coral',
          icon: '⚠️',
        },
        tip: {
          bg: 'bg-cascalho-orange/10',
          border: 'border-cascalho-orange',
          text: 'text-cascalho-orange',
          icon: '📌',
        },
        quote: {
          bg: 'bg-cascalho-paper',
          border: 'border-cascalho-magenta',
          text: 'text-cascalho-magenta',
          icon: '💬',
        },
      };
      const style = styles[type] || styles.info;

      return (
        <div className={`my-8 p-5 sm:p-6 rounded-2xl border-l-4 ${style.border} ${style.bg} shadow-sm space-y-2`}>
          {value.title && (
            <h4 className={`text-sm sm:text-base font-extrabold flex items-center gap-2 ${style.text}`}>
              <span>{style.icon}</span> {value.title}
            </h4>
          )}
          <p className="text-sm sm:text-base text-cascalho-ink/90 font-medium leading-relaxed font-sans">
            {value.text}
          </p>
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-cascalho-ink mt-10 mb-4 pt-4 border-t border-cascalho-ink/10">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-cascalho-ink mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-serif font-bold text-cascalho-ink mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cascalho-orange pl-4 py-3 my-6 italic text-cascalho-ink/90 bg-cascalho-orange/5 rounded-r-2xl text-base sm:text-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-base sm:text-lg leading-relaxed text-cascalho-ink/90 mb-6 font-sans">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-base sm:text-lg text-cascalho-ink/90 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-base sm:text-lg text-cascalho-ink/90 pl-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || '#';
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={href}
          target={target}
          rel={target ? 'noopener noreferrer' : undefined}
          className="text-cascalho-coral underline font-semibold hover:text-cascalho-magenta transition"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-extrabold text-cascalho-ink">{children}</strong>
    ),
  },
};

function formatDate(dateStr?: string) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function getCategoryBackLink(category?: string) {
  switch (category) {
    case 'trail-running':
      return { href: '/trail-running', label: 'Voltar para Trail Running' };
    case 'gravel':
      return { href: '/gravel', label: 'Voltar para Gravel' };
    case 'vida-outdoor':
      return { href: '/vida-outdoor', label: 'Voltar para Vida Outdoor' };
    case 'escolhas':
      return { href: '/escolhas', label: 'Voltar para Escolhas & Reflexões' };
    default:
      return { href: '/', label: 'Voltar para o Início' };
  }
}

export default async function ArticleDetailPage({ params }: Props) {
  const article = await getPostBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const backLink = getCategoryBackLink(article.category);
  const formattedDate = formatDate(article.publishedAt);

  return (
    <article className="py-12 bg-cascalho-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <Link
          href={backLink.href}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-cascalho-coral hover:text-cascalho-magenta transition"
        >
          <ArrowLeft className="w-4 h-4" /> {backLink.label}
        </Link>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
            <span className="bg-cascalho-ink text-cascalho-sun px-3 py-1 rounded-full uppercase tracking-wider">
              {article.category}
            </span>
            {formattedDate && (
              <span className="text-cascalho-muted flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cascalho-coral" /> {formattedDate}
              </span>
            )}
            {article.readTime && (
              <span className="text-cascalho-muted flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cascalho-teal" /> {article.readTime}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cascalho-ink leading-tight font-serif">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-xs font-bold text-cascalho-ink/80 pt-1">
            <User className="w-4 h-4 text-cascalho-orange" />
            <span>Por <strong className="text-cascalho-ink">{article.author}</strong></span>
          </div>

          {article.excerpt && (
            <p className="text-base sm:text-xl text-cascalho-ink/80 leading-relaxed font-medium bg-cascalho-surface p-5 sm:p-6 rounded-2xl border border-cascalho-ink/15 shadow-sm italic">
              {article.excerpt}
            </p>
          )}
        </header>

        {/* Cover Image */}
        {article.coverImage && (
          <div className="w-full rounded-3xl overflow-hidden border-2 border-cascalho-ink/15 shadow-md">
            <Image
              src={article.coverImage}
              alt={article.title}
              width={1200}
              height={675}
              className="w-full h-auto max-h-[480px] object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
        )}

        {/* Article Body Content */}
        <section className="bg-white p-6 sm:p-10 rounded-3xl border border-cascalho-ink/15 shadow-sm">
          {Array.isArray(article.content) && article.content.length > 0 ? (
            <div className="prose prose-lg max-w-none">
              <PortableText value={article.content} components={portableTextComponents} />
            </div>
          ) : article.contentMarkdown ? (
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-cascalho-ink/90 font-sans">
              {article.contentMarkdown.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          ) : article.excerpt ? (
            <p className="text-base sm:text-lg leading-relaxed text-cascalho-ink/90 font-sans">
              {article.excerpt}
            </p>
          ) : (
            <p className="text-sm text-cascalho-muted italic">Nenhum conteúdo adicional cadastrado para este artigo.</p>
          )}
        </section>

      </div>
    </article>
  );
}
