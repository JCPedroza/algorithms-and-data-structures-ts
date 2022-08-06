import fiboSimple from './fibo-simple'
import fiboTailCall from './fibo-tail-call'
import fiboForLoop from './fibo-for-loop'
import fiboWhileLoop from './fibo-while-loop'
import fiboMemoArray from './fibo-memo-array'
import fiboMemoArrayNull from './fibo-memo-array-null'
import fiboMemoObject from './fibo-memo-object'
import fiboMemoObjectNull from './fibo-memo-object-null'
import fiboMemoMap from './fibo-memo-map'

const testSubjects = [
  fiboSimple,
  fiboTailCall,
  fiboForLoop,
  fiboWhileLoop,
  fiboMemoArray,
  fiboMemoArrayNull,
  fiboMemoObject,
  fiboMemoObjectNull,
  fiboMemoMap
]

for (const { fun, id } of testSubjects) {
  describe(`Fibonacci algorithm "${id}"`, () => {
    it('computes the first Fibonacci numbers', () => {
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
