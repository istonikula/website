import { foss, projects } from '@/data'

export function allTags() {
  const tags = [
    ...new Set(
      projects
        .map((x) => x.tags)
        .flat()
        .concat(foss.map((x) => x.tags).flat()),
    ),
  ]

  return tags
}
