import implementations from './muls-of-3-or-5.repo'

for (const { fun, id } of implementations) {
  describe(`Project Euler 001 solution "${id}"`, () => {
    it('computes sum of positive multiples of 3 or 5 below the limit', () => {
      expect(fun(-1)).toBe(0)
      expect(fun(0)).toBe(0)
      expect(fun(3)).toBe(0)
      expect(fun(5)).toBe(3)
      expect(fun(6)).toBe(8)
      expect(fun(50)).toBe(543)
      expect(fun(100)).toBe(2_318)
    })
  })
}
