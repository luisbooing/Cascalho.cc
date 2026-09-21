import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShieldCheck, BookOpen, Youtube, Compass, Frown } from 'lucide-react';
import { getPosts, getReviews, getVideos, getAffiliateProducts } from '@/lib/queries';
import AffiliateCard from '@/components/AffiliateCard';

interface Props {
  searchParams: {
    q?: string;
  };
}

export async function generateMetadata({ searchParams }: Props) {
  const query = searchParams.q || '';
  return {
    title: query ? `Busca: "${query}" — Cascalho.CC` : 'Busca — Cascalho.CC',
    description: 'Busque por testes, reviews de equipamentos, artigos sobre ciclismo e corrida em trilha.',
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = (searchParams.q || '').trim();
  const normalizedQuery = query.toLowerCase();

  const [posts, reviews, videos, products] = await Promise.all([
    getPosts(),
    getReviews(),
    getVideos(),
    getAffiliateProducts(),
  ]);

  const matchedReviews = normalizedQuery
    ? reviews.filter((r) =>
        r.title?.toLowerCase().includes(normalizedQuery) ||
        r.excerpt?.toLowerCase().includes(normalizedQuery) ||
        r.productName?.toLowerCase().includes(normalizedQuery) ||
        r.category?.toLowerCase().includes(normalizedQuery) ||
        r.verdict?.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const matchedPosts = normalizedQuery
    ? posts.filter((p) =>
        p.title?.toLowerCase().includes(normalizedQuery) ||
        p.excerpt?.toLowerCase().includes(normalizedQuery) ||
        p.category?.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const matchedVideos = normalizedQuery
    ? videos.filter((v) =>
        v.title?.toLowerCase().includes(normalizedQuery) ||
        v.summary?.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const matchedProducts = normalizedQuery
    ? products.filter((prod) =>
        (prod.title || prod.name || '').toLowerCase().includes(normalizedQuery) ||
        (prod.model || '').toLowerCase().includes(normalizedQuery) ||
        (prod.platform || prod.storeName || '').toLowerCase().includes(normalizedQuery) ||
        (prod.testedContext || prod.honestContext || '').toLowerCase().includes(normalizedQuery) ||
        (prod.limitation || '').toLowerCase().includes(normalizedQuery)
      )
    : [];

  const totalResults = matchedReviews.length + matchedPosts.length + matchedVideos.length + matchedProducts.length;

  return (
    <div className="py-12 bg-cascalho-paper min-h-screen space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header da Busca */}
        <div className="bg-cascalho-ink text-cascalho-paper rounded-3xl p-8 sm:p-12 border-2 border-cascalho-coral/30 shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cascalho-sun text-cascalho-ink font-black text-xs uppercase tracking-wider">
            <Search className="w-4 h-4 text-cascalho-coral" /> Pesquisa de Conteúdo
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-cascalho-paper">
            {query ? `Resultados da busca por "${query}"` : 'Busca no Cascalho.CC'}
          </h1>

          {/* Form de Busca */}
          <form action="/busca" method="GET" className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Busque por pneus, mochilas, quadros, rotas..."
                className="w-full bg-cascalho-paper text-cascalho-ink placeholder-cascalho-muted text-sm font-medium border-2 border-white/20 rounded-2xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-cascalho-coral"
              />
              <Search className="w-5 h-5 text-cascalho-muted absolute left-3.5 top-4" />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 rounded-2xl bg-cascalho-coral hover:bg-cascalho-magenta text-white font-extrabold text-sm transition shadow-lg shrink-0 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" /> Buscar
            </button>
          </form>

          {query && (
            <p className="text-xs text-cascalho-sun font-semibold">
              Encontrados <span className="text-white font-bold">{totalResults}</span> resultados para "<span className="text-white font-bold">{query}</span>"
            </p>
          )}
        </div>

        {/* Sugestões ou 0 Resultados */}
        {query && totalResults === 0 && (
          <div className="bg-white rounded-3xl p-8 text-center space-y-4 border border-cascalho-ink/15 shadow-sm max-w-2xl mx-auto">
            <Frown className="w-12 h-12 text-cascalho-coral mx-auto" />
            <h3 className="text-xl font-black text-cascalho-ink">Nenhum resultado encontrado para "{query}"</h3>
            <p className="text-xs text-cascalho-muted leading-relaxed">
              Tente buscar por termos mais genéricos, como <strong>"Gravel"</strong>, <strong>"Mochila"</strong>, <strong>"Pneu"</strong> ou <strong>"Salomon"</strong>.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-2">
              {['Gravel', 'Trail Running', 'Bolsa de Quadro', 'Reviews'].map((term) => (
                <Link
                  key={term}
                  href={`/busca?q=${encodeURIComponent(term)}`}
                  className="px-3 py-1.5 rounded-full bg-cascalho-surface text-cascalho-ink text-xs font-bold hover:bg-cascalho-coral hover:text-white transition"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 1. Seção de Reviews */}
        {matchedReviews.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-cascalho-ink flex items-center gap-2 border-b border-cascalho-ink/10 pb-3">
              <ShieldCheck className="w-6 h-6 text-cascalho-coral" /> Reviews & Testes ({matchedReviews.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matchedReviews.map((rev) => (
                <Link
                  key={rev.id}
                  href={`/reviews/${rev.slug}`}
                  className="group bg-white p-5 rounded-2xl border border-cascalho-ink/15 hover:border-cascalho-coral transition shadow-sm flex flex-col sm:flex-row gap-4 items-start"
                >
                  {rev.coverImage && (
                    <div className="relative w-full sm:w-36 h-28 rounded-xl overflow-hidden shrink-0 bg-cascalho-surface">
                      <Image
                        src={rev.coverImage}
                        alt={rev.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 144px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <div className="space-y-2 flex-1">
                    <span className="text-[10px] font-bold uppercase bg-cascalho-ink text-cascalho-sun px-2 py-0.5 rounded">
                      {rev.category}
                    </span>
                    <h3 className="text-base font-extrabold text-cascalho-ink group-hover:text-cascalho-coral transition-colors leading-snug">
                      {rev.title}
                    </h3>
                    <p className="text-xs text-cascalho-muted line-clamp-2">
                      {rev.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 2. Seção de Artigos */}
        {matchedPosts.length > 0 && (
          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-black text-cascalho-ink flex items-center gap-2 border-b border-cascalho-ink/10 pb-3">
              <BookOpen className="w-6 h-6 text-cascalho-teal" /> Artigos & Opinião ({matchedPosts.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {matchedPosts.map((art) => (
                <Link
                  key={art.id}
                  href={`/artigos/${art.slug}`}
                  className="group bg-white p-5 rounded-2xl border border-cascalho-ink/15 hover:border-cascalho-coral transition shadow-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase bg-cascalho-surface text-cascalho-ink px-2 py-0.5 rounded border border-cascalho-ink/10">
                      {art.category}
                    </span>
                    <h3 className="text-base font-extrabold text-cascalho-ink group-hover:text-cascalho-coral transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-cascalho-muted line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-cascalho-teal pt-2 flex items-center justify-between border-t border-cascalho-ink/5">
                    <span>{art.readTime}</span>
                    <span className="group-hover:translate-x-1 transition-transform">Ler texto →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 3. Seção de Vídeos */}
        {matchedVideos.length > 0 && (
          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-black text-cascalho-ink flex items-center gap-2 border-b border-cascalho-ink/10 pb-3">
              <Youtube className="w-6 h-6 text-red-600" /> Vídeos do YouTube ({matchedVideos.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matchedVideos.map((vid) => {
                const rawYt = vid.youtubeId || vid.youtubeUrl || '';
                const match = rawYt.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
                const ytId = match ? match[1] : rawYt;
                return (
                  <Link
                    key={vid.id}
                    href={`/videos/${vid.slug}`}
                    className="group bg-white p-5 rounded-2xl border border-cascalho-ink/15 hover:border-red-600 transition shadow-sm flex flex-col sm:flex-row gap-4 items-start"
                  >
                    {ytId && (
                      <div className="relative w-full sm:w-40 h-24 rounded-xl overflow-hidden shrink-0 bg-black">
                        <Image
                          src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
                          alt={vid.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 160px"
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <div className="space-y-1.5 flex-1">
                      <span className="text-[10px] font-bold uppercase bg-red-600 text-white px-2 py-0.5 rounded">
                        Vídeo
                      </span>
                      <h3 className="text-base font-extrabold text-cascalho-ink group-hover:text-red-600 transition-colors leading-snug">
                        {vid.title}
                      </h3>
                      <p className="text-xs text-cascalho-muted line-clamp-2">
                        {vid.summary}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* 4. Seção de Equipamentos Afiliados */}
        {matchedProducts.length > 0 && (
          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-black text-cascalho-ink flex items-center gap-2 border-b border-cascalho-ink/10 pb-3">
              <Compass className="w-6 h-6 text-cascalho-sun" /> Equipamentos Recomendados ({matchedProducts.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchedProducts.map((prod) => (
                <AffiliateCard key={prod.id} product={prod} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
