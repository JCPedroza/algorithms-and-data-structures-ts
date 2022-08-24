const { trunc } = Math

// Sum of natural multiples of n that are smaller than a limit.
const sumDivisibleBy = (limit: number, n: number): number => {
  const limitByN = trunc((limit - 1) / n)
  return trunc(n * (limitByN * (limitByN + 1)) / 2)
}

/**
 * Compute the sum of the natural multiples of 3 or 5 that are smaller than a limit.
 * Uses analytic approach.
 * Complexity: time O(n)? exponentiation?, space O(1).
 * @param limit Exclusive limit of the series.
 * @return Sum of the natural multiples of 3 or 5 that are smaller than the limit.
 */
const mulsOf3Or5 = (limit: number): number => {
  if (limit < 0) return 0

  return sumDivisibleBy(limit, 3) +
  sumDivisibleBy(limit, 5) -
  sumDivisibleBy(limit, 15)
}

const solution = {
  fun: mulsOf3Or5,
  id: 'analytic approach'
}

export default solution
