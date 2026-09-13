# Blueprint de Arquitetura e Boas Práticas - Raízes Globais Docs
> **Guia completo de engenharia, estrutura e design para replicação em novos projetos web.**

Este documento serve como um guia mestre e **manual de arquitetura** baseado no projeto `Raízes Globais Docs`. Ele foi estruturado para que você possa utilizar a mesma engenharia de alta performance, resiliência de dados, SEO avançado e identidade visual refinada em **qualquer outro segmento** (ex: E-commerce, Plataforma Educacional, Imobiliária, SaaS, Blog Corporativo, Guia Gastronômico, etc.).

---

## 📋 Sumário
1. [Visão Geral da Stack Tecnológica](#1-visão-geral-da-stack-tecnológica)
2. [Estrutura de Pastas e Padrão de Organização](#2-estrutura-de-pastas-e-padrão-de-organização)
3. [Estratégia Híbrida de Dados (CMS + Fallback Estático)](#3-estratégia-híbrida-de-dados-cms--fallback-estático)
4. [Design System, Cores e Tipografia (Tailwind CSS)](#4-design-system-cores-e-tipografia-tailwind-css)
5. [Engenharia de SEO Avançado & Analytics](#5-engenharia-de-seo-avançado--analytics)
6. [Integração Headless CMS (Sanity.io)](#6-integração-headless-cms-sanityio)
7. [Otimização de Performance e Mídia](#7-otimização-de-performance-e-mídia)
8. [Passo a Passo para Criar um Novo Projeto do Zero](#8-passo-a-passo-para-criar-um-novo-projeto-do-zero)
9. [Checklist de Lançamento e Deploy](#9-checklist-de-lançamento-e-deploy)

---

## 1. Visão Geral da Stack Tecnológica

O projeto adota uma stack moderna de ecossistema React/Node.js, priorizando renderização no servidor (SSR/SSG), tempo de carregamento mínimo (Core Web Vitals) e facilidade de manutenção.

| Camada | Tecnologia | Motivo da Escolha / Benefício |
| :--- | :--- | :--- |
| **Framework Base** | **Next.js 14 (App Router)** | Renderização híbrida (SSG/ISR/SSR), roteamento por arquivos, Server Components nativos. |
| **Linguagem** | **TypeScript 5** | Tipagem estática rigorosa, autocomplete, prevenção de erros em tempo de compilação. |
| **Estilização** | **Tailwind CSS v3** | Utilitários de estilização rápidos, zero overhead de runtime CSS, fácil temas customizados. |
| **Headless CMS** | **Sanity.io (v3)** | CMS flexível, painel de admin embutido (`/admin`), consultas ultrarrápidas via GROQ. |
| **Fontes** | **`next/font/google`** | Carregamento otimizado de fontes Google (Inter e Playfair) com zero layout shift (CLS). |
| **Analytics** | **`@next/third-parties`** | Integração oficial e diferida do Google Tag Manager e GA4 sem bloquear o First Input Delay. |
| **Ícones** | **Lucide React** | Ícones vetoriais leves, modulares e com suporte a tree-shaking. |
| **Componentes de Mídia** | **`yet-another-react-lightbox`** | Visualização imersiva de galerias de imagens responsivas. |

---

## 2. Estrutura de Pastas e Padrão de Organização

A arquitetura segue a convenção de **Separação de Responsabilidades (SoC)** do Next.js App Router:

```text
RaizesGlobaisDocs/
├── app/                          # Rotas da aplicação (App Router)
│   ├── admin/                    # Studio do Sanity CMS embutido na rota /admin
│   │   └── [[...index]]/page.tsx
│   ├── blog/                     # Listagem e páginas [slug] de artigos
│   ├── destinos/                 # Entidade principal do projeto (ex: países/locais)
│   │   └── [slug]/page.tsx       # Rota dinâmica com SSG/ISR
│   ├── documentarios/            # Listagem de vídeos/mídias
│   ├── planeje/                  # Página de parceiros e afiliados
│   ├── privacidade/ & termos/    # Páginas institucionais/legais
│   ├── layout.tsx                # Root Layout (Metadados globais, Fontes, GA4, JSON-LD)
│   ├── page.tsx                  # Home Page principal
│   ├── robots.ts                 # Geração dinâmica do robots.txt
│   └── sitemap.ts                # Geração dinâmica do sitemap.xml via GROQ
├── components/                   # Componentes de UI modulares e reutilizáveis
│   ├── DestinoCard.tsx           # Cards de entidades
│   ├── Hero.tsx                  # Seções Hero adaptáveis
│   ├── Navbar.tsx & Footer.tsx   # Navegação principal e rodapé
│   ├── ImageLightbox.tsx         # Galeria modal
│   └── PrintPDFButton.tsx        # Utilitário de exportação para impressão
├── lib/                          # Camada de lógica e dados
│   ├── data.ts                   # Base de dados estáticos (Fallback mock)
│   └── queries.ts                # Consultas GROQ tipadas para o Sanity CMS
├── sanity/                       # Configurações do Headless CMS
│   ├── client.ts                 # Instância do cliente Sanity
│   ├── env.ts                    # Validação de variáveis de ambiente
│   ├── image.ts                  # Construtor de URLs de imagem dinâmicas
│   └── schemas/                  # Esquemas de conteúdo (post, destination, partner, etc.)
├── styles/                       # Arquivos CSS
│   ├── globals.css               # Variáveis globais do Tailwind e resets
│   └── print.css                 # Folha de estilo exclusiva para impressão/PDF
├── next.config.mjs               # Configurações do Next (Domínios de imagem remota)
├── tailwind.config.ts            # Tokens do Design System
└── tsconfig.json                 # Aliases de importação (@/*)
```

---

## 3. Estratégia Híbrida de Dados (CMS + Fallback Estático)

Um dos pontos mais fortes desta arquitetura é o **padrão de dados à prova de falhas**. O site funciona perfeitamente **mesmo se o CMS estiver vazio ou fora do ar**.

### Como Funciona:
1. As páginas Server Component tentam buscar os dados no CMS através do Sanity (`lib/queries.ts`).
2. É feita uma verificação de existência (`hasDestinations = cmsData && cmsData.length > 0`).
3. Se houver dados no CMS, ele renderiza o conteúdo dinâmico.
4. Se o CMS retornar vazio (ex: início do projeto), ele renderiza automaticamente os dados locais estáticos de `lib/data.ts`.

#### Exemplo prático (`app/page.tsx`):
```tsx
// 1. Fetch das duas fontes
const cmsDestinations = await getAllDestinations();
const hasDestinations = cmsDestinations && cmsDestinations.length > 0;

// 2. Renderização condicional resiliente
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {hasDestinations
        ? cmsDestinations.map((dest) => (
            <DestinoCard key={dest._id} country={{ ... }} />
          ))
        : countries.map((country) => (
            <DestinoCard key={country.slug} country={country} />
          ))
    }
</div>
```

---

## 4. Design System, Cores e Tipografia (Tailwind CSS)

O visual cinematográfico e premium do projeto é mantido através de um **Design System baseado em tokens** no Tailwind CSS.

### 4.1. Configuração dos Tokens (`tailwind.config.ts`)
```typescript
const config: Config = {
    content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#0a0c10", // Preto suave cinemático
                foreground: "#f0f2f5", // Texto claro de alta legibilidade
                primary: {
                    500: "#3d7e9a",   // Cor de destaque/marca
                    600: "#2d637c",
                },
                card: "#12151c",       // Fundo de cards com contraste elegante
            },
            backgroundImage: {
                "gradient-cinematic": "linear-gradient(to top, rgba(10, 12, 16, 1) 0%, rgba(10, 12, 16, 0.4) 50%, rgba(10, 12, 16, 0.1) 100%)",
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                serif: ['var(--font-playfair)'],
            }
        },
    },
};
```

### 4.2. Otimização de Fontes Nativas (`app/layout.tsx`)
```tsx
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
                {children}
            </body>
        </html>
    );
}
```

---

## 5. Engenharia de SEO Avançado & Analytics

O projeto implementa as melhores práticas globais para indexação rápida e posicionamento nos buscadores:

### 5.1. Metadados Globais e Dinâmicos (`app/layout.tsx`)
- Configuração de `template` para títulos de páginas filhas (`%s | Nome do Site`).
- `openGraph` e `twitter` cards completos para compartilhamento social.
- `metadataBase` para URLs absolutas corretas.

### 5.2. Dados Estruturados (JSON-LD / Schema.org)
No `layout.tsx`, é injetado o script com `Schema.org` para apresentar Rich Snippets no Google:
```tsx
const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": "https://seudominio.com.br/#website",
            "url": "https://seudominio.com.br/",
            "name": "Nome da Sua Marca",
            "description": "Descrição SEO da empresa",
        },
        {
            "@type": "Organization",
            "@id": "https://seudominio.com.br/#organization",
            "name": "Nome da Sua Empresa",
            "logo": { "@type": "ImageObject", "url": "https://seudominio.com.br/logo.png" }
        }
    ]
};
```

### 5.3. Sitemap Dinâmico Automático (`app/sitemap.ts`)
O sitemap é gerado programaticamente consultando os Slugs do CMS em tempo real:
```typescript
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://seudominio.com.br';
    const slugList = await client.fetch<string[]>(`*[_type == "destination" && defined(slug.current)].slug.current`);

    const dynamicUrls = slugList.map((slug) => ({
        url: `${baseUrl}/destinos/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
        ...dynamicUrls,
    ];
}
```

---

## 6. Integração Headless CMS (Sanity.io)

### 6.1. Consultas GROQ Eficientes (`lib/queries.ts`)
O GROQ permite filtrar e projetar **apenas os campos necessários**, reduzindo o tamanho da resposta HTTP:
```groq
*[_type == "destination" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  shortDescription,
  mainImage,
  gallery
}
```

### 6.2. Otimizador de Imagens (`sanity/image.ts`)
Geração de URLs redimensionadas e convertidas para WebP no servidor do Sanity CDN:
```typescript
import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
    return builder.image(source);
}

// Uso: urlFor(img).width(800).height(600).url()
```

---

## 7. Otimização de Performance e Mídia

1. **Next/Image Remote Patterns (`next.config.mjs`)**: Liberação segura de domínios externos (Sanity CDN, Unsplash, YouTube Thumbnails) com otimização automática de formato WebP/AVIF.
2. **Revalidação Incremental (ISR)**: Páginas configuradas com `export const revalidate = 60;` para reconstruir em segundo plano a cada 60 segundos sem penalizar o usuário final.
3. **CSS de Impressão (`styles/print.css`)**: Otimiza a saída gráfica quando o usuário tenta salvar a página em PDF ou imprimir (ocultando botões, adjusting cores e fontes).

---

## 8. Passo a Passo para Criar um Novo Projeto do Zero

Para reutilizar esta arquitetura em outro segmento (ex: **Imobiliária** ou **Curso Online**):

### Passo 1: Criar o Projeto Next.js
```bash
npx create-next-app@latest meu-novo-site --typescript --tailwind --app --src-dir=false --eslint
cd meu-novo-site
```

### Passo 2: Instalar Dependências Principais
```bash
npm install sanity next-sanity @sanity/image-url @sanity/vision @sanity/table lucide-react date-fns @next/third-parties yet-another-react-lightbox styled-components
```

### Passo 3: Configurar os Tokens no `tailwind.config.ts`
Substitua as cores e variáveis pelas cores do seu novo segmento (ex: tons de verde/dourado para imobiliária, azul/roxo para tech).

### Passo 4: Definir os Schemas do CMS
Substitua os esquemas de `destination.ts` por esquemas do seu segmento (ex: `property.ts`, `course.ts`, `product.ts`).

### Passo 5: Criar os Dados de Fallback (`lib/data.ts`)
Popule o arquivo `lib/data.ts` com dados estruturados da sua nova entidade.

### Passo 6: Adaptar os Componentes
Crie/Adapte os cards (`PropertyCard.tsx`, `CourseCard.tsx`), a Hero section e a Navbar.

### Passo 7: Ajustar o Sitemap e SEO
Atualize as URLs base e os `@type` do Schema.org para o novo projeto no `layout.tsx` e `sitemap.ts`.

---

## 9. Checklist de Lançamento e Deploy

- [ ] Configurar as variáveis de ambiente na Vercel:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `NEXT_PUBLIC_SANITY_API_VERSION`
- [ ] Atualizar o ID do Google Analytics e Google Tag Manager no `app/layout.tsx`.
- [ ] Trocar o `baseUrl` no arquivo `app/sitemap.ts` para o domínio final.
- [ ] Verificar se todas as rotas dinâmicas possuem metadados SEO.
- [ ] Testar a resposta da página no Google Rich Results Test (para validar o JSON-LD).
- [ ] Configurar o domínio no painel do host (Vercel + DNS Hostinger/Cloudflare).
