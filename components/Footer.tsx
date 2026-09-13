'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Youtube, Instagram, Mail, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { SITE_MANIFESTO } from '@/lib/data';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [preference, setPreference] = useState('todos');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-cascalho-ink text-cascalho-paper relative overflow-hidden border-t-4 border-cascalho-coral">
      {/* Background Organic Decorative Blob */}
      <div 
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-orbit opacity-15 cascalho-blob-1 pointer-events-none blur-2xl"
      />
      <div 
        className="absolute top-10 -left-20 w-80 h-80 bg-gradient-mint opacity-10 cascalho-blob-2 pointer-events-none blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Manifesto & Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black text-cascalho-paper tracking-tight">
                CASCALHO<span className="text-cascalho-coral">.CC</span>
              </span>
              <p className="text-xs font-semibold text-cascalho-sun">pedalar • correr • pensar</p>
            </Link>

            <p className="text-xs text-cascalho-paper/80 leading-relaxed font-normal italic bg-white/5 p-3.5 rounded-xl border border-white/10">
              "{SITE_MANIFESTO}"
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.youtube.com/@cascalhocc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cascalho-coral text-cascalho-paper hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube do Cascalho.CC"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/cascalhocc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cascalho-magenta text-cascalho-paper hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram do Cascalho.CC"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@cascalho.cc"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cascalho-teal text-cascalho-paper hover:text-white flex items-center justify-center transition-colors"
                aria-label="E-mail de Contato"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Editoriais */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-cascalho-sun border-b border-cascalho-sun/20 pb-2">
              Navegação Editorial
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/gravel" className="hover:text-cascalho-coral transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cascalho-teal"></span> Gravel (Equipamentos & Rotas)
                </Link>
              </li>
              <li>
                <Link href="/trail-running" className="hover:text-cascalho-coral transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cascalho-orange"></span> Trail Running & Montanha
                </Link>
              </li>
              <li>
                <Link href="/vida-outdoor" className="hover:text-cascalho-coral transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cascalho-lime"></span> Vida Outdoor & Campo
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-cascalho-coral transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cascalho-magenta"></span> Reviews Metodológicos
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-cascalho-coral transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cascalho-pink"></span> Arquivo de Vídeos YouTube
                </Link>
              </li>
              <li>
                <Link href="/escolhas" className="hover:text-cascalho-coral transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cascalho-sun"></span> Vitrine Escolhas do Cascalho
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Transparência & Projeto */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-cascalho-sun border-b border-cascalho-sun/20 pb-2">
              Transparência & Apoio
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/sobre" className="hover:text-cascalho-sun transition">
                  Sobre George Volpão & Patricia
                </Link>
              </li>
              <li>
                <Link href="/apoie" className="hover:text-cascalho-coral transition font-bold text-cascalho-coral flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5" /> Apoie a Membresia do Canal
                </Link>
              </li>
              <li>
                <Link href="/transparencia" className="hover:text-cascalho-sun transition flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cascalho-teal" /> Política de Afiliados & CDC
                </Link>
              </li>
              <li>
                <Link href="/transparencia#metodologia" className="hover:text-cascalho-sun transition">
                  Metodologia de Testes de Campo
                </Link>
              </li>
              <li>
                <Link href="/transparencia#privacidade" className="hover:text-cascalho-sun transition">
                  Privacidade & Cookies (ANPD)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter sem Spams */}
          <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-cascalho-paper flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-cascalho-coral" /> Newsletter Sem Jabá
            </h3>
            <p className="text-[11px] text-cascalho-paper/80 leading-snug">
              Resumo quinzenal de testes reais, vídeos novos e histórias de montanha na sua caixa de entrada.
            </p>

            {subscribed ? (
              <div className="bg-cascalho-teal/20 border border-cascalho-teal p-3 rounded-xl text-center">
                <p className="text-xs font-bold text-cascalho-lime">Inscrição confirmada!</p>
                <p className="text-[10px] text-cascalho-paper/80 mt-1">Você receberá apenas conteúdos úteis.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 text-cascalho-paper placeholder-cascalho-muted text-xs border border-white/20 rounded-lg py-2 px-3 focus:outline-none focus:border-cascalho-coral"
                />

                <select
                  value={preference}
                  onChange={(e) => setPreference(e.target.value)}
                  className="w-full bg-black/50 text-cascalho-paper text-[11px] border border-white/20 rounded-lg py-1.5 px-2 focus:outline-none focus:border-cascalho-coral"
                >
                  <option value="todos">Todos os temas (Gravel + Trail + Outdoor)</option>
                  <option value="gravel">Somente Gravel</option>
                  <option value="trail">Somente Trail Running</option>
                  <option value="reviews">Somente Reviews de Equipamentos</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-cascalho-coral hover:bg-cascalho-magenta text-white font-bold text-xs py-2 rounded-lg transition flex items-center justify-center gap-1 shadow-md"
                >
                  Cadastrar Grátis <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 text-[11px] text-cascalho-paper/60">
          <p>© {new Date().getFullYear()} Cascalho.CC — Desenvolvido de forma autônoma para George Volpão & Patricia Fontana.</p>
          <p className="max-w-md">
            As marcas registradas citadas pertencem aos seus respectivos proprietários. Links comissionados ajudam a manter a independência do projeto sem custo adicional aos leitores.
          </p>
        </div>
      </div>
    </footer>
  );
}
