/**
 * Checks a string against a list of atterns
 * @param str String to check
 * @param patterns Patterns to check against
 */
declare function checkString(str: string, patterns: string[] | RegExp[]): Promise<boolean>;

declare const regexes: RegExp[];

export { checkString, regexes };
