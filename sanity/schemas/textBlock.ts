import { defineField, defineType } from 'sanity';
import { FileText } from 'lucide-react';

export const textBlockSchema = defineType({
  name: 'textBlock',
  title: 'Bloco de Texto / Parágrafos',
  type: 'object',
  icon: FileText,
  fields: [
    defineField({
      name: 'text',
      title: 'Texto do Bloco',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: { text: 'text' },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare(selection: Record<string, any>) {
      const text = selection.text;
      const firstBlock = Array.isArray(text) ? text.find((b: any) => b._type === 'block') : null;
      const snippet = firstBlock?.children?.map((c: any) => c.text).join('') || 'Bloco de texto';
      return {
        title: '📝 Bloco de Texto',
        subtitle: snippet.length > 60 ? `${snippet.slice(0, 60)}...` : snippet,
      };
    },
  },
});
