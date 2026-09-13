import { createClient, type SanityClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from './env';

/**
 * Cria o client Sanity apenas se um projectId válido estiver configurado.
 * Quando o CMS não está configurado, `client` será null e as queries
 * cairão automaticamente no fallback estático de lib/data.ts.
 */
function createSanityClient(): SanityClient | null {
  // projectId do Sanity aceita apenas a-z, 0-9 e hifens
  if (!projectId || !/^[a-z0-9-]+$/.test(projectId)) {
    return null;
  }
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  });
}

export const client = createSanityClient();
