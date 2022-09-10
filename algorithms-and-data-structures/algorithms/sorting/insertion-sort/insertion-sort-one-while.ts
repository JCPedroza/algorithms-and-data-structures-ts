/**
 * Sorts a numeric array, implementing a version of the insertion sort algorithm,
 * using an imperative approach with nested loops and one inner  while loop doing
 * two checks.
 * Complexity: time AO(n²) BO(n) WO(n²), space AO(1) TO(n).
 * @param nums Number array to be sorted.
 * @returns The array sorted in-place.
 */
const insertionSort = (nums: number[]): number[] => {
  for (let pivot = 1; pivot < nums.length; pivot++) {
    let left = pivot

    // Swap left until a lower or equal value  is found or start of array is reached
    while (left > 0 && nums[left - 1] > nums[left]) {
      [nums[left - 1], nums[left]] = [nums[left], nums[left - 1]]
      left--
    }
  }

  return nums // Sorts in-place
}

const algorithm = {
  fun: insertionSort,
  id: 'one while loop doing two checks'
}

export default algorithm
