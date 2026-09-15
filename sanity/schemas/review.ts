import { defineField, defineType } from 'sanity';

export const reviewSchema = defineType({
  name: 'review',
  title: 'Review / Veredito',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Review',
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
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Gravel', value: 'gravel' },
          { title: 'Trail Running', value: 'trail-running' },
          { title: 'Vida Outdoor', value: 'vida-outdoor' },
        ],
      },
    }),
    defineField({
      name: 'productName',
      title: 'Nome do Produto Testado',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Nota (0.0 a 5.0)',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data da Análise',
      type: 'date',
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo / Veredito Rápido',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: 'Foto Principal do Teste',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'methodology',
      title: 'Metodologia de Teste de Campo',
      type: 'object',
      fields: [
        defineField({ name: 'periodOfUse', title: 'Tempo de Uso (ex: 8 meses / 1.200 km)', type: 'string' }),
        defineField({ name: 'terrain', title: 'Terreno / Condição (ex: Serra da Graciosa, lama e pedra)', type: 'string' }),
        defineField({ name: 'testedBy', title: 'Quem Testou', type: 'string', initialValue: 'George Volpão' }),
        defineField({ name: 'boughtOrProvided', title: 'Origem do Item', type: 'string', options: { list: ['Comprado com recursos próprios', 'Enviado por marca sem compromisso editorial'] } }),
      ],
    }),
    defineField({
      name: 'pros',
      title: 'Pontos Fortes (Pros)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'cons',
      title: 'Limitações (Cons)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'verdict',
      title: 'Veredito Final (Para quem é recomendável)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo Completo do Review',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }, { type: 'customTable' }, { type: 'calloutBox' }],
    }),
  ],
});
