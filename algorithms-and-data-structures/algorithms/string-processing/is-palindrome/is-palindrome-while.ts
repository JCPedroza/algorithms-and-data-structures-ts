/**
 * Check if a given string is a palindrome.
 * Uses a symmetric while loop.
 * @param str String to be checked.
 * @returns True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (str: string): boolean => {
  let leftIndex = 0
  let rightIndex = str.length - 1
  const notWord = /[\W]/ // Character class \W represents non-alphanumeric characters

  while (leftIndex < rightIndex) {
    if (notWord.test(str[leftIndex])) {
      leftIndex++ // Left char is not alphanumeric
    } else if (notWord.test(str[rightIndex])) {
      rightIndex-- // Right char is not alphanumeric
    } else if (str[leftIndex].toLowerCase() !== str[rightIndex].toLowerCase()) {
      return false // Both characters are different
    } else {
      // Both characters are equal
      leftIndex++
      rightIndex--
    }
  }

  return true
}

const algorithm = {
  fun: isPalindrome,
  id: 'symmetric while loop'
}

export default algorithm
