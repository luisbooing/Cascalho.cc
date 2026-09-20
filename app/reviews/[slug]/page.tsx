import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { ShieldCheck, CheckCircle2, AlertTriangle, Clock, ArrowLeft, ExternalLink, ThumbsUp, ThumbsDown, Info } from 'lucide-react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { getReviewBySlug, getPostBySlug, getReviews, getPosts } from '@/lib/queries';
import AffiliateCard from '@/components/AffiliateCard';
import { urlFor } from '@/sanity/image';
import { formatDate } from '@/lib/formatters';

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

  const methodology = review.methodology || {};
  const strongPoints = (review.pros && review.pros.length > 0) ? review.pros : (methodology.strongPoints || []);
  const limitations = (review.cons && review.cons.length > 0) ? review.cons : (methodology.limitations || []);
  const productAndVariant = methodology.productAndVariant || review.productName || review.title;
  const periodOfUse = methodology.periodOfUse;
  const distanceOrHours = methodology.distanceOrHours;
  const terrainAndWeather = methodology.terrainAndWeather || methodology.terrain;
  const configuration = methodology.configuration;
  const indicatedFor = methodology.indicatedFor || review.verdict;
  const alternatives = methodology.alternatives || [];
  const priceAndDate = methodology.priceAndDate;

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
                {review.category || 'Review'}
              </span>
              <span>•</span>
              <span>Testado por {review.author || 'George Volpão'}</span>
              <span>•</span>
              <span className="text-cascalho-muted">Atualizado em {formatDate(review.updatedAt || review.publishedAt || new Date().toISOString())}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cascalho-ink leading-tight">
              {review.title}
            </h1>

            {review.excerpt && (
              <p className="text-base sm:text-lg text-cascalho-ink/80 leading-relaxed font-medium">
                {review.excerpt}
              </p>
            )}
          </header>

          {/* Cover Image */}
          {review.coverImage && (
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
          )}

          {/* 📋 Tabela Metodológica Completa de Teste de Campo */}
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
                <span className="text-white font-medium">{productAndVariant}</span>
              </div>

              {periodOfUse && (
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-cascalho-sun font-bold block mb-0.5">2. Período de Uso:</span>
                  <span className="text-white font-medium">{periodOfUse}</span>
                </div>
              )}

              {distanceOrHours && (
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-cascalho-sun font-bold block mb-0.5">3. Distância / Horas Acumuladas:</span>
                  <span className="text-white font-medium">{distanceOrHours}</span>
                </div>
              )}

              {terrainAndWeather && (
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-cascalho-sun font-bold block mb-0.5">4. Terreno e Clima de Teste:</span>
                  <span className="text-white font-medium">{terrainAndWeather}</span>
                </div>
              )}

              {configuration && (
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 sm:col-span-2">
                  <span className="text-cascalho-sun font-bold block mb-0.5">5. Configuração / Ajuste Utilizado:</span>
                  <span className="text-white font-medium">{configuration}</span>
                </div>
              )}
            </div>

            {/* Critérios avaliados */}
            {Array.isArray(methodology.criteria) && methodology.criteria.length > 0 && (
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
          {(strongPoints.length > 0 || limitations.length > 0) && (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Pontos Fortes */}
              <div className="bg-cascalho-surface p-6 rounded-2xl border-2 border-cascalho-teal/40 space-y-3">
                <h3 className="text-base font-extrabold text-cascalho-ink flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5 text-cascalho-teal" /> 7. Onde o produto entrega (Pontos Fortes)
                </h3>
                {strongPoints.length > 0 ? (
                  <ul className="space-y-2 text-xs text-cascalho-ink/90">
                    {strongPoints.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cascalho-teal font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-cascalho-muted italic">Nenhum ponto forte destacado.</p>
                )}
              </div>

              {/* Limitações */}
              <div className="bg-cascalho-surface p-6 rounded-2xl border-2 border-cascalho-orange/40 space-y-3">
                <h3 className="text-base font-extrabold text-cascalho-ink flex items-center gap-2">
                  <ThumbsDown className="w-5 h-5 text-cascalho-coral" /> 8. Onde decepciona (Limitações)
                </h3>
                {limitations.length > 0 ? (
                  <ul className="space-y-2 text-xs text-cascalho-ink/90">
                    {limitations.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-cascalho-coral shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-cascalho-muted italic">Nenhuma limitação grave observada.</p>
                )}
              </div>

            </section>
          )}

          {/* Perfil Indicado & Alternativas */}
          {(indicatedFor || alternatives.length > 0 || priceAndDate) && (
            <section className="bg-white p-6 rounded-2xl border border-cascalho-ink/15 space-y-4">
              {indicatedFor && (
                <div>
                  <h4 className="text-sm font-extrabold text-cascalho-ink uppercase tracking-wider text-cascalho-coral">
                    9. Perfil Indicado (Para quem faz sentido):
                  </h4>
                  <p className="text-xs sm:text-sm text-cascalho-ink/90 mt-1 font-medium leading-relaxed">
                    {indicatedFor}
                  </p>
                </div>
              )}

              {alternatives.length > 0 && (
                <div className="pt-3 border-t border-cascalho-ink/10">
                  <h4 className="text-sm font-extrabold text-cascalho-ink uppercase tracking-wider text-cascalho-teal">
                    10. Alternativas no Mercado:
                  </h4>
                  <ul className="list-disc list-inside text-xs text-cascalho-muted mt-1 space-y-1">
                    {alternatives.map((alt: string, idx: number) => (
                      <li key={idx}>{alt}</li>
                    ))}
                  </ul>
                </div>
              )}

              {priceAndDate && (
                <div className="pt-3 border-t border-cascalho-ink/10 text-xs text-cascalho-muted flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cascalho-sun" />
                  <span><strong>11. Verificação de preço:</strong> {priceAndDate}</span>
                </div>
              )}
            </section>
          )}


          {/* Conteúdo Modular do Review (se preenchido no CMS) */}
          {Array.isArray(review.modules) && review.modules.length > 0 ? (
            <section className="bg-white p-6 sm:p-10 rounded-3xl border border-cascalho-ink/15 shadow-sm space-y-8">
              <h3 className="text-xl font-black text-cascalho-ink border-b border-cascalho-ink/10 pb-3">
                Análise Detalhada em Campo
              </h3>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {review.modules.map((module: any, idx: number) => {
                if (module._type === 'textBlock' && module.text) {
                  return (
                    <div key={module._key || idx} className="prose prose-lg max-w-none">
                      <PortableText value={module.text} />
                    </div>
                  );
                }
                if (module._type === 'imageBlock') {
                  const imgUrl = module.imageUrl || (module.image ? urlFor(module.image).url() : '');
                  if (!imgUrl) return null;
                  return (
                    <figure key={module._key || idx} className="my-8 rounded-2xl overflow-hidden border border-cascalho-ink/15 shadow-sm">
                      <Image
                        src={imgUrl}
                        alt={module.alt || 'Foto do teste'}
                        width={1200}
                        height={675}
                        className="w-full h-auto max-h-[500px] object-cover"
                      />
                      {module.caption && (
                        <figcaption className="p-3 text-center text-xs text-cascalho-muted bg-cascalho-surface border-t border-cascalho-ink/10">
                          {module.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                if (module._type === 'customTable') {
                  let headers: string[] = [];
                  let rows: string[][] = [];
                  if (Array.isArray(module.headers) && module.headers.length > 0) {
                    headers = module.headers;
                  } else if (module.headersText) {
                    headers = module.headersText.split(/\||,/).map((s: string) => s.trim()).filter(Boolean);
                  }
                  if (Array.isArray(module.rows) && module.rows.length > 0) {
                    rows = module.rows.map((r: any) => (Array.isArray(r?.cells) ? r.cells : []));
                  } else if (module.rowsText) {
                    const lines = module.rowsText.split('\n').map((l: string) => l.trim()).filter(Boolean);
                    rows = lines.map((line: string) => line.split('|').map((s: string) => s.trim()));
                  }
                  if (headers.length === 0 && rows.length === 0) return null;
                  return (
                    <div key={module._key || idx} className="my-8 overflow-x-auto rounded-2xl border border-cascalho-ink/20 bg-white shadow-sm">
                      {module.caption && (
                        <div className="px-5 py-3 font-extrabold text-xs sm:text-sm text-cascalho-ink bg-cascalho-surface border-b border-cascalho-ink/15">
                          📊 {module.caption}
                        </div>
                      )}
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        {headers.length > 0 && (
                          <thead>
                            <tr className="bg-cascalho-ink text-cascalho-paper font-bold border-b border-cascalho-ink/10">
                              {headers.map((h: string, i: number) => (
                                <th key={i} className="p-3.5 sm:p-4 font-extrabold border-r last:border-r-0 border-white/10">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                        )}
                        <tbody className="divide-y divide-cascalho-ink/10 text-cascalho-ink/90">
                          {rows.map((cells: string[], rIdx: number) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-cascalho-paper/40'}>
                              {cells.map((cell: string, cIdx: number) => (
                                <td key={cIdx} className="p-3.5 sm:p-4 font-medium border-r last:border-r-0 border-cascalho-ink/10">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                if (module._type === 'calloutBox') {
                  const type = module.type || 'info';
                  const styles: Record<string, { bg: string; border: string; text: string; icon: string }> = {
                    info: { bg: 'bg-cascalho-teal/10', border: 'border-cascalho-teal', text: 'text-cascalho-teal', icon: '💡' },
                    warning: { bg: 'bg-cascalho-coral/10', border: 'border-cascalho-coral', text: 'text-cascalho-coral', icon: '⚠️' },
                    tip: { bg: 'bg-cascalho-orange/10', border: 'border-cascalho-orange', text: 'text-cascalho-orange', icon: '📌' },
                    quote: { bg: 'bg-cascalho-paper', border: 'border-cascalho-magenta', text: 'text-cascalho-magenta', icon: '💬' },
                  };
                  const style = styles[type] || styles.info;
                  return (
                    <div key={module._key || idx} className={`my-8 p-5 sm:p-6 rounded-2xl border-l-4 ${style.border} ${style.bg} shadow-sm space-y-2`}>
                      {module.title && (
                        <h4 className={`text-sm sm:text-base font-extrabold flex items-center gap-2 ${style.text}`}>
                          <span>{style.icon}</span> {module.title}
                        </h4>
                      )}
                      <p className="text-sm sm:text-base text-cascalho-ink/90 font-medium leading-relaxed font-sans">
                        {module.text}
                      </p>
                    </div>
                  );
                }
                return null;
              })}
            </section>
          ) : Array.isArray(review.content) && review.content.length > 0 ? (
            <section className="bg-white p-6 sm:p-10 rounded-3xl border border-cascalho-ink/15 shadow-sm">
              <h3 className="text-xl font-black text-cascalho-ink mb-6 border-b border-cascalho-ink/10 pb-3">
                Análise Detalhada em Campo
              </h3>
              <div className="prose prose-lg max-w-none">
                <PortableText
                  value={review.content}
                  components={{
                    types: {
                      image: ({ value }: { value: any }) => {
                        if (!value?.asset?._ref && !value?.asset?.url) return null;
                        const imageUrl = value.asset?.url || (value ? urlFor(value).url() : '');
                        if (!imageUrl) return null;
                        return (
                          <figure className="my-8 rounded-2xl overflow-hidden border border-cascalho-ink/15 shadow-sm">
                            <Image
                              src={imageUrl}
                              alt={value.alt || 'Foto do teste'}
                              width={1200}
                              height={675}
                              className="w-full h-auto max-h-[500px] object-cover"
                            />
                            {value.caption && (
                              <figcaption className="p-3 text-center text-xs text-cascalho-muted bg-cascalho-surface border-t border-cascalho-ink/10">
                                {value.caption}
                              </figcaption>
                            )}
                          </figure>
                        );
                      },
                      customTable: ({ value }: { value: any }) => {
                        if (!value) return null;
                        let headers: string[] = [];
                        let rows: string[][] = [];
                        if (Array.isArray(value.headers) && value.headers.length > 0) {
                          headers = value.headers;
                        } else if (value.headersText) {
                          headers = value.headersText.split(/\||,/).map((s: string) => s.trim()).filter(Boolean);
                        }
                        if (Array.isArray(value.rows) && value.rows.length > 0) {
                          rows = value.rows.map((r: any) => (Array.isArray(r?.cells) ? r.cells : []));
                        } else if (value.rowsText) {
                          const lines = value.rowsText.split('\n').map((l: string) => l.trim()).filter(Boolean);
                          rows = lines.map((line: string) => line.split('|').map((s: string) => s.trim()));
                        }
                        if (headers.length === 0 && rows.length === 0) return null;
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
                                {rows.map((cells: string[], rIdx: number) => (
                                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-cascalho-paper/40'}>
                                    {cells.map((cell: string, cIdx: number) => (
                                      <td key={cIdx} className="p-3.5 sm:p-4 font-medium border-r last:border-r-0 border-cascalho-ink/10">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      },
                      calloutBox: ({ value }: { value: any }) => {
                        if (!value) return null;
                        const type = value.type || 'info';
                        const styles: Record<string, { bg: string; border: string; text: string; icon: string }> = {
                          info: { bg: 'bg-cascalho-teal/10', border: 'border-cascalho-teal', text: 'text-cascalho-teal', icon: '💡' },
                          warning: { bg: 'bg-cascalho-coral/10', border: 'border-cascalho-coral', text: 'text-cascalho-coral', icon: '⚠️' },
                          tip: { bg: 'bg-cascalho-orange/10', border: 'border-cascalho-orange', text: 'text-cascalho-orange', icon: '📌' },
                          quote: { bg: 'bg-cascalho-paper', border: 'border-cascalho-magenta', text: 'text-cascalho-magenta', icon: '💬' },
                        };
                        const style = styles[type] || styles.info;
                        return (
                          <div className={`my-8 p-5 sm:p-6 rounded-2xl border-l-4 ${style.border} ${style.bg} shadow-sm space-y-2`}>
                            {value.title && (
                              <h4 className={`text-sm sm:text-base font-extrabold flex items-center gap-2 ${style.text}`}>
                                <span>{style.icon}</span> {value.title}
                              </h4>
                            )}
                            <p className="text-sm sm:text-base text-cascalho-ink/90 font-medium leading-relaxed">
                              {value.text}
                            </p>
                          </div>
                        );
                      },
                    },
                    block: {
                      h2: ({ children }) => <h2 className="text-2xl font-serif font-bold text-cascalho-ink mt-8 mb-4">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-xl font-serif font-bold text-cascalho-ink mt-6 mb-3">{children}</h3>,
                      normal: ({ children }) => <p className="text-base leading-relaxed text-cascalho-ink/90 mb-4 font-sans">{children}</p>,
                    },
                  }}
                />
              </div>
            </section>
          ) : null}

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {review.affiliateProducts.map((prod, idx) => (
                  <AffiliateCard key={prod.id || idx} product={prod} />
                ))}
              </div>
            </section>
          )}

        </div>
      </article>
    );
}
