/**
 * Compute the sum of the natural multiples of 3 or 5 that are smaller than a limit.
 * Uses: Filter reduce..
 * Complexity: time O(n)? exponentiation?, space O(1).
 * @param limit Exclusive limit of the series.
 * @return Sum of the natural multiples of 3 or 5 that are smaller than the limit.
 */
const mulsOf3Or5 = (limit: number): number =>
  [...Array(limit + 1).keys()]
    .filter(num => num % 3 === 0 && num % 5 === 0)
    .reduce((sum, num) => sum + num)

const solution = {
  fun: mulsOf3Or5,
  id: 'filter reduce'
}

export default solution
