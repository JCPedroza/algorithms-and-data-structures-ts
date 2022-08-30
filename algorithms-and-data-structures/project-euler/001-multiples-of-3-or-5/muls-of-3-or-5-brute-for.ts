/**
 * Compute sum of multiples of 3 or 5 whose value is less than the limit.
 * Uses brute force trial division with a for loop.
 * Complexity: time O(n), space O(1).
 * @param limit Exclusive limit of the series.
 * @return Sum of multiples of 3 or 5 whose value is less than the limit.
 */
const mulsOf3Or5 = (limit: number): number => {
  let sum = 0

  for (let num = 1; num < limit; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num
    }
  }

  return sum
}

const solution = {
  fun: mulsOf3Or5,
  id: 'brute force trial division with for loop'
}

export default solution
