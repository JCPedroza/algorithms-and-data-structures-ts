/**
 * Check if string is a palindrome using a while loop.
 * @param str String to be checked.
 * @returns True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (str: string): boolean => {
  let leftIndex = 0
  let rightIndex = str.length - 1
  const notWord = /[\W]/

  while (leftIndex < rightIndex) {
    if (notWord.test(str[leftIndex])) {
      leftIndex++
    } else if (notWord.test(str[rightIndex])) {
      rightIndex--
    } else if (str[leftIndex].toLowerCase() !== str[rightIndex].toLowerCase()) {
      return false
    } else {
      leftIndex++
      rightIndex--
    }
  }

  return true
}

const algorithm = {
  fun: isPalindrome,
  id: 'while loop'
}

export default algorithm
