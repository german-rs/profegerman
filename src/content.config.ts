import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().max(70),
        description: z.string().max(160),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        tags: z.array(z.string()).default([]),
        // Curso al que lleva el botón final del artículo
        level: z.enum(['alfabetizacion', 'autonomia']).optional(),
        draft: z.boolean().default(false),
      })
      .refine((d) => !d.cover || d.coverAlt, {
        message: 'Si hay cover, agrega coverAlt (texto alternativo).',
        path: ['coverAlt'],
      }),
});

export const collections = { blog };