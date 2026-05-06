import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    summary: z.string(),
    order: z.number().optional().default(0),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { projects };
