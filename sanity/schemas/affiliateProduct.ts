import { defineField, defineType } from 'sanity';

export const affiliateProductSchema = defineType({
  name: 'affiliateProduct',
  title: 'Equipamento Recomendado (Afiliado)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do Produto',
      type: 'string',
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
      name: 'priceEstimate',
      title: 'Preço Estimado',
      type: 'string',
      placeholder: 'R$ 280,00',
    }),
    defineField({
      name: 'testedBadge',
      title: 'Possui Selo de Testado em Campo?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'testedPeriod',
      title: 'Tempo de Uso do Selo',
      type: 'string',
      placeholder: 'Usado por 8 meses',
    }),
    defineField({
      name: 'honestContext',
      title: 'Contexto de Uso Honestos',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'limitation',
      title: 'Limitação Importante',
      type: 'string',
    }),
    defineField({
      name: 'affiliateUrl',
      title: 'Link Transparente de Compra (Mercado Livre / Shopee)',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'storeName',
      title: 'Nome da Loja',
      type: 'string',
      initialValue: 'Mercado Livre',
    }),
    defineField({
      name: 'image',
      title: 'Imagem do Produto',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
