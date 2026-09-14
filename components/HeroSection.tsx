import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, CheckCircle2, ShieldCheck, PlayCircle, ArrowRight } from 'lucide-react';
import { SITE_MANIFESTO } from '@/lib/data';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cascalho-paper py-16 lg:py-24 border-b border-cascalho-ink/10">
      
      {/* Background Organic Blobs (Visual Identity) */}
      <div className="absolute top-[-10%] right-[-5%] w-[32rem] h-[28rem] bg-gradient-sunrise opacity-30 cascalho-blob-1 pointer-events-none blur-3xl animate-cascalho-float" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[28rem] h-[24rem] bg-gradient-mint opacity-25 cascalho-blob-2 pointer-events-none blur-3xl animate-cascalho-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authorial Title & Vision */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cascalho-ink text-cascalho-sun text-xs font-bold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-cascalho-lime" />
              <span>Plataforma Autoral Independente • Desde 2006</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-cascalho-ink leading-[1.1]">
              Pedalar, correr <br className="hidden sm:block" />
              e <span className="text-transparent bg-clip-text bg-gradient-orbit">pensar.</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-cascalho-ink/80 max-w-2xl leading-relaxed">
              Equipamentos, rotas e histórias de vida ao ar livre nas montanhas e estradas rurais — <strong className="text-cascalho-coral font-bold">testados sem conversa de vendedor</strong>.
            </p>

            {/* Manifesto highlight */}
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-cascalho-ink/15 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-cascalho-magenta uppercase tracking-wider">
                <Compass className="w-4 h-4" /> Manifesto Cascalho.CC
              </div>
              <p className="text-xs sm:text-sm text-cascalho-ink/90 italic leading-relaxed">
                "{SITE_MANIFESTO}"
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/escolhas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cascalho-coral hover:bg-cascalho-magenta text-white font-bold text-sm transition-all shadow-lg hover:shadow-cascalho-coral/30 hover:-translate-y-0.5"
              >
                <Compass className="w-4 h-4" />
                Explorar Equipamentos Testados
              </Link>
              
              <Link
                href="/videos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-cascalho-ink hover:bg-black text-cascalho-paper font-semibold text-sm transition-all shadow-md"
              >
                <PlayCircle className="w-4 h-4 text-cascalho-sun" />
                Assistir no YouTube
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-cascalho-ink/10 text-xs font-medium text-cascalho-ink/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cascalho-teal shrink-0" />
                <span>Testes em condições reais</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cascalho-orange shrink-0" />
                <span>Zero jabá ou patrocínio oculto</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cascalho-magenta shrink-0" />
                <span>Links com comissão transparente</span>
              </div>
            </div>

          </div>

          {/* Right Column: Author Card with Real Visual Presence */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="absolute inset-0 bg-gradient-orbit rounded-3xl transform rotate-3 scale-105 opacity-80 blur-sm" />

              <div className="relative bg-cascalho-ink rounded-3xl p-6 text-cascalho-paper shadow-2xl space-y-5 border border-cascalho-sun/20">
                
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/sobre/george.jpg"
                    alt="George Volpão — Cascalho.CC"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cascalho-ink via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 bg-cascalho-ink/90 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <p className="text-xs font-bold text-cascalho-sun flex items-center justify-between">
                      <span>George Volpão & Patricia Fontana</span>
                      <span className="text-[10px] bg-cascalho-coral/30 text-cascalho-sun px-2 py-0.5 rounded font-mono">Curitiba, PR</span>
                    </p>
                    <p className="text-[11px] text-cascalho-paper/80 mt-0.5">Montanhas, Gravel & Trail Running</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-cascalho-sun font-semibold">
                    <span>Voz autoral e independente</span>
                    <span>1.200+ km testados/mês</span>
                  </div>
                  <p className="text-xs text-cascalho-paper/90 leading-relaxed">
                    "Aqui não tem ficha técnica copiada da fábrica. Falamos o que funciona na terra molhada, o que quebra na serra e o que você nem precisa comprar."
                  </p>
                </div>

                <Link
                  href="/sobre"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-cascalho-teal/30 text-xs font-bold text-cascalho-paper transition border border-white/10 group"
                >
                  <span>Conheça nossa trajetória desde 1995</span>
                  <ArrowRight className="w-4 h-4 text-cascalho-sun group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
