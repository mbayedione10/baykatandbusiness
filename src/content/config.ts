import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: z.union([image(), z.string()]),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(false),
    author: z.string(),
    authorImage: z.union([image(), z.string()]).optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
