import { defineField, defineType } from 'sanity';

export const problemGuideSchema = defineType({
  name: 'problemGuide',
  title: 'Guia Direto / Objetivo (Home)',
  type: 'document',
  fields: [
    defineField({
      name: 'problemTitle',
      title: 'Título do Objetivo / Problema',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição Curta',
      type: 'text',
      rows: 3,
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
          { title: 'Cidade', value: 'cidade' },
          { title: 'Reviews', value: 'reviews' },
          { title: 'Vida Outdoor', value: 'vida-outdoor' },
          { title: 'Pensamento', value: 'pensamento' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'targetSlug',
      title: 'Slug de Destino (URL do Artigo ou Review)',
      type: 'string',
      description: 'Exemplo: como-comecar-no-gravel-com-pouco-orcimento ou review-pneu-gravelking-sk-38c',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconName',
      title: 'Ícone',
      type: 'string',
      options: {
        list: [
          { title: 'Bicicleta (Bike)', value: 'Bike' },
          { title: 'Bússola (Compass)', value: 'Compass' },
          { title: 'Pegadas (Footprints)', value: 'Footprints' },
          { title: 'Escudo / Alerta (ShieldAlert)', value: 'ShieldAlert' },
          { title: 'Sacola (ShoppingBag)', value: 'ShoppingBag' },
        ],
      },
      initialValue: 'Compass',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordem de Exibição',
      type: 'number',
      description: 'Número para ordenar os cards na página inicial (1, 2, 3...)',
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: 'Ordem Numérica',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'problemTitle',
      subtitle: 'category',
    },
  },
});
