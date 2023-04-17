import algorithms from './int-exp.repo'

// Error tolerance for floating point results (number of digits after decimal point)
const floatDelta = 15

for (const { fun, id } of algorithms) {
  describe(`Integer exponentiation algorithm "${id}"`, () => {
    it('computes exponentiation with positive arguments', () => {
      expect(fun(3, 0)).toBe(1)
      expect(fun(3, 1)).toBe(3)
      expect(fun(3, 2)).toBe(9)
      expect(fun(3, 3)).toBe(27)
      expect(fun(3, 4)).toBe(81)
    })

    it('computes exponentiation with negative base', () => {
      expect(fun(-3, 0)).toBe(1)
      expect(fun(-3, 1)).toBe(-3)
      expect(fun(-3, 2)).toBe(9)
      expect(fun(-3, 3)).toBe(-27)
      expect(fun(-3, 4)).toBe(81)
    })

    it('computes exponentiation with negative exponent', () => {
      expect(fun(3, -0)).toBe(1)
      expect(fun(3, -1)).toBeCloseTo(0.3333333333333333, floatDelta)
      expect(fun(3, -2)).toBeCloseTo(0.1111111111111111, floatDelta)
      expect(fun(3, -3)).toBeCloseTo(0.0370370370370370, floatDelta)
      expect(fun(3, -4)).toBeCloseTo(0.0123456790123456, floatDelta)
    })

    it('computes exponentiation with negative arguments', () => {
      expect(fun(-3, -0)).toBe(1)
      expect(fun(-3, -1)).toBeCloseTo(-0.3333333333333333, floatDelta)
      expect(fun(-3, -2)).toBeCloseTo(0.1111111111111111, floatDelta)
      expect(fun(-3, -3)).toBeCloseTo(-0.0370370370370370, floatDelta)
      expect(fun(-3, -4)).toBeCloseTo(0.0123456790123456, floatDelta)
    })

    it('throws exception for non-integer arguments', () => {
      expect(() => { fun(2.1, 3) }).toThrow()
      expect(() => { fun(2, 3.9) }).toThrow()
      expect(() => { fun(2.2, 3.7) }).toThrow()
    })
  })
}
