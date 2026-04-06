import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const employment = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/employment' }),
  schema: z.object({
    employer: z.string(),
    from: z.string(),
    to: z.string(),
    title: z.string(),
  }),
})

export const collections = { employment }
