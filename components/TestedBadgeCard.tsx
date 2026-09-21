import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Calendar, MapPin, AlertTriangle, ArrowRight } from 'lucide-react';
import { ReviewItem } from '@/lib/types';
import { formatDate } from '@/lib/formatters';

interface TestedBadgeCardProps {
  review: ReviewItem;
}

export default function TestedBadgeCard({ review }: TestedBadgeCardProps) {
  const dateStr = review.updatedAt || review.publishedAt || review.methodology?.priceAndDate;
  const displayDate = formatDate(dateStr);

  return (
    <div className="bg-cascalho-ink text-cascalho-paper rounded-3xl p-6 sm:p-8 relative overflow-hidden border-2 border-cascalho-coral/30 shadow-xl">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-sunrise opacity-20 cascalho-blob-1 pointer-events-none blur-2xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Review Cover & Badge */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <Image
              src={review.coverImage}
              alt={review.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute top-3 left-3 bg-cascalho-coral text-white font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow">
              <ShieldCheck className="w-4 h-4" /> TESTADO DE VERDADE
            </div>
            <div className="absolute bottom-3 left-3 right-3 bg-cascalho-ink/90 backdrop-blur-md p-3 rounded-xl border border-white/10 text-[11px]">
              <p className="font-bold text-cascalho-sun">{review.methodology.productAndVariant || review.productName || review.title}</p>
              <p className="text-cascalho-paper/80">{review.methodology.periodOfUse || 'Em testes'} {review.methodology.distanceOrHours ? `• ${review.methodology.distanceOrHours}` : ''}</p>
            </div>
          </div>
        </div>

        {/* Review Content & Field Methodology */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-cascalho-sun uppercase tracking-wider">
            <span>Destaque de Curadoria</span>
            <span>•</span>
            <span className="text-cascalho-lime">Independente</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-cascalho-paper leading-tight">
            {review.title}
          </h3>

          <p className="text-sm text-cascalho-paper/90 leading-relaxed">
            {review.excerpt}
          </p>

          {/* Test Conditions Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/5 p-4 rounded-xl border border-white/10 text-xs">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-cascalho-teal shrink-0 mt-0.5" />
              <div>
                <strong className="text-cascalho-sun block">Terreno e Clima:</strong>
                <span className="text-cascalho-paper/80">{review.methodology.terrainAndWeather || review.methodology.terrain || 'Condições variadas'}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-cascalho-orange shrink-0 mt-0.5" />
              <div>
                <strong className="text-cascalho-sun block">Principal Limitação:</strong>
                <span className="text-cascalho-paper/80">{(review.cons && review.cons[0]) || review.methodology.limitations?.[0] || 'Nenhuma limitação crítica'}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            {displayDate ? (
              <div className="flex items-center gap-2 text-xs text-cascalho-muted">
                <Calendar className="w-3.5 h-3.5 text-cascalho-teal" />
                <span>Verificado em {displayDate}</span>
              </div>
            ) : <div />}

            <Link
              href={`/reviews/${review.slug}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cascalho-coral hover:bg-cascalho-magenta text-white font-bold text-xs transition shadow-md"
            >
              Ler Metodologia & Veredito Completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
