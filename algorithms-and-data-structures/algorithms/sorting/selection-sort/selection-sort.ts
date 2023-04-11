/**
 * Sort array of numbers, in place, in ascending order.
 * Complexity: time O(n^2), space O(1).
 *
 * @param nums Array of numbers to be sorted.
 * @return Input number array, now sorted.
 */
const selectionSort = (nums: number[]): number[] => {
  for (let loop = 0; loop < nums.length; loop++) {
    let min = loop

    for (let index = loop + 1; index < nums.length; index++) {
      if (nums[index] < nums[min]) {
        min = index
      }
    }

    [nums[loop], nums[min]] = [nums[min], nums[loop]]
  }

  return nums
}

const algorithm = {
  fun: selectionSort,
  id: 'simple'
}

export default algorithm
