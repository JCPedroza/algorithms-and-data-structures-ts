/**
 * Check if a given string is a palindrome
 * Uses string and array methods.
 * @param str String to be checked.
 * @returns True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (str: string): boolean => {
  // Character class \W represents non-alphanumeric characters
  const normalStr = str.replace(/\W/g, '').toLowerCase()
  const reverseStr = [...normalStr].reverse().join('')
  return normalStr === reverseStr
}

const algorithm = {
  fun: isPalindrome,
  id: 'string and array methods'
}

export default algorithm
