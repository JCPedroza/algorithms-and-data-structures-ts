// Insert `value` at the start of `nums`, shift everything up to `index` to the right
const insertAtStart = (nums: number[], value: number, index: number): number[] => {
  if (index === 0) {
    nums[0] = value
    return nums
  }

  nums[index] = nums[index - 1]
  return insertAtStart(nums, value, index - 1)
}

// Insert `value` after finding its place in `nums`, shift fromt here to `index` to
// the right
const findAndInsert = (nums: number[], value: number, index: number): number[] => {
  if (nums[index - 1] <= value) {
    nums[index] = value
    return nums
  }

  nums[index] = nums[index - 1]
  return findAndInsert(nums, value, index - 1)
}

/**
 * Sorts a numeric array, implementing a version of the insertion sort algorithm,
 * using a functional approach with tail call recursion.
 * Complexity: time AO(n²) BO(n) WO(n²), space AO(n) TO(n).
 * @param nums Number array to be sorted.
 * @returns The array sorted in-place.
 */
const insertionSort = (nums: number[]): number[] => {
  const loop = (index: number): number[] => {
    if (index >= nums.length) {
      return nums
    }

    if (nums[0] > nums[index]) {
      insertAtStart(nums, nums[index], index)
      return loop(index + 1)
    }

    findAndInsert(nums, nums[index], index)
    return loop(index + 1)
  }

  return loop(1)
}

const solution = {
  fun: insertionSort,
  id: 'tail call recursion'
}

export default solution
