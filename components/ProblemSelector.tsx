import React from 'react';
import Link from 'next/link';
import { Bike, Footprints, ShieldAlert, ShoppingBag, Compass, ArrowUpRight } from 'lucide-react';
import { PROBLEM_GUIDES } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  Bike: Bike,
  Compass: Compass,
  Footprints: Footprints,
  ShieldAlert: ShieldAlert,
  ShoppingBag: ShoppingBag,
};

export default function ProblemSelector() {
  return (
    <section className="py-14 bg-cascalho-surface border-b border-cascalho-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-cascalho-magenta bg-cascalho-sun/30 px-3 py-1 rounded-full">
            Qual é o seu objetivo hoje?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-cascalho-ink">
            Escolha pelo seu momento ou necessidade real
          </h2>
          <p className="text-sm text-cascalho-muted">
            Entradas diretas sem te obrigar a ler 10 parágrafos antes de encontrar o que procura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_GUIDES.map((guide) => {
            const IconComponent = iconMap[guide.iconName] || Compass;

            return (
              <Link
                key={guide.id}
                href={`/reviews/${guide.targetSlug}`}
                className="group relative bg-cascalho-paper p-6 rounded-2xl border border-cascalho-ink/15 hover:border-cascalho-coral transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-cascalho-ink text-cascalho-sun flex items-center justify-center group-hover:bg-cascalho-coral group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-extrabold text-cascalho-ink group-hover:text-cascalho-coral transition-colors flex items-center justify-between">
                    <span>{guide.problemTitle}</span>
                    <ArrowUpRight className="w-4 h-4 text-cascalho-muted group-hover:text-cascalho-coral group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>

                  <p className="text-xs text-cascalho-muted leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-cascalho-ink/10 flex items-center justify-between text-[11px] font-bold text-cascalho-teal">
                  <span className="uppercase tracking-wider">Ver Guia Direto</span>
                  <span className="text-cascalho-coral group-hover:underline">Ler relato →</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
