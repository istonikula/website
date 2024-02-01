import * as O from 'fp-ts/lib/Option'

export const reMonthYear = /^(1[0-2]|[1-9])\/(20\d{2}|19\d{2})$/

export function monthYearToDate(monthYear: string): O.Option<Date> {
  const match = reMonthYear.exec(monthYear)
  if (!match) return O.none

  const month = match[1]
  const year = match[2]

  return O.some(new Date(Number(year), Number(month), 1))
}
