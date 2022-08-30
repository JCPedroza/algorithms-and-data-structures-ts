import isPalindromeWhile from './is-palindrome-while'
import isPalindromeMethods from './is-palindrome-methods'

const testSubjects = [
  isPalindromeWhile,
  isPalindromeMethods
]

for (const { fun, id } of testSubjects) {
  describe(`Is-palindrome algorithm "${id}"`, () => {
    it('returns true if the input string is a palindrome', () => {
      expect(fun('')).toBe(true)
      expect(fun('1')).toBe(true)
      expect(fun('22')).toBe(true)
      expect(fun('121')).toBe(true)
      expect(fun('TeNEt')).toBe(true)
      expect(fun('!? R . a : ceca;r')).toBe(true)
      expect(fun('¿Ani. ta?  ..  LAva :l;a tina!')).toBe(true)
    })

    it('returns false if the input string is not a palindrome', () => {
      expect(fun('01')).toBe(false)
      expect(fun('Not a palindrome')).toBe(false)
    })
  })
}
