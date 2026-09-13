import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Footprints, Mountain, ShieldCheck, Star } from 'lucide-react';
import { getPosts, getReviews, getAffiliateProducts } from '@/lib/queries';
import AffiliateCard from '@/components/AffiliateCard';

export const metadata = {
  title: "Trail Running — Corrida em Trilha, Mochilas e Montanha",
  description: "Dicas de transição do asfalto para a trilha, escolha de coletes de hidratação, tênis para solo técnico e prevenção de lesões nas montanhas.",
};

export default async function TrailRunningHubPage() {
  const articles = await getPosts();
  const reviews = await getReviews();
  const products = await getAffiliateProducts();

  const trailArticles = articles.filter((art) => art.category === 'trail-running');
  const trailReviews = reviews.filter((rev) => rev.category === 'trail-running');
  const trailProducts = products.filter((prod) => prod.category === 'trail-running');

  return (
    <div className="py-12 bg-cascalho-paper space-y-12">
      
      {/* Hero do Hub Trail Running */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cascalho-ink text-cascalho-paper rounded-3xl p-8 sm:p-12 relative overflow-hidden border-2 border-cascalho-orange/40 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-orbit opacity-20 cascalho-blob-1 pointer-events-none blur-3xl" />
          
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cascalho-orange text-white font-extrabold text-xs uppercase tracking-wider">
              <Footprints className="w-4 h-4" /> Hub Trail Running
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-cascalho-paper">
              Corrida em Trilha & Montanha
            </h1>

            <p className="text-sm sm:text-base text-cascalho-paper/90 leading-relaxed font-sans">
              Como correr fora do asfalto sem lesões, escolha da primeira mochila vest, tênis com grip de verdade e segurança na serra.
            </p>
          </div>
        </div>
      </section>

      {/* Artigos e Treinos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-bold text-cascalho-ink flex items-center gap-2">
            <Mountain className="w-6 h-6 text-cascalho-orange" /> Artigos & Dicas de Trail Running
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trailArticles.map((art) => (
            <Link
              key={art.id}
              href={`/reviews/${art.slug}`}
              className="bg-white rounded-2xl border border-cascalho-ink/15 overflow-hidden hover:border-cascalho-orange transition duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full">
                  <Image src={art.coverImage} alt={art.title} fill className="object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-extrabold text-cascalho-ink hover:text-cascalho-orange transition">
                    {art.title}
                  </h3>
                  <p className="text-xs text-cascalho-muted line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-cascalho-orange border-t border-cascalho-ink/5 mt-3 pt-3">
                <span>{art.readTime}</span>
                <span>Ler artigo →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews de Trail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-bold text-cascalho-ink flex items-center gap-2">
            <Star className="w-6 h-6 text-cascalho-magenta" /> Reviews de Equipamentos de Trilha
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trailReviews.map((rev) => (
            <div key={rev.id} className="bg-cascalho-surface p-6 rounded-2xl border border-cascalho-ink/15 space-y-4">
              <span className="text-[10px] font-bold uppercase bg-cascalho-orange text-white px-2.5 py-1 rounded">
                Testado por {rev.methodology.periodOfUse}
              </span>
              <h3 className="text-xl font-serif font-bold text-cascalho-ink">{rev.title}</h3>
              <p className="text-xs text-cascalho-muted">{rev.excerpt}</p>
              <Link
                href={`/reviews/${rev.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-cascalho-orange hover:underline"
              >
                Ver Veredito Completo →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Produtos Recomendados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-bold text-cascalho-ink flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-cascalho-teal" /> Escolhas de Trail Recomendadas
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trailProducts.map((prod) => (
            <AffiliateCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

    </div>
  );
}
