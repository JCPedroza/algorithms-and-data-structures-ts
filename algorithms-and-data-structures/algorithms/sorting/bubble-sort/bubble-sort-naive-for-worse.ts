/**
 * Sort array of numbers, in-place, in ascending order.
 * Uses a naive approach with no optimizations, the array is always traversed
 * length² times.
 * Complexity: time O(n²), space O(1).
 * @param nums Array of numbers to be sorted.
 * @return Sorted array of numbers.
 */
const bubbleSort = (nums: number[]): number[] => {
  for (let loop = 0; loop < nums.length; loop++) {
    for (let index = 0; index < nums.length - 1; index++) {
      if (nums[index] > nums[index + 1]) {
        [nums[index], nums[index + 1]] = [nums[index + 1], nums[index]]
      }
    }
  }

  return nums
}

const algorithm = {
  fun: bubbleSort,
  id: 'worse naive for loop with no optimizations'
}

export default algorithm
