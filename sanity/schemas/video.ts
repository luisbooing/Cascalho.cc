import { defineField, defineType } from 'sanity';

export const videoSchema = defineType({
  name: 'video',
  title: 'Vídeo do YouTube',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Vídeo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'Link do Vídeo no YouTube (ou Embed ID)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'date',
    }),
    defineField({
      name: 'duration',
      title: 'Duração',
      type: 'string',
      placeholder: '14:20',
    }),
    defineField({
      name: 'summary',
      title: 'Resumo Editorial do Vídeo',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'keyTakeaways',
      title: 'Principais Pontos Discutidos',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'chapters',
      title: 'Capítulos / Minutagem do Vídeo',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Capítulo',
          fields: [
            defineField({ name: 'time', title: 'Minutagem (ex: 02:15)', type: 'string' }),
            defineField({ name: 'title', title: 'Título do Capítulo', type: 'string' }),
            defineField({ name: 'desc', title: 'Descrição Rápida', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'transcriptSummary',
      title: 'Resumo Editorial & Transcrição Editada',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'mentionedProducts',
      title: 'Equipamentos Citados Neste Vídeo (Afiliados)',
      description: 'Selecione um ou mais produtos cadastrados no Sanity para aparecerem como Equipamentos Citados no Vídeo.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'affiliateProduct' }] }],
    }),
  ],
});
