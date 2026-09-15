import { defineField, defineType, defineArrayMember } from 'sanity';
import { Table } from 'lucide-react';

export const customTableSchema = defineType({
  name: 'customTable',
  title: 'Tabela Rápida',
  type: 'object',
  icon: Table,
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
      description: 'Adicione os nomes das colunas da tabela (ex: Coluna 1, Coluna 2)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'rows',
      title: 'Linhas da Tabela',
      description: 'Adicione cada linha e preencha o texto de cada célula',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'tableRow',
          title: 'Linha da Tabela',
          fields: [
            defineField({
              name: 'cells',
              title: 'Células desta Linha',
              description: 'Digite o conteúdo de cada coluna nesta linha',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: { cells: 'cells' },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            prepare(selection: Record<string, any>) {
              const cells = selection.cells || [];
              return {
                title: cells.length > 0 ? cells.join('  |  ') : 'Linha vazia',
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'headersText',
      title: 'Ou Modo Rápido: Cabeçalhos (Separados por | )',
      type: 'string',
      hidden: ({ parent }) => Array.isArray(parent?.headers) && parent.headers.length > 0,
    }),
    defineField({
      name: 'rowsText',
      title: 'Ou Modo Rápido: Linhas (Separadas por | )',
      type: 'text',
      rows: 4,
      hidden: ({ parent }) => Array.isArray(parent?.rows) && parent.rows.length > 0,
    }),
  ],
  preview: {
    select: {
      caption: 'caption',
      headers: 'headers',
      headersText: 'headersText',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare(selection: Record<string, any>) {
      const { caption, headers, headersText } = selection;
      const cols = Array.isArray(headers) && headers.length > 0 ? headers.join(', ') : headersText;
      return {
        title: caption ? `📊 ${caption}` : '📊 Tabela Rápida',
        subtitle: cols ? `Colunas: ${cols}` : 'Tabela preenchida',
      };
    },
  },
});
