import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Youtube, PlayCircle, Clock, ArrowRight } from 'lucide-react';
import { getVideos } from '@/lib/queries';

export const metadata = {
  title: "Arquivo de Vídeos do YouTube — Páginas Permanentes",
  description: "Páginas completas dos vídeos do Cascalho.CC no YouTube com capítulos, transcrições editadas e links dos produtos citados.",
};

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <div className="py-12 bg-cascalho-paper space-y-12">
      
      {/* Header do Arquivo de Vídeos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cascalho-ink text-cascalho-paper rounded-3xl p-8 sm:p-12 border-2 border-red-600/40 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider">
            <Youtube className="w-4 h-4" /> YouTube ↔ Site
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-cascalho-paper">
            Arquivo de Vídeos Permanentes
          </h1>

          <p className="text-sm sm:text-base text-cascalho-paper/90 max-w-3xl leading-relaxed">
            Cada vídeo publicado no canal tem sua própria página indexada no site com player, minutagem por capítulos, transcrição editada e os produtos citados.
          </p>

          <a
            href="https://www.youtube.com/@cascalhocc?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow transition"
          >
            <Youtube className="w-4 h-4" /> Se inscrever no canal do YouTube →
          </a>
        </div>
      </section>

      {/* Grid de Vídeos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((vid) => (
            <div
              key={vid.id}
              className="bg-white rounded-3xl border border-cascalho-ink/15 overflow-hidden shadow-sm hover:border-red-600 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full bg-black group">
                  <Image
                    src={`https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                    alt={vid.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl">
                      <PlayCircle className="w-8 h-8 fill-white text-red-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2.5 py-1 rounded text-xs font-bold text-cascalho-sun flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {vid.duration}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-cascalho-muted font-medium">
                    <span>Publicado em {vid.publishedAt}</span>
                    <span>{vid.chapters.length} Capítulos</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-cascalho-ink leading-tight">
                    {vid.title}
                  </h3>

                  <p className="text-xs text-cascalho-muted leading-relaxed">
                    {vid.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/videos/${vid.slug}`}
                  className="w-full py-3 px-4 rounded-xl bg-cascalho-ink hover:bg-black text-cascalho-paper font-extrabold text-xs transition flex items-center justify-center gap-2 shadow"
                >
                  <span>Ver Página do Vídeo & Transcrição</span>
                  <ArrowRight className="w-4 h-4 text-cascalho-sun" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
