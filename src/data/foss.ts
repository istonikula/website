import type { Tag } from './tags'

export type Foss = {
  slug: string
  title: string
  description: string
  url: string
  tags: Tag[]
}

export const foss: Foss[] = [
  {
    slug: 'realworld-api',
    title: 'realworld-api',
    description: 'A realworld api example app featuring Arrow, Kotlin and Spring Boot',
    url: 'https://github.com/istonikula/realworld-api',
    tags: ['Arrow', 'Kotlin', 'Spring Boot', 'Functional Programming'],
  },
  {
    slug: 'realworld-go',
    title: 'realworld-go',
    description: 'A realworld api example app featuring Go, Gin and gRPC',
    url: 'https://github.com/istonikula/realworld-go',
    tags: ['Go', 'Gin', 'REST', 'gRPC'],
  },
  {
    slug: 'realworld-react',
    title: 'realworld-react',
    description: 'A realworld frontend example app featuring React, TypeScript and Vite',
    url: 'https://github.com/istonikula/realworld-react',
    tags: ['React', 'Preact Signals', 'TypeScript', 'Vite'],
  },
  {
    slug: 'hrs',
    title: 'hrs',
    description: 'Text file based time tracking',
    url: 'https://github.com/istonikula/hrs',
    tags: ['Rust'],
  },
  {
    slug: 'hetu-ts',
    title: 'hetu-ts',
    description: 'Finnish social security number (hetu) TypeScript library',
    url: 'https://github.com/istonikula/hetu-ts',
    tags: ['TypeScript'],
  },
]
