/**
 * Finds if the pivot adds up to the target with one of the numbers in front of it.
 * @param pivot Index of number that will be added to the addend.
 * @param nums Array of numbers to be scanned.
 * @param target Target sum of two numbers in the array.
 * @returns The index of the numbers that add up to the target, or empty array if no
 * pair was found.
 */
const twoSumPivotFront = (pivot: number, nums: number[], target: number): number[] => {
  const firstAddend = pivot + 1

  const loop = (addend: number): number[] => {
    if (addend >= nums.length) return []

    if (nums[pivot] + nums[addend] === target) {
      return [pivot, addend]
    }

    return loop(addend + 1)
  }

  return loop(firstAddend)
}

/**
 * Find the two indexes of the numbers in the array that add up to the target value.
 * Uses skipped indexes and tail call recursion.
 * Complexity: time AO(n²) BO(1) WO(n²), space AO(n)? TO(n).
 * @param nums Array of numbers.
 * @param target Target sum of two numbers in the array.
 * @return The two indexes of the numbers in the array that add up to the target value,
 * or [-1, -1] if no solution is found.
 */
const twoSum = (target: number, nums: number[]): number[] => {
  const loop = (pivot: number): number[] => {
    if (pivot >= nums.length - 1) return [-1, -1] // No solution found

    const frontSum = twoSumPivotFront(pivot, nums, target)
    if (frontSum.length > 0) return frontSum

    return loop(pivot + 1)
  }

  return loop(0)
}

const solution = {
  fun: twoSum,
  id: 'skip indexes and tail call recursion'
}

export default solution
