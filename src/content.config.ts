import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const authorsCollection = defineCollection({
  loader: glob({
    base: "./src/content/authors",
    pattern: "**/*.json",
  }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

const entradasCollection = defineCollection({
  loader: glob({
    base: "./src/content/general",
    pattern: "**/*.md",
  }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: reference("authors"),
    order: z.number().int().nonnegative(),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  authors: authorsCollection,
  general: entradasCollection,
};
