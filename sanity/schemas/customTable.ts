import { defineField, defineType } from 'sanity';

export const customTableSchema = defineType({
  name: 'customTable',
  title: 'Tabela Rápida (Texto)',
  type: 'object',
  options: {
    modal: { type: 'dialog', width: 'auto' },
  },
  fields: [
    defineField({
      name: 'caption',
      title: 'Título / Legenda da Tabela (Opcional)',
      type: 'string',
      placeholder: 'ex: Tabela de Ajuste de Pressão de Pneus',
    }),
    defineField({
      name: 'headersText',
      title: 'Cabeçalhos das Colunas (Separados por | ou vírgula)',
      type: 'string',
      placeholder: 'Mudança | Tendência de ajuste | O que observar',
    }),
    defineField({
      name: 'rowsText',
      title: 'Linhas da Tabela (Uma linha por texto, colunas separadas por | )',
      type: 'text',
      rows: 6,
      placeholder: `Pneu mais largo e volumoso | Testar menos pressão | Estabilidade na curva e aro
Mais peso ou bagagem | Aumentar suporte | Batidas no aro e deformação
Piso solto, áspero ou molhado | Reduzir moderadamente | Tração e direção previsível`,
      description: 'Digite cada linha da tabela em uma nova linha. Separe as colunas com o caractere |',
    }),
  ],
  preview: {
    select: {
      caption: 'caption',
      headersText: 'headersText',
    },
    prepare({ caption, headersText }) {
      return {
        title: caption || 'Tabela Rápida',
        subtitle: headersText ? `📊 Colunas: ${headersText}` : '📊 Tabela formatada',
      };
    },
  },
});
