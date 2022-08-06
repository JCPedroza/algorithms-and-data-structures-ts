/**
 * Used to save results for memoiation.
 */
interface Result {
  [key: number]: number
}

/**
 * Computes the nth Fibonacci number using memoization with object literal.
 * @param index Zero-based index of the Fibonacci number to compute.
 * @returns The Fibonacci number located at the specified index.
 */
const fibo = (index: number): number => {
  const results: Result = { 0: 0, 1: 1 }

  const loop = (idx: number): number => {
    results[idx] ??= loop(idx - 1) + loop(idx - 2)
    return results[idx]
  }

  return loop(index)
}

const algorithm = {
  fun: fibo,
  id: 'memoization with object literal and nullish assignment'
}

export default algorithm
