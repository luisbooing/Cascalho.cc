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
  ],
});
