/**
 * Compute the sum of the positive multiples of 3 or 5 that are smaller than a limit.
 * Uses brute force trial division with simple recursion.
 * Complexity: time O(n), space O(n).
 * @param limit Exclusive limit of the series.
 * @return Sum of the natural multiples of 3 or 5 that are smaller than the limit.
 */
const mulsOf3Or5 = (limit: number): number => {
  const actual = limit - 1 // Limit is exclusive, must not be counted

  if (actual < 3) return 0
  if (actual % 3 === 0 || actual % 5 === 0) {
    return actual + mulsOf3Or5(actual)
  }

  return mulsOf3Or5(actual)
}

const solution = {
  fun: mulsOf3Or5,
  id: 'brute force trial division with simple recursion'
}

export default solution
