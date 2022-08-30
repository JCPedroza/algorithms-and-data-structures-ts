/**
 * Compute sum of multiples of 3 or 5 whose value is less than the limit.
 * Uses skip trial division with while loops.
 * Complexity: time O(n), space O(1).
 * @param limit Exclusive limit of the series.
 * @return Sum of multiples of 3 or 5 whose value is less than the limit.
 */
const mulsOf3Or5 = (limit: number): number => {
  let mul3 = 3
  let mul5 = 5
  let sum = 0

  while (mul5 < limit) {
    sum += mul3
    if (mul5 % 3 !== 0) sum += mul5 // Don't count multiples of both 3 and 5 twice

    mul3 += 3
    mul5 += 5
  }

  while (mul3 < limit) {
    sum += mul3
    mul3 += 3
  }

  return sum
}

const solution = {
  fun: mulsOf3Or5,
  id: 'skip trial division with while loops'
}

export default solution
