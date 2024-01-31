import { getEntry } from "astro:content";

export async function topProjects() {
  return [
    await getEntry('projects', 'veikkaus'),
    await getEntry('projects', 'espoo'),
    await getEntry('projects', 'kone'),
  ]
}