/**
 * Computes the nth Fibonacci number using a for loop.
 * @param index Zero-based index of the Fibonacci number to compute.
 * @returns The Fibonacci number located at the specified index.
 */
const fibo = (index: number): number => {
  let current = 0
  let next = 1

  for (let idx = 0; idx < index; idx++) {
    [current, next] = [next, current + next]
  }

  return current
}

const algorithm = {
  fun: fibo,
  id: 'for loop'
}

export default algorithm
