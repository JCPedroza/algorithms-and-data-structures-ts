/**
 * Sort array of numbers, in-place, in ascending order.
 * Uses an optimized approach where iteration stops once the array is sorted.
 * Complexity: time A O(n²) B O(n) W O(n²), space A O(1) T O(n).
 * @param nums Array of numbers to be sorted.
 * @return Sorted array of numbers (in-place).
 */
const bubbleSort = (nums: number[]): number[] => {
  for (let loop = 0; loop < nums.length - 1; loop++) {
    let isSorted = true

    for (let index = 0; index < nums.length - loop - 1; index++) {
      if (nums[index] > nums[index + 1]) {
        [nums[index], nums[index + 1]] = [nums[index + 1], nums[index]]
        isSorted = false
      }
    }

    if (isSorted) return nums
  }

  return nums
}

const algorithm = {
  fun: bubbleSort,
  id: 'for loop with early stop optimization'
}

export default algorithm
