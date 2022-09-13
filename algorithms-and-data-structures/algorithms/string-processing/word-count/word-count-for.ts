/**
 * Counts the number of words in a string. Uses a for loop.
 * Complexity: time O(n), space AO(1) TO(n).
 * @param text Words of this string will be counted.
 * @returns The number of words the input string contains.
 */
const wordCount = (text: string): number => {
  let count = 0
  let separate = true

  for (const char of text) {
    if (/[\W_]/.test(char)) { // Matches non-alphanumerics
      separate = true
    } else {
      // Only count if word was preceded by a separator
      if (separate) count++
      separate = false
    }
  }

  return count
}

const algorithm = {
  fun: wordCount,
  id: 'for loop'
}

export default algorithm
