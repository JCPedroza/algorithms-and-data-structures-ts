/**
 * Compute sum of multiples of 3 or 5 whose value is less than the limit.
 * Uses brute force trial division with filter and reduce.
 * Complexity: time O(n) space O(n).
 * @param limit Exclusive limit of the series.
 * @return Sum of multiples of 3 or 5 whose value is less than the limit.
 */
const mulsOf3Or5 = (limit: number): number =>
  [...Array(limit < 0 ? 0 : limit).keys()]
    .filter(num => num % 3 === 0 || num % 5 === 0)
    .reduce((sum, num) => sum + num, 0)

const solution = {
  fun: mulsOf3Or5,
  id: 'brute force trial division with reduce and filter'
}

export default solution
