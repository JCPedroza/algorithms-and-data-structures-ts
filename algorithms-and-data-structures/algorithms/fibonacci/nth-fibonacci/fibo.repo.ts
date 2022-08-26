import fiboForLoop from './fibo-for-loop'
import fiboMemoArrayNull from './fibo-memo-array-null'
import fiboMemoArray from './fibo-memo-array'
import fiboMemoMap from './fibo-memo-map'
import fiboMemoObjectNull from './fibo-memo-object-null'
import fiboMemoObject from './fibo-memo-object'
import fiboSimple from './fibo-simple'
import fiboTailCall from './fibo-tail-call'
import fiboWhileLoop from './fibo-while-loop'

const algorithms = [
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

export default algorithms
