import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/fr", generateId: ({ entry }) => entry.replace(/\.md$/, ''), }),
  schema: z.object({
    title: z.string(),
    layout: z.string(),
  }),
});

export const collections = { pages };