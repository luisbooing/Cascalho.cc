import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Calendar, Clock, User } from 'lucide-react';
import { getPosts } from '@/lib/queries';
import { formatDate } from '@/lib/formatters';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Artigos, Ensaios & Pensamentos sobre Vida Outdoor",
  description: "Textos autorais sobre ciclismo gravel, trail running, consumo consciente, montanhas e histórias por George Volpão.",
  keywords: ["Artigos Gravel", "Ensaios Outdoor", "Ciclismo Curitiba", "Pensamento Outdoor", "George Volpão Textos"],
  alternates: {
    canonical: "https://www.cascalho.cc/artigos",
  },
  openGraph: {
    title: "Artigos & Ensaios — Cascalho.CC",
    description: "Reflexões sobre equipamentos, escolhas de vida, montanhas e a cultura de pedalar e correr com propósito.",
    url: "https://www.cascalho.cc/artigos",
    siteName: "Cascalho.CC",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "https://www.cascalho.cc/logo.png", width: 160, height: 160, alt: "Artigos Cascalho.CC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artigos & Ensaios — Cascalho.CC",
    description: "Textos profundos e sem filtro sobre gravel, corrida de montanha e vida outdoor.",
    images: ["https://www.cascalho.cc/logo.png"],
  },
};

export default async function ArticlesPage() {
  const articles = await getPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.cascalho.cc"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Artigos",
            "item": "https://www.cascalho.cc/artigos"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.cascalho.cc/artigos/#webpage",
        "url": "https://www.cascalho.cc/artigos",
        "name": "Artigos, Ensaios & Pensamentos sobre Vida Outdoor",
        "description": "Acervo completo de textos e relatos de George Volpão e equipe.",
        "isPartOf": {
          "@id": "https://www.cascalho.cc/#website"
        }
      }
    ]
  };

  return (
    <div className="py-12 bg-cascalho-paper space-y-12 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cascalho-ink text-cascalho-paper rounded-3xl p-8 sm:p-12 border-2 border-cascalho-teal/40 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cascalho-teal text-white font-extrabold text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4" /> Acervo Editorial
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-serif text-cascalho-paper">
            Artigos, Ensaios & Histórias
          </h1>

          <p className="text-sm sm:text-base text-cascalho-paper/90 max-w-3xl leading-relaxed font-sans">
            Reflexões sobre técnica, escolhas de equipamento, perrengues de montanha, sustentabilidade e a vida fora das telas.
          </p>
        </div>
      </section>

      {/* Grid de Artigos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <Link
              key={art.id}
              href={`/artigos/${art.slug}`}
              className="group bg-white rounded-2xl border border-cascalho-ink/15 overflow-hidden hover:border-cascalho-teal transition duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-cascalho-ink/10">
                  <Image
                    src={art.coverImage}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-cascalho-ink/90 text-cascalho-sun font-bold text-[10px] uppercase px-2.5 py-1 rounded">
                    {art.category}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-cascalho-muted font-medium">
                    <span className="flex items-center gap-1"><User className="w-3 h-3 text-cascalho-orange" /> {art.author}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-cascalho-coral" /> {formatDate(art.publishedAt)}</span>
                  </div>
                  <h2 className="text-base font-extrabold text-cascalho-ink group-hover:text-cascalho-teal transition-colors leading-snug font-serif">
                    {art.title}
                  </h2>
                  <p className="text-xs text-cascalho-muted line-clamp-3 leading-relaxed font-sans">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-cascalho-teal border-t border-cascalho-ink/5 mt-3 pt-3">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                <span className="group-hover:translate-x-1 transition-transform">Ler texto completo →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
