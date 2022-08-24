/**
 * Compute sum of even Fibonacci numbers that don't exceed the given limit.
 * Uses tail call recursion with skips.
 * Complexity: time O(n), space O(n)? (recursion tree).
 * @param limit Max inclusive value of the Fibonacci sequence.
 * @returns Sum of even Fibonacci numbers that don't exceed the given limit.
 */
const evenFiboSum = (limit: number): number => {
  let current = 0
  let next = 2 // start with the first even fibo num
  let sum = 0

  while (next <= limit) {
    [current, next] = [next, 4 * next + current]
    sum += current
  }

  return sum
}

const solution = {
  fun: evenFiboSum,
  id: 'while loop with skips'
}

export default solution
