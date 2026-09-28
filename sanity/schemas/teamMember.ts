import { defineType, defineField } from 'sanity';

export const teamMemberSchema = defineType({
  name: 'teamMember',
  title: 'Membros da Equipe',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome Completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Cargo / Função',
      type: 'string',
      description: 'Ex: Criador, Ciclista & Corredor de Trilha',
    }),
    defineField({
      name: 'bio',
      title: 'Biografia / Trajetória',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'yearsActive',
      title: 'Tempo de Atuação / Destaque',
      type: 'string',
      description: 'Ex: Desde 1995 nas montanhas',
    }),
    defineField({
      name: 'avatar',
      title: 'Foto de Perfil',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Ordem de Exibição',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'avatar',
    },
  },
});
