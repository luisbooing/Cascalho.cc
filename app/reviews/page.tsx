import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { getReviews, getPosts } from '@/lib/queries';

export const metadata = {
  title: "Central de Reviews Metodológicos & Testes de Campo",
  description: "Reviews de produtos de ciclismo gravel, corrida em trilha e vida outdoor testados de verdade no Brasil. Metodologia visível e sem jabá.",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
  const articles = await getPosts();

  return (
    <div className="py-12 bg-cascalho-paper space-y-12">
      
      {/* Header da Central de Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cascalho-ink text-cascalho-paper rounded-3xl p-8 sm:p-12 border-2 border-cascalho-coral/40 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cascalho-coral text-white font-extrabold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Metodologia Visível
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-cascalho-paper">
            Reviews de Campo do Cascalho.CC
          </h1>

          <p className="text-sm sm:text-base text-cascalho-paper/90 max-w-3xl leading-relaxed">
            Cada review aqui publicado responde a 11 critérios rigorosos: horas de uso, terreno, clima, limitações explícitas, perfil indicado e alternativas. Não aceitamos notas pagas.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-cascalho-sun pt-2">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-cascalho-lime" /> Uso real em km acumulados</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-cascalho-teal" /> Limitações declaradas</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-cascalho-orange" /> Isenção editorial total</span>
          </div>
        </div>
      </section>

      {/* Grid de Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl border border-cascalho-ink/15 overflow-hidden shadow-sm hover:border-cascalho-coral transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full bg-cascalho-ink/10">
                  <Image src={rev.coverImage} alt={rev.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-cascalho-coral text-white font-bold text-[11px] uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow">
                    <Star className="w-3.5 h-3.5 fill-white" /> Review Metodológico
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-cascalho-muted font-medium">
                    <span>{rev.category.toUpperCase()}</span>
                    <span>Atualizado em {rev.updatedAt}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-cascalho-ink leading-tight">
                    {rev.title}
                  </h3>

                  <p className="text-xs text-cascalho-muted leading-relaxed">
                    {rev.excerpt}
                  </p>

                  {/* Resumo da metodologia */}
                  <div className="bg-cascalho-surface p-3.5 rounded-xl border border-cascalho-ink/10 text-xs space-y-1.5">
                    <p className="font-bold text-cascalho-ink text-[11px] uppercase tracking-wider text-cascalho-coral">
                      📋 Dados de Teste:
                    </p>
                    <p className="text-cascalho-ink/90 font-semibold">{rev.methodology.productAndVariant}</p>
                    <p className="text-cascalho-muted"><strong>Uso:</strong> {rev.methodology.periodOfUse} ({rev.methodology.distanceOrHours})</p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-2">
                <Link
                  href={`/reviews/${rev.slug}`}
                  className="w-full py-3 px-4 rounded-xl bg-cascalho-ink hover:bg-black text-cascalho-paper font-extrabold text-xs transition flex items-center justify-center gap-2 shadow"
                >
                  <span>Ler Review & Tabela de Critérios</span>
                  <ArrowRight className="w-4 h-4 text-cascalho-sun" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Outros Artigos de Equipamentos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="mb-6">
          <h2 className="text-xl font-black text-cascalho-ink">
            Outros Guias & Análises Editoriais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <Link
              key={art.id}
              href={`/reviews/${art.slug}`}
              className="bg-white p-5 rounded-2xl border border-cascalho-ink/15 hover:border-cascalho-coral transition shadow-sm space-y-2"
            >
              <span className="text-[10px] font-bold uppercase text-cascalho-coral">{art.category}</span>
              <h4 className="text-sm font-bold text-cascalho-ink hover:text-cascalho-coral">{art.title}</h4>
              <p className="text-xs text-cascalho-muted line-clamp-2">{art.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
