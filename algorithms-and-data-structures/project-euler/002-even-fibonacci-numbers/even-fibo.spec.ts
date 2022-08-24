import evenFiboForBrute from './even-fibo-while-brute'

const testSubjects = [
  evenFiboForBrute
]

testSubjects.forEach((subject) => {
  describe(`Project Euler 002 solution "${subject.id}"`, () => {
    it('computes sum of even Fibonacci numbers that do not exceed a limit', () => {
      expect(subject.fun(-1)).toBe(0)
      expect(subject.fun(0)).toBe(0)
      expect(subject.fun(2)).toBe(2)
      expect(subject.fun(10)).toBe(10)
      expect(subject.fun(60)).toBe(44)
    })
  })
})
