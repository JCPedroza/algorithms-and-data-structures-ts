const { trunc } = Math

// Sum of multiples of n whose value is less than the limit.
const sumDivisibleBy = (limit: number, n: number): number => {
  const limitByN = trunc((limit - 1) / n)
  return trunc(n * (limitByN * (limitByN + 1)) / 2)
}

/**
 * Compute sum of multiples of 3 or 5 whose value is less than the limit.
 * Uses an analytic approach.
 * Complexity: time O(n)? exponentiation?, space O(1).
 * @param limit Exclusive limit of the series.
 * @return Sum of multiples of 3 or 5 whose value is less than the limit.
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
