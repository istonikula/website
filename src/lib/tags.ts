import { getCollection } from 'astro:content'

export async function allTags() {
  const projects = await getCollection('projects')
  const foss = await getCollection('foss')

  const tags = [
    ...new Set(
      projects.map(x => x.data.tags).flat().concat(foss.map(x => x.data.tags).flat())
    ),
  ];

  return tags
}