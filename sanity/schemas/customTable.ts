import { defineField, defineType } from 'sanity';

export const customTableSchema = defineType({
  name: 'customTable',
  title: 'Tabela de Informações',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      title: 'Título / Legenda da Tabela (Opcional)',
      type: 'string',
      placeholder: 'ex: Tabela de Ajuste de Pressão de Pneus',
    }),
    defineField({
      name: 'headers',
      title: 'Cabeçalhos das Colunas',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Adicione o nome de cada coluna (ex: Mudança, Tendência de ajuste, O que observar)',
    }),
    defineField({
      name: 'rows',
      title: 'Linhas da Tabela',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'tableRow',
          title: 'Linha',
          fields: [
            defineField({
              name: 'cells',
              title: 'Células da Linha',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Adicione os textos das colunas na mesma ordem dos cabeçalhos acima',
            }),
          ],
          preview: {
            select: {
              cells: 'cells',
            },
            prepare({ cells }) {
              return {
                title: Array.isArray(cells) && cells.length > 0 ? cells.join('  |  ') : 'Linha vazia',
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      caption: 'caption',
      headers: 'headers',
      rows: 'rows',
    },
    prepare({ caption, headers, rows }) {
      const colCount = Array.isArray(headers) ? headers.length : 0;
      const rowCount = Array.isArray(rows) ? rows.length : 0;
      return {
        title: caption || `Tabela (${colCount} colunas x ${rowCount} linhas)`,
        subtitle: `📊 Tabela informativa com ${rowCount} linha(s)`,
      };
    },
  },
});
