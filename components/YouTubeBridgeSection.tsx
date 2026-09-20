import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Youtube, PlayCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { VIDEOS } from '@/lib/data';

export default function YouTubeBridgeSection() {
  const featuredVideo = VIDEOS[0];

  return (
    <section className="py-16 bg-cascalho-ink text-cascalho-paper relative overflow-hidden border-y-4 border-cascalho-teal">
      {/* Background Blob */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-gradient-mint opacity-15 cascalho-blob-2 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cascalho-coral text-white font-extrabold text-xs uppercase tracking-wider mb-2">
              <Youtube className="w-4 h-4" /> Canal Oficial Cascalho.CC
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-cascalho-paper">
              Conteúdo em Vídeo com Vida Longa
            </h2>
            <p className="text-sm text-cascalho-paper/80 max-w-2xl mt-1">
              No YouTube gravamos relatos, straight talk, vlogs e testes. Aqui no site você encontra a página permanente de cada vídeo com resumo, transcrição e capítulos.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@cascalhocc?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-lg transition"
          >
            <Youtube className="w-4 h-4" /> Inscrever-se no Canal →
          </a>
        </div>

        {/* Featured Video Box */}
        {featuredVideo && (
          <div className="bg-white/5 rounded-3xl p-6 lg:p-8 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 relative group">
              <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src={`https://img.youtube.com/vi/${featuredVideo.youtubeId}/hqdefault.jpg`}
                  alt={featuredVideo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-cascalho-coral text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-10 h-10 fill-white text-cascalho-coral ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2.5 py-1 rounded text-xs font-bold text-cascalho-sun flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {featuredVideo.duration}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-cascalho-sun uppercase tracking-wider">
                Vídeo em Destaque
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-cascalho-paper leading-tight">
                {featuredVideo.title}
              </h3>

              <p className="text-xs sm:text-sm text-cascalho-paper/80 leading-relaxed">
                {featuredVideo.summary}
              </p>

              {/* Chapters Preview */}
              {Array.isArray(featuredVideo.chapters) && featuredVideo.chapters.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  <p className="text-[11px] font-bold text-cascalho-lime uppercase tracking-wider">Capítulos principais:</p>
                  <div className="space-y-1 text-xs text-cascalho-paper/90">
                    {featuredVideo.chapters.slice(0, 3).map((ch, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="font-mono text-cascalho-sun font-bold text-[11px]">{ch.time}</span>
                        <span>{ch.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2">
                <Link
                  href={`/videos/${featuredVideo.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cascalho-coral hover:bg-cascalho-magenta text-white font-bold text-xs transition shadow"
                >
                  Ver Página Completa do Vídeo com Transcrição <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
