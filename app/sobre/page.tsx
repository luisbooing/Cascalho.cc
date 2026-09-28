import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mountain, Compass, ShieldCheck, Heart } from 'lucide-react';
import { SITE_MANIFESTO } from '@/lib/data';
import { getTeamMembers } from '@/lib/queries';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Quem Somos — George Volpão & Cascalho.CC",
  description: "Conheça a trajetória de George Volpão nas montanhas brasileiras desde 1995 e a proposta editorial do Cascalho.CC.",
  keywords: ["George Volpão", "Quem Somos Cascalho CC", "Trajetória Montanhismo", "Curitiba Ciclismo"],
  alternates: {
    canonical: "https://cascalho.cc/sobre",
  },
  openGraph: {
    title: "Quem Somos — Cascalho.CC",
    description: "Plataforma autoral de ciclismo gravel, corrida em trilha e pensamento crítico sobre vida ao ar livre por George Volpão.",
    url: "https://cascalho.cc/sobre",
    siteName: "Cascalho.CC",
    locale: "pt_BR",
    type: "profile",
    images: [{ url: "https://cascalho.cc/logo.png", width: 160, height: 160, alt: "George Volpão — Cascalho.CC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quem Somos — Cascalho.CC",
    description: "Trajetória e manifesto de origem de George Volpão.",
    images: ["https://cascalho.cc/logo.png"],
  },
};

export default async function SobrePage() {
  const teamMembers = await getTeamMembers();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://cascalho.cc"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Sobre",
            "item": "https://cascalho.cc/sobre"
          }
        ]
      },
      {
        "@type": "AboutPage",
        "@id": "https://cascalho.cc/sobre/#webpage",
        "url": "https://cascalho.cc/sobre",
        "name": "Quem Somos — George Volpão & Cascalho.CC",
        "description": "História e trajetória de George Volpão no Cascalho.CC.",
        "isPartOf": {
          "@id": "https://cascalho.cc/#website"
        }
      },
      ...teamMembers.map((member) => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role,
        "sameAs": member.name.includes("George") ? ["https://www.youtube.com/@cascalhocc", "https://www.instagram.com/cascalhocc/"] : undefined
      }))
    ]
  };

  return (
    <div className="py-12 bg-cascalho-paper space-y-12 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
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

        {/* Perfis da Equipe (dinâmico via Sanity CMS) */}
        <div className="space-y-8 pt-4">
          <h2 className="text-2xl font-black text-cascalho-ink border-b border-cascalho-ink/15 pb-3">
            {teamMembers.length > 1 ? 'Equipe & Coautoria' : 'Criador & Autor'}
          </h2>

          <div className={`grid grid-cols-1 ${teamMembers.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'} gap-8`}>
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-3xl border border-cascalho-ink/15 shadow-sm space-y-4">
                {member.avatar && (
                  <div className="relative h-72 w-full rounded-2xl overflow-hidden border border-cascalho-ink/10 bg-cascalho-surface">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <div>
                  {member.yearsActive && (
                    <span className="text-[10px] font-extrabold uppercase bg-cascalho-sun/40 text-cascalho-ink px-2.5 py-1 rounded">
                      {member.yearsActive}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-cascalho-ink mt-2">{member.name}</h3>
                  {member.role && <p className="text-xs font-semibold text-cascalho-coral">{member.role}</p>}
                </div>
                {member.bio && (
                  <p className="text-xs sm:text-sm text-cascalho-muted leading-relaxed font-sans">
                    {member.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}

