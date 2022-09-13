/**
 * Counts the number of words in a string. Uses chained string methods.
 * Complexity: time O(n), space AO(n) TO(n).
 * @param text Words of this string will be counted.
 * @returns The number of words the input string contains.
 */
const wordCount = (text: string): number =>
  text
    .trim()
    .split(/[\W_]/) // Matches non-alphanumerics
    .filter(str => str !== '')
    .length

const algorithm = {
  fun: wordCount,
  id: 'chained string methods'
}

export default algorithm
