import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { ShieldCheck, CheckCircle2, AlertTriangle, Clock, ArrowLeft, ExternalLink, ThumbsUp, ThumbsDown, Info } from 'lucide-react';
import { getReviewBySlug, getPostBySlug, getReviews, getPosts } from '@/lib/queries';
import AffiliateCard from '@/components/AffiliateCard';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const reviews = await getReviews();
  const articles = await getPosts();
  const reviewSlugs = reviews.map((r) => ({ slug: r.slug }));
  const articleSlugs = articles.map((a) => ({ slug: a.slug }));
  return [...reviewSlugs, ...articleSlugs];
}

export async function generateMetadata({ params }: Props) {
  const review = await getReviewBySlug(params.slug);
  if (!review) return { title: 'Review não encontrado — Cascalho.CC' };
  const canonicalUrl = `https://cascalho.cc/reviews/${params.slug}`;
  return {
    title: `${review.title} — Cascalho.CC`,
    description: review.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${review.title} — Cascalho.CC`,
      description: review.excerpt,
      url: canonicalUrl,
      type: 'article',
      images: review.coverImage ? [{ url: review.coverImage, width: 1200, height: 675, alt: review.title }] : [],
    },
  };
}

export default async function ReviewDetailPage({ params }: Props) {
  const review = await getReviewBySlug(params.slug);

  if (!review) {
    const article = await getPostBySlug(params.slug);
    if (article) {
      redirect(`/artigos/${params.slug}`);
    }
    notFound();
  }

  const { methodology } = review;

  return (
    <article className="py-12 bg-cascalho-paper min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Back button */}
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cascalho-coral hover:text-cascalho-magenta transition"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para a Central de Reviews
          </Link>

          {/* Review Header */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-cascalho-teal">
              <span className="bg-cascalho-ink text-cascalho-sun px-3 py-1 rounded-full uppercase">
                {review.category}
              </span>
              <span>•</span>
              <span>Testado por {review.author}</span>
              <span>•</span>
              <span className="text-cascalho-muted">Atualizado em {review.updatedAt}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cascalho-ink leading-tight">
              {review.title}
            </h1>

            <p className="text-base sm:text-lg text-cascalho-ink/80 leading-relaxed font-medium">
              {review.excerpt}
            </p>
          </header>

          {/* Cover Image */}
          <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border-2 border-cascalho-ink/15 shadow-md">
            <Image
              src={review.coverImage}
              alt={review.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4 bg-cascalho-coral text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow">
              <ShieldCheck className="w-4 h-4" /> TESTADO EM CONDIÇÕES REAIS
            </div>
          </div>

          {/* 📋 Tabela Metodológica Completa de 11 Critérios (Breifing Seção 8) */}
          <section className="bg-cascalho-ink text-cascalho-paper p-6 sm:p-8 rounded-3xl border border-cascalho-coral/30 space-y-6 shadow-xl">
            <div className="border-b border-white/10 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-cascalho-sun tracking-wider block">
                  Metodologia Transparente
                </span>
                <h2 className="text-xl font-black text-white">
                  Ficha Metodológica do Teste de Campo
                </h2>
              </div>
              <ShieldCheck className="w-8 h-8 text-cascalho-lime hidden sm:block" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                <span className="text-cascalho-sun font-bold block mb-0.5">1. Produto & Variante:</span>
                <span className="text-white font-medium">{methodology.productAndVariant}</span>
              </div>

              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                <span className="text-cascalho-sun font-bold block mb-0.5">2. Período de Uso:</span>
                <span className="text-white font-medium">{methodology.periodOfUse}</span>
              </div>

              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                <span className="text-cascalho-sun font-bold block mb-0.5">3. Distância / Horas Acumuladas:</span>
                <span className="text-white font-medium">{methodology.distanceOrHours}</span>
              </div>

              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                <span className="text-cascalho-sun font-bold block mb-0.5">4. Terreno e Clima de Teste:</span>
                <span className="text-white font-medium">{methodology.terrainAndWeather}</span>
              </div>

              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 sm:col-span-2">
                <span className="text-cascalho-sun font-bold block mb-0.5">5. Configuração / Ajuste Utilizado:</span>
                <span className="text-white font-medium">{methodology.configuration}</span>
              </div>
            </div>

            {/* Critérios avaliados */}
            {methodology?.criteria && (
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-xs font-bold uppercase text-cascalho-lime block">
                  6. Critérios Específicos Observados:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cascalho-paper/90">
                  {methodology.criteria.map((crit: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cascalho-teal shrink-0 mt-0.5" />
                      <span>{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </section>

          {/* Pontos Fortes vs Limitações */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pontos Fortes */}
            <div className="bg-cascalho-surface p-6 rounded-2xl border-2 border-cascalho-teal/40 space-y-3">
              <h3 className="text-base font-extrabold text-cascalho-ink flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-cascalho-teal" /> 7. Onde o produto entrega (Pontos Fortes)
              </h3>
              <ul className="space-y-2 text-xs text-cascalho-ink/90">
                {(methodology?.strongPoints || []).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cascalho-teal font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitações */}
            <div className="bg-cascalho-surface p-6 rounded-2xl border-2 border-cascalho-orange/40 space-y-3">
              <h3 className="text-base font-extrabold text-cascalho-ink flex items-center gap-2">
                <ThumbsDown className="w-5 h-5 text-cascalho-coral" /> 8. Onde decepciona (Limitações)
              </h3>
              <ul className="space-y-2 text-xs text-cascalho-ink/90">
                {(methodology?.limitations || []).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-cascalho-coral shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </section>

          {/* Perfil Indicado & Alternativas */}
          <section className="bg-white p-6 rounded-2xl border border-cascalho-ink/15 space-y-4">
            <div>
              <h4 className="text-sm font-extrabold text-cascalho-ink uppercase tracking-wider text-cascalho-coral">
                9. Perfil Indicado (Para quem faz sentido):
              </h4>
              <p className="text-xs sm:text-sm text-cascalho-ink/90 mt-1 font-medium leading-relaxed">
                {methodology?.indicatedFor || review.verdict}
              </p>
            </div>

            {methodology?.alternatives && (
              <div className="pt-3 border-t border-cascalho-ink/10">
                <h4 className="text-sm font-extrabold text-cascalho-ink uppercase tracking-wider text-cascalho-teal">
                  10. Alternativas no Mercado:
                </h4>
                <ul className="list-disc list-inside text-xs text-cascalho-muted mt-1 space-y-1">
                  {methodology.alternatives.map((alt: string, idx: number) => (
                    <li key={idx}>{alt}</li>
                  ))}
                </ul>
              </div>
            )}

            {methodology?.priceAndDate && (
              <div className="pt-3 border-t border-cascalho-ink/10 text-xs text-cascalho-muted flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cascalho-sun" />
                <span><strong>11. Verificação de preço:</strong> {methodology.priceAndDate}</span>
              </div>
            )}
          </section>

          {/* Veredito Final */}
          <section className="bg-gradient-paper p-6 sm:p-8 rounded-3xl border-2 border-cascalho-ink/20 space-y-3">
            <span className="text-xs font-black uppercase text-cascalho-magenta tracking-widest block">
              Veredito Editorial do Cascalho.CC
            </span>
            <p className="text-base sm:text-lg font-extrabold text-cascalho-ink leading-relaxed">
              "{review.verdict}"
            </p>
          </section>

          {/* Card de Afiliado com Transparência Completa */}
          {review.affiliateProducts && review.affiliateProducts.length > 0 && (
            <section className="space-y-4 pt-4">
              <h3 className="text-xl font-black text-cascalho-ink flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-cascalho-teal" /> Onde encontrar a melhor oferta recomendada
              </h3>
              <div className="max-w-md">
                <AffiliateCard product={review.affiliateProducts[0]} />
              </div>
            </section>
          )}

        </div>
      </article>
    );
}
