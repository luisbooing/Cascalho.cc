import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Info, FileText, Scale, Lock } from 'lucide-react';

export const metadata = {
  title: "Transparência, Política de Afiliados e Termos Legais",
  description: "Conheça nossas regras de conformidade com o Código de Defesa do Consumidor (CDC), CONAR, ANPD e programa de afiliados Mercado Livre e Shopee.",
};

export default function TransparenciaPage() {
  return (
    <div className="py-12 bg-cascalho-paper space-y-12 min-h-screen">
      
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cascalho-teal text-white font-black text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Conformidade & Ética
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-cascalho-ink">
            Política de Transparência & Isenção Editorial
          </h1>
          <p className="text-sm sm:text-base text-cascalho-ink/80 leading-relaxed font-medium">
            Entenda como funcionam nossos links de afiliados, como cobrimos os custos do site e quais são os compromissos éticos e legais do Cascalho.CC.
          </p>
        </header>

        {/* 1. Política de Afiliados (Mercado Livre e Shopee) */}
        <div className="bg-white p-8 rounded-3xl border border-cascalho-ink/15 space-y-4 shadow-sm">
          <h2 className="text-xl font-black text-cascalho-ink flex items-center gap-2 text-cascalho-coral">
            <Scale className="w-5 h-5" /> 1. Links de Afiliados & Comissão
          </h2>

          <p className="text-xs sm:text-sm text-cascalho-ink/90 leading-relaxed">
            Alguns links apresentados em nossos artigos, reviews e vitrines ("Escolhas do Cascalho") são links de afiliados. Isso significa que, se você clicar no link e realizar uma compra no site do anunciante (como Mercado Livre ou Shopee), o Cascalho.CC pode receber uma pequena comissão por indicação.
          </p>

          <div className="p-4 rounded-2xl bg-cascalho-surface border border-cascalho-sun/40 text-xs text-cascalho-ink font-semibold space-y-2">
            <p className="text-cascalho-coral font-extrabold uppercase tracking-wider">Garantias ao leitor:</p>
            <ul className="list-disc list-inside space-y-1 text-cascalho-ink/90">
              <li>Você **NÃO paga nada a mais** pelo produto ao comprar pelo link comissionado.</li>
              <li>A comissão **NÃO determina o veredito editorial** do produto. Se o equipamento falhar ou for ruim, isso será explicitado no review.</li>
              <li>Todas as páginas com links comissionados exibem aviso ostensivo antes do botão de compra, em conformidade com as diretrizes do CONAR e CDC.</li>
            </ul>
          </div>
        </div>

        {/* 2. Conformidade CDC e CONAR */}
        <div className="bg-white p-8 rounded-3xl border border-cascalho-ink/15 space-y-4 shadow-sm">
          <h2 className="text-xl font-black text-cascalho-ink flex items-center gap-2 text-cascalho-teal">
            <FileText className="w-5 h-5" /> 2. Conformidade CDC & CONAR
          </h2>

          <p className="text-xs sm:text-sm text-cascalho-ink/90 leading-relaxed">
            Em conformidade com a Lei nº 8.078/1990 (Código de Defesa do Consumidor) e o Guia de Publicidade por Influenciadores do CONAR:
          </p>

          <ul className="list-disc list-inside text-xs text-cascalho-muted space-y-1.5 leading-relaxed">
            <li>Toda relação comercial ou post patrocinado é identificado de forma clara com etiquetas como "#publi", "Afiliado" ou "Conteúdo Patrocinado".</li>
            <li>O Cascalho.CC não vende produtos diretamente, não processa pagamentos e não gerencia estoque ou entregas. A responsabilidade por frete, garantia e troca é inteiramente da loja parceira.</li>
          </ul>
        </div>

        {/* 3. Privacidade & Cookies (ANPD / LGPD) */}
        <div id="privacidade" className="bg-cascalho-ink text-cascalho-paper p-8 rounded-3xl border border-cascalho-sun/20 space-y-4 shadow-xl">
          <h2 className="text-xl font-black text-cascalho-sun flex items-center gap-2">
            <Lock className="w-5 h-5 text-cascalho-lime" /> 3. Privacidade & Proteção de Dados (LGPD)
          </h2>

          <p className="text-xs sm:text-sm text-cascalho-paper/90 leading-relaxed">
            Respeitamos sua privacidade de acordo com a Lei Geral de Proteção de Dados (LGPD) e diretrizes da ANPD:
          </p>

          <ul className="list-disc list-inside text-xs text-cascalho-paper/80 space-y-1.5">
            <li>Seu e-mail cadastrado na newsletter é utilizado exclusivamente para o envio de nossas atualizações e pode ser descadastrado a qualquer momento através do link no rodapé de cada mensagem.</li>
            <li>Não vendemos ou compartilhamos seu e-mail com terceiros para fins de telemarketing.</li>
            <li>Utilizamos cookies estritamente necessários para medição anônima de audiência (Google Analytics) sem armazenar dados sensíveis.</li>
          </ul>
        </div>

      </section>

    </div>
  );
}
