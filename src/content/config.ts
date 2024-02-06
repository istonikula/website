import { defineCollection, z } from 'astro:content'

const employmentSchema = z.object({
  employer: z.string(),
  from: z.string(),
  to: z.string(),
  title: z.string(),
})

const employmentCollection = defineCollection({
  type: 'content',
  schema: employmentSchema,
})

export const collections = {
  employment: employmentCollection,
}
