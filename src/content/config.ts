import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string().datetime({ offset: true }),
    updatedDate: z.string().datetime({ offset: true }).optional(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
