/**
 * Iterate through each element of the array sequentially, and swap pairs that are
 * not in ascending order.
 * Uses simple recursion.
 * Complexity: time O(n), space O(n).
 * @param nums Number array to be scanned for swaps.
 * @returns Swapped array of numbers (copy).
 */
const swapAll = (nums: number[]): number[] => {
  if (nums.length === 0) return []
  if (nums.length === 1) return nums

  if (nums.length === 2) {
    const [first, second] = nums
    if (first > second) return [second, first]
    return [first, second]
  }

  const [first, second, ...rest] = nums
  if (first > second) return [second, ...swapAll([first, ...rest])]
  return [first, ...swapAll([second, ...rest])]
}

/**
 * Sort array of numbers in ascending order.
 * uses tail call recursion.
 * Complexity: time O(n²), space O(n)
 * @param nums Number array to be sorted.
 * @return Sorted array of numbers (copy).
 */
const bubbleSort = (nums: number[]): number[] => {
  const loop = (count: number, nums: number[]): number[] => {
    if (count < nums.length) return loop(++count, swapAll(nums))
    return nums
  }

  return loop(0, nums)
}

const algorithm = {
  fun: bubbleSort,
  id: 'simple recursion for inner loop, tail recursion for outer loop'
}

export default algorithm
