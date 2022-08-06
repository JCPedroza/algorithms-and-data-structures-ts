/**
 * Computes the nth Fibonacci number using memoization with map.
 * @param index Zero-based index of the Fibonacci number to compute.
 * @returns The Fibonacci number located at the specified index.
 */
const fibo = (index: number): number => {
  const results = new Map<number, number>([[0, 0], [1, 1]])

  const loop = (idx: number): number => {
    if (results.has(idx)) return results.get(idx) ?? 0

    results.set(idx, loop(idx - 1) + loop(idx - 2))
    return results.get(idx) ?? 0
  }

  return loop(index)
}

const algorithm = {
  fun: fibo,
  id: 'memoizatin with map'
}

export default algorithm
