import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    id: z.string(),
    category: z.string(),
    title: z.object({ en: z.string(), th: z.string() }),
    description: z.object({ en: z.string(), th: z.string() }),
    version: z.string(),
    status: z.enum(['released', 'beta', 'wip', 'archived']),
    free: z.boolean().default(true),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    github: z.string().optional(),
    download: z.string().optional(),
    features: z.object({
      en: z.array(z.string()),
      th: z.array(z.string()),
    }).optional(),
    installation: z.object({
      en: z.string(),
      th: z.string(),
    }).optional(),
  }),
});

export const collections = { projects };
