import React from 'react';
import Link from 'next/link';
import { Heart, CheckCircle2, ShieldCheck, Youtube, Mail, Sparkles } from 'lucide-react';

export const metadata = {
  title: "Apoie o Projeto — Membresia & Sustentabilidade do Cascalho.CC",
  description: "Entenda para onde vai sua contribuição e como apoiar a produção de testes independentes no Cascalho.CC.",
};

export default function ApoiePage() {
  return (
    <div className="py-12 bg-cascalho-paper space-y-12 min-h-screen">
      
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-cascalho-ink text-cascalho-paper rounded-3xl p-8 sm:p-12 border-2 border-cascalho-coral/40 shadow-xl space-y-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-orbit p-0.5 mx-auto shadow-md">
            <div className="w-full h-full bg-cascalho-ink rounded-[14px] flex items-center justify-center text-cascalho-coral">
              <Heart className="w-7 h-7" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-cascalho-paper">
            Ajude o Cascalho.CC a Continuar Livre
          </h1>

          <p className="text-sm sm:text-base text-cascalho-paper/90 max-w-2xl mx-auto leading-relaxed">
            Nossa promessa é simples: produzir testes de longa duração, relatos de montanha e críticas honestas sem nos curvar a marcas ou jabás. Seu apoio garante essa independência.
          </p>
        </div>

        {/* Níveis sustentáveis de apoio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border-2 border-cascalho-teal/40 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase text-cascalho-teal tracking-wider bg-cascalho-surface px-3 py-1 rounded-full">
                Membresia YouTube
              </span>
              <h3 className="text-2xl font-black text-cascalho-ink">Membro do Canal</h3>
              <p className="text-2xl font-black text-cascalho-coral">R$ 7,99 <span className="text-xs text-cascalho-muted font-normal">/ mês</span></p>
              
              <ul className="space-y-2 text-xs text-cascalho-ink/90 pt-2 border-t border-cascalho-ink/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cascalho-teal" />
                  <span>Selo exclusivo de apoiador nos comentários</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cascalho-teal" />
                  <span>Acesso antecipado aos novos vídeos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cascalho-teal" />
                  <span>Lives especiais e tira-dúvidas de equipamentos</span>
                </li>
              </ul>
            </div>

            <a
              href="https://www.youtube.com/@cascalhocc/join"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-cascalho-teal hover:bg-cascalho-ink text-white font-extrabold text-xs transition text-center shadow"
            >
              Se Torne Membro no YouTube →
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl border-2 border-cascalho-coral/40 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase text-cascalho-coral tracking-wider bg-cascalho-sun/30 px-3 py-1 rounded-full">
                Apoio Direto
              </span>
              <h3 className="text-2xl font-black text-cascalho-ink">Apoiador de Campo (Pix)</h3>
              <p className="text-2xl font-black text-cascalho-coral">Qualquer valor <span className="text-xs text-cascalho-muted font-normal">pontual</span></p>
              
              <ul className="space-y-2 text-xs text-cascalho-ink/90 pt-2 border-t border-cascalho-ink/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cascalho-coral" />
                  <span>Financia despesas de viagens para testes de montanha</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cascalho-coral" />
                  <span>Nome creditado na página de apoiadores do site</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cascalho-coral" />
                  <span>Garante a manutenção da hospedagem sem excesso de anúncios</span>
                </li>
              </ul>
            </div>

            <div className="p-3 bg-cascalho-surface rounded-xl border border-cascalho-ink/15 text-center text-xs space-y-1">
              <span className="font-bold text-cascalho-ink block">Chave Pix de Apoio:</span>
              <code className="text-cascalho-coral font-mono font-bold bg-white px-2 py-1 rounded border">pix@cascalho.cc</code>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
