import solutions from './long-substr.repo'

for (const { fun, id} of solutions) {
  describe(`Leet 3 "${id}"`, () => {
    it('finds length of largest substring without repeats', () => {
      expect(fun('')).toBe(0)
      expect(fun('a')).toBe(1)
      expect(fun('aaa')).toBe(1)
      expect(fun('axa')).toBe(2)
      expect(fun('xyzxyzxy')).toBe(3)
      expect(fun('1212312345671234')).toBe(7)
    })
  })
}
