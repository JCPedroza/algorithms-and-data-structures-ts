/**
 * Computes the nth Fibonacci number using a for loop.
 * @param index Zero-based index of the Fibonacci number to compute.
 * @returns The Fibonacci number located at the specified index.
 */
const fibo = (index: number): number => {
  let current = 0
  let next = 1
  let count = 0

  while (count < index) {
    [current, next] = [next, current + next]
    count += 1
  }

  return current
}

const algorithm = {
  fun: fibo,
  id: 'while loop'
}

export default algorithm
