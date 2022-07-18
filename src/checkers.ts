/**
 * Find URL(s) in a string
 * @param {string} str - String to search
 */
function findURLsInText(str: string): string[] {
  const urlPattern = /https?:\/\/(?:www\d?\.)?([^\s/]+)/g
  const matches = str.matchAll(urlPattern)
  return [...matches].map((match) => match[1].toLowerCase())
}

/**
 * Checks a string against a list of atterns
 * @param str String to check
 * @param patterns Patterns to check against
 */
export async function checkString(
  str: string,
  patterns: string[] | RegExp[]
): Promise<boolean> {
  const matches = findURLsInText(str)
  for (const match of matches) {
    for (const pattern of patterns) {
      const regex = new RegExp(pattern)
      if (regex.test(match)) {
        return true
      }
    }
  }
  return false
}
