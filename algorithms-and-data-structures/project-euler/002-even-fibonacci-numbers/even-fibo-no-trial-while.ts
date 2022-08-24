/**
 * Compute sum of even Fibonacci numbers that don't exceed the given limit.
 * Uses while a loop without trial division (every third fibo number is even).
 * Complexity: time O(n), space O(1).
 * @param limit Max inclusive value of the Fibonacci sequence.
 * @returns Sum of even Fibonacci numbers that don't exceed the given limit.
 */
const evenFiboSum = (limit: number): number => {
  let first = 1
  let second = 1
  let third = 2
  let sum = 0

  while (third <= limit) {
    sum += third
    first = second + third
    second = third + first
    third = first + second
  }

  return sum
}

const solution = {
  fun: evenFiboSum,
  id: 'while loop without trial division'
}

export default solution
