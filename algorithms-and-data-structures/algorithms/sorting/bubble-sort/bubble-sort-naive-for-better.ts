/**
 * Sort array of numbers, in-place, in ascending order.
 * Uses a naive approach with a small optimization, the inner loop only
 * traverses length - loop, instead of always traversing the complete length.
 * Complexity: time O(n²), space O(1).
 * @param nums Array of numbers to be sorted.
 * @return Sorted array of numbers.
 */
const bubbleSort = (nums: number[]): number[] => {
  for (let loop = 0; loop < nums.length - 1; loop++) {
    for (let index = 0; index < nums.length - loop - 1; index++) {
      if (nums[index] > nums[index + 1]) {
        [nums[index], nums[index + 1]] = [nums[index + 1], nums[index]]
      }
    }
  }

  return nums
}

const algorithm = {
  fun: bubbleSort,
  id: 'better naive for loop with small optimization'
}

export default algorithm
