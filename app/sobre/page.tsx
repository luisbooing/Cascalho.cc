import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mountain, Compass, ShieldCheck, Heart } from 'lucide-react';
import { TEAM_MEMBERS, SITE_MANIFESTO } from '@/lib/data';

export const metadata = {
  title: "Quem Somos — George Volpão, Patricia Fontana & Cascalho.CC",
  description: "Conheça a trajetória de George Volpão nas montanhas brasileiras desde 1995, a coautoria de Patricia Fontana e a proposta editorial do Cascalho.CC.",
};

export default function SobrePage() {
  return (
    <div className="py-12 bg-cascalho-paper space-y-12 min-h-screen">
      
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <header className="text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-cascalho-coral bg-cascalho-sun/30 px-3 py-1 rounded-full">
            Quem Somos & Trajetória
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-cascalho-ink">
            A História por Trás do Cascalho.CC
          </h1>
          <p className="text-base text-cascalho-ink/80 max-w-2xl mx-auto leading-relaxed">
            Uma plataforma autoral de ciclismo gravel, corrida em trilha e pensamento crítico sobre vida ao ar livre.
          </p>
        </header>

        {/* Manifesto em destaque */}
        <div className="bg-cascalho-ink text-cascalho-paper p-8 rounded-3xl border-2 border-cascalho-coral/40 space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-cascalho-sun uppercase tracking-wider">
            <Compass className="w-4 h-4 text-cascalho-coral" /> Manifesto de Origem
          </div>
          <p className="text-base sm:text-lg font-medium italic text-cascalho-paper/90 leading-relaxed">
            "{SITE_MANIFESTO}"
          </p>
        </div>

        {/* Perfis da Equipe (Seção 2 do Briefing Estratégico) */}
        <div className="space-y-8 pt-4">
          <h2 className="text-2xl font-black text-cascalho-ink border-b border-cascalho-ink/15 pb-3">
            Equipe & Coautoria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-cascalho-ink/15 shadow-sm space-y-4">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-cascalho-ink/10">
                  <Image src={member.avatar} alt={member.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase bg-cascalho-sun/40 text-cascalho-ink px-2.5 py-1 rounded">
                    {member.yearsActive}
                  </span>
                  <h3 className="text-xl font-bold text-cascalho-ink mt-2">{member.name}</h3>
                  <p className="text-xs font-semibold text-cascalho-coral">{member.role}</p>
                </div>
                <p className="text-xs text-cascalho-muted leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
