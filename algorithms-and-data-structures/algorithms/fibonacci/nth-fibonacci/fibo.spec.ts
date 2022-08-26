import algorithms from './fibo.repo'

for (const { fun, id } of algorithms) {
  describe(`Fibonacci algorithm "${id}"`, () => {
    it('computes the first Fibonacci numbers', () => {
      expect(fun(-1)).toBe(0)
      expect(fun(0)).toBe(0)
      expect(fun(1)).toBe(1)
      expect(fun(2)).toBe(1)
      expect(fun(3)).toBe(2)
      expect(fun(4)).toBe(3)
      expect(fun(5)).toBe(5)
      expect(fun(6)).toBe(8)
      expect(fun(7)).toBe(13)
    })
  })
}
