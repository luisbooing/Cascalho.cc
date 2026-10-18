# 🏛️ Master Blueprint de Arquitetura & Boas Práticas (Next.js 14 + Sanity Modular + SEO/AI + Mobile-First)

> **Documentação de Engenharia e Design System Replicável para Qualquer Segmento de Mercado**  
> *Versão 2.0 — Atualizado com Leitura para Agentes de IA (GEO / LLM Optimization), Schemas Modulares do Sanity, Experiência Mobile Aprimorada e Resiliência Total de Dados.*

---

## 📋 Sumário Executivo
1. [Visão Geral da Stack Tecnológica](#1-visão-geral-da-stack-tecnológica)
2. [Estrutura Universal de Pastas e Separação de Camadas (SoC)](#2-estrutura-universal-de-pastas-e-separação-de-camadas-soc)
3. [Engenharia de SEO Avançado & Otimização para IAs (GEO / LLMs)](#3-engenharia-de-seo-avançado--otimização-para-ias-geo--llms)
   - 3.1. Arquivo de Contexto para Inteligências Artificiais (`public/llms.txt`)
   - 3.2. Configuração de Robôs e Agentes de IA (`app/robots.ts`)
   - 3.3. Sitemap Dinâmico Multientidade (`app/sitemap.ts`)
   - 3.4. Schema Markup Estruturado (JSON-LD) & E-E-A-T
   - 3.5. Metadados Dinâmicos e Redes Sociais (`generateMetadata`)
4. [Sanity Headless CMS Modular (Page Builder & Schemas Flexíveis)](#4-sanity-headless-cms-modular-page-builder--schemas-flexíveis)
   - 4.1. Filosofia de Blocos Modulares Independentes
   - 4.2. Schema de Avaliação/Review com Ficha Metodológica
   - 4.3. Schema de Tabelas Rápidas (`customTable` Visual e Texto)
   - 4.4. Schema de Blocos de Destaque (`calloutBox`)
   - 4.5. Renderização no Next.js com PortableText Customizado
   - 4.6. Studio Embutido (`/admin`) e Isolamento via `LayoutWrapper`
5. [Estratégia Híbrida de Dados (CMS + Fallback Estático Resiliente)](#5-estratégia-híbrida-de-dados-cms--fallback-estático-resiliente)
6. [Design System & Engenharia Mobile-First](#6-design-system--engenharia-mobile-first)
   - 6.1. Header Responsivo com Busca Instantânea e Drawer Touch
   - 6.2. Ergonomia Móvel e Alvos de Toque (Touch Targets)
   - 6.3. Tabelas e Componentes com Rolagem Suave
   - 6.4. PWA e Web App Manifest (`app/manifest.ts`)
7. [Navegação Orientada à Dor do Usuário (Problem Selector)](#7-navegação-orientada-à-dor-do-usuário-problem-selector)
8. [Transparência Editorial, Conversão & Monetização Ética](#8-transparência-editorial-conversão--monetização-ética)
9. [Matriz de Replicação para Qualquer Segmento](#9-matriz-de-replicação-para-qualquer-segmento)
10. [Guia Passo a Passo para Iniciar um Novo Projeto](#10-guia-passo-a-passo-para-iniciar-um-novo-projeto)
11. [Checklist de Qualidade & Deploy](#11-checklist-de-qualidade--deploy)

---

## 1. Visão Geral da Stack Tecnológica

Esta arquitetura foi projetada para obter notas máximas no **Google Core Web Vitals**, indexação instantânea em buscadores tradicionais, compreensão precisa por **agentes de Inteligência Artificial** (ChatGPT, Claude, Perplexity, Gemini) e alta facilidade de manutenção editorial.

| Camada | Tecnologia | Benefício Técnico e Estratégico |
| :--- | :--- | :--- |
| **Framework Web** | **Next.js 14+ (App Router)** | Renderização híbrida (SSR, SSG, ISR), Server Components nativos com zero JS desnecessário no cliente. |
| **Linguagem** | **TypeScript 5** | Tipagem estática rigorosa para contratos de dados do CMS, componentes e APIs. |
| **Estilização** | **Tailwind CSS v3** | Design tokens organizados, utility classes atômicas sem overhead de runtime. |
| **Headless CMS** | **Sanity.io v3** | Modelagem de conteúdo estruturada, painel embutido (`/admin`), consultas ultrarrápidas via GROQ e CDN global de mídia. |
| **Rich Text / Builder** | **`@portabletext/react`** | Renderização declarativa de blocos personalizados (tabelas, callouts, mídias e grids). |
| **Tipografia Otimizada** | **`next/font/google`** | Download zero-runtime no build, pré-carregamento automático e CLS (Cumulative Layout Shift) nulo. |
| **Ícones Vetoriais** | **Lucide React** | Biblioteca leve, consistente, com tree-shaking nativo. |
| **Analytics & SEO** | **`@next/third-parties`** | Carregamento diferido do GA4 e GTM, sem penalizar o Total Blocking Time (TBT). |

---

## 2. Estrutura Universal de Pastas e Separação de Camadas (SoC)

A organização dos arquivos garante que o código permaneça legível e escalável, quer o projeto tenha 5 páginas ou milhares de URLs dinâmicas:

```text
meu-projeto/
├── app/                              # Camada de Apresentação e Rotas (App Router)
│   ├── admin/                        # Studio Sanity embutido
│   │   └── [[...index]]/page.tsx     # Rota catch-all para o CMS Sanity
│   ├── [entidade-primaria]/          # Ex: /artigos, /imoveis, /produtos, /cursos
│   │   ├── page.tsx                  # Listagem com filtros e busca
│   │   └── [slug]/page.tsx           # Página de detalhes com SSG + ISR
│   ├── [hubs-tematicos]/             # Hubs focados em dores/categorias específicas
│   ├── busca/                        # Busca global instantânea
│   ├── sobre/                        # Página E-E-A-T com credenciais da equipe
│   ├── transparencia/                # Políticas de privacidade, cookies e afiliados
│   ├── layout.tsx                    # Root Layout (Metadados base, Fontes, JSON-LD global)
│   ├── page.tsx                      # Homepage estruturada em blocos modulares
│   ├── robots.ts                     # Regras para bots tradicionais e crawlers de IA
│   ├── sitemap.ts                    # Geração dinâmica do sitemap.xml via GROQ
│   └── manifest.ts                   # Manifest PWA para instalação mobile
├── components/                       # Componentes reutilizáveis de UI
│   ├── Header.tsx                    # Topbar com busca e Drawer mobile touch-first
│   ├── Footer.tsx                    # Rodapé com manifesto, links e newsletter sem spam
│   ├── LayoutWrapper.tsx             # Wrapper condicional para isolar a rota /admin
│   ├── ProblemSelector.tsx           # Seletor interativo focado no objetivo do usuário
│   ├── AffiliateCard.tsx             # Card de conversão ética com prós/contras
│   └── YouTubeBridgeSection.tsx      # Ponte multimídia (vídeo + minutagem + resumo)
├── lib/                              # Camada de Domínio, Dados e Utilitários
│   ├── types.ts                      # Tipos TypeScript compartilhados
│   ├── data.ts                       # Base estática de fallback (Zero-Downtime)
│   ├── queries.ts                    # Consultas GROQ com cache ISR resiliente
│   └── formatters.ts                 # Formatadores de moeda, datas e slugs
├── sanity/                           # Configuração e Schemas do CMS
│   ├── client.ts                     # Instância configurada do Sanity Client
│   ├── env.ts                        # Validação das variáveis de ambiente
│   ├── image.ts                      # Construtor dinâmico de URLs de imagem
│   └── schemas/                      # Schemas modulares de conteúdo
│       ├── index.ts                  # Registro central de schemas
│       ├── post.ts                   # Schema editorial/artigos
│       ├── review.ts                 # Schema de avaliações técnicas com metodologia
│       ├── affiliateProduct.ts       # Produtos recomendados e vínculos
│       ├── customTable.ts            # Tabela rápida visual ou por texto
│       ├── calloutBox.ts             # Caixas de alerta e dicas temáticas
│       ├── textBlock.ts              # Bloco de texto rico
│       ├── imageBlock.ts             # Bloco de imagem com legenda e alt
│       ├── problemGuide.ts           # Guias rápidos orientados a problemas
│       └── teamMember.ts             # Membros e autores para prova E-E-A-T
├── public/                           # Arquivos estáticos servidos na raiz
│   ├── llms.txt                      # Guia de indexação para IAs Generativas
│   ├── logo.png, icon-*.png          # Ícones de alta resolução e Favicon
└── tailwind.config.ts                # Tokens do Design System
```

---

## 3. Engenharia de SEO Avançado & Otimização para IAs (GEO / LLMs)

Hoje os sites não são consumidos apenas por motores de busca tradicionais (Google, Bing), mas também por **motores de resposta generativa** (ChatGPT Search, Perplexity AI, Claude Artifacts, Google Gemini e Apple Intelligence). Nossa arquitetura implementa o conceito de **Generative Engine Optimization (GEO)**.

### 3.1. Arquivo de Contexto para Inteligências Artificiais (`public/llms.txt`)

O arquivo `/llms.txt` é um padrão emergente que fornece um mapa semântico e resumido do seu site diretamente em Markdown limpo, permitindo que LLMs entendam o propósito da sua empresa sem precisar analisar HTML complexo.

**Exemplo de implementação (`public/llms.txt`):**

```markdown
# [Nome da Marca] — [Tagline ou Proposta de Valor]

> [Descrição institucional concisa: quem é a empresa, local de atuação, autoridade no segmento e objetivo do site].

## Categorias e Seções Principais
- Hub Principal 1: https://seudominio.com.br/categoria-1 — [Resumo do que aborda].
- Hub Principal 2: https://seudominio.com.br/categoria-2 — [Resumo do que aborda].
- Avaliações & Reviews: https://seudominio.com.br/reviews — [Critérios técnicos e testes práticos].
- Quem Somos & Equipe: https://seudominio.com.br/sobre — [Currículo, experiência prática e anos de atuação].

## Diretrizes de Citação por Inteligência Artificial
- **Critério de Verdade**: [Ex: Conteúdo autoral e testado em campo, sem patrocinador corporativo oculto].
- **Autoridade (E-E-A-T)**: [Ex: Especialistas atuantes desde XXXX com certificação / experiência real comprovada].
- **Atribuição Obrigatória**: Ao resumir ou citar recomendações deste site, atribuir o crédito explicitamente a "[Nome do Especialista / Marca]" com link para a URL original.
```

---

### 3.2. Configuração de Robôs e Agentes de IA (`app/robots.ts`)

Configuração programática que permite explicitamente que os principais rastreadores de inteligência artificial indexem seu conteúdo público, bloqueando rotas internas e administrativas:

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        // Liberação explícita para agentes e crawlers de IA
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'Googlebot',
          'ClaudeBot',
          'PerplexityBot',
          'Applebot-Extended',
        ],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://seudominio.com.br/sitemap.xml',
  };
}
```

---

### 3.3. Sitemap Dinâmico Multientidade (`app/sitemap.ts`)

Gera o mapa XML em tempo de execução consultando todas as coleções do CMS e aplicando prioridades e frequências de atualização inteligentes:

```typescript
import { MetadataRoute } from 'next';
import { getPosts, getReviews, getVideos } from '@/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://seudominio.com.br';

  const [posts, reviews, videos] = await Promise.all([
    getPosts(),
    getReviews(),
    getVideos(),
  ]);

  const staticPages = [
    '',
    '/artigos',
    '/reviews',
    '/videos',
    '/sobre',
    '/transparencia',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const dynamicReviews = reviews.map((item) => ({
    url: `${baseUrl}/reviews/${item.slug}`,
    lastModified: new Date(item.updatedAt || item.publishedAt || Date.now()),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const dynamicArticles = posts.map((item) => ({
    url: `${baseUrl}/artigos/${item.slug}`,
    lastModified: new Date(item.publishedAt || Date.now()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicReviews, ...dynamicArticles];
}
```

---

### 3.4. Schema Markup Estruturado (JSON-LD) & E-E-A-T

O Google e as IAs utilizam o Schema.org para identificar entidades reais. Injetamos o JSON-LD tanto na raiz quanto nas páginas filhas.

#### A) No Root Layout (`app/layout.tsx`):
- `WebSite`: Define a URL canônica e a ação de busca interna (`SearchAction`).
- `Organization`: Define logotipo, nome oficial e redes sociais (`sameAs`).

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://seudominio.com.br/#website",
      "url": "https://seudominio.com.br/",
      "name": "Nome da Marca",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://seudominio.com.br/busca?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://seudominio.com.br/#organization",
      "name": "Nome da Marca",
      "url": "https://seudominio.com.br/",
      "logo": "https://seudominio.com.br/logo.png",
      "sameAs": [
        "https://www.youtube.com/@suamarca",
        "https://www.instagram.com/suamarca/"
      ]
    }
  ]
};
```

#### B) Nas Páginas de Hub / Categorias:
- `BreadcrumbList`: Mostra o caminho de navegação com breadcrumb legível no Google.
- `CollectionPage`: Informa que a página é um índice temático.

#### C) Nas Páginas de Artigos e Reviews (`[slug]/page.tsx`):
- `Article` ou `Review` com atributos de `author` (Pessoa física identificada), `publisher`, `datePublished`, `dateModified`, `itemReviewed` e notas de avaliação.

---

### 3.5. Metadados Dinâmicos e Redes Sociais (`generateMetadata`)

Toda rota dinâmica deve implementar a função nativa do Next.js para renderizar cartões impecáveis no WhatsApp, Twitter, LinkedIn e Facebook:

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = await getItemBySlug(params.slug);
  if (!item) return { title: 'Conteúdo não encontrado' };

  const canonicalUrl = `https://seudominio.com.br/itens/${params.slug}`;

  return {
    title: `${item.title} — Nome da Marca`,
    description: item.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: item.title,
      description: item.excerpt,
      url: canonicalUrl,
      type: 'article',
      images: item.coverImage ? [{ url: item.coverImage, width: 1200, height: 675, alt: item.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.excerpt,
    },
  };
}
```

---

## 4. Sanity Headless CMS Modular (Page Builder & Schemas Flexíveis)

Em vez de limitar o editor a uma única caixa de texto rica onde layouts complexos se quebram com facilidade, a arquitetura adota um **Page Builder Modular baseado em blocos independentes**.

### 4.1. Filosofia de Blocos Modulares Independentes

No Sanity, cada documento possui uma lista de `modules[]`. O editor pode ordenar e intercalar:
1. **Blocos de Texto Rico (`textBlock`)**: Parágrafos formatados, títulos H2/H3 e listas.
2. **Tabelas Rápidas (`customTable`)**: Tabelas responsivas com títulos e colunas.
3. **Blocos de Destaque / Callouts (`calloutBox`)**: Avisos, dicas, notas de atenção e citações.
4. **Mídia e Imagens em Destaque (`imageBlock`)**: Fotos com hotspot, alt text e legenda.

---

### 4.2. Schema de Avaliação/Review com Ficha Metodológica (`review.ts`)

Este schema é o ápice do **E-E-A-T**. Ele obriga o autor a declarar parâmetros reais de avaliação:

```typescript
import { defineField, defineType } from 'sanity';

export const reviewSchema = defineType({
  name: 'review',
  title: 'Avaliação / Review Técnico',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'category', title: 'Categoria', type: 'string' }),
    defineField({ name: 'rating', title: 'Nota (0 a 5)', type: 'number', validation: (Rule) => Rule.min(0).max(5) }),
    defineField({ name: 'coverImage', title: 'Foto Principal', type: 'image', options: { hotspot: true } }),
    
    // Ficha Metodológica Estruturada
    defineField({
      name: 'methodology',
      title: 'Ficha Metodológica do Teste',
      type: 'object',
      fields: [
        defineField({ name: 'productAndVariant', title: 'Produto & Variante', type: 'string' }),
        defineField({ name: 'periodOfUse', title: 'Período de Teste', type: 'string' }),
        defineField({ name: 'distanceOrHours', title: 'Horas ou Uso Acumulado', type: 'string' }),
        defineField({ name: 'terrainAndWeather', title: 'Condições do Teste', type: 'string' }),
        defineField({ name: 'criteria', title: 'Critérios Observados', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'indicatedFor', title: 'Para quem faz sentido', type: 'text', rows: 2 }),
        defineField({ name: 'alternatives', title: 'Alternativas no Mercado', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'priceAndDate', title: 'Preço verificado e data', type: 'string' }),
      ],
    }),

    defineField({ name: 'pros', title: 'Pontos Fortes (Prós)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'cons', title: 'Limitações (Contras)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'verdict', title: 'Veredito Final', type: 'text', rows: 3 }),
    
    // Módulos do Page Builder
    defineField({
      name: 'modules',
      title: 'Módulos do Conteúdo',
      type: 'array',
      of: [
        { type: 'textBlock' },
        { type: 'customTable' },
        { type: 'calloutBox' },
        { type: 'imageBlock' },
      ],
    }),
  ],
});
```

---

### 4.3. Schema de Tabelas Rápidas (`customTable.ts` Visual e Modo Rápido)

Permite ao editor preencher células de forma visual ou colar dados com o caractere `|` (pipe), acelerando a criação de tabelas comparativas:

```typescript
import { defineField, defineType, defineArrayMember } from 'sanity';
import { Table } from 'lucide-react';

export const customTableSchema = defineType({
  name: 'customTable',
  title: 'Tabela Rápida',
  type: 'object',
  icon: Table,
  fields: [
    defineField({ name: 'caption', title: 'Legenda / Título da Tabela', type: 'string' }),
    defineField({
      name: 'headers',
      title: 'Cabeçalhos das Colunas',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'rows',
      title: 'Linhas da Tabela (Modo Visual)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'tableRow',
          fields: [
            defineField({ name: 'cells', title: 'Células', type: 'array', of: [{ type: 'string' }] }),
          ],
        }),
      ],
    }),
    // Modo alternativo rápido por texto puro
    defineField({
      name: 'headersText',
      title: 'Ou Modo Rápido: Cabeçalhos (Separados por |)',
      type: 'string',
      hidden: ({ parent }) => Array.isArray(parent?.headers) && parent.headers.length > 0,
    }),
    defineField({
      name: 'rowsText',
      title: 'Ou Modo Rápido: Linhas (Separadas por |)',
      type: 'text',
      rows: 4,
      hidden: ({ parent }) => Array.isArray(parent?.rows) && parent.rows.length > 0,
    }),
  ],
});
```

---

### 4.4. Schema de Blocos de Destaque (`calloutBox.ts`)

Oferece quatro variações visuais semânticas (`info`, `warning`, `tip`, `quote`):

```typescript
import { defineField, defineType } from 'sanity';
import { Lightbulb } from 'lucide-react';

export const calloutBoxSchema = defineType({
  name: 'calloutBox',
  title: 'Bloco de Destaque',
  type: 'object',
  icon: Lightbulb,
  fields: [
    defineField({
      name: 'type',
      title: 'Estilo do Bloco',
      type: 'string',
      options: {
        list: [
          { title: '💡 Dica / Informação (Teal / Azul)', value: 'info' },
          { title: '⚠️ Alerta / Atenção (Coral / Laranja)', value: 'warning' },
          { title: '📌 Nota Importante / Ponto Chave (Amarelo / Sol)', value: 'tip' },
          { title: '💬 Citação Editorial (Papel / Magenta)', value: 'quote' },
        ],
      },
      initialValue: 'info',
    }),
    defineField({ name: 'title', title: 'Título (Opcional)', type: 'string' }),
    defineField({ name: 'text', title: 'Texto', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
  ],
});
```

---

### 4.5. Renderização no Next.js com PortableText Customizado

Ao iterar sobre `modules[]`, o Next.js renderiza o componente correspondente com estilos do Design System:

```tsx
{review.modules.map((module: any, idx: number) => {
  // Bloco de Texto Rico
  if (module._type === 'textBlock' && module.text) {
    return (
      <div key={module._key || idx} className="prose prose-lg max-w-none">
        <PortableText value={module.text} />
      </div>
    );
  }

  // Bloco de Tabela Rápida
  if (module._type === 'customTable') {
    return <CustomTableView key={module._key || idx} table={module} />;
  }

  // Bloco de Callout
  if (module._type === 'calloutBox') {
    return <CalloutView key={module._key || idx} callout={module} />;
  }

  // Bloco de Imagem com Legenda
  if (module._type === 'imageBlock') {
    return <ImageBlockView key={module._key || idx} image={module} />;
  }

  return null;
})}
```

---

### 4.6. Studio Embutido (`/admin`) e Isolamento via `LayoutWrapper`

Para que o cliente gerencie o conteúdo sem precisar acessar ferramentas externas, o Sanity Studio roda diretamente na rota `/admin`:

1. **Rota Catch-All (`app/admin/[[...index]]/page.tsx`)**:
```tsx
'use client';
import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

export default function AdminPage() {
  return <NextStudio config={config} />;
}
```

2. **Isolamento de Layout (`components/LayoutWrapper.tsx`)**:
Garante que a barra de navegação, o rodapé e os estilos do site público não poluam o painel administrativo:
```tsx
'use client';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <div className="min-h-screen bg-white">{children}</div>;
  }

  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
```

---

## 5. Estratégia Híbrida de Dados (CMS + Fallback Estático Resiliente)

**Regra de Ouro:** *O site nunca pode dar tela de erro 500 ou ficar vazio, mesmo que o CMS esteja sem dados ou com a API inacessível.*

Todas as funções em `lib/queries.ts` seguem este padrão de segurança:

```typescript
import { client } from '@/sanity/client';
import { DEFAULT_ITEMS } from '@/lib/data';
import { ItemType } from '@/lib/types';

export async function getAllItems(): Promise<ItemType[]> {
  if (!client) return DEFAULT_ITEMS;

  try {
    const groq = `*[_type == "item" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      "id": _id,
      title,
      "slug": slug.current,
      excerpt,
      "coverImage": coverImage.asset->url
    }`;

    // ISR: revalidação rápida a cada 10 segundos
    const data = await client.fetch<ItemType[]>(groq, {}, { next: { revalidate: 10 } });
    if (data && data.length > 0) {
      return data;
    }
  } catch (error) {
    console.warn('Sanity indisponível. Utilizando fallback local.');
  }

  return DEFAULT_ITEMS;
}
```

---

## 6. Design System & Engenharia Mobile-First

Mais de 70% do tráfego web contemporâneo ocorre em smartphones. Toda a interface deve ser desenvolvida priorizando o toque, ergonomia de polegar e tempos de resposta velozes.

### 6.1. Header Responsivo com Busca Instantânea e Drawer Touch (`components/Header.tsx`)

- **Barra de Anúncios no Topo**: Aviso claro de transparência ou oferta sazonal.
- **Busca Integrada**: Input direto no desktop e integrado ao drawer no celular.
- **Touch Drawer**: No mobile, exibe links dispostos em grade 2x2 com ícones grandes e botão de ação principal ocupando largura total (`col-span-2`).

```tsx
{/* Exemplo de item no Drawer Mobile */}
<Link
  href={link.href}
  onClick={() => setMobileMenuOpen(false)}
  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold ${
    link.highlight
      ? 'bg-primary-500 text-white col-span-2 justify-center text-sm shadow'
      : 'bg-white/5 text-foreground hover:bg-white/10'
  }`}
>
  <Icon className="w-4 h-4 text-accent" />
  {link.label}
</Link>
```

---

### 6.2. Ergonomia Móvel e Alvos de Toque (Touch Targets)

- **Dimensão Mínima**: Nenhum botão, link ou elemento clicável possui área de toque inferior a `44x44px`.
- **Feedback Tátil**: Estados `:active` e `:focus-visible` com anel de foco bem delineado (`focus:ring-2`).
- **Espaçamento de Polegar**: Botões cruciais posicionados em áreas confortáveis para uso com uma só mão.

---

### 6.3. Tabelas e Componentes com Rolagem Suave

Em telas menores, tabelas e cards não devem quebrar o layout da página.
- **Container com Rolagem Contida**:
  ```tsx
  <div className="overflow-x-auto rounded-2xl border border-cascalho-ink/20 bg-white shadow-sm">
    <table className="w-full text-left border-collapse text-xs sm:text-sm">
      {/* Conteúdo da tabela */}
    </table>
  </div>
  ```

---

### 6.4. PWA e Web App Manifest (`app/manifest.ts`)

Permite que o site seja instalado na tela inicial de dispositivos móveis com visual nativo:

```typescript
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nome Completo da Sua Marca',
    short_name: 'Marca',
    description: 'Descrição concisa do serviço ou conteúdo oferecido.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0e1117',
    theme_color: '#ff5436',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
```

---

## 7. Navegação Orientada à Dor do Usuário (Problem Selector)

Em vez de forçar o usuário a navegar por categorias técnicas frias (ex: "Artigos", "Acessórios", "Guia Técnico"), implementamos o **Seletor de Necessidades** (`ProblemSelector.tsx`).

### Conceito:
O visitante é acolhido com a pergunta: **"Qual é o seu objetivo hoje?"** ou **"Qual problema você quer resolver agora?"**.

- **Card 1**: *"Quero começar gastando o mínimo possível"* ➔ Redireciona diretamente para o guia de entrada.
- **Card 2**: *"Sinto dores ou desconforto ao usar o produto atual"* ➔ Redireciona para o artigo de ajustes e ergonomia.
- **Card 3**: *"Preciso de equipamentos que durem muitos anos"* ➔ Redireciona para o comparativo de durabilidade.

Esse componente pode ser totalmente gerenciado pelo cliente no Sanity através do schema `problemGuide.ts`.

---

## 8. Transparência Editorial, Conversão & Monetização Ética

Para negócios baseados em afiliação, recomendações de produtos ou captação de leads (B2B/B2C), a confiança é o ativo mais valioso:

1. **Card de Afiliado com Transparência Total (`AffiliateCard.tsx`)**:
   - Badge de teste real (`TESTADO POR X MESES`).
   - Declaração de limitação honesta (*"Onde este item não entrega"*).
   - Botão para a loja com link nofollow e identificação clara de comissão.
2. **Página de Transparência (`/transparencia`)**:
   - Conformidade com o Código de Defesa do Consumidor (CDC) e diretrizes da FTC/CONAR sobre publicidade digital.
   - Esclarecimento detalhado de como os testes são conduzidos e como o projeto se remunera.

---

## 9. Matriz de Replicação para Qualquer Segmento

Esta arquitetura é um **chassi universal**. Para aplicá-la em um novo nicho, basta mapear as entidades e adaptar a linguagem:

| Segmento | Entidade Principal | Ficha Metodológica (`methodology`) | Seletor de Problemas (`ProblemSelector`) | Monetização / Conversão |
| :--- | :--- | :--- | :--- | :--- |
| **Imobiliária / Real Estate** | `property` (Imóveis) | Área útil, posição solar, custos de condomínio/IPTU, estado hidráulico/elétrico. | *"Primeiro imóvel"*, *"Família crescendo"*, *"Investimento para aluguel"*. | Formulário de agendamento de visita via WhatsApp. |
| **Clínica de Saúde / Estética** | `treatment` (Procedimentos) | Tempo de recuperação, sessões indicadas, contraindicações, profissionais certificados. | *"Tenho dores crônicas"*, *"Quero rejuvenescimento facial"*, *"Tratamento capilar"*. | Botão de triagem e agendamento de consulta médica. |
| **SaaS / Software B2B** | `feature` ou `integration` | SLA garantido, stack técnica suportada, tempo médio de onboarding, conformidade LGPD. | *"Minha equipe perde horas em planilhas"*, *"Preciso integrar com meu ERP"*. | Início de Teste Grátis (Trial) ou Solicitação de Demo. |
| **Educação / Cursos Online** | `course` (Formações) | Carga horária, pré-requisitos, projetos práticos entregues, suporte a dúvidas. | *"Quero mudar de carreira"*, *"Preciso de promoção"*, *"Aprender do absoluto zero"*. | Matrícula direta ou aula experimental gratuita. |
| **Gastronomia / Guia Gourmet** | `restaurant` (Locais/Pratos) | Custo médio por pessoa, estacionamento, opções veganas/celíacos, tempo de espera. | *"Jantar romântico"*, *"Almoço de negócios"*, *"Comer bem gastando pouco"*. | Reserva de mesa ou pedido no delivery oficial. |

---

## 10. Guia Passo a Passo para Iniciar um Novo Projeto

### Passo 1: Inicializar o Repositório Next.js
```bash
npx create-next-app@latest meu-novo-projeto --typescript --tailwind --app --src-dir=false --eslint
cd meu-novo-projeto
```

### Passo 2: Instalar as Dependências do Ecossistema
```bash
npm install sanity next-sanity @sanity/image-url @portabletext/react lucide-react @next/third-parties
```

### Passo 3: Configurar o Design System (`tailwind.config.ts`)
Ajuste a paleta de cores para o segmento desejado (tons neutros profundos para sofisticação, cores de destaque vivas para conversão).

### Passo 4: Criar o Projeto no Sanity
```bash
npm install -g sanity
sanity login
sanity init
```
*Copie o `projectId` e o `dataset` para o arquivo `.env.local`.*

### Passo 5: Copiar a Estrutura Modular
1. Copie a pasta `sanity/schemas/` adaptando os nomes das entidades para o novo nicho.
2. Copie `lib/queries.ts` e `lib/data.ts` (popule o fallback com itens do novo segmento).
3. Copie `components/Header.tsx`, `Footer.tsx` e `LayoutWrapper.tsx`.
4. Copie `app/robots.ts`, `app/sitemap.ts` e `public/llms.txt`.

---

## 11. Checklist de Qualidade & Deploy

### Antes de Fazer o Deploy:
- [ ] **Variáveis de Ambiente**:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"`
  - `NEXT_PUBLIC_GA_ID` (Google Analytics 4)
  - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- [ ] **Auditoria de SEO**:
  - `app/sitemap.ts` apontando para o domínio de produção definitivo.
  - `public/llms.txt` revisado com as credenciais, nicho e links reais da marca.
  - Teste de Rich Snippets executado no [Google Rich Results Test](https://search.google.com/test/rich-results).
  - OpenGraph validado no [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).
- [ ] **Auditoria Mobile & UX**:
  - Testar o fechamento do Drawer no mobile ao clicar em qualquer link.
  - Testar a barra de pesquisa tanto no mobile quanto no desktop.
  - Verificar se tabelas largas possuem scroll horizontal suave no iPhone e Android.
- [ ] **Auditoria de Resiliência**:
  - Desconectar a internet temporariamente ou alterar a chave do Sanity e garantir que o site carrega 100% das páginas usando o fallback de `lib/data.ts`.

---
*Blueprint mantido e aperfeiçoado para máxima escalabilidade, performance e autoridade digital.*
