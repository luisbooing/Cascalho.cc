import { defineField, defineType } from 'sanity';

export const calloutBoxSchema = defineType({
  name: 'calloutBox',
  title: 'Bloco de Destaque / Caixa de Informação',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Estilo do Bloco',
      type: 'string',
      options: {
        list: [
          { title: '💡 Dica / Informação (Teal / Azul)', value: 'info' },
          { title: '⚠️ Alerta / Atenção (Coral / Laranja)', value: 'warning' },
          { title: '📌 Nota Editorial / Ponto Chave (Sun / Amarelo)', value: 'tip' },
          { title: '💬 Destaque Aspas / Citação (Papel / Magenta)', value: 'quote' },
        ],
      },
      initialValue: 'info',
    }),
    defineField({
      name: 'title',
      title: 'Título do Bloco (Opcional)',
      type: 'string',
      placeholder: 'ex: O que observar na primeira saída',
    }),
    defineField({
      name: 'text',
      title: 'Texto do Bloco',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      text: 'text',
      type: 'type',
    },
    prepare({ title, text, type }) {
      const typeIcons: Record<string, string> = {
        info: '💡',
        warning: '⚠️',
        tip: '📌',
        quote: '💬',
      };
      const icon = typeIcons[type || 'info'] || '💡';
      return {
        title: `${icon} ${title || 'Bloco de Destaque'}`,
        subtitle: text,
      };
    },
  },
});
