import { allFoss, allProjects } from './projects'

export async function allTags() {
  const projects = await allProjects()
  const foss = await allFoss()

  const tags = [
    ...new Set(
      projects
        .map((x) => x.data.tags)
        .flat()
        .concat(foss.map((x) => x.data.tags).flat()),
    ),
  ]

  return tags
}
