import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(["life", "technology", "work-experience"]),
    excerpt: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional()
  })
});

export const collections = { blog };
