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
          { title: 'Cidade', value: 'cidade' },
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
        defineField({ name: 'productAndVariant', title: '1. Produto & Variante (ex: West Biking 1.9L Impermeável)', type: 'string' }),
        defineField({ name: 'periodOfUse', title: '2. Período de Uso (ex: 4 meses de uso / 1.200 km)', type: 'string' }),
        defineField({ name: 'distanceOrHours', title: '3. Distância / Horas Acumuladas (ex: 450 km acumulados)', type: 'string' }),
        defineField({ name: 'terrainAndWeather', title: '4. Terreno e Clima de Teste (ex: Chuva e lama em Curitiba)', type: 'string' }),
        defineField({ name: 'terrain', title: 'Terreno / Condição (Legado)', type: 'string' }),
        defineField({ name: 'configuration', title: '5. Configuração / Ajuste Utilizado (ex: Fixado no tubo superior)', type: 'string' }),
        defineField({
          name: 'criteria',
          title: '6. Critérios Específicos Observados',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'indicatedFor', title: '9. Perfil Indicado (Para quem faz sentido)', type: 'text', rows: 2 }),
        defineField({
          name: 'alternatives',
          title: '10. Alternativas no Mercado',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'priceAndDate', title: '11. Verificação de Preço e Data (ex: R$ 89,00 na Shopee em 07/09/2026)', type: 'string' }),
        defineField({ name: 'testedBy', title: 'Quem Testou', type: 'string', initialValue: 'George Volpão' }),
        defineField({
          name: 'boughtOrProvided',
          title: 'Origem do Item',
          type: 'string',
          options: { list: ['Comprado com recursos próprios', 'Enviado por marca sem compromisso editorial'] },
        }),
      ],
    }),
    defineField({
      name: 'pros',
      title: 'Pontos Fortes (Pros / 7. Onde entrega)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'cons',
      title: 'Limitações (Cons / 8. Onde decepciona)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'verdict',
      title: 'Veredito Final (Conclusão Editorial)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'affiliateProducts',
      title: 'Equipamentos Afiliados Recomendados',
      description: 'Selecione o(s) produto(s) de afiliado cadastrado(s) no Sanity para aparecer(em) no card ao final do review.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'affiliateProduct' }] }],
    }),
    defineField({
      name: 'modules',
      title: 'Módulos do Review (Blocos Independentes)',
      description: 'Adicione blocos separados (Texto, Tabela Rápida, Bloco de Destaque, Imagem) fora da caixa de texto.',
      type: 'array',
      of: [
        { type: 'textBlock' },
        { type: 'customTable' },
        { type: 'calloutBox' },
        { type: 'imageBlock' },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo Completo do Review',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        { type: 'customTable', title: 'Tabela Rápida' },
        { type: 'calloutBox', title: 'Bloco de Destaque' },
      ],
    }),
  ],
});
