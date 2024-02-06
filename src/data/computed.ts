import { foss } from './foss'
import { projects } from './projects'

export const pinnedProjects = projects.slice(0, 3)

export function allProjectTags() {
  const projectTags = projects.map((x) => x.tags).flat()
  const fossTags = foss.map((x) => x.tags).flat()

  return [...new Set(projectTags.concat(fossTags))]
}
