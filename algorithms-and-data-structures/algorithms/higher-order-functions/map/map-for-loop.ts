/**
 * Builds an array with the results of applying the mapper function to each element of
 * the given array. Uses a for loop and array mutation.
 * Complexity: time O(n), space O(n).
 * @param mapper Function to apply to each element of the given array.
 * @param array Array whose items will be mapped into an array of results.
 * @returns An array with the results of applying the mapper function to each element
 * of the array.
 */
const map = <T, U> (mapper: (arg: T) => U, array: T[]): U[] => {
  const maps = []

  for (const item of array) {
    maps.push(mapper(item))
  }

  return maps
}

const algorithm = {
  fun: map,
  id: 'for loop and array mutation'
}

export default algorithm
