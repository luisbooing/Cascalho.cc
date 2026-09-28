import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cascalho.cc"),
  title: {
    default: "Cascalho.CC — Pedalar, correr e pensar",
    template: "%s | Cascalho.CC",
  },
  description: "Casa autoral para pedalar gravel, correr em trilhas e viver ao ar livre. Equipamentos, rotas e relatos testados de verdade por George Volpão e equipe.",
  keywords: [
    "Gravel",
    "Trail Running",
    "Bicicleta de Entrada",
    "Pneus Gravel",
    "Montanha",
    "Curitiba",
    "Reviews de Equipamentos",
    "George Volpão",
    "Vida Outdoor"
  ],
  authors: [{ name: "George Volpão" }, { name: "Patricia Fontana" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "160x160", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "https://cascalho.cc",
  },
  openGraph: {
    title: "Cascalho.CC — Pedalar, correr e pensar",
    description: "Equipamentos, rotas e histórias de vida ao ar livre — testados sem conversa de vendedor.",
    url: "https://cascalho.cc",
    siteName: "Cascalho.CC",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://cascalho.cc/logo.png",
        width: 160,
        height: 160,
        alt: "Cascalho.CC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cascalho.CC — Pedalar, correr e pensar",
    description: "Equipamentos, rotas e relatos testados de verdade por George Volpão e equipe.",
    images: ["https://cascalho.cc/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://cascalho.cc/#website",
        "url": "https://cascalho.cc/",
        "name": "Cascalho.CC",
        "description": "Pedalar, correr e pensar — Equipamentos, rotas e vida ao ar livre.",
        "inLanguage": "pt-BR",
        "publisher": {
          "@id": "https://cascalho.cc/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://cascalho.cc/busca?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://cascalho.cc/#organization",
        "name": "Cascalho.CC",
        "url": "https://cascalho.cc/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://cascalho.cc/#logo",
          "url": "https://cascalho.cc/logo.png",
          "contentUrl": "https://cascalho.cc/logo.png",
          "caption": "Cascalho.CC Logo"
        },
        "image": {
          "@id": "https://cascalho.cc/#logo"
        },
        "sameAs": [
          "https://www.youtube.com/@cascalhocc",
          "https://www.instagram.com/cascalhocc/"
        ]
      }
    ]
  };

  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${lora.variable} min-h-screen flex flex-col font-sans bg-cascalho-paper text-cascalho-ink selection:bg-cascalho-coral selection:text-white`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
