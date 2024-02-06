export function fromTo({ from, to }: { from: string; to?: string }) {
  return to ? `From ${from} to ${to}` : `From ${from}`
}
