import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mountain, Compass, ShieldCheck } from 'lucide-react';
import { getPosts, getAffiliateProducts } from '@/lib/queries';
import AffiliateCard from '@/components/AffiliateCard';

export const metadata = {
  title: "Vida Outdoor & Montanha — Experiências de Campo",
  description: "Relatos de expedições, equipamentos para vida ao ar livre, sustentabilidade e rotas na Serra do Mar e Brasil.",
};

export default async function OutdoorHubPage() {
  const outdoorArticles = await getPosts();
  const outdoorProducts = await getAffiliateProducts();

  return (
    <div className="py-12 bg-cascalho-paper space-y-12">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cascalho-ink text-cascalho-paper rounded-3xl p-8 sm:p-12 relative overflow-hidden border-2 border-cascalho-lime/40 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-mint opacity-25 cascalho-blob-2 pointer-events-none blur-3xl" />
          
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cascalho-lime text-cascalho-ink font-extrabold text-xs uppercase tracking-wider">
              <Mountain className="w-4 h-4" /> Hub Vida Outdoor
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-cascalho-paper">
              Vida ao Ar Livre, Montanhas & Sustentabilidade
            </h1>

            <p className="text-sm sm:text-base text-cascalho-paper/90 leading-relaxed">
              O lado humano da aventura: deslocamentos conscientes, equipamentos que duram décadas e reflexões sobre a vida fora dos centros urbanos.
            </p>
          </div>
        </div>
      </section>

      {/* Destaques de Vida Outdoor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-black text-cascalho-ink flex items-center gap-2">
            <Compass className="w-6 h-6 text-cascalho-lime" /> Histórias & Relatos de Campo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outdoorArticles.map((art) => (
            <Link
              key={art.id}
              href={`/artigos/${art.slug}`}
              className="bg-white rounded-2xl border border-cascalho-ink/15 overflow-hidden hover:border-cascalho-lime transition duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full">
                  <Image src={art.coverImage} alt={art.title} fill className="object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-extrabold text-cascalho-ink hover:text-cascalho-lime transition">
                    {art.title}
                  </h3>
                  <p className="text-xs text-cascalho-muted line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-cascalho-green border-t border-cascalho-ink/5 mt-3 pt-3">
                <span>{art.readTime}</span>
                <span>Ler relato →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Equipamentos Outdoor Recomendados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-black text-cascalho-ink flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-cascalho-green" /> Equipamentos de Campo Testados
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outdoorProducts.map((prod) => (
            <AffiliateCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

    </div>
  );
}
