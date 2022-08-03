import fiboSimple from './fibo-simple'
import fiboTailCall from './fibo-tail-call'
import fiboForLoop from './fibo-for-loop'
import fiboMemoArray from './fibo-memo-array'
import fiboMemoArrayNull from './fibo-memo-array-null'

const testSubjects = [
  fiboSimple,
  fiboTailCall,
  fiboForLoop,
  fiboMemoArray,
  fiboMemoArrayNull
]

for (const { fun, id } of testSubjects) {
  describe(`Fibonacci algorithm "${id}"`, () => {
    it('computes the nth Fibonacci number', () => {
      expect(fun(0)).toBe(0)
      expect(fun(1)).toBe(1)
      expect(fun(2)).toBe(1)
      expect(fun(3)).toBe(2)
      expect(fun(4)).toBe(3)
      expect(fun(5)).toBe(5)
      expect(fun(6)).toBe(8)
    })
  })
}
