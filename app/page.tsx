import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Heart, ShieldCheck, Sparkles, MessageSquare, Compass, CheckCircle } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ProblemSelector from '@/components/ProblemSelector';
import TestedBadgeCard from '@/components/TestedBadgeCard';
import YouTubeBridgeSection from '@/components/YouTubeBridgeSection';
import { getPosts, getReviews, getVideos, getAffiliateProducts, getProblemGuides } from '@/lib/queries';
import { formatDate } from '@/lib/formatters';

export default async function HomePage() {
  const articles = await getPosts();
  const reviews = await getReviews();
  const videos = await getVideos();
  const products = await getAffiliateProducts();
  const problemGuides = await getProblemGuides();

  const featuredReview = reviews[0];
  const featuredArticle = articles[0];

  return (
    <div className="space-y-0">
      
      {/* Bloco 1 — Abertura autoral */}
      <HeroSection />


      {/* Bloco 2 — O que está acontecendo agora */}
      <section className="py-14 bg-cascalho-paper border-b border-cascalho-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-cascalho-teal">
                Últimas publicações
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-cascalho-ink">
                O que está acontecendo agora no Cascalho.CC
              </h2>
            </div>
            <Link
              href="/reviews"
              className="text-xs font-bold text-cascalho-coral hover:text-cascalho-magenta transition flex items-center gap-1"
            >
              Ver todo o acervo →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((art) => (
              <Link
                key={art.id}
                href={`/artigos/${art.slug}`}
                className="group bg-white rounded-2xl border border-cascalho-ink/15 overflow-hidden hover:border-cascalho-coral transition duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-cascalho-ink/10">
                    <Image
                      src={art.coverImage}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-cascalho-ink/90 text-cascalho-sun font-bold text-[10px] uppercase px-2.5 py-1 rounded">
                      {art.category}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-cascalho-muted font-medium">
                      <span>{art.author}</span>
                      <span>•</span>
                      <span>{formatDate(art.publishedAt)}</span>
                    </div>
                    <h3 className="text-base font-extrabold text-cascalho-ink group-hover:text-cascalho-coral transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-cascalho-muted line-clamp-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-cascalho-teal border-t border-cascalho-ink/5 mt-3 pt-3">
                  <span>{art.readTime}</span>
                  <span className="group-hover:translate-x-1 transition-transform">Ler texto →</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Bloco 3 — Escolha pelo problema / momento */}
      <ProblemSelector guides={problemGuides} />

      {/* Bloco 4 — Testado de verdade */}
      <section className="py-14 bg-cascalho-paper border-b border-cascalho-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-cascalho-orange">
              Curadoria de Campo
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-cascalho-ink">
              Equipamentos testados de verdade na terra e no asfalto
            </h2>
          </div>
          
          <TestedBadgeCard review={featuredReview} />
        </div>
      </section>

      {/* Bloco 5 — A história por trás do equipamento (Opinião Autoral) */}
      <section className="py-16 bg-cascalho-surface border-b border-cascalho-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 border border-cascalho-ink/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 relative">
              <div className="relative h-72 w-full rounded-2xl overflow-hidden border border-cascalho-ink/20 shadow">
                <Image
                  src="/sobre/george.jpg"
                  alt="George Volpão — Cascalho.CC"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cascalho-ink/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-cascalho-magenta px-2 py-0.5 rounded">
                    Pensamento & Crítica
                  </span>
                  <p className="text-xs font-bold mt-1">Por George Volpão</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cascalho-magenta">
                <Sparkles className="w-4 h-4" /> Pensamento sem filtro de marca
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-cascalho-ink leading-tight">
                {featuredArticle.title}
              </h3>

              <p className="text-sm text-cascalho-ink/80 leading-relaxed">
                {featuredArticle.subtitle || featuredArticle.excerpt}
              </p>

              <blockquote className="p-4 rounded-xl bg-cascalho-paper border-l-4 border-cascalho-coral italic text-xs text-cascalho-ink/90">
                "Não compramos equipamentos apenas por gramas a menos. Compramos para garantir que a bicicleta não vai falhar a 40 km de qualquer cidade."
              </blockquote>

              <div>
                <Link
                  href={`/artigos/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cascalho-ink hover:bg-black text-cascalho-paper font-bold text-xs transition shadow"
                >
                  Ler Artigo Completo de Pensamento <ArrowRight className="w-4 h-4 text-cascalho-sun" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bloco 6 — Ponte para o YouTube */}
      <YouTubeBridgeSection />

      {/* Bloco 7 — Newsletter & Comunidade */}
      <section className="py-16 bg-cascalho-paper border-b border-cascalho-ink/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="w-14 h-14 rounded-2xl bg-gradient-sunrise p-0.5 mx-auto shadow-md">
            <div className="w-full h-full bg-cascalho-ink rounded-[14px] flex items-center justify-center text-cascalho-sun">
              <MessageSquare className="w-7 h-7" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-cascalho-ink">
            Construa o Cascalho.CC fora dos algoritmos
          </h2>

          <p className="text-base text-cascalho-ink/80 max-w-2xl mx-auto leading-relaxed">
            Receba resumos quinzenais com testes novos, rotas em Curitiba e histórias de montanha sem lotar sua caixa de entrada com spams promocionais.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cascalho-ink/15 shadow-md max-w-2xl mx-auto text-left space-y-4">
            <form className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-cascalho-ink mb-1">Seu melhor e-mail:</label>
                <input
                  type="email"
                  placeholder="exemplo@email.com"
                  className="w-full bg-cascalho-surface border border-cascalho-ink/20 rounded-xl py-3 px-4 text-sm text-cascalho-ink focus:outline-none focus:border-cascalho-coral"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-cascalho-ink mb-1">Qual assunto te interessa mais?</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <label className="flex items-center gap-1.5 p-2 rounded-lg bg-cascalho-surface border border-cascalho-ink/10 cursor-pointer">
                    <input type="radio" name="topic" defaultChecked className="accent-cascalho-coral" />
                    <span>Todos</span>
                  </label>
                  <label className="flex items-center gap-1.5 p-2 rounded-lg bg-cascalho-surface border border-cascalho-ink/10 cursor-pointer">
                    <input type="radio" name="topic" className="accent-cascalho-coral" />
                    <span>Gravel</span>
                  </label>
                  <label className="flex items-center gap-1.5 p-2 rounded-lg bg-cascalho-surface border border-cascalho-ink/10 cursor-pointer">
                    <input type="radio" name="topic" className="accent-cascalho-coral" />
                    <span>Trail</span>
                  </label>
                  <label className="flex items-center gap-1.5 p-2 rounded-lg bg-cascalho-surface border border-cascalho-ink/10 cursor-pointer">
                    <input type="radio" name="topic" className="accent-cascalho-coral" />
                    <span>Reviews</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-cascalho-coral hover:bg-cascalho-magenta text-white font-extrabold text-sm transition shadow-lg"
              >
                Cadastrar na Newsletter Gratuita →
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Bloco 8 — Apoie o projeto (Membresia & Transparência) */}
      <section className="py-16 bg-cascalho-ink text-cascalho-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cascalho-sun text-cascalho-ink font-bold text-xs uppercase tracking-wider">
                <Heart className="w-4 h-4 text-cascalho-coral" /> Sustentabilidade do Projeto
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-cascalho-paper">
                Apoie o Cascalho.CC e ajude a manter nossa independência
              </h2>

              <p className="text-sm text-cascalho-paper/80 leading-relaxed">
                Produzir testes honestos de longa duração e gravar em montanhas exige tempo, combustível e despesas de campo. O apoio dos membros garante que não precisemos aceitar jabás que distorcem a verdade.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CheckCircle className="w-4 h-4 text-cascalho-lime shrink-0" />
                  <span>Acesso antecipado aos vídeos e testes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CheckCircle className="w-4 h-4 text-cascalho-teal shrink-0" />
                  <span>Lives exclusivas de tira-dúvidas de equipamentos</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/apoie"
                  className="px-6 py-3.5 rounded-xl bg-cascalho-coral hover:bg-cascalho-magenta text-white font-bold text-xs transition shadow-lg"
                >
                  Conheça os Planos de Apoio →
                </Link>
                <Link
                  href="/transparencia"
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-cascalho-paper font-semibold text-xs transition border border-white/10"
                >
                  Ler nossa Política de Transparência
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-cascalho-sun">Como monetizamos:</h3>
              <ul className="space-y-3 text-xs text-cascalho-paper/90">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cascalho-coral">1. Membresia:</span> Apoio direto de quem acompanha o trabalho.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cascalho-teal">2. Afiliados:</span> Links com comissão transparente quando indicamos o que usamos.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cascalho-orange">3. Conteúdo aberto:</span> Textos e vídeos gratuitos para todos.
                </li>
              </ul>
              <div className="p-3 bg-cascalho-ink rounded-xl border border-cascalho-sun/20 text-[11px] text-cascalho-sun italic">
                "Se uma recomendação não for útil sem comissão, ela não entra no site."
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
