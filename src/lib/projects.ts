import type { CollectionEntry } from 'astro:content'
import type { Ord } from 'fp-ts/lib/Ord'

import { getCollection } from 'astro:content'
import { sort } from 'fp-ts/lib/Array'
import * as D from 'fp-ts/lib/Date'
import { pipe } from 'fp-ts/lib/function'
import * as N from 'fp-ts/lib/number'
import * as O from 'fp-ts/lib/Option'
import { contramap, reverse } from 'fp-ts/lib/Ord'

import { monthYearToDate } from './date'

export async function topProjects() {
  const all = await allProjects()
  return all.slice(0, 3)
}

export async function allProjects() {
  return sort(ordProject)(await getCollection('projects'))
}
type ProjectEntry = CollectionEntry<'projects'>
const nilFirstDateDesc = O.getOrd(reverse(D.Ord))
const ordProject: Ord<ProjectEntry> = contramap((p: ProjectEntry) =>
  pipe(p.data.to, O.fromNullable, O.flatMap(monthYearToDate)),
)(nilFirstDateDesc)

export async function allFoss() {
  return sort(ordFoss)(await getCollection('foss'))
}
type FossEntry = CollectionEntry<'foss'>
const ordFoss: Ord<FossEntry> = contramap((p: FossEntry) => p.data.order)(N.Ord)
