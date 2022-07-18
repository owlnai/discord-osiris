function findURLsInText(str: string) {
  const urlPattern = /https?:\/\/(?:www\d?\.)?([^\s/]+)/g
  const matches = str.matchAll(urlPattern)
  return [...matches].map((match) => match[1].toLowerCase())
}

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
