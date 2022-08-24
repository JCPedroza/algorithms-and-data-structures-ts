/**
 * Compute sum of even Fibonacci numbers that don't exceed the given limit.
 * Uses brute force trial division with a while loop.
 * Complexity: time O(n), space O(1).
 * @param limit Max inclusive value of the Fibonacci sequence.
 * @returns Sum of even Fibonacci numbers that don't exceed the given limit.
 */
const evenFiboSum = (limit: number): number => {
  let current = 0
  let next = 1
  let sum = 0

  while (next <= limit) {
    [current, next] = [next, current + next]
    if (current % 2 === 0) sum += current
  }

  return sum
}

const solution = {
  fun: evenFiboSum,
  id: 'brute force trial division with while loop'
}

export default solution
