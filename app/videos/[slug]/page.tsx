import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Youtube, Clock, ArrowLeft, ShieldCheck, ListOrdered, FileText, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { getVideoBySlug, getVideos } from '@/lib/queries';
import AffiliateCard from '@/components/AffiliateCard';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const videos = await getVideos();
  return videos.map((v) => ({ slug: v.slug }));
}

export default async function VideoDetailPage({ params }: Props) {
  const video = await getVideoBySlug(params.slug);

  if (!video) {
    notFound();
  }

  return (
    <article className="py-12 bg-cascalho-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back button */}
        <Link
          href="/videos"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para o Arquivo de Vídeos
        </Link>

        {/* Video Header */}
        <header className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-red-600">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full uppercase flex items-center gap-1">
              <Youtube className="w-3.5 h-3.5" /> YouTube Watch Page
            </span>
            <span>•</span>
            <span className="text-cascalho-muted">{video.publishedAt}</span>
            <span>•</span>
            <span className="text-cascalho-muted">{video.duration}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-cascalho-ink leading-tight">
            {video.title}
          </h1>

          <p className="text-base text-cascalho-ink/80 leading-relaxed font-medium">
            {video.summary}
          </p>
        </header>

        {/* YouTube Responsive Iframe Player */}
        {(() => {
          const rawYt = video.youtubeId || video.youtubeUrl || '';
          const match = rawYt.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
          const ytId = match ? match[1] : rawYt;

          return (
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border-2 border-cascalho-ink/20 shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${ytId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          );
        })()}

        {/* Capítulos do Vídeo (Briefing Seção 7) */}
        {Array.isArray(video.chapters) && video.chapters.length > 0 && (
          <section className="bg-white p-6 rounded-3xl border border-cascalho-ink/15 space-y-4 shadow-sm">
            <h2 className="text-lg font-black text-cascalho-ink flex items-center gap-2 border-b border-cascalho-ink/10 pb-3">
              <ListOrdered className="w-5 h-5 text-cascalho-coral" /> Capítulos & Minutagem
            </h2>

            <div className="space-y-3">
              {video.chapters.map((ch: { time: string; title: string; desc: string }, idx: number) => (
                <div key={idx} className="p-3 rounded-xl bg-cascalho-surface border border-cascalho-ink/10 flex items-start gap-3">
                  <span className="font-mono font-bold text-xs bg-cascalho-ink text-cascalho-sun px-2.5 py-1 rounded shrink-0">
                    {ch.time}
                  </span>
                  <div>
                    <strong className="text-xs font-bold text-cascalho-ink block">{ch.title}</strong>
                    {ch.desc && <span className="text-xs text-cascalho-muted">{ch.desc}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Principais Pontos Discutidos */}
        {Array.isArray(video.keyTakeaways) && video.keyTakeaways.length > 0 && (
          <section className="bg-cascalho-surface p-6 sm:p-8 rounded-3xl border-2 border-cascalho-teal/30 space-y-4 shadow-sm">
            <h2 className="text-lg font-black text-cascalho-ink flex items-center gap-2 border-b border-cascalho-ink/10 pb-3">
              <CheckCircle2 className="w-5 h-5 text-cascalho-teal" /> Principais Pontos Discutidos
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-cascalho-ink/90 font-medium">
              {video.keyTakeaways.map((point: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 bg-white p-3.5 rounded-xl border border-cascalho-ink/10 shadow-xs">
                  <span className="text-cascalho-teal font-extrabold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Transcrição Editada & Resumo dos Pontos-Chave */}
        {video.transcriptSummary && (
          <section className="bg-cascalho-ink text-cascalho-paper p-6 sm:p-8 rounded-3xl border border-cascalho-sun/20 space-y-4 shadow-xl">
            <h2 className="text-lg font-black text-cascalho-sun flex items-center gap-2">
              <FileText className="w-5 h-5 text-cascalho-lime" /> Resumo Editorial & Transcrição Editada
            </h2>
            <p className="text-xs sm:text-sm text-cascalho-paper/90 leading-relaxed font-normal">
              {video.transcriptSummary}
            </p>
          </section>
        )}

        {/* Equipamentos Citados no Vídeo */}
        {video.mentionedProducts && video.mentionedProducts.length > 0 && (
          <section className="space-y-4 pt-4">
            <h2 className="text-xl font-black text-cascalho-ink flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-cascalho-teal" /> Equipamentos Citados Neste Vídeo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {video.mentionedProducts.map((prod, idx) => (
                <AffiliateCard key={prod.id || idx} product={prod} />
              ))}
            </div>
          </section>
        )}

      </div>
    </article>
  );
}
