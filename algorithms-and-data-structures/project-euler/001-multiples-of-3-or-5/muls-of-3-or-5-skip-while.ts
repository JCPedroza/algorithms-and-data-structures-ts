/**
 * Compute the sum of the natural multiples of 3 or 5 that are smaller than a limit.
 * Uses: Skip trial division with accumulating for loop.
 * Complexity: time O(n), space O(1).
 * @param limit Exclusive limit of the series.
 * @return Sum of the natural multiples of 3 or 5 that are smaller than the limit.
 */
const mulsOf3Or5 = (limit: number): number => {
  let mul3 = 3
  let mul5 = 5
  let sum = 0

  // Only check limit for multiples of 3, but multiples of 5 are set to 0 once they
  // reach their limit.
  while (mul3 < limit) {
    if (mul5 >= limit) mul5 = 0 // Don't count multiples of 5 above the limit

    sum += mul3
    if (mul5 % 3 !== 0) sum += mul5 // Don't count multiples of both 3 and 5 twice

    mul3 += 3
    if (mul5 > 0) mul5 += 5 // Increase if multiples of 5 haven't reached their limit
  }

  return sum
}

const solution = {
  fun: mulsOf3Or5,
  id: 'skip trial division with accumulating while loop'
}

export default solution
