import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bike, Compass, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { getPosts, getReviews, getAffiliateProducts } from '@/lib/queries';
import AffiliateCard from '@/components/AffiliateCard';

export const metadata = {
  title: "Gravel — Bicicletas, Pneus, Rotas e Dicas Práticas",
  description: "Tudo sobre pedal gravel no Brasil: bikes de entrada, comparativos de pneus para cascalho e lama, pressão correta e relatos de rota.",
};

export default async function GravelHubPage() {
  const articles = await getPosts();
  const reviews = await getReviews();
  const products = await getAffiliateProducts();

  const gravelArticles = articles.filter((art) => art.category === 'gravel');
  const gravelReviews = reviews.filter((rev) => rev.category === 'gravel');
  const gravelProducts = products.filter((prod) => prod.category === 'gravel');

  return (
    <div className="py-12 bg-cascalho-paper space-y-12">
      
      {/* Hero do Hub Gravel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cascalho-ink text-cascalho-paper rounded-3xl p-8 sm:p-12 relative overflow-hidden border-2 border-cascalho-teal/40 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-mint opacity-20 cascalho-blob-1 pointer-events-none blur-3xl" />
          
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cascalho-teal text-white font-extrabold text-xs uppercase tracking-wider">
              <Bike className="w-4 h-4" /> Hub Temático Gravel
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-cascalho-paper">
              Gravel no Brasil: Pedalar na terra sem gourmetização
            </h1>

            <p className="text-sm sm:text-base text-cascalho-paper/90 leading-relaxed">
              Guias de bicicletas de entrada, testes de pneus sob lama e cascalho afiado, adaptação de componentes e rotas rurais reais.
            </p>
          </div>
        </div>
      </section>

      {/* Artigos e Guias Principais */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-black text-cascalho-ink flex items-center gap-2">
            <Compass className="w-6 h-6 text-cascalho-teal" /> Guias & Artigos de Gravel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gravelArticles.map((art) => (
            <Link
              key={art.id}
              href={`/artigos/${art.slug}`}
              className="bg-white rounded-2xl border border-cascalho-ink/15 overflow-hidden hover:border-cascalho-teal transition duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full">
                  <Image src={art.coverImage} alt={art.title} fill className="object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-extrabold text-cascalho-ink hover:text-cascalho-teal transition">
                    {art.title}
                  </h3>
                  <p className="text-xs text-cascalho-muted line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-cascalho-teal border-t border-cascalho-ink/5 mt-3 pt-3">
                <span>{art.readTime}</span>
                <span>Ler guia completo →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews de Longa Duração */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-black text-cascalho-ink flex items-center gap-2">
            <Star className="w-6 h-6 text-cascalho-coral" /> Reviews de Pneus e Componentes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gravelReviews.map((rev) => (
            <div key={rev.id} className="bg-cascalho-surface p-6 rounded-2xl border border-cascalho-ink/15 space-y-4">
              <span className="text-[10px] font-bold uppercase bg-cascalho-coral text-white px-2.5 py-1 rounded">
                Testado por {rev.methodology.periodOfUse}
              </span>
              <h3 className="text-xl font-bold text-cascalho-ink">{rev.title}</h3>
              <p className="text-xs text-cascalho-muted">{rev.excerpt}</p>
              <Link
                href={`/reviews/${rev.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-cascalho-coral hover:underline"
              >
                Ver Veredito & Metodologia →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Vitrine de Equipamentos Recomendados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-black text-cascalho-ink flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-cascalho-lime" /> Escolhas Recomendadas para Gravel
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gravelProducts.map((prod) => (
            <AffiliateCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

    </div>
  );
}
