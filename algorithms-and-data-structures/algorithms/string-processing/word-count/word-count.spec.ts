import algorithms from './word-count.repo'

for (const { fun, id } of algorithms) {
  describe(`Word count algorithm "${id}"`, () => {
    describe('counts number of words in', () => {
      test('strings with spaces', () => {
        expect(fun('one')).toBe(1)
        expect(fun(' one two three ')).toBe(3)

        expect(fun(` one  two
          three    four`)).toBe(4)
      })

      test('strings with spaces and punctuation', () => {
        expect(fun('  one. two! three?four')).toBe(4)
        expect(fun('one.two.three? four!!! ;five; ?? . ')).toBe(5)

        expect(fun(` ?? -- | @one?
          two three  @ four five.six`)).toBe(6)
      })

      test('strings with no words', () => {
        expect(fun('')).toBe(0)
        expect(fun('_??  ; . .. :')).toBe(0)

        expect(fun(`-
          + - `)).toBe(0)
      })
    })
  })
}
