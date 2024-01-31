import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    customer: z.string(),
    role: z.string(),
    from: z.string(),
    to: z.string(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }),
})

const fossSchema = z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }),
})

export type BlogSchema = z.infer<typeof blogSchema>;

const blogCollection = defineCollection({ type: 'content', schema: blogSchema });
const projectCollection = defineCollection({ type: 'content', schema: projectSchema });
const fossCollection = defineCollection({ type: 'data', schema: fossSchema });

export const collections = {
    'blog': blogCollection,
    'projects': projectCollection,
    'foss': fossCollection
}