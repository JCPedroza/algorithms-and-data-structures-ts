/**
 * Find the two indexes of the numbers in the array that add up to the target value.
 * Uses brute force index scan and nested for loops.
 * Complexity: time AO(n²) BO(1) WO(n²), space AO(1) TO(n).
 * @param nums Array of integers.
 * @param target Target sum of two numbers in the array.
 * @return The two indexes of the numbers in the array that add up to the target value,
 * or [-1, -1] if no solution is found.
 */
const twoSum = (target: number, nums: number[]): number[] => {
  for (let pivot = 0; pivot < nums.length; pivot++) {
    for (let addend = 0; addend < nums.length; addend++) {
      if (nums[pivot] + nums[addend] === target && pivot !== addend) {
        return [pivot, addend]
      }
    }
  }

  // No solution found
  return [-1, -1]
}

const solution = {
  fun: twoSum,
  id: 'brute force and nested for loops'
}

export default solution
