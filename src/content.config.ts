import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages", generateId: ({ entry }) => entry.replace(/\.md$/, ''), }),
  schema: z.object({
    title: z.string(),
    layout: z.string(),
    type: z.string().optional(),
    hidden: z.boolean().optional(),
  }),
});

export const collections = { pages };