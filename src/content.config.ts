import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const entrySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.date(),
  author: reference("authors"),
  order: z.number().int().nonnegative(),
  isParent: z.boolean().optional(),
  parentId: z.string().optional(),
  coverImage: z.string().optional(),
});

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
  schema: entrySchema,
});

const sistemaJuegoCollection = defineCollection({
  loader: glob({
    base: "./src/content/sistema-juego",
    pattern: "**/*.md",
  }),
  schema: entrySchema,
});

const narrativaCollection = defineCollection({
  loader: glob({
    base: "./src/content/narrativa",
    pattern: "**/*.md",
  }),
  schema: entrySchema,
});

const progresionCollection = defineCollection({
  loader: glob({
    base: "./src/content/progresion",
    pattern: "**/*.md",
  }),
  schema: entrySchema,
});

const interfazCollection = defineCollection({
  loader: glob({
    base: "./src/content/interfaz",
    pattern: "**/*.md",
  }),
  schema: entrySchema,
});

const contenidoCollection = defineCollection({
  loader: glob({
    base: "./src/content/contenido",
    pattern: "**/*.md",
  }),
  schema: entrySchema,
});

const monetizacionCollection = defineCollection({
  loader: glob({
    base: "./src/content/monetizacion",
    pattern: "**/*.md",
  }),
  schema: entrySchema,
});

export const collections = {
  authors: authorsCollection,
  general: entradasCollection,
  "sistema-juego": sistemaJuegoCollection,
  narrativa: narrativaCollection,
  progresion: progresionCollection,
  interfaz: interfazCollection,
  contenido: contenidoCollection,
  monetizacion: monetizacionCollection,
};
