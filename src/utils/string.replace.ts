export function applyReplacements(
  str: string,
  optins: Record<string, string | number>,
): string {
  return Object.entries(optins).reduce(
    (acc, [key, value]) => acc.replace(`{${key}}`, String(value)),
    str,
  )
}
