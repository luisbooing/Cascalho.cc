import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cascalho.CC — Pedalar, correr e pensar',
    short_name: 'Cascalho.CC',
    description: 'Casa autoral para pedalar gravel, correr em trilhas e viver ao ar livre. Equipamentos, rotas e relatos testados de verdade por George Volpão e equipe.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F1EA',
    theme_color: '#1A2E2B',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '160x160',
        type: 'image/png',
      },
    ],
  };
}
