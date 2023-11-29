import { defineCollection, z } from "astro:content";

export const collections = {
  buildings: defineCollection({
    type: "content",
  }),
  consumables: defineCollection({
    type: "content",
  }),
  guns: defineCollection({
    type: "content",
  }),
  melees: defineCollection({
    type: "content",
  }),
  obstacles: defineCollection({
    type: "content"
  }),

  community: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
      author: z.string(),
      pinned: z.optional(z.boolean()),

      published: z.coerce.date(z.string().regex(/\d{4}-\d{2}-\d{2}/)),
      updated: z.coerce.date(z.string().regex(/\d{4}-\d{2}-\d{2}/)),
    }),
  }),
};
