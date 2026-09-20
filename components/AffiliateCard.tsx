import React from 'react';
import Image from 'next/image';
import { ExternalLink, ShieldCheck, Clock, Star, Info, AlertTriangle } from 'lucide-react';
import { AffiliateProduct } from '@/lib/types';

interface AffiliateCardProps {
  product: AffiliateProduct;
}

export default function AffiliateCard({ product }: AffiliateCardProps) {
  const title = product.title || product.name || 'Produto Recomendado';
  const platform = product.platform || product.storeName || 'Loja Parceira';
  const isMercadoLivre = (platform || '').toLowerCase().includes('mercado livre');
  const price = product.price || product.priceEstimate || '';
  const testedContext = product.testedContext || product.honestContext || '';
  const disclosure = product.disclosureText || 'Link de afiliado: ao comprar por este link, o Cascalho.CC pode receber uma comissão sem custo adicional para você.';

  const CardWrapper = product.affiliateUrl ? 'a' : 'div';
  const wrapperProps = product.affiliateUrl
    ? {
        href: product.affiliateUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className="group bg-cascalho-paper rounded-2xl border-2 border-cascalho-ink/15 hover:border-cascalho-coral transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between overflow-hidden cursor-pointer block text-left"
    >
      
      <div>
        {/* Header Badge */}
        <div className="bg-cascalho-ink px-4 py-2 flex items-center justify-between text-xs text-cascalho-sun">
          <span className="font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-cascalho-lime" /> Escolhas do Cascalho
          </span>
          <span className="bg-cascalho-olive/40 text-cascalho-paper px-2 py-0.5 rounded text-[10px] font-semibold uppercase">
            Afiliado {platform}
          </span>
        </div>

        {/* Product Image */}
        {product.image && (
          <div className="relative aspect-square w-full bg-cascalho-surface border-b border-cascalho-ink/10 overflow-hidden">
            <Image
              src={product.image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {product.isEditorPick && (
              <div className="absolute top-2 left-2 bg-cascalho-coral text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow z-10">
                ★ Escolha do Editor
              </div>
            )}
          </div>
        )}

        {/* Details */}
        <div className="p-5 space-y-3">
          <div>
            <h4 className="text-base font-extrabold text-cascalho-ink group-hover:text-cascalho-coral transition-colors leading-snug">
              {title}
            </h4>
            {(product.model || product.variant) && (
              <p className="text-xs text-cascalho-muted mt-0.5 font-medium">
                {product.model} {product.variant && `• ${product.variant}`}
              </p>
            )}
          </div>

          {/* Tested Context Note */}
          {testedContext && (
            <div className="bg-cascalho-surface p-2.5 rounded-xl border border-cascalho-sun/40 text-[11px] text-cascalho-ink/90 italic">
              <strong>Contexto do teste:</strong> "{testedContext}"
            </div>
          )}

          {/* Limitation Note */}
          {product.limitation && (
            <div className="bg-cascalho-coral/10 p-2.5 rounded-xl border border-cascalho-coral/40 text-[11px] text-cascalho-ink/90 flex items-start gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-cascalho-coral shrink-0 mt-0.5" />
              <span>
                <strong className="text-cascalho-coral">Limitação importante:</strong> {product.limitation}
              </span>
            </div>
          )}

          {/* Price & Rating */}
          <div className="flex items-baseline justify-between pt-1">
            <div>
              {price && <span className="text-xl font-black text-cascalho-ink">{price}</span>}
              {product.originalPrice && (
                <span className="text-xs text-cascalho-muted line-through ml-2 font-medium">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {product.rating && (
              <div className="flex items-center gap-1 text-xs font-bold text-cascalho-ink">
                <Star className="w-3.5 h-3.5 fill-cascalho-orange text-cascalho-orange" />
                <span>{product.rating}</span>
                {product.reviewsCount && <span className="text-[10px] text-cascalho-muted">({product.reviewsCount})</span>}
              </div>
            )}
          </div>

          {/* Verification Timestamp */}
          {product.checkedAt && (
            <div className="flex items-center gap-1 text-[10px] text-cascalho-muted pt-1">
              <Clock className="w-3 h-3 text-cascalho-teal" />
              <span>Preço e estoque verificados em: {product.checkedAt}</span>
            </div>
          )}

        </div>
      </div>

      {/* Footer & Transparent Disclaimer */}
      <div className="p-5 pt-0 space-y-2">
        {/* Ostensive Disclosure Text */}
        <div className="bg-cascalho-ink/5 p-2 rounded-lg text-[10px] text-cascalho-ink/80 flex items-start gap-1.5 leading-tight border border-cascalho-ink/10">
          <Info className="w-3.5 h-3.5 text-cascalho-coral shrink-0 mt-0.5" />
          <span>{disclosure}</span>
        </div>

        {/* CTA Button */}
        {product.affiliateUrl && (
          <div
            className={`w-full py-3 px-4 rounded-xl font-extrabold text-xs text-white transition-all flex items-center justify-center gap-2 shadow-md group-hover:shadow-lg ${
              isMercadoLivre
                ? 'bg-cascalho-coral group-hover:bg-cascalho-magenta'
                : 'bg-cascalho-teal group-hover:bg-cascalho-ink'
            }`}
          >
            <span>Ver oferta no {platform}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        )}
      </div>

    </CardWrapper>
  );
}
