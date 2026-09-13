import React from 'react';
import { ShieldCheck, Compass, Info } from 'lucide-react';
import { getAffiliateProducts } from '@/lib/queries';
import AffiliateCard from '@/components/AffiliateCard';

export const metadata = {
  title: "Escolhas do Cascalho — Equipamentos Testados que Fazem Sentido",
  description: "Curadoria de equipamentos de ciclismo gravel, corrida em trilha e vida outdoor testados de verdade com links comissionados transparentes.",
};

export default async function EscolhasPage() {
  const products = await getAffiliateProducts();

  return (
    <div className="py-12 bg-cascalho-paper space-y-12 min-h-screen">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cascalho-ink text-cascalho-paper rounded-3xl p-8 sm:p-12 border-2 border-cascalho-sun/40 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cascalho-sun text-cascalho-ink font-black text-xs uppercase tracking-wider">
            <Compass className="w-4 h-4 text-cascalho-coral" /> Curadoria Autoral
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-cascalho-paper">
            Escolhas do Cascalho.CC
          </h1>

          <p className="text-sm sm:text-base text-cascalho-paper/90 max-w-3xl leading-relaxed">
            Recomendamos poucos equipamentos com contexto, método, limitações declaradas e transparência sobre comissão. Não transformamos o site em um catálogo infinito.
          </p>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-cascalho-sun flex items-start gap-2 max-w-2xl">
            <Info className="w-4 h-4 text-cascalho-coral shrink-0 mt-0.5" />
            <span>
              <strong>Aviso legal de comissão:</strong> Ao comprar através dos botões abaixo, o Cascalho.CC pode receber uma comissão sem custo adicional para você. O valor da comissão nunca determina nossa recomendação editorial.
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <AffiliateCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
}
