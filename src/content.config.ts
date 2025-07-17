// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const home = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/home" }),
  schema: z.object({
    title1: z.string(),
    title2: z.string(),
    description1: z.string(),
    description2: z.string(),
    button: z.string(),
    cards: z.object({
      card1: z.object({
        title: z.string(),
        description: z.string(),
      }),
      card2: z.object({
        title: z.string(),
        description: z.string(),
      }),
      card3: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
    about: z.object({
      title: z.string(),
      description: z.string(),
    }),
    projects: z.object({
      title: z.string(),
      button: z.string(),
    }),
  })
});
const dogs = defineCollection({ /* ... */ });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { home, dogs };