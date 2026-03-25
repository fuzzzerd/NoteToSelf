import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  lastMod: z.coerce.date().optional(),
  author: z.object({ name: z.string() }).optional(),
  tags: z.array(z.string()).optional(),
  source: z.string().optional(),
  sourceUrl: z.string().url().optional(),
  draft: z.boolean().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
  schema: postSchema,
});

const stackarchive = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/stackarchive' }),
  schema: postSchema,
});

export const collections = { blog, stackarchive };
