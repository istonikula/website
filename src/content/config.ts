import { z, defineCollection } from 'astro:content'

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

const projectCollection = defineCollection({ type: 'content', schema: projectSchema })
const fossCollection = defineCollection({ type: 'data', schema: fossSchema })

export const collections = {
    'projects': projectCollection,
    'foss': fossCollection
}