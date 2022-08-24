/**
 * Compute sum of even Fibonacci numbers that don't exceed a limit.
 * @param limit Max inclusive value of the Fibonacci sequence.
 * @returns The sum of even Fibonacci numbers that don't exceed a limit.
 */
const fiboEvenSum = (limit: number): number => {
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
  fun: fiboEvenSum,
  id: 'brute force trial division with accumulating for loop'
}

export default solution
