/**
 * Find the two indexes of the numbers in the array that add up to the target value.
 * Uses skipped indexes and nested for loops.
 * Complexity: time AO(n²) BO(1) WO(n²), space AO(1) TO(n).
 * @param nums Array of numbers.
 * @param target Target sum of two numbers in the array.
 * @return The two indexes of the numbers in the array that add up to the target value,
 * or [-1, -1] if no solution is found.
 */
const twoSum = (target: number, nums: number[]): number[] => {
  for (let pivot = 0; pivot < nums.length - 1; pivot++) {
    for (let addend = pivot + 1; addend < nums.length; addend++) {
      if (nums[pivot] + nums[addend] === target) {
        return [pivot, addend]
      }
    }
  }

  // No solution found.
  return [-1, -1]
}

const solution = {
  fun: twoSum,
  id: 'skip indexes and nested for loops'
}

export default solution
