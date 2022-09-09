/**
 * Sorts the input array, using the insertion sort approach, with multiple
 * swaps and two nested loops.
 * Complexity: time AO(n²) BO(n) WO(n²), space AO(1) TO(n)
 * @param nums Number array to be sorted.
 * @returns The array sorted in-place.
 */
const insertionSort = (nums: number[]): number[] => {
  for (let pivot = 1; pivot < nums.length; pivot++) {
    let left = pivot
    while (left > 0 && nums[left - 1] > nums[left]) {
      [nums[left - 1], nums[left]] = [nums[left], nums[left - 1]]
      left--
    }
  }

  return nums // Sorts in-place
}

const algorithm = {
  fun: insertionSort,
  id: 'many swaps in a while loop in a for loop'
}

export default algorithm
