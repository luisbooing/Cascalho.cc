import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { projectId, dataset } from './sanity/env';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  basePath: '/admin',
  name: 'CascalhoCC_Studio',
  title: 'Cascalho.CC — Painel Editorial',

  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
