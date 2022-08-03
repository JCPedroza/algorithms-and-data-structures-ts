/**
 * Computes the nth Fibonacci number using memoization with array.
 * @param index Zero-based index of the Fibonacci number to compute.
 * @returns The Fibonacci number located at the specified index.
 */
const fibo = (index: number): number => {
  const results = [0, 1]

  const loop = (idx: number): number => {
    if (results[idx] !== undefined) return results[idx]

    results[idx] = loop(idx - 1) + loop(idx - 2)
    return results[idx]
  }

  return loop(index)
}

const algorithm = {
  fun: fibo,
  id: 'memoization with array'
}

export default algorithm
