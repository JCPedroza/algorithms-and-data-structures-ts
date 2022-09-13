/**
 * Builds an array with the results of applying the mapper function to each element of
 * the given array. Uses the native map array method.
 * Complexity: time O(n), space O(n).
 * @param mapper Function to apply to each element of the given array.
 * @param array Array whose items will be mapped into an array of results.
 * @returns An array with the results of applying the mapper function to each element
 * of the array.
 */
const map = <T, U> (mapper: (arg: T) => U, array: T[]): U[] =>
  array.map(mapper)

const algorithm = {
  fun: map,
  id: 'native array map method'
}

export default algorithm
