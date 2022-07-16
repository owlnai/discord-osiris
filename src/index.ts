import regexes from "./regexes"

function findURLsInText(str: string) {
  const urlPattern = /https?:\/\/(?:www\d?\.)?([^\s/]+)/g
  const matches = str.matchAll(urlPattern)
  return [...matches].map((match) => match[1].toLowerCase())
}

export async function checkString(str: string): Promise<boolean> {
  const matches = findURLsInText(str)
  for (const match of matches) {
    for (const regex of regexes) {
      if (regex.test(match)) {
        return true
      }
    }
  }
  return false
}
