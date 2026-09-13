import { defineConfig } from 'sanity';
import { projectId, dataset, apiVersion } from './sanity/env';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  basePath: '/admin',
  name: 'CascalhoCC_Studio',
  title: 'Cascalho.CC — Painel Editorial',

  projectId,
  dataset,

  schema: {
    types: schemaTypes,
  },
});
