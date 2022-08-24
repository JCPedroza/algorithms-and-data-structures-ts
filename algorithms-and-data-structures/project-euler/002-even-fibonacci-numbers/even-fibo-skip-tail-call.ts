/**
 * Compute sum of even Fibonacci numbers that don't exceed the given limit.
 * Uses tail call recursion with skips.
 * Complexity: time O(n), space O(n)? (recursion tree).
 * @param limit Max inclusive value of the Fibonacci sequence.
 * @returns Sum of even Fibonacci numbers that don't exceed the given limit.
 */
const evenFiboSum = (limit: number): number => {
  const loop = (sum: number, current: number, next: number): number => {
    if (current > limit) return sum
    return loop(sum + current, next, 4 * next + current)
  }

  return loop(0, 0, 2) // start with the first even fibo num
}

const solution = {
  fun: evenFiboSum,
  id: 'tail call recursion with skips'
}

export default solution
