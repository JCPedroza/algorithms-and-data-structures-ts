/**
 * Compute sum of multiples of 3 or 5 whose value is less than the limit.
 * Uses brute force trial division with tail call recursion.
 * Complexity: time O(n), space O(n).
 * @param limit Exclusive limit of the series.
 * @return Sum of multiples of 3 or 5 whose value is less than the limit.
 */
const mulsOf3Or5 = (limit: number): number => {
  const loop = (sum: number, lim: number): number => {
    if (lim < 3) return sum
    if (lim % 3 === 0 || lim % 5 === 0) {
      return loop(sum + lim, lim - 1)
    }
    return loop(sum, lim - 1)
  }

  return loop(0, limit - 1) // Limit is exclusive and must not be included
}

const solution = {
  fun: mulsOf3Or5,
  id: 'brute force trial division with tail call recursion'
}

export default solution
