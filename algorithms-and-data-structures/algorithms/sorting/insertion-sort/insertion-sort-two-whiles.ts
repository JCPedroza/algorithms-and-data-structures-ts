/**
 * Sorts a numeric array, implementing a version of the insertion sort algorithm,
 * using an imperative approach with nested loops and two while loops doing one
 * check each.
 * Complexity: time AO(n²) BO(n) WO(n²), space AO(1) TO(n)
 * @param nums Number array to be sorted.
 * @returns The array sorted in-place.
 */
 const insertionSort = (nums: number[]): number[] => {
  for (let pivot = 1; pivot < nums.length; pivot++) {
    let index = pivot
    let targetVal = nums[index]

    if (nums[0] > targetVal) {
      while (index > 0) { // Shift everything in the sorted portion to the right
        nums[index] = nums[index - 1]
        index--
      }

      nums[0] = targetVal // Insert new lowest value at start of sorted portion
    } else {
      while (nums[index - 1] > targetVal) {
        // Sorted portion is shifted right until correct place for target value is found
        nums[index] = nums[index - 1]
        index--
      }

      nums[index] = targetVal // Insert target value in its corresponding position
    }
  }

  return nums // Sorts in-place
}

const algorithm = {
  fun: insertionSort,
  id: 'two while loops doing one check each'
}

export default algorithm
