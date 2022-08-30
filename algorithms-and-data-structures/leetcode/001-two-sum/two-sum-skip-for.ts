/**
 * Find the two indexes of the numbers in the array that add up to the target value.
 * Uses skipped indexes and for loops.
 * Complexity: time AO(n²) BO(1) WO(n²), space AO(1) TO(n).
 * @param nums Array of numbers.
 * @param target Target sum of two numbers in the array.
 * @return The two indexes of the numbers in the array that add up to the target value.
 */
const twoSum = (nums: number[], target: number): number[] => {
  for (let pivot = 0; pivot < nums.length - 1; pivot++) {
    for (let addend = pivot + 1; addend < nums.length; addend++) {
      if (nums[pivot] + nums[addend] === target) {
        return [pivot, addend]
      }
    }
  }

  // This should never happen, as there's always exactly one solution.
  return []
}

const solution = {
  fun: twoSum,
  id: 'skip indexes and for loops'
}

export default solution
