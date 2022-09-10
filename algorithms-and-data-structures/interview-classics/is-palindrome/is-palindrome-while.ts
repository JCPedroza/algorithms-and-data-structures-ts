/**
 * Check if a given string is a palindrome, ignoring non-alphanumecir characters.
 * Uses a symmetric while loop (checks both sides of the string at the same time).
 * Complexity: time AO(n) BO(1) WO(n), space AO(1) TO(n)
 * @param str String to be checked.
 * @returns True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (str: string): boolean => {
  let leftIndex = 0
  let rightIndex = str.length - 1
  const notWord = /[\W]/ // Character class \W represents non-alphanumeric characters

  while (leftIndex < rightIndex) {
    if (notWord.test(str[leftIndex])) {
      // Left char is not alphanumeric, ignore and go to next char
      leftIndex++
    } else if (notWord.test(str[rightIndex])) {
      // Right char is not alphanumeric, ignore and go to next char
      rightIndex--
    } else if (str[leftIndex].toLowerCase() !== str[rightIndex].toLowerCase()) {
      // Both characters are different, not a palindrome
      return false
    } else {
      // Both characters are equal, go to next chars
      leftIndex++
      rightIndex--
    }
  }

  // Left and right side are symmetric, input is a palindrome
  return true
}

const algorithm = {
  fun: isPalindrome,
  id: 'symmetric while loop'
}

export default algorithm
