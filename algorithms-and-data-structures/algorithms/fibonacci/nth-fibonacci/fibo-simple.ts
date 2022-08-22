/**
 * Computes the nth Fibonacci number using simple recursion.
 * @param index Zero-based index of the Fibonacci number to compute.
 * @returns The Fibonacci number located at the specified index.
 */
const fibo = (index: number): number => {
  if (index < 1) return 0
  if (index === 1) return 1

  return fibo(index - 1) + fibo(index - 2)
}

const algorithm = {
  fun: fibo,
  id: 'simple recursion'
}

export default algorithm
