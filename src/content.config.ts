import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    lastMod: z.coerce.date().optional(),
    author: z.object({ name: z.string() }).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
