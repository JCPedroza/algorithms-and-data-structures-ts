import mulsOfTrialFor from './muls-of-3-or-5-trial-for'

const testSubjects = [
  mulsOfTrialFor
]

for (const {fun, id} of testSubjects) {
  describe(`Project Euler 001 "multiples of 3 or 5" solution "${id}"`, () => {
    it('computes the sum below a given input', () => {
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
