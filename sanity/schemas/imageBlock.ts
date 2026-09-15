import { defineField, defineType } from 'sanity';
import { Image as ImageIcon } from 'lucide-react';

export const imageBlockSchema = defineType({
  name: 'imageBlock',
  title: 'Imagem em Destaque',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'caption',
      title: 'Legenda da Imagem (Opcional)',
      type: 'string',
      placeholder: 'ex: George testando a bike na subida de serra',
    }),
    defineField({
      name: 'alt',
      title: 'Texto Alternativo para Acessibilidade / SEO',
      type: 'string',
    }),
  ],
  preview: {
    select: { media: 'image', caption: 'caption' },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare(selection: Record<string, any>) {
      return {
        title: '🖼️ Imagem em Destaque',
        subtitle: selection.caption || 'Foto do artigo',
        media: selection.media,
      };
    },
  },
});
