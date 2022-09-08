/**
 * Find the two indexes of the numbers in the array that add up to the target value.
 * Uses brute force index scan and nested for loops.
 * Complexity: time AO(n) BO(1) WO(n), space AO(1) TO(n).
 * @param nums Array of integers.
 * @param target Target sum of two numbers in the array.
 * @return The two indexes of the numbers in the array that add up to the target value,
 * or [-1, -1] if no solution is found.
 */
const twoSum = (target: number, nums: number[]): number[] => {
  const numsInv: number[] = []

  for (let index = 0; index < nums.length; index++) {
    const dif = target - nums[index]
    if (numsInv[dif] !== undefined) return [numsInv[dif], index]
    numsInv[nums[index]] = index
  }

  return [-1, -1] // No solution found
}

const solution = {
  fun: twoSum,
  id: 'linear with a for loop'
}

export default solution
