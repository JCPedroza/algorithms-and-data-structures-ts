/**
 * 
 * @param limit 
 * @returns 
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
