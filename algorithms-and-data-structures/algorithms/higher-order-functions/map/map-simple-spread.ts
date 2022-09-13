/**
 * Builds an array with the results of applying the mapper function to each element of
 * the given array. Uses simple recursion and array spread (no array mutation).
 * Complexity: time O(n), space O(n).
 * @param mapper Function to apply to each element of the given array.
 * @param array Array whose items will be mapped into an array of results.
 * @returns An array with the results of applying the mapper function to each element
 * of the array.
 */
const map = <T, U> (mapper: (arg: T) => U, array: T[]): U[] => {
  if (array.length === 0) return []
  const [head, ...tail] = array
  return [mapper(head), ...map(mapper, tail)]
}

const algorithm = {
  fun: map,
  id: 'simple recursion and array spread'
}

export default algorithm
