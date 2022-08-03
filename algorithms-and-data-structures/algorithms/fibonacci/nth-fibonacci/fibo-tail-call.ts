/**
 * Computes the nth Fibonacci number using tail-call recursion.
 * @param index Zero-based index of the Fibonacci number to compute.
 * @returns The Fibonacci number located at the specified index.
 */
const fibo = (index: number): number => {
  const loop = (now: number, nxt: number, idx: number): number => {
    if (idx < 1) return now
    return loop(nxt, now + nxt, idx - 1)
  }

  return loop(0, 1, index)
}

const algorithm = {
  fun: fibo,
  id: 'tail-call recursion'
}

export default algorithm
